import { violao, teclado } from "./data";
import InstrumentItemCard from "./InstrumentItemCard";
import InstrumentsItem from "./InstrumentsItem";

const InstrumentsList = () => {
  const instrumentos = [
    ...teclado.map((instrument) => ({
      ...instrument,
      id: `teclado-${instrument.id}`,
    })),
    ...violao.map((instrument) => ({
      ...instrument,
      id: `violao-${instrument.id}`,
    })),
  ];
  return (
    <div>
      {instrumentos.map((instrument) => (
        <InstrumentItemCard key={instrument.id} instrument={instrument} />
    
      ))}
    </div>
  );
};

export default InstrumentsList;
