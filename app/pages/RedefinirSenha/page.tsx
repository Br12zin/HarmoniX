import Button from "../../../components/Button";
import Title from "../../../components/Title";
import Input from "../../../components/Input";

// import BackButton from "../components/BackButton";
// import Title from "../components/Title";
// import Input from "../components/Input";

export default function RedefinirSenha() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-[#ECECEC]">
      <div className="min-h-[20em] w-[30%] rounded-xl border-[1px] border-slate-300 bg-[#FFFFFF] px-10 py-10">
        <Title>Redefinir Senha</Title>
        <Input placeholder="">Email/Telefone</Input>

        <Button>Enviar</Button>
      </div>
    </div>
  );
}