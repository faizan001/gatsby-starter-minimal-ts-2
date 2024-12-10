import React, { useState } from "react"
import Button from "../components/button/button"
import Label from "../components/text/label"
import Paragraph from "../components/text/paragraph"

const CancelAccountPage: React.FC = () => {
  const [email, setEmail] = useState("")

  return (
    <div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
    w-[700px] max-w-[90%] mx-auto py-10 px-10 sm:px-20 bg-neutral-8"
    >
      <div className="flex justify-between">
        <Label className="text-neutral-0">Cancela a tua conta</Label>
      </div>
      <Paragraph className="text-neutral-0">
        Ao recebermos o teu pedido iremos proceder à eliminação da tua conta e
        todos os teus dados. Este processo pode levar alguns dias. Obrigado por
        teres feito parte da Flair!
      </Paragraph>
      <form
        action={`mailto:miguelamaral@flair-marketplace.com?subject=Cancelar%20Conta&body=Desejo%20apagar%20a%20minha%20conta%20com%20o%20email%20${email}%20associado`}
        method="post"
        encType="text/plain"
        className="w-full relative space-y-5 mt-5"
      >
        <div className="flex w-full">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="escreve o teu email aqui"
            className="grow py-3 border-b border-neutral-5 text-neutral-0 placeholder:text-neutral-5 w-full bg-transparent focus:border-b-neutral-0 focus:outline-none"
            required
          />
        </div>
        <div className="flex flex-col justify-start justify-between w-full text-neutral-5 mt-2">
          <label>
            <input type="checkbox" className="accent-main-blue" required />{" "}
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
            <Button label="Cancelar Conta" type="submit" />
          </div>
        </div>
      </form>
    </div>
  )
}

export default CancelAccountPage
