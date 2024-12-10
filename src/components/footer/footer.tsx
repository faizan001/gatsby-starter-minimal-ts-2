import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Container from "../structure/container";
import Title from "../text/title";
import Paragraph from "../text/paragraph";
import ButtonOutlineSquare from "../button/button_outline_square";
import logo from "../../images/logo.svg";
import googleStore from "../../images/google-store.svg";
import appleStore from "../../images/apple-store.svg";

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
      <section className="bg-gradient-to-r from-main-turquoise via-main-purple to-main-blue pt-20 sm:pt-0">
        <Container className="flr-bg-container flex flex-col sm:flex-row items-center sm:items-end sm:space-x-5">
          <>
            <div className="basis-1/2 text-neutral-0 text-center sm:text-left sm:py-20">
              <Title tag="h3">em breve</Title>
              <Paragraph>Faz parte do mundo da moda "on-demand" </Paragraph>
              <div className="inline-block mt-8">
                <span className="inline-block w-full text-xl sm:text-2xl mb-5 text-main-turquoise font-medium">
                  Em breve disponível para download
                </span>
              </div>
              <div className="flex flex-col md:flex-row w-full items-center sm:justify-center space-y-4 md:space-y-0 md:space-x-4">
                <ButtonOutlineSquare href="https://play.google.com/store/games?device=windows">
                  <>
                    <img
                      alt={"Social media icon - download no Google Play"}
                      src={googleStore}
                    />
                    <div className="w-full">
                      <span className="text-xs font-light">
                        FAZ DOWNLOAD NO
                      </span>
                      <div className="text-2xl/[20px]">Google Play</div>
                    </div>
                  </>
                </ButtonOutlineSquare>
                <ButtonOutlineSquare href="https://www.apple.com/store">
                  <>
                    <img
                      alt={"Social media icon - Download na Apple Store"}
                      src={appleStore}
                    />
                    <div className="w-full">
                      <span className="text-xs font-light">
                        FAZ DOWNLOAD NA
                      </span>
                      <div className="text-2xl/[20px]">App Store</div>
                    </div>
                  </>
                </ButtonOutlineSquare>
              </div>
            </div>
            <div className="basis-1/2 pt-10 flex justify-end">
              <StaticImage
                alt={"Flair - Download"}
                src={"../../images/bg_download.png"}
                placeholder="none"
                transformOptions={{ fit: "contain" }}
                quality={100}
                className="flr-bg-image"
              />
            </div>
          </>
        </Container>
      </section>
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
                <div className="flex flex-col justify-start justify-between w-full text-neutral-5 mt-3 absolute -bottom-16 z-10">
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
                </div>
              </form>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:flex-row space-y-5 sm:space-y-0 text-neutral-5 text-center sm:text-left items-center sm:items-start">
              <div className="basis-1/4 space-y-2">
                <Paragraph className="font-bold">Flair Limitada</Paragraph>
                <Paragraph>
                  <a
                    className="hover:text-neutral-6 transition-all"
                    href="/Termos.pdf"
                    target="_blank"
                  >
                    Termos e Condições
                  </a>
                </Paragraph>
                <Paragraph>
                  <a
                    className="hover:text-neutral-6 transition-all"
                    href="/Política_de_Privacidade.pdf"
                    target="_blank"
                  >
                    Política de privacidade
                  </a>
                </Paragraph>
                <Paragraph>
                  <Link
                    className="hover:text-neutral-6 transition-all"
                    to="/cookie-policy"
                  >
                    Política de Cookies
                  </Link>
                </Paragraph>
              </div>

              <div className="basis-1/4 space-y-2">
                <Paragraph className="font-bold">Sobre</Paragraph>
                <Paragraph>
                  <Link
                    className="hover:text-neutral-6 transition-all"
                    to="/sobre"
                  >
                    Sobre nós
                  </Link>
                </Paragraph>
                <Paragraph>
                  <Link
                    className="hover:text-neutral-6 transition-all"
                    to="/sobre#values"
                  >
                    Os nossos valores
                  </Link>
                </Paragraph>
                <Paragraph>
                  <Link
                    className="hover:text-neutral-6 transition-all"
                    to="/sobre#culture"
                  >
                    A nossa cultura
                  </Link>
                </Paragraph>
              </div>
              <div className="basis-1/4 space-y-2">
                <Paragraph className="font-bold">Marcas e Lojas</Paragraph>
                {/* <Paragraph>
                  <Link
                    className="hover:text-neutral-6 transition-all"
                    to="/lojas"
                  >
                    Lista de lojas
                  </Link>
                </Paragraph> */}
                <Paragraph>
                  <Link
                    className="hover:text-neutral-6 transition-all"
                    to="/parcerias"
                  >
                    Parcerias
                  </Link>
                </Paragraph>
              </div>
              <div className="basis-1/4">
                {/* <div className="space-y-2">
                  <Paragraph className="font-bold">Blog</Paragraph>
                  <Paragraph>
                    <Link className="hover:text-neutral-6 transition-all" to="/blog">As nossas coleções</Link>
                  </Paragraph>
                </div> */}
                {/* <div className="space-y-2">
                  <Paragraph className="font-bold">Segue-nos</Paragraph>
                  <div className="flex space-x-4 justify-center sm:justify-start">
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      className="rounded-full hover:opacity-80 transition-all"
                    >
                      <StaticImage
                        className="w-[32px] h-[32px]"
                        alt="Flair Facebook"
                        src="../../images/facebook.svg"
                        placeholder="none"
                        transformOptions={{ fit: "contain" }}
                        quality={100}
                      />
                    </a>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      className="rounded-full hover:opacity-80 transition-all"
                    >
                      <StaticImage
                        className="w-[32px] h-[32px]"
                        alt="Flair Instagram"
                        src="../../images/instagram.svg"
                        placeholder="none"
                        transformOptions={{ fit: "contain" }}
                        quality={100}
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      className="rounded-full hover:opacity-80 transition-all"
                    >
                      <StaticImage
                        className="w-[32px] h-[32px]"
                        alt="Flair Linkedin"
                        src="../../images/linkedin.svg"
                        placeholder="none"
                        transformOptions={{ fit: "contain" }}
                        quality={100}
                      />
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="flex flex-col items-center sm:flex-row space-y-5 sm:space-y-0 sm:justify-between sm:items-end">
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
