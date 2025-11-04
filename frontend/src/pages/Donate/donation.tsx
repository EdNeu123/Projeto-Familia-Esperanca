import { useState } from 'react';
import { FaRegCopy } from 'react-icons/fa';
import { FaPix } from 'react-icons/fa6';
import { IoDocumentText } from 'react-icons/io5';
import qr_code from '../../assets/images/qr_code.png';
import './styles.css';

function Donate() {
    const [messageVisible, setMessageVisible] = useState(false);
    const [message, setMessage] = useState('');

    const handleCopy = (value: string, label: string) => {
        navigator.clipboard.writeText(value);
        setMessage(label);
        setMessageVisible(true);
        setTimeout(() => setMessageVisible(false), 3000);
    };

    return (
        <main className="donate page-padding">
            <h1>Contribua</h1>
            <div className="donate-container">
                <img src={qr_code} id="donate-qrcode-pix" />
                <p>Banco: Cooperativa Sicredi</p>
                <p>
                    Agência: 2602
                    <button
                        className="donate-copy-icon-button"
                        onClick={() => handleCopy('2602', 'Agência copiada!')}
                        title="Copiar Agência"
                    >
                        <FaRegCopy />
                    </button>
                </p>
                <p>
                    Conta: 82703-6
                    <button
                        className="donate-copy-icon-button"
                        onClick={() => handleCopy('169498', 'Conta copiada!')}
                        title="Copiar Conta"
                    >
                        <FaRegCopy />
                    </button>
                </p>
                <br />
                <p>
                    <FaPix className="donate-icon" />
                    Chave Pix: 62.868.359/0001-32
                </p>
                {messageVisible && (
                    <div className="donate-pix-message">{message}</div>
                )}
                <button
                    className="donate-button"
                    onClick={() => handleCopy('62.868.359/0001-32', 'Pix copiado!')}
                >
                    <IoDocumentText className="donate-icon" />
                    Copiar pix
                </button>
            </div>
            <div className="donate-quote">
                <h2>
                    “O generoso prosperará; quem dá alívio aos outros, alívio
                    receberá.”
                </h2>
                <p>Provérbios 11:25</p>
            </div>
        </main>
    );
}

export default Donate;
