import { Search } from "lucide-react";

export default function SearchInput() {


return (
<div className="border-[1px] shadow-md mb-6 h-auto w-[800px] rounded-full flex bg-white px-5 py-2 text-lg ">
    <input
    className="w-full focus:outline-none" type="text"
    placeholder="Search"
    />
    <button className=" p-1 bg-transparent"><Search /></button>
</div>
);
}
