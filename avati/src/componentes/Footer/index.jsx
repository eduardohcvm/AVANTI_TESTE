import React from 'react';
import 'tailwindcss/tailwind.css';

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-gray-200 py-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
                    {/* Logo */}
                    <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
                        <a href="/" className="text-gray-100 text-2xl font-semibold">
                            Mibe Soluções
                        </a>
                    </div>

                    {/* Siga-nos */}
                    <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
                        <h6 className="text-lg font-medium mb-4">Siga-nos</h6>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/mibesolucoes">
                                <img
                                    src="/Arquivo/facebook-new.png"
                                    alt="Facebook"
                                    className="h-8 transition-transform duration-300 ease-in-out hover:scale-110"
                                />
                            </a>
                            <a href="https://www.instagram.com/mibesolucoes">
                                <img
                                    src="/Arquivo/download.jpg"
                                    alt="Instagram"
                                    className="h-8 transition-transform duration-300 ease-in-out hover:scale-110"
                                />
                            </a>
                            <a href="https://www.linkedin.com/company/mibesolucoes">
                                <img
                                    src="/Arquivo/icon_linkedin.png"
                                    alt="LinkedIn"
                                    className="h-8 transition-transform duration-300 ease-in-out hover:scale-110"
                                />
                            </a>
                        </div>
                    </div>

                    {/* Contato */}
                    <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
                        <h6 className="text-lg font-medium mb-4">Contato</h6>
                        <address className="text-gray-400 not-italic text-center md:text-left">
                            Rua Exemplo, 456-SP<br />
                            <a href="mailto:contato@mibesolucoes.com" className="hover:text-gray-100 transition">
                                contato@mibesolucoes.com
                            </a><br />
                            <a href="tel:+5511987654321" className="hover:text-gray-100 transition">
                                +55 11 98765-4321
                            </a>
                        </address>
                    </div>
                </div>

                {/* Direitos autorais */}
                <div className="text-center mt-6 text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Mibe Soluções. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
