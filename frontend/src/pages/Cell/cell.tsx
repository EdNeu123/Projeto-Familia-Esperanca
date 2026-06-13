import celulasData from './celulas.json';
import './styles.css';

interface Celula {
    data: string;
    titulo: string;
    lider: string;
    local: string;
    tipo: string;
}

export default function Cell() {
    const handleParticipar = (titulo: string) => {
        // Monta o link do WhatsApp com uma mensagem inicial
        const texto = encodeURIComponent(`Olá! Gostaria de participar da célula "${titulo}".`);
        const linkWhatsapp = `https://api.whatsapp.com/send?phone=5547933867270&text=${texto}`;

        // Abre o link em uma nova aba
        window.open(linkWhatsapp, '_blank');
    };

    return (
        <main className="cell-page">
            <div className="cell-container">
                <div className="cell-content-area">
                    <div className="cell-header">
                        <h1 className="cell-title">CÉLULAS</h1>
                    </div>

                    <section className="cell-grid">
                        {celulasData.map((c: Celula) => (
                            <div className="cell-card" key={c.titulo}>
                                <h2 className="cell-card-title">{c.titulo}</h2>

                                <div className="cell-info">
                                    <p>
                                        <span>Dia:</span> {c.data}
                                    </p>
                                    <p>
                                        <span>Líder:</span> {c.lider}
                                    </p>
                                    <p>
                                        <span>Local:</span> {c.local}
                                    </p>
                                    <p>
                                        <span>Tipo:</span> {c.tipo}
                                    </p>
                                </div>

                                <button
                                    className="cell-btn"
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