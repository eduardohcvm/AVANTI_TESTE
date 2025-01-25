import React, { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gradient-to-r from-blue-900 to-gray-800 py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-4">
                {/* Logo */}
                <a href="/" className="flex items-center">
                    <img
                        src="/Arquivo/logo_branca.png"
                        alt="Logo da Mibe Soluções"
                        className="h-12 w-auto"
                    />
                </a>

                {/* Menu Toggle for Mobile */}
                <button
                    onClick={toggleMenu}
                    className="text-white md:hidden focus:outline-none"
                >
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </button>

                {/* Navigation Menu */}
                <nav
                    className={`${
                        isMenuOpen ? "block" : "hidden"
                    } md:flex md:space-x-4 absolute md:static top-16 left-0 w-full md:w-auto bg-blue-900 md:bg-transparent z-10 md:z-auto`}
                >
                    <ul className="flex flex-col md:flex-row items-center md:items-start md:space-x-4 md:space-y-0 space-y-2 p-4 md:p-0">
                        <li>
                            <button
                                onClick={() => handleScroll("services")}
                                className="text-white px-4 py-2 border border-[#2494f4] rounded hover:bg-[#2494f4] hover:text-white transition-all duration-300 w-full md:w-auto"
                            >
                                Serviços
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleScroll("news")}
                                className="text-white px-4 py-2 border border-[#2494f4] rounded hover:bg-[#2494f4] hover:text-white transition-all duration-300 w-full md:w-auto"
                            >
                                Novidades
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleScroll("about")}
                                className="text-white px-4 py-2 border border-[#2494f4] rounded hover:bg-[#2494f4] hover:text-white transition-all duration-300 w-full md:w-auto"
                            >
                                Sobre a Mibe
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleScroll("contact")}
                                className="text-white px-4 py-2 border border-[#2494f4] rounded hover:bg-[#2494f4] hover:text-white transition-all duration-300 w-full md:w-auto"
                            >
                                Fale conosco
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
