import React from 'react'
import Section from '../structure/section'
import Container from '../structure/container'
import Label from '../text/label'
import Paragraph from '../text/paragraph'
import Title from '../text/title'
import Button from '../button/button'

const plans = () => {
  return (
      <Section>
          <Container className="flex flex-col items-center text-center">
              <>
                  <div className="flex flex-col items-center mb-6 sm:mb-14">
                      <Label className="text-main-purple">Modelos de adesão</Label>
                      <Title tag="h2" className="text-neutral-9">
                          Planos exclusivos FLAIR
                      </Title>
                      <Paragraph className='text-neutral-7'>Três meses gratuitos para lojas fundadorras</Paragraph>
                  </div>
                  <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0 lg:items-center">
                     
                      <div className="group relative flex flex-col mx-auto w-full max-w-sm bg-white rounded-4xl shadow-2xl transition-all py-9">
                          <div>
                              <Title tag='h2' className='text-main-blue uppercase'>SMALL</Title>
                              <Paragraph className=''>Lojas com valor médio por venda até 50€</Paragraph>
                              <div className='bg-neutral-4 flex items-center my-3 py-4 h-36'>
                                  <div className='rotate-[270deg] ms-[-20px] absolute left-0'>
                                      <Paragraph className='text-neutral-0 text-[12px] m-0 uppercase'>comissão flair</Paragraph>
                                  </div>
                                  <div className='w-full'>
                                    <Title tag='h2' className='text-neutral-0 mb-[0px] pt-[10px]'>2,99€ +10%</Title>
                                    <Paragraph className='text-neutral-0 text-[12px] m-0'>por venda</Paragraph>
                                  </div>
                              </div>
                              <div className="text-center justify-center mt-5">
                                  <Paragraph className='text-neutral-4 uppercase'>características</Paragraph>
                                  <Paragraph className='text-neutral-9 border-b border-solid border-gray-200 mx-4 p-4 m-0'>Reembolso parcial à loja em caso de produto devolvido</Paragraph>
                                  <Paragraph className='text-neutral-9 border-b border-solid border-gray-200 mx-4 p-4 m-0'>Depósito semanal do retorno das vendas com fee descontado</Paragraph>
                                  <Paragraph className='text-neutral-9 mx-4 p-4 m-0'>Incluido o transporte e segurovia CTT</Paragraph>
                              </div>
                          </div>
                          <Button
                              href="/"
                              label="Aderir"
                              className="mt-8 self-center sm:self-auto mx-auto"
                          />
                      </div>
                      <div className="group relative flex flex-col mx-auto w-full max-w-sm bg-white rounded-4xl shadow-2xl transition-all py-9">
                          <div>
                              <Title tag='h2' className='text-main-blue uppercase'>Medium</Title>
                              <Paragraph className=''>Lojas com valor médio por venda até 50€</Paragraph>
                              <div className='bg-gradient-to-r from-[#01E5FF] via-[#795AFC] to-[#283FF8] flex items-center my-3 py-4 h-36'>
                                  <div className='rotate-[270deg] ms-[-20px] absolute left-0'>
                                      <Paragraph className='text-neutral-0 text-[12px] m-0 uppercase'>comissão flair</Paragraph>
                                  </div>
                                  <div className='w-full relative'>
                                      <Paragraph className='text-neutral-0 text-[12px] m-0 absolute inset-0 top-[-5px]'>desde</Paragraph>
                                      <Title tag='h2' className='text-neutral-0 mb-[0px] pt-[10px]'>4.99€+2%</Title>
                                    <Paragraph className='text-neutral-0 text-[12px] m-0'>por venda</Paragraph>
                                  </div>
                              </div>
                              <div className="text-center justify-center mt-5">
                                  <Paragraph className='text-neutral-4 uppercase'>características</Paragraph>
                                  <Paragraph className='text-neutral-9 border-b border-solid border-gray-200 mx-4 p-4 m-0'>Reembolso parcial à loja em caso de produto devolvido</Paragraph>
                                  <Paragraph className='text-neutral-9 border-b border-solid border-gray-200 mx-4 p-4 m-0'>Depósito semanal do retorno das vendas com fee descontado</Paragraph>
                                  <Paragraph className='text-neutral-9 mx-4 p-4 m-0'>Incluido o transporte e segurovia CTT</Paragraph>
                              </div>
                          </div>
                          <Button
                              href="/"
                              label="Aderir"
                              className="mt-8 self-center sm:self-auto mx-auto"
                          />
                      </div>
                      <div className="group relative flex flex-col mx-auto w-full max-w-sm bg-white rounded-4xl shadow-2xl transition-all py-9">
                          <div>
                              <Title tag='h2' className='text-main-blue uppercase'>Large</Title>
                              <Paragraph className=''>Lojas com valor médio por venda até 50€</Paragraph>
                              <div className='bg-neutral-4 flex items-center my-3 py-4 h-36'>
                                  <div className='rotate-[270deg] ms-[-20px] absolute left-0'>
                                      <Paragraph className='text-neutral-0 text-[12px] m-0 uppercase'>comissão flair</Paragraph>
                                  </div>
                                  <div className='w-full'>
                                      <Title tag='h2' className='text-neutral-0 mb-[0px] pt-[10px] uppercase h'>valor fixo</Title>
                                      <Paragraph className='text-neutral-0 text-[12px] m-0'>por mês</Paragraph>
                                  </div>
                              </div>
                              <div className="text-center justify-center mt-5">
                                  <Paragraph className='text-neutral-4 uppercase'>características</Paragraph>
                                  <Paragraph className='text-neutral-9 border-b border-solid border-gray-200 mx-4 p-4 m-0'>Reembolso parcial à loja em caso de produto devolvido</Paragraph>
                                  <Paragraph className='text-neutral-9 border-b border-solid border-gray-200 mx-4 p-4 m-0'>Depósito semanal do retorno das vendas com fee descontado</Paragraph>
                                  <Paragraph className='text-neutral-9 mx-4 p-4 m-0'>Incluido o transporte e segurovia CTT</Paragraph>
                              </div>
                          </div><Button
                              href="/"
                              label="Aderir"
                              className="mt-8 self-center sm:self-auto mx-auto"
                          />
                      </div>
                     
                  </div>
              </>
          </Container>
      </Section>
  )
}

export default plans