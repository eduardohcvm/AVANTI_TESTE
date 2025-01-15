import React, { useState } from "react";
import "tailwindcss/tailwind.css";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const [successo, setSuccesso] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setSuccesso(false);


        const validacaoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !validacaoEmail.test(email)) {
            setError("Por favor, insira um e-mail válido.");
            return;
        }

        if (!senha || senha.length < 6) {
            setError("A senha deve ter pelo menos 6 caracteres.");
            return;
        }


        setSuccesso(true);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 relative overflow-hidden ">

            <div className="bg-[#e9f035] shadow-lg rounded-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Cadastro</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Nome de Usuário (E-mail):</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Digite seu e-mail"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Senha:</label>
                        <input
                            type="password"
                            id="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            placeholder="Digite sua senha"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                        />
                    </div>

                    {error && <p className="text-sm text-red-500 mb-4">{error}</p>}
                    {successo && <p className="text-sm text-black mb-4">Cadastro realizado com sucesso!</p>}

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-gray-800 text-white font-bold rounded-md shadow-md hover:bg-gray-700 transition duration-300"
                    >
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
