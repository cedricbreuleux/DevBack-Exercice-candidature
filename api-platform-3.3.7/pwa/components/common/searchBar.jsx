import React, { useState } from "react";

function Searchbar({ onSearchChange, resetSearch, placeholder }) {
    const [searchValue, setSearchValue] = useState("");

    const handleChange = (event) => {
        setSearchValue(event.target.value);
        onSearchChange(event.target.value);
    };
    const handleResetSearch = () => {
        setSearchValue("");
        resetSearch("");
    }
    return (
        <div className="w-full lg:w-5/12 md:w-6/12 sm:w-8/12">   
            <label  forname="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Rechercher</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input value={searchValue} onChange={handleChange} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder={placeholder} />
                <button onClick={() => handleResetSearch()} type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Rénitialiser</button>
            </div>
        </div>
    )
}
export default Searchbar