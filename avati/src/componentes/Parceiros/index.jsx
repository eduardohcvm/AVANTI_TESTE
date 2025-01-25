import React, { useState } from "react";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

const Partners = () => {
    const [selectedPartner, setSelectedPartner] = useState(null);

    const partners = [
        {
            id: 1,
            icon: "/Arquivo/suporte.png",
            name: "TechSolutions",
            description: "Especialista em soluções de TI corporativas.",
            subPartners: [
                { id: 1, name: "TechBackup", description: "Backup seguro na nuvem." },
                { id: 2, name: "TechSecure", description: "Firewall e antivírus empresarial." },
            ],
        },
        {
            id: 2,
            icon: "/Arquivo/cloud.jpg",
            name: "CloudMasters",
            description: "Líder em serviços de cloud computing.",
            subPartners: [
                { id: 1, name: "CloudStorage", description: "Armazenamento escalável." },
                { id: 2, name: "CloudAI", description: "Soluções de inteligência artificial." },
            ],
        },
        {
            id: 3,
            icon: "/Arquivo/shield.jpg",
            name: "CyberShield",
            description: "Proteção avançada contra ciberameaças.",
            subPartners: [
                { id: 1, name: "ShieldAntivirus", description: "Antivírus premiado." },
                { id: 2, name: "ShieldVulnerability", description: "Gestão de vulnerabilidades." },
            ],
        },
    ];

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-6 lg:px-20">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Nossos Parceiros</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {partners.map((partner) => (
                        <motion.div
                            key={partner.id}
                            className="flex flex-col items-center p-6 bg-white border border-gray-300 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300 hover:shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            onClick={() =>
                                setSelectedPartner(
                                    selectedPartner?.id === partner.id ? null : partner
                                )
                            }>
                            <img
                                src={partner.icon}
                                alt={partner.name}
                                className="w-20 h-20 object-contain mb-4"
                            />
                            <h3 className="text-2xl font-bold text-blue-600 text-center mb-2">
                                {partner.name}
                            </h3>
                            <p className="text-gray-600 text-center">{partner.description}</p>
                        </motion.div>
                    ))}
                </div>

                {selectedPartner && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
                        onClick={() => setSelectedPartner(null)}>
                        <motion.div
                            className="bg-white p-6 rounded-lg shadow-lg w-96"
                            onClick={(e) => e.stopPropagation()}>
                            <div className="flex justify-between items-center">
                                <h3 className="text-2xl font-bold text-blue-600">
                                    {selectedPartner.name}
                                </h3>
                                <button
                                    onClick={() => setSelectedPartner(null)}
                                    className="text-red-600 text-lg font-bold">
                                    ✕
                                </button>
                            </div>
                            <p className="text-gray-700 my-4">
                                {selectedPartner.description}
                            </p>
                            <h4 className="text-xl font-bold text-gray-800 mb-3">
                                Parceiros Associados:
                            </h4>
                            <ul className="space-y-2">
                                {selectedPartner.subPartners.map((subPartner) => (
                                    <li
                                        key={subPartner.id}
                                        className="p-3 bg-gray-100 rounded-md shadow-sm">
                                        <h5 className="text-lg font-bold text-gray-700">
                                            {subPartner.name}
                                        </h5>
                                        <p className="text-sm text-gray-600">
                                            {subPartner.description}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Partners;
