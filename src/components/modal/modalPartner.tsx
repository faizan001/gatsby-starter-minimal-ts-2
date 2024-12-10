import React, { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import Button from "../button/button"
import Title from "../text/title"
import Label from "../text/label"
import Paragraph from "../text/paragraph"
import { XMarkIcon } from "@heroicons/react/24/outline"

interface Props {
  buttonLabel: string
  location: Location
}

const ModalPartner: React.FC<Props> = ({ buttonLabel, location }) => {
  const [formError, setFormError] = useState<null | string>(null)
  const [formSubmited, setFormSubmited] = useState(false)

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as any)

    const url = "https://api.brevo.com/v3/contacts"
    const body = {
      email: formData.get("email"),
      attributes: {
        NOME: formData.get("name"),
        STORE: formData.get("store"),
        LOCATION: formData.get("location"),
        PHONE: formData.get("phone"),
        POS: formData.get("pos"),
      },
      emailBlacklisted: false,
      smsBlacklisted: false,
      listIds: [7],
    }

    const headers = new Headers()
    headers.append("accept", "application/json")
    headers.append("content-type", "application/json")
    headers.append("api-key", process.env.GATSBY_BREVO_API!)

    const options = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    }

    fetch(url, options)
      .then((response) => {
        if (response.status !== 200 && response.status !== 201) {
          return response.json().then((error) => {
            throw new Error(error.message || "Something went wrong")
          })
        }
        return response.json()
      })
      .then((response) => {
        window &&
          window.open(
            `https://calendly.com/miguelamaral/partnership?name=${body.attributes.NOME}&email=${body.email}`,
            "_blank"
          )
        setFormSubmited(true)
        setFormError(null)
      })
      .catch((error) => {
        setFormError(error.message)
        setFormSubmited(false)
      })
  }

  let [isOpen, setIsOpen] = useState(location.hash === "#joinUs" ? true : false)

  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <>
      <Button label={buttonLabel} handleClick={openModal} />

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full bg-neutral-8 text-neutral-0 max-w-2xl transform overflow-hidden rounded-2xl p-6 sm:p-12 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-between">
                    <Label weight="font-medium">Faz parte da família</Label>
                    <XMarkIcon
                      className="block h-9 w-9 text-neutral-4 cursor-pointer"
                      aria-hidden="true"
                      onClick={closeModal}
                    />
                  </div>
                  <Title className="text-transparent bg-clip-text bg-gradient-to-r from-main-turquoise via-main-purple to-main-blue">
                    Torna-te Parceiro
                  </Title>
                  <form
                    onSubmit={(e) => submitForm(e)}
                    className="relative mt-10 space-y-10"
                  >
                    <div>
                      <Paragraph>Nome do contacto</Paragraph>
                      <input
                        type="text"
                        placeholder="insere o teu nome"
                        className="grow py-3 border-b border-neutral-5 text-neutral-0 placeholder:text-neutral-5 w-full bg-transparent focus:border-b-neutral-0 focus:outline-none"
                        required
                        name="name"
                      />
                    </div>
                    <div>
                      <Paragraph>Nome da loja</Paragraph>
                      <input
                        type="text"
                        placeholder="insere o nome da loja"
                        className="grow py-3 border-b border-neutral-5 text-neutral-0 placeholder:text-neutral-5 w-full bg-transparent focus:border-b-neutral-0 focus:outline-none"
                        required
                        name="store"
                      />
                    </div>
                    <div>
                      <Paragraph>Localização</Paragraph>
                      <input
                        type="text"
                        placeholder="Seleciona uma"
                        className="grow py-3 border-b border-neutral-5 text-neutral-0 placeholder:text-neutral-5 w-full bg-transparent focus:border-b-neutral-0 focus:outline-none"
                        required
                        name="location"
                      />
                    </div>
                    <div>
                      <Paragraph>Que sistema POS usas?</Paragraph>
                      <input
                        type="text"
                        placeholder="Seleciona um"
                        className="grow py-3 border-b border-neutral-5 text-neutral-0 placeholder:text-neutral-5 w-full bg-transparent focus:border-b-neutral-0 focus:outline-none"
                        required
                        name="pos"
                      />
                    </div>
                    <div>
                      <Paragraph>Email</Paragraph>
                      <input
                        type="email"
                        placeholder="Insire o teu email"
                        className="grow py-3 border-b border-neutral-5 text-neutral-0 placeholder:text-neutral-5 w-full bg-transparent focus:border-b-neutral-0 focus:outline-none"
                        required
                        name="email"
                      />
                    </div>
                    <div>
                      <Paragraph>Número de telefone</Paragraph>
                      <input
                        type="phone"
                        placeholder="Insire o teu número de telefone"
                        className="grow py-3 border-b border-neutral-5 text-neutral-0 placeholder:text-neutral-5 w-full bg-transparent focus:border-b-neutral-0 focus:outline-none"
                        required
                        name="phone"
                      />
                    </div>
                    <div>
                      {/* <Paragraph className="text-neutral-5 mt-4">
                        The Platform for the now retail Far far away, behind the
                        world mountains, far from the countries Vokalia and
                        Consonantia, theres live the blind texts. Separated they
                        live in Bookmarksgrove right at the coast of the
                        Semantics, a large language ocean. A small river named
                        Duden flows by the Be part of the best online checkout
                        experience
                      </Paragraph> */}
                      <div className="text-neutral-5 mt-2">
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
                      </div>
                    </div>
                    <div className="mt-8 flex justify-center">
                      <Button label="Marca uma call" type="submit" />
                    </div>
                    <span className="block text-center w-full text-neutral-5 mt-3 absolute -bottom-8 left-0 z-10">
                      {formSubmited && "Estamos conectados, obrigado"}
                      {formError && formError}
                    </span>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default ModalPartner
