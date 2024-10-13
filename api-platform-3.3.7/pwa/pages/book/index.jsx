import React, { useEffect, useState } from "react";
import "@fontsource/poppins";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import Paginator from "../../components/common/paginator";
import SearchBar from "../../components/common/searchBar";
import { useRouter } from "next/router";

function Book() {
    const [books, setBooks] = useState([]);
    const [FakeBooks, setFakeBooks] = useState([1, 2, 3]);
    const [IsResearch, setIsResearch] = useState(true);
    const [isInitialised, setIsInitialised] = useState(false);

    const fetchBooks = async (endpoint, cb = () => {}) => {
        setIsResearch(true);
        const response = await fetch("https://localhost/books" + endpoint);
        const data = await response.json();
        setBooks(data["hydra:member"]);
        cb ? cb() : null;
        setIsResearch(false);
    };

    useEffect(() => {
        fetchBooks("", () => setIsInitialised(true));
    }, []);

    const SearchBook = async (SearchValue) => {
        await fetchBooks("?title=" + SearchValue);
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
                            onSearchChange={SearchBook}
                            resetSearch={() => fetchBooks("?page=1")}
                        />
                    )}
                </div>
                <div className="items-center flex flex-1">
                    <div className="flex flex-row flex-wrap gap-6 justify-center flex-1">
                        {books.length > 0 &&
                            books.map((book) => (
                                <div
                                    key={book.id}
                                    className="flex flex-col w-72 h-80 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow"
                                >
                                    <a href="#">
                                        <h5 className="font-custom mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                            {book.title}
                                        </h5>
                                    </a>
                                    {book.summary ? (
                                        <p
                                            className="overflow-hidden flex-1 pt-4 pb-2 mb-3 font-normal text-gray-700"
                                            dangerouslySetInnerHTML={{
                                                __html: book.summary,
                                            }}
                                        ></p>
                                    ) : (
                                        <p className="overflow-hidden flex-1 pt-4 pb-4 mb-3 font-normal text-gray-700">
                                            La description de ce livre n'a pas
                                            été renseignée.
                                        </p>
                                    )}
                                    <a
                                        onClick={() =>
                                            router.push("/book/" + book.id)
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
                        {books.length == 0 ? (
                            <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-CrimsonTextSemiBoldItalic">
                                Oups. Nous n'avons trouvé aucun livre.
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
                    <SearchBar onSearchChange={SearchBook} />
                )}
            </div>
            <div className="items-center flex flex-1">
                <div className="flex flex-row flex-wrap gap-6 justify-center flex-1 animate-pulse">
                    {FakeBooks.map((book) => (
                        <div
                            key={book}
                            className="flex flex-col w-72 h-80 max-w-sm p-5 bg-white border border-gray-200 rounded-lg shadow"
                        >
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

export default Book;