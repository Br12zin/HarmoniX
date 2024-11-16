import { Violao } from "./Violao";
import { Teclado } from "./Teclado";


 export  interface InstrumentosItemsProps {
  categoria:'violão'| 'teclado';
  details: Violao | Teclado;
}