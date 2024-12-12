import React, { useState } from "react";
import { Link } from "gatsby";
import Container from "../structure/container";
import Paragraph from "../text/paragraph";
import logo from "../../images/logo.svg";
const Footer: React.FC = () => {
  const [formError, setFormError] = useState<null | string>(null);
  const [formSubmited, setFormSubmited] = useState(false);
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as any);
    const email = formData.get("email");

    const url = "https://api.brevo.com/v3/contacts";
    const body = {
      email: email,
      emailBlacklisted: false,
      smsBlacklisted: false,
      listIds: [2],
    };

    const headers = new Headers();
    headers.append("accept", "application/json");
    headers.append("content-type", "application/json");
    headers.append("api-key", process.env.GATSBY_BREVO_API!);

    const options = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    };

    fetch(url, options)
      .then((response) => {
        if (response.status !== 200 && response.status !== 201) {
          return response.json().then((error) => {
            throw new Error(error.message || "Something went wrong");
          });
        }
        return response.json();
      })
      .then((response) => {
        setFormSubmited(true);
        setFormError(null);
      })
      .catch((error) => {
        setFormError(error.message);
        setFormSubmited(false);
      });
  };

  return (
    <>
      <section className="bg-neutral-9 py-10">
        <Container className="flex flex-col space-y-20">
          <>
            <div className="bg-clip-text flex flex-col space-y-6 sm:space-y-0 sm:space-x-10 sm:flex-row sm:items-center">
              <p className="text-4xl sm:text-6xl font-highlight text-neutral-0 uppercase break-keep whitespace-nowrap text-center sm:text-left">
                Fica a atualizado!
              </p>
              <form onSubmit={(e) => submitForm(e)} className="w-full relative">
                <div className="flex w-full">
                  <input
                    type="email"
                    name="email"
                    placeholder="Escreve aqui o teu email                    "
                    className="grow px-4 md:px-8 py-6 bg-neutral-8 rounded-l text-neutral-5 z-10"
                    required
                  />
                  <button
                    type="submit"
                    className="px-4 md:px-8 py-6 rounded-r bg-neutral-8 hover:bg-neutral-7 active:bg-neutral-6 text-neutral-5 hover:text-neutral-4 active:text-neutral-4"
                  >
                    Enviar
                  </button>
                </div>
                {/* <div className="flex flex-col justify-start justify-between w-full text-neutral-5 mt-3 absolute -bottom-16 z-10">
                  <label>
                    <input
                      type="checkbox"
                      className="accent-main-blue"
                      required
                    />{" "}
                    Aceito os{" "}
                    <a
                      className="hover:text-neutral-6 transition-all underline"
                      href="/terms"
                      target="_blank"
                    >
                      termos e condições
                    </a>
                  </label>
                  <span className="text-neutral-5 h-8">
                    {formSubmited && "We are now connected, thank you"}
                    {formError && formError}
                  </span>
                </div> */}
              </form>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:flex-row space-y-5 sm:space-y-0 text-neutral-5 text-center sm:text-left items-center sm:items-start">
              <div className="basis-1/3 space-y-2">
                <Paragraph>
                  <Link
                    className="hover:text-neutral-6 text-neutral-3 transition-all"
                    to="/"
                  >
                    Home
                  </Link>
                </Paragraph>
                <Paragraph>
                  <Link
                    className="hover:text-neutral-6 text-neutral-3 transition-all"
                    to="/parcerias"
                  >
                    Parcerias
                  </Link>
                </Paragraph>
                <Paragraph>
                  <Link
                    className="hover:text-neutral-6 text-neutral-3 transition-all"
                    to="/lojas"
                  >
                    Lojas
                  </Link>
                </Paragraph>
                <Paragraph>
                  <Link
                    className="hover:text-neutral-6 text-neutral-3 transition-all"
                    to="/sobre"
                  >
                    Sobre nós
                  </Link>
                </Paragraph>
              </div>
              <div className="basis-1/4 space-y-2">
                <Paragraph>
                  <a
                    className="hover:text-neutral-6 text-neutral-3 transition-all"
                    href="/Termos.pdf"
                    target="_blank"
                  >
                    Termos e Condições
                  </a>
                </Paragraph>
                <Paragraph>
                  <a
                    className="hover:text-neutral-6 text-neutral-3 transition-all"
                    href="/Política_de_Privacidade.pdf"
                    target="_blank"
                  >
                    Política de privacidade
                  </a>
                </Paragraph>
                <Paragraph>
                  <Link
                    className="hover:text-neutral-6 text-neutral-3 transition-all"
                    to="/cookie-policy"
                  >
                    Política de Cookies
                  </Link>
                </Paragraph>
              </div>
            </div>
            <div className="flex flex-col border-solid border-t-[1px] border-t-gray-400 pt-5 items-center sm:flex-row space-y-5 sm:space-y-0 sm:justify-between sm:items-end">
              <Link to="/" className="flex flex-shrink-0 items-center">
                <img
                  className="block w-auto"
                  alt="Flair Logo"
                  src={logo}
                  loading="eager"
                />
              </Link>
              <p className="text-neutral-5">Flair © Copyright 2023</p>
            </div>
          </>
        </Container>
      </section>
    </>
  );
};

export default Footer;
