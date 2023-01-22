import React, { useState } from "react";
import Switch from "react-switch";

const LinkComponent = ({handleRemoveLink, index}) => {
    const [link, setLink] = useState('');
    const [url, setUrl] = useState('');
    const [checked, setChecked] = useState(false);

    const store = () => {
        setChecked(!checked)
        if(checked !== true){
            console.log(link)
            console.log(url)
        }
        
    }

    return (
                <div className="bg-white w-full h-24 shadow-slate-400 shadow-md rounded-md flex flex-col justify-center items-center mb-5">
                    <div className="flex items-center justify-between w-11/12">
                        <p className="text-xs md:text-sm xl:text-sm truncate">Name : </p>
                        <input onChange={(e) => setLink(e.target.value)} className="bg-slate-300 w-7/12 md:w-8/12 xl:w-8/12 rounded-md border-none outline-none"/>
                        <Switch onChange={() => store()} checked={checked} height={18} width={40} handleDiameter={0}/>
                    </div>

                    <div className="flex items-center justify-between w-11/12 mt-3">
                        <p className="text-xs md:text-sm xl:text-sm truncate">URL : </p>
                        <input onChange={(e) => setUrl(e.target.value)} className="bg-slate-300 w-7/12 md:w-8/12 xl:w-8/12 rounded-md border-none outline-none"/>
                        <svg onClick={() => handleRemoveLink(index)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="w-6 h-6 cursor-pointer mr-1 active:scale-105 transition transform duration-200">
                        <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
                        <path fillRule="evenodd" d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.133 2.845a.75.75 0 011.06 0l1.72 1.72 1.72-1.72a.75.75 0 111.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 11-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 11-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
    )
}

export default LinkComponent;