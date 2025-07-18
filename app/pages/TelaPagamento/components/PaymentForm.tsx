"use client";

import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/button";
import { useState } from "react";

// Schema de validação
const paymentSchema = z.object({
  nome: z.string().min(3, "Nome muito curto"),
  numeroCartao: z.string()
    .min(16, "Número de cartão inválido")
    .max(16, "Número de cartão inválido"),
  validade: z.string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Formato inválido (MM/AA)"),
  cvv: z.string()
    .min(3, "CVV deve ter 3 ou 4 dígitos")
    .max(4, "CVV deve ter 3 ou 4 dígitos"),
});

type PaymentData = z.infer<typeof paymentSchema>;

export default function PaymentForm() {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<PaymentData>({
    resolver: zodResolver(paymentSchema),
  });

  const [cardNumberDisplay, setCardNumberDisplay] = useState("");
  const [expiryDisplay, setExpiryDisplay] = useState("");

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    }
    return value;
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/[^0-9]/g, '');
    if (v.length >= 3) {
      return `${v.slice(0, 2)}/${v.slice(2, 4)}`;
    }
    return value;
  };

  const onSubmit = (data: PaymentData) => {
    console.log("Dados enviados:", {
      ...data,
      numeroCartao: data.numeroCartao.replace(/\s/g, '')
    });
    alert("Pagamento processado com sucesso!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-6 text-center">Dados de Pagamento</h2>

      {/* Campo Nome */}
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">
          Nome no cartão
        </label>
        <Controller
          name="nome"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Como no cartão"
            />
          )}
        />
        {errors.nome && (
          <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>
        )}
      </div>

      {/* Campo Número do Cartão */}
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">
          Número do cartão
        </label>
        <input
          type="text"
          value={cardNumberDisplay}
          onChange={(e) => {
            const formatted = formatCardNumber(e.target.value);
            setCardNumberDisplay(formatted);
            setValue("numeroCartao", formatted.replace(/\s/g, ''));
          }}
          placeholder="0000 0000 0000 0000"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          maxLength={19} // 16 dígitos + 3 espaços
        />
        {errors.numeroCartao && (
          <p className="text-red-500 text-sm mt-1">{errors.numeroCartao.message}</p>
        )}
      </div>

      {/* Validade e CVV */}
      <div className="flex gap-4">
        {/* Campo Validade */}
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Validade (MM/AA)
          </label>
          <input
            type="text"
            value={expiryDisplay}
            onChange={(e) => {
              const formatted = formatExpiry(e.target.value);
              setExpiryDisplay(formatted);
              setValue("validade", formatted);
            }}
            placeholder="MM/AA"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            maxLength={5}
          />
          {errors.validade && (
            <p className="text-red-500 text-sm mt-1">{errors.validade.message}</p>
          )}
        </div>

        {/* Campo CVV */}
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1 text-gray-700">
            CVV
          </label>
          <Controller
            name="cvv"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="•••"
                maxLength={3}
              />
            )}
          />
          {errors.cvv && (
            <p className="text-red-500 text-sm mt-1">{errors.cvv.message}</p>
          )}
        </div>
      </div>

      {/* Botão de Submit */}
      <div className="pt-4">
        <Button 
          btn="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200"
        >
          Finalizar Pagamento
        </Button>
      </div>
    </form>
  );
}