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
        <label htmlFor="formaPagamento" className="block mb-1 font-semibold">
          Forma de Pagamento
        </label>
        <select
          id="formaPagamento"
          {...register("formaPagamento")}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#C7A315] focus:border-[#C7A315] transition-all"
        >
          <option value="">Selecione</option>
          <option value="credito">Cartão de Crédito</option>
          <option value="debito">Cartão de Débito</option>
          <option value="pix">Pix</option>
        </select>
        {errors.formaPagamento && (
          <p className="text-red-500 text-sm mt-1">{errors.formaPagamento.message}</p>
        )}
      </div>

      {/* Campos de cartão */}
      {(formaPagamento === "credito" || formaPagamento === "debito") && (
        <>
          <div>
            <label htmlFor="nome" className="block mb-1 font-semibold">
              Nome no Cartão
            </label>
            <input
              type="text"
              id="nome"
              {...register("nome", { required: true })}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C7A315] focus:border-[#C7A315]"
            />
            {errors.nome && <p className="text-red-500 text-sm mt-1">Nome é obrigatório</p>}
          </div>

          <div>
            <label htmlFor="numeroCartao" className="block mb-1 font-semibold">
              Número do Cartão
            </label>
            <input
              type="text"
              id="numeroCartao"
              maxLength={19}
              placeholder="0000 0000 0000 0000"
              {...register("numeroCartao", { required: true })}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C7A315] focus:border-[#C7A315]"
            />
            {errors.numeroCartao && <p className="text-red-500 text-sm mt-1">Número obrigatório</p>}
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label htmlFor="validade" className="block mb-1 font-semibold">
                Validade
              </label>
              <input
                type="text"
                id="validade"
                placeholder="MM/AA"
                maxLength={5}
                {...register("validade", { required: true })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C7A315] focus:border-[#C7A315]"
              />
              {errors.validade && <p className="text-red-500 text-sm mt-1">Validade obrigatória</p>}
            </div>

            <div className="w-full">
              <label htmlFor="cvv" className="block mb-1 font-semibold">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                maxLength={4}
                {...register("cvv", { required: true })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C7A315] focus:border-[#C7A315]"
              />
              {errors.cvv && <p className="text-red-500 text-sm mt-1">CVV obrigatório</p>}
            </div>
          </div>
        </>
      )}

      {/* Parcelas (apenas para crédito) */}
      {formaPagamento === "credito" && (
        <div>
          <label htmlFor="parcelas" className="block mb-1 font-semibold">
            Parcelamento
          </label>
          <select
            id="parcelas"
            {...register("parcelas")}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#C7A315] focus:border-[#C7A315]"
          >
            <option value="">Selecione</option>
            <option value="avista">À vista</option>
            {[...Array(24)].map((_, i) => (
              <option key={i + 1} value={`${i + 1}x`}>
                {i + 1}x de R$ {(5700 / (i + 1)).toFixed(2).replace('.', ',')}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* PIX QR Code simulado */}
      {formaPagamento === "pix" && (
        <div className="bg-[#fefce8] p-4 rounded-xl border border-[#c7a315] text-center">
          <p className="font-semibold text-[#c7a315]">Use o QR Code abaixo para realizar o pagamento via Pix.</p>
          <div className="mt-4 flex justify-center">
            <img
              src="/qr-code-exemplo.png"
              alt="QR Code Pix"
              className="w-40 h-40 border border-gray-300 rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Botão de envio */}
      <button
        type="submit"
        className="w-full mt-4 bg-[#C7A315] hover:bg-[#a88e1b] text-white font-bold py-3 rounded-xl transition duration-200 shadow-md"
      >
        Finalizar Pagamento
      </button>

      {/* Mensagem de sucesso */}
      {mensagem && (
        <p className="text-green-600 font-medium mt-4 text-center">{mensagem}</p>
      )}
    </form>
  );
}
