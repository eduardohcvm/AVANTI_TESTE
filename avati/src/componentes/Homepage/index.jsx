import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "tailwindcss/tailwind.css";

const Home = () => {
    const [carouselItems] = useState([
        {
            id: 1,
            image: "/Arquivo/Noc.jpg",
            cards: [
                { id: 1, title: "Card 1", description: "Descrição do card 1" },
                { id: 2, title: "Card 2", description: "Descrição do card 2" },
                { id: 3, title: "Card 3", description: "Descrição do card 3" },
                { id: 4, title: "Card 4", description: "Descrição do card 4" },
            ],
            text: "Serviços de TI Dedicada",
        },
        {
            id: 2,
            image: "/Arquivo/SOC.jpg",
            cards: [
                { id: 5, title: "Card 5", description: "Descrição do card 5" },
                { id: 6, title: "Card 6", description: "Descrição do card 6" },
                { id: 7, title: "Card 7", description: "Descrição do card 7" },
                { id: 8, title: "Card 8", description: "Descrição do card 8" },
            ],
            text: "Proteção de dados, Back-up na Nuvem",
        },
    ]);

    const serviceCategories = [
        {
            title: "Serviços de TI",
            resources: [
                "Suporte Integrado em TI",
                "Gestão de TI Dedicada",
                "Gestão de TI Remota",
            ],
        },
        {
            title: "Proteção de Dados",
            resources: [
                "Veeam Backup",
                "Disaster Recovery",
                "Backup na Nuvem",
            ],
        },
        {
            title: "Comunicação",
            resources: [
                "Telefonia em Nuvem",
                "Chat Omnichannel",
                "Telefonia VoIP",
            ],
        },
        {
            title: "Cibersegurança",
            resources: [
                "Pentest como Serviço",
                "Antivírus para o Usuário",
                "Firewall como Serviço",
            ],
        },
    ];

    const clientFeedback = [
        {
            id: 1,
            icon: "/Arquivo/client.png",
            number: "95%",
            description: "Clientes satisfeitos com o suporte",
        },
        {
            id: 2,
            icon: "/Arquivo/data.png",
            number: "90%",
            description: "Aprovação na proteção de dados",
        },
        {
            id: 3,
            icon: "/Arquivo/service.png",
            number: "85%",
            description: "Recomendam os serviços de TI",
        },
    ];

    return (
        <>
            {/* Carousel Section */}
            <section className="py-12 bg-gradient-to-r from-blue-900 to-gray-800">
                <Carousel
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop
                    autoPlay
                    interval={13000}
                    className="shadow-lg rounded-lg overflow-hidden w-full mx-auto">
                    {carouselItems.map((item) => (
                        <div key={item.id} className="relative flex flex-col items-center bg-gray-800">
                            <img
                                src={item.image}
                                alt={`Apresentação ${item.id}`}
                                className="object-cover w-full h-[300px] sm:h-[500px] md:h-[600px]"
                            />
                            <div className="w-full bg-gray-900 text-white p-4 md:p-8 flex flex-col items-center">
                                <h3 className="text-xl sm:text-3xl font-bold mb-2">{item.text}</h3>
                                <p className="text-sm sm:text-lg text-gray-300">Explore nossas soluções personalizadas.</p>
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-4 w-full">
                                    {item.cards.map((card) => (
                                        <div
                                            key={card.id}
                                            className="p-4 bg-gray-800 border border-gray-700 rounded-lg text-center shadow-md hover:scale-105 transition-transform">
                                            <h4 className="text-lg sm:text-xl font-semibold text-blue-400">{card.title}</h4>
                                            <p className="text-sm text-gray-400">{card.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </section>

            {/* Services Section */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-6 lg:px-20">
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Conheça nossas soluções</h2>

                    <div className="grid grid-cols-1 gap-16">
                        {serviceCategories.map((category, index) => (
                            <div
                                key={index}
                                className={`flex flex-col md:flex-row items-center md:items-stretch bg-white rounded-lg shadow-md p-8 border border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-xl ${
                                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}>
                                {/* Logo */}
                                <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0">
                                    <img
                                        src="/Arquivo/icone_mibe.png"
                                        alt="Logo Mibe"
                                        className="w-32 h-32 object-contain"
                                    />
                                </div>

                                {/* Cards */}
                                <div className="w-full md:w-2/3 flex flex-col justify-center">
                                    <h3 className="text-3xl font-bold text-blue-600 mb-6 text-center md:text-left">{category.title}</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {category.resources.map((resource, resourceIndex) => (
                                            <div
                                                key={resourceIndex}
                                                className="flex flex-col items-center p-6 bg-gray-50 border border-gray-300 rounded-lg shadow-md hover:bg-blue-200 transition duration-900">
                                                <h4 className="text-xl font-semibold text-gray-700 mb-2 text-center">{resource}</h4>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Client Feedback Section */}
            <section className="py-8 sm:py-16 bg-gradient-to-r from-blue-900 to-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-20">
                    <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8 text-white">O que nossos clientes dizem</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {clientFeedback.map((feedback) => (
                            <div
                                key={feedback.id}
                                className="flex flex-col items-center p-4 sm:p-6 bg-gray-900 border border-gray-700 rounded-lg shadow-md hover:scale-105 transition-transform">
                                <img
                                    src={feedback.icon}
                                    alt={`Feedback ${feedback.id}`}
                                    className="w-12 h-12 sm:w-16 sm:h-16 mb-4"
                                />
                                <h4 className="text-lg sm:text-xl font-bold text-blue-400">{feedback.number}</h4>
                                <p className="text-sm sm:text-base text-gray-300 text-center">{feedback.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
