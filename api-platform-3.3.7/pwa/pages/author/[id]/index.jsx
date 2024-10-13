import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

function AuthorDedatils() {
    const [author, setAuthor] = useState({});
    const [books, setBooks] = useState([]);
    const [FakeBooks, setFakeBooks] = useState([1, 2, 3]);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (router.isReady && id) {
            const fetchAuthor = async () => {
                const response = await fetch(`https://localhost/authors/${id}`);
                const data = await response.json();
                setAuthor(data);
                if (data.books && data.books.length > 0) {
                    setBooks(data.books);
                }
            };
            fetchAuthor();
        }
    }, [router.isReady, id]);

    if (author.firstName) {
        return (
            <div className="flex flex-col flex-1 items-center justify-center ">
                <div className="flex flex-col w-full bg-beige-500 h-full flex-1 p-2">
                    <div className="flex flex-row flex-wrap">
                        <button
                            onClick={() => router.back()}
                            type="button"
                            className="min-w-24 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                        >
                            Retour
                        </button>
                        <div className="flex w-full items-center flex-col p-3 sm:items-end">
                            <h3 className="font-CrimsonTextItalic text-2xl md:text-4xl mr-4">
                                Date de naissance :{" "}
                                {author.birthDate &&
                                author.birthDate.split("T")[0]
                                    ? author.birthDate.split("T")[0]
                                    : author.birthDate}
                            </h3>
                        </div>
                    </div>
                    <h2 className="font-CrimsonTextSemiBoldItalic font-custom text-4xl md:text-7xl w-full text-center">
                        {"Auteur : " + author.firstName + " " + author.lastName}
                    </h2>
                    <h3 className="font-CrimsonTextItalic font-custom text-3xl md:text-5xl w-full text-center">
                        Ses livres :
                    </h3>
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
                                                La description de ce livre n'a
                                                pas été renseignée.
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
                                    Oups. Nous n'avons trouvé aucun livre pour
                                    cet auteur..
                                </h2>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="flex flex-col flex-1 items-center justify-center ">
            <div className="flex flex-col w-full bg-beige-500 h-full flex-1 p-7">
                <div className="flex flex-row mt-4">
                    <button
                        onClick={() => router.back()}
                        type="button"
                        className="h-11 w-20 md:w-24 md:h-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                    >
                        Retour
                    </button>
                    <div className="animate-pulse flex w-full items-end flex-col">
                        <h3 className="w-7/12 md:w-6/12 lg:w-4/12 h-7 mb-4 bg-white rounded  whitespace-nowrap font-CrimsonTextItalic text-3xl md:text-4xl mr-4"></h3>
                    </div>
                </div>
                <div className="animate-pulse w-full h-1/6 flex justify-center pt-10 items-center">
                    <h2 className="w-7/12 md:w-5/12 h-9 bg-white rounded font-CrimsonTextSemiBoldItalic font-custom text-4xl md:text-7xl text-center"></h2>
                </div>
                <div className="animate-pulse w-full h-1/6 flex justify-center pt-5 pb-5 items-center">
                    <h2 className="w-5/12 md:w-5/12 h-9 bg-white rounded font-CrimsonTextSemiBoldItalic font-custom text-4xl md:text-7xl text-center"></h2>
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
            </div>
        </div>
    );
}
export default AuthorDedatils;