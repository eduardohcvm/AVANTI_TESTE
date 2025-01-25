import React from "react";

const Header = () => {
    const handleScroll = (sectionId) => {
        // Simula uma rolagem para a seção desejada
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="bg-gradient-to-r from-blue-900 to-gray-800 py-4 shadow-md">
            {/* Coloquei o site com o tom da cor do logo da Mibe Soluções até o branco *feito com TAILWINDCSS */}
            <div className="container mx-auto flex justify-between items-center px-4">
                {/* Logo */}
                <a href="/" className="flex items-center">
                    <img
                        src="/Arquivo/logo_branca.png"
                        alt="Logo da Mibe Soluções"
                        className="h-12 w-auto"
                    />
                </a>

                {/* Navigation Menu */}
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <button
                                onClick={() => handleScroll("services")}
                                className="text-white px-4 py-2 border border-[#2494f4] rounded hover:bg-[#2494f4] hover:text-white transition-all duration-300"
                            >
                                Serviços
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleScroll("news")}
                                className="text-white px-4 py-2 border border-[#2494f4] rounded hover:bg-[#2494f4] hover:text-white transition-all duration-300"
                            >
                                Novidades
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleScroll("about")}
                                className="text-white px-4 py-2 border border-[#2494f4] rounded hover:bg-[#2494f4] hover:text-white transition-all duration-300"
                            >
                                Sobre a Mibe
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleScroll("contact")}
                                className="text-white px-4 py-2 border border-[#2494f4] rounded hover:bg-[#2494f4] hover:text-white transition-all duration-300"
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
