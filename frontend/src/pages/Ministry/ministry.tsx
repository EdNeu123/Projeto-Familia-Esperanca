import image from '../../assets/images/G.png';
import './styles.css';

const ministries = [
    {
        title: 'Metanoia: rede de Jovens',
        text: '(a partir de 18 anos) se reúne quinzenalmente, sempre aos sábados, às 19h.',
    },
    {
        title: 'Visionárias: rede de mulheres',
        text: 'Encontros mensais para mulheres, em busca do resgate de suas identidades como filhas de Deus e de um relacionamento mais profundo com o Amado de nossas almas - Jesus! Mensalmente as sextas-feiras.',
    },
    {
        title: 'Homens de Honra: rede de Homens',
        text: 'Com base na Palavra de Deus, os encontros formam homens bem posicionados em seus papéis na família e na sociedade. Mensalmente às sextas.',
    },
    {
        title: 'Shout: Rede de Adolescentes',
        text: 'A galera mais animada da Família! Shout (13 a 17 anos). Acontece quinzenalmente aos sábados, às 18h.',
    },
    {
        title: 'Plug: Rede para crianças de 3 a 8 anos',
        text: 'Acontece simultaneamente às nossas celebrações aos domingos, às 18h, no Instituto Esperança.',
    },
    {
        title: 'GPS: Rede de juniores de 9 a 12 anos',
        text: 'Acontece simultaneamente à celebração aos domingos, às 18h, na Nossa Casa.',
    },
];

function Ministry() {
    return (
        <main className="ministry">
            <div className="ministry-content">
                <img
                    src={image}
                    alt="Faixa Etária"
                    className="ministry-image"
                />
                <div className="ministry-text-content">
                    <h2>FAIXA ETÁRIAS</h2>
                    <p>"O maior entre vocês deverá ser servo."</p>
                    <span>Mateus 23:11</span>
                </div>
            </div>
            <div className="ministries-list">
                {ministries.map((item, index) => (
                    <div key={index} className="ministry-card">
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Ministry;
