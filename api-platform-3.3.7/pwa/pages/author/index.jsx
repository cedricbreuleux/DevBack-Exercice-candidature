import React, { useEffect, useState } from "react";
import "@fontsource/poppins";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import Paginator from "../../components/common/paginator";
import SearchBar from "../../components/common/searchBar";
import { useRouter } from "next/router";

function Author() {
    const [authors, setAuthors] = useState([]);
    const [fakeAuthors, setFakeHautors] = useState([1, 2, 3]);
    const [IsResearch, setIsResearch] = useState(true);
    const [isInitialised, setIsInitialised] = useState(false);

    const fetchHautors = async (endpoint, cb = () => {}) => {
        setIsResearch(true);
        const response = await fetch("https://localhost/authors" + endpoint);
        const data = await response.json();
        setAuthors(data["hydra:member"]);
        cb ? cb() : null;
        setIsResearch(false);
    };

    useEffect(() => {
        fetchHautors("", () => setIsInitialised(true));
    }, []);

    const SearchHautor = async (SearchValue) => {
        await fetchHautors("?lastName=" + SearchValue);
    };

    const router = useRouter();
    if (!IsResearch) {
        return (
            <div className="flex flex-col h-full flex-1">
                <div className="flex flex-col justify-center items-center p-10">
                    {!isInitialised ? (
                        <div className="bg-white rounded h-10 w-5/6 sm:w-4/6 md:w-3/6 xl:w-2/6"></div>
                    ) : (
                        <SearchBar
                            onSearchChange={SearchHautor}
                            resetSearch={() => fetchHautors("?page=1")}
                        />
                    )}
                </div>
                <div className="items-center flex flex-1">
                    <div className="flex flex-row flex-wrap gap-6 justify-center flex-1">
                        {authors.length > 0 &&
                            authors.map((author) => (
                                <div
                                    key={author.id}
                                    className="flex flex-col w-72 h-80 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow"
                                >
                                    <a href="#">
                                        <h5 className="font-custom mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                            {author.firstName +
                                                " " +
                                                author.lastName}
                                        </h5>
                                    </a>
                                    {author.nationality ? (
                                        <p className="overflow-hidden flex-1 pt-4 pb-2 mb-3 font-normal text-gray-700">
                                            Nationalité : {author.nationality}
                                        </p>
                                    ) : (
                                        <p className="overflow-hidden flex-1 pt-4 pb-4 mb-3 font-normal text-gray-700">
                                            La nationalité de cet auteur n'a pas
                                            été renseignée.
                                        </p>
                                    )}
                                    <a
                                        onClick={() =>
                                            router.push("/author/" + author.id)
                                        }
                                        className="w-fit inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                                    >
                                        En savoir plus
                                        <svg
                                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 14 10"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M1 5h12m0 0L9 1m4 4L9 9"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            ))}
                        {authors.length == 0 ? (
                            <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-CrimsonTextSemiBoldItalic">
                                Oups. Nous n'avons trouvé aucun auteurs.
                            </h2>
                        ) : null}
                    </div>
                </div>
                {/* <div className="flex justify-center p-10">
                    <Paginator />
                </div> */}
            </div>
        );
    }
    return (
        <div className="flex flex-col h-full flex-1 ">
            <div className="flex flex-col justify-center items-center p-10">
                {!isInitialised ? (
                    <div className="bg-white rounded h-10 w-5/6 sm:w-4/6 md:w-3/6 xl:w-2/6"></div>
                ) : (
                    <SearchBar onSearchChange={SearchHautor} />
                )}
            </div>
            <div className="items-center flex flex-1">
                <div className="flex flex-row flex-wrap gap-6 justify-center flex-1 animate-pulse">
                    {fakeAuthors.map((author) => (
                        <div className="flex flex-col w-72 h-80 max-w-sm p-5 bg-white border border-gray-200 rounded-lg shadow">
                            <a href="#">
                                <h5 className="w-44 h-11 rounded bg-gray-500 font-custom mb-2 text-2xl font-bold tracking-tight text-gray-900"></h5>
                            </a>
                            <div className="flex-1">
                                <p className="w-52 h-4 rounded bg-gray-500 overflow-hidden flex-1 pt-4 pb-2 mb-3 font-normal text-gray-700"></p>
                                <p className="w-48 h-4 rounded bg-gray-500 overflow-hidden flex-1 pt-4 pb-2 mb-3 font-normal text-gray-700"></p>
                                <p className="w-52 h-4 rounded bg-gray-500 overflow-hidden flex-1 pt-4 pb-2 mb-3 font-normal text-gray-700"></p>
                                <p className="w-48 h-4 rounded bg-gray-500 overflow-hidden flex-1 pt-4 pb-2 mb-3 font-normal text-gray-700"></p>
                                <p className="w-52 h-4 rounded bg-gray-500 overflow-hidden flex-1 pt-4 pb-2 mb-3 font-normal text-gray-700"></p>
                            </div>
                            <a className="w-32 h-8 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"></a>
                        </div>
                    ))}
                </div>
            </div>
            {/* <div className="flex justify-center p-10 animate-pulse">
                <div className="bg-white rounded h-10 w-5/6 sm:w-4/6 md:w-3/6 xl:w-2/6"></div>
            </div> */}
        </div>
    );
}

export default Author;