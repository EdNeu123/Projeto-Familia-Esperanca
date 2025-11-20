import { useState } from "react";
import celulasData from "./celulas.json";
import "./styles.css";

interface Celula {
    titulo: string;
    lider: string;
    local: string;
    tipo: string;
}

export default function Cell() {
    const [message, setMessage] = useState<string | null>(null);

    const handleParticipar = (titulo: string) => {
        setMessage(`Obrigado! Seu interesse na Célula "${titulo}" foi registrado.`);
        setTimeout(() => setMessage(null), 4000);
    };

    return (
        <main className="page">

            {message && (
                <div className="toast">
                    {message}
                </div>
            )}

            <div className="container">

                <div className="content-area">

                    <div className="header">
                        <h1 className="title">CÉLULAS</h1>
                    </div>

                    <section className="grid">
                        {celulasData.map((c: Celula) => (
                            <div className="card" key={c.titulo}>
                                
                                <h2 className="card-title">{c.titulo}</h2>

                                <div className="info">
                                    <p><span>Dia:</span> Algum dia / hora</p>
                                    <p><span>Líder:</span> {c.lider}</p>
                                    <p><span>Local:</span> {c.local}</p>
                                    <p><span>Tipo:</span> {c.tipo}</p>
                                </div>

                                <button 
                                    className="btn"
                                    onClick={() => handleParticipar(c.titulo)}
                                >
                                    Quero Participar
                                </button>
                            </div>
                        ))}
                    </section>
                </div>

            </div>
        </main>
    );
}
