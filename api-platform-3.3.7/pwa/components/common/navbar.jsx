import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

function NavBar() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-white border-gray-20">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a
                    href="https://localhost/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <Image
                        src="/icons/Book.png"
                        alt="Livre Logo"
                        className="h-8"
                        width={32}
                        height={32}
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">
                        BookAuthor
                    </span>
                </a>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    <span className="sr-only">Ouvrir le menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div
                    className={`w-full md:block md:w-auto ${
                        isOpen ? "block" : "hidden"
                    }`}
                    id="navbar-default"
                >
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <a
                                onClick={() => router.push("/")}
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                                aria-current="page"
                            >
                                Livres
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => router.push("/author")}
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                            >
                                Auteurs
                            </a>
                        </li>
                        <li>
                            <a
                                href="/admin"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                            >
                                Administration
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default NavBar;
