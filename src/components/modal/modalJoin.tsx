import React, { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import Button from "../button/button"
import Title from "../text/title"
import Label from "../text/label"
import Paragraph from "../text/paragraph"
import { XMarkIcon } from "@heroicons/react/24/outline"

interface Props {
  location: Location
}

const ModalJoin: React.FC<Props> = ({ location }) => {
  const [isOpen, setIsOpen] = useState(
    location.hash === "#JoinUs" ? true : false
  )

  const [formError, setFormError] = useState<null | string>(null)
  const [formSubmited, setFormSubmited] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as any)
    const email = formData.get("email")

    const url = "https://api.brevo.com/v3/contacts"
    const body = {
      email: email,
      emailBlacklisted: false,
      smsBlacklisted: false,
      listIds: [2],
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
        setFormSubmited(true)
        setFormError(null)
      })
      .catch((error) => {
        setFormError(error.message)
        setFormSubmited(false)
      })
  }

  return (
    <>
      <Button label="Junta-te a nós" handleClick={openModal} />

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
                    <Label className="text-neutral-0">
                      Junta-te à nossa lista de espera
                    </Label>
                    <XMarkIcon
                      className="block h-7 w-7 text-neutral-4 cursor-pointer"
                      aria-hidden="true"
                      onClick={closeModal}
                    />
                  </div>
                  <Title className="text-transparent bg-clip-text bg-gradient-to-r from-main-turquoise via-main-purple to-main-blue">
                    Desconto -10%
                  </Title>
                  <Paragraph className="text-neutral-0">
                    Ao entrares na nossa waiting list ganhas automáticamente 10%
                    de desconto primeira compra efetuada pela Flair. Aproveita!
                  </Paragraph>
                  <form
                    onSubmit={(e) => submitForm(e)}
                    className="w-full relative space-y-5 mt-5"
                  >
                    <div className="flex w-full">
                      <input
                        type="email"
                        name="email"
                        placeholder="escreve o teu email aqui"
                        className="grow py-3 border-b border-neutral-5 text-neutral-0 placeholder:text-neutral-5 w-full bg-transparent focus:border-b-neutral-0 focus:outline-none"
                        required
                      />
                    </div>
                    <div className="flex flex-col justify-start justify-between w-full text-neutral-5 mt-2">
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
                      <div className="mt-8 flex justify-center">
                        <Button label="Junta-te" type="submit" />
                      </div>
                      <span className="block text-center w-full text-neutral-5 mt-3 absolute -bottom-8 left-0 z-10">
                        {formSubmited && "Estamos conectados, obrigado"}
                        {formError && formError}
                      </span>
                    </div>
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

export default ModalJoin
