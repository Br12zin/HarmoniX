import { useState } from "react";
import { Minus, Plus } from "lucide-react";

export default function MaxMinus(){
    const [count, setCount] = useState (0);

    const heandleminus = ()=>{
        setCount(prev => Math.max(0, prev - 1));
    }

    const heandlePlus = () => {
        setCount(prev => prev + 1);
    }

    return(<>
    
    <button className="me-3 p-1 border-[2px] border-black rounded-md bg-[#C7A315]" onClick={heandleminus}>
    <Minus/>
    </button>
    <input type="text" value={count} className="text-center flex items-center text-black border-[2px] border-black p-4 rounded-xl w-16 bg-[#ECECEC]"/>
    <button className="p-1 ms-3 border-[2px] border-black rounded-md bg-[#C7A315]" onClick={heandlePlus}>
    <Plus/>
    </button>
</>);
}