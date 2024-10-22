import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

function BookDetails() {
    const [book, setBook] = useState({});
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (router.isReady && id) {
            const fetchBooks = async () => {
                const response = await fetch(`https://localhost/books/${id}`);
                const data = await response.json();
                setBook(data);
                if(data.status == 404) {
                    router.push("/404")
                }
            };
            fetchBooks();
        }
    }, [router.isReady, id]);

    if (book.author) {
        return (
            <div className="flex flex-col flex-1 items-center justify-center ">
                <div className="flex flex-col w-full bg-beige-500 h-full flex-1 p-2">
                    <div className="flex flex-row flex-wrap">
                        <button
                            onClick={() => router.back()}
                            type="button"
                            className="min-w-24 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                        >
                            Retour
                        </button>
                        <div className="flex w-full items-center flex-col p-3 sm:items-end">
                            <h3 className="font-CrimsonTextItalic text-3xl md:text-4xl mr-4">
                                {"Auteur : " +
                                    book.author.firstName +
                                    " " +
                                    book.author.lastName}
                            </h3>
                            <h4 className="text-end font-CrimsonTextItalic text-2xl md:text-3xl mr-4">
                                {"Nationalité : " + book.author.nationality}
                            </h4>
                        </div>
                    </div>
                    <h2 className="font-CrimsonTextSemiBoldItalic font-custom text-4xl md:text-7xl w-full text-center">
                        {book.title}
                    </h2>
                    <div className="flex-1 p-10">
                        {book.summary ? (
                            <p
                                className="justify-center flex flex-col h-full font-CrimsonTextRegular text-3xl md:text-4xl overflow-hidden flex-1 pt-4 pb-2 mb-3 font-normal text-gray-700"
                                dangerouslySetInnerHTML={{
                                    __html: book.summary,
                                }}
                            ></p>
                        ) : (
                            <p className="justify-center flex flex-col h-full font-CrimsonTextRegular text-3xl md:text-4xl overflow-hidden flex-1 pt-4 pb-2 mb-3 font-normal text-gray-700">
                                La description de ce livre n'a pas été
                                renseignée.
                            </p>
                        )}
                    </div>
                    <div className="flex items-end">
                        <p className="font-CrimsonTextItalic text-3xl md:text-4xl w-full text-end mr-4">
                            Publié le{" "}
                            {book.publishedAt && book.publishedAt.split("T")[0]
                                ? book.publishedAt.split("T")[0]
                                : "date inconu."}
                        </p>
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
                        <h4 className="w-7/12 md:w-6/12 lg:w-4/12 h-7 bg-white rounded  text-end whitespace-nowrap font-CrimsonTextItalic text-2xl md:text-3xl mr-4"></h4>
                    </div>
                </div>
                <div className="animate-pulse w-full h-1/6 flex justify-center pt-10 items-center">
                    <h2 className="w-7/12 md:w-5/12 h-9 bg-white rounded font-CrimsonTextSemiBoldItalic font-custom text-4xl md:text-7xl text-center"></h2>
                </div>
                <div className="flex items-center flex-1 pl-8 pb-8 pr-8 animate-pulse ">
                    <p className="justify-center flex flex-col h-full font-CrimsonTextRegular text-3xl md:text-4xl overflow-hidden flex-1 pt-4 pb-2 mb-3 font-normal text-gray-700">
                        <span className="bg-white rounded mb-4 w-11/12 md:w-9/12 h-4"></span>
                        <span className="bg-white rounded mb-4 w-9/12 md:w-7/12 h-4"></span>
                        <span className="bg-white rounded mb-4 w-11/12 md:9/12 h-4"></span>
                        <span
                            className="bg-white rounded mb-4 w-6/12 h-4"
                            w-
                        ></span>
                        <span className="bg-white rounded mb-4 w-9/12 md:w-7/12 h-4"></span>
                        <span className="bg-white rounded mb-4 w-11/12 md:w-9/12 h-4"></span>
                        <span className="bg-white rounded mb-4 w-9/12 md:w-7/12 h-4"></span>
                        <span className="bg-white rounded mb-4 w-11/12 md:w-9/12 h-4"></span>
                        <span className="bg-white rounded mb-4 w-9/12 md:w-7/12 h-4"></span>
                        <span className="bg-white rounded mb-4 w-11/12 md:w-9/12 h-4"></span>
                        <span className="bg-white rounded mb-4 w-9/12 md:w-7/12 h-4"></span>
                        <span className="bg-white rounded mb-4 w-11/12 md:9/12 h-4"></span>
                    </p>
                </div>
                <div className="flex justify-end w-full animate-pulse">
                    <p className="w-7/12 md:w-6/12 lg:w-4/12 h-7 bg-white rounded font-CrimsonTextItalic text-3xl md:text-4xl text-end mr-4"></p>
                </div>
            </div>
        </div>
    );
}
export default BookDetails;