"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const paymentSchema = z.object({
  nome: z.string().optional(),
  numeroCartao: z.string().optional(),
  validade: z.string().optional(),
  cvv: z.string().optional(),
  formaPagamento: z.enum(["credito", "debito", "pix"], {
    required_error: "Escolha uma forma de pagamento",
  }),
  parcelas: z.string().optional(),
});

type PaymentFormData = z.infer<typeof paymentSchema>;

export default function PaymentForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PaymentFormData>({
    resolver: zodResolver(paymentSchema),
  });

  const formaPagamento = watch("formaPagamento");
  const [mensagem, setMensagem] = useState("");

  const onSubmit = (data: PaymentFormData) => {
    console.log("Dados enviados:", data);

    if (data.formaPagamento === "pix") {
      setMensagem("Pagamento via Pix gerado com sucesso!");
    } else {
      setMensagem("Pagamento com cartão realizado com sucesso!");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-gray-700">
      {/* Forma de pagamento */}
      <div>
        <label htmlFor="formaPagamento" className="mb-1 block font-semibold">
          Forma de Pagamento
        </label>
        <select
          id="formaPagamento"
          {...register("formaPagamento")}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 shadow-sm transition-all focus:border-[#C7A315] focus:outline-none focus:ring-2 focus:ring-[#C7A315]"
        >
          <option value="">Selecione</option>
          <option value="credito">Cartão de Crédito</option>
          <option value="debito">Cartão de Débito</option>
          <option value="pix">Pix</option>
        </select>
        {errors.formaPagamento && (
          <p className="mt-1 text-sm text-red-500">
            {errors.formaPagamento.message}
          </p>
        )}
      </div>

      {/* Campos de cartão */}
      {(formaPagamento === "credito" || formaPagamento === "debito") && (
        <>
          <div>
            <label htmlFor="nome" className="mb-1 block font-semibold">
              Nome no Cartão
            </label>
            <input
              type="text"
              id="nome"
              {...register("nome", { required: true })}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:border-[#C7A315] focus:outline-none focus:ring-2 focus:ring-[#C7A315]"
            />
            {errors.nome && (
              <p className="mt-1 text-sm text-red-500">Nome é obrigatório</p>
            )}
          </div>

          <div>
            <label htmlFor="numeroCartao" className="mb-1 block font-semibold">
              Número do Cartão
            </label>
            <input
              type="text"
              id="numeroCartao"
              maxLength={19}
              placeholder="0000 0000 0000 0000"
              {...register("numeroCartao", { required: true })}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:border-[#C7A315] focus:outline-none focus:ring-2 focus:ring-[#C7A315]"
            />
            {errors.numeroCartao && (
              <p className="mt-1 text-sm text-red-500">Número obrigatório</p>
            )}
          </div>

          <div className="flex flex-col gap-4 md:flex-row">
            <div className="w-full">
              <label htmlFor="validade" className="mb-1 block font-semibold">
                Validade
              </label>
              <input
                type="text"
                id="validade"
                placeholder="MM/AA"
                maxLength={5}
                {...register("validade", { required: true })}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:border-[#C7A315] focus:outline-none focus:ring-2 focus:ring-[#C7A315]"
              />
              {errors.validade && (
                <p className="mt-1 text-sm text-red-500">
                  Validade obrigatória
                </p>
              )}
            </div>

            <div className="w-full">
              <label htmlFor="cvv" className="mb-1 block font-semibold">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                maxLength={4}
                {...register("cvv", { required: true })}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:border-[#C7A315] focus:outline-none focus:ring-2 focus:ring-[#C7A315]"
              />
              {errors.cvv && (
                <p className="mt-1 text-sm text-red-500">CVV obrigatório</p>
              )}
            </div>
          </div>
        </>
      )}

      {/* Parcelas (apenas para crédito) */}
      {formaPagamento === "credito" && (
        <div>
          <label htmlFor="parcelas" className="mb-1 block font-semibold">
            Parcelamento
          </label>
          <select
            id="parcelas"
            {...register("parcelas")}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 shadow-sm focus:border-[#C7A315] focus:outline-none focus:ring-2 focus:ring-[#C7A315]"
          >
            <option value="">Selecione</option>
            <option value="avista">À vista</option>
            {[...Array(24)].map((_, i) => (
              <option key={i + 1} value={`${i + 1}x`}>
                {i + 1}x de R$ {(5700 / (i + 1)).toFixed(2).replace(".", ",")}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* PIX QR Code simulado */}
      {formaPagamento === "pix" && (
        <div className="rounded-xl border border-[#c7a315] bg-[#fefce8] p-4 text-center">
          <p className="font-semibold text-[#c7a315]">
            Use o QR Code abaixo para realizar o pagamento via Pix.
          </p>
          <div className="mt-4 flex justify-center">
            <img
              src="/qr-code-exemplo.png"
              alt="QR Code Pix"
              className="h-40 w-40 rounded-lg border border-gray-300"
            />
          </div>
        </div>
      )}

      {/* Botão de envio */}
      <button
        type="submit"
        className="mt-4 w-full rounded-xl bg-[#C7A315] py-3 font-bold text-white shadow-md transition duration-200 hover:bg-[#a88e1b]"
      >
        Finalizar Pagamento
      </button>

      {/* Mensagem de sucesso */}
      {mensagem && (
        <p className="mt-4 text-center font-medium text-green-600">
          {mensagem}
        </p>
      )}
    </form>
  );
}
