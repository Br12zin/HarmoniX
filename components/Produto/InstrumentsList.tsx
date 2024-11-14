import { violao,teclado } from "./data";
import InstrumentItemCard from "./InstrumentItemCard";

const InstrumentsList = () => {
  return ( 
  <div>
    {teclado.map((instrument)=>(
      <InstrumentItemCard key={instrument.id} instrument={instrument} />
    ))}
  </div> 
  );
}
 
export default InstrumentsList;