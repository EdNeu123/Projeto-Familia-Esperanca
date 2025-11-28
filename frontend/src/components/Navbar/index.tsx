import { useState } from 'react';
import { Link } from 'react-router-dom';
import icon from '../../assets/images/logo_branca_cortada.png';
import './styles.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="navbar-container">
            <nav className="navbar">
                <Link to="/" className="navbar-logo">
                    <img src={icon} alt="logo" />
                </Link>

                <div>
                    <input
                        type="checkbox"
                        id="menuToggle"
                        onClick={handleToggle}
                    />
                    <label htmlFor="menuToggle" className="navbar-burguer ">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>
                <ul className={`navbar-options ${isOpen ? 'active' : ''}`}>
                    <li>
                        <Link to={'/'}>Início</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>Quem somos</Link>
                    </li>
                    <li>
                        <Link to={'/donation'}>Contribua</Link>
                    </li>
                    <li>
                        <Link to={'/ministry'}>Faixa Etária</Link>
                    </li>
                    <li>
                        <Link to={'/cell'}>Células</Link>
                    </li>
                    <li>
                        <Link
                            to={'https://www.e-inscricao.com/famlia-esperanca'}
                        >
                            Eventos e Cursos
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
