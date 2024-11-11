
 interface Violao {
    id:string;
    nome:string;
    oldPrice:string;
    newPrice:string;
    image:string;
    informações:string;
    marca: string;
    modelo:string;
    tampo: string;
    sobreMarca:string;

  }
  interface Teclado {
    id: string;
    nome: string;
    oldPrice: string;
    newPrice: string;
    image: string;
    informações: string;
    marca: string;
    modelo: string;
    teclasnum: string;
    sobreMarca: string;
  }

  interface InstrumentosItemsProps {
  categoria:'violão'| 'teclado';
  details: Violao | Teclado;
}