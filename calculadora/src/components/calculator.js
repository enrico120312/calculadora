import { useState } from "react";
export function Calculator(){
    const [input,setInput] = useState("")

    const handleClick = (value) =>{
        setInput(input+ value);

    };

    return(
        <div className="grid shadow-md w-[360px] text-2x1 font-bold">
            <div className="bg-[#CCD5AE] text-white min-h-[180px grow flex flex-col justify-end items-end p-8 gap-4">
                <span className="flex w-fit justify-self-end text-xl">{input}
                </span>
                <div className="flex justify-between w-full items-center text-5x1">
                    <span>=</span>
                </div>
            </div>
            <div className="bg-white grow h-[480px] grid grid-cols-4"></div>
                <button className="justify-center items-center hover:opacity-75 transition esase-in-out duration-300 hover:text-[#CCD5AE] bg-[#E9EDC9] text-[#D4A373]"
                    onClick={() => handleClick("+")}
                >
                    +
                </button>

                <button
                    className="justify-center items-center hover:opacity-75 transtion ease-in-out duration-300 hover:text-[#CCD5AE]"
                    onClick={() => handleClick("7")}
                >
                    7
                </button>
        </div>

     );
}