import { FaLongArrowAltRight } from 'react-icons/fa';
import video from '../../assets/video.mp4';
import A from '../../assets/images/A.jpg';
import B from '../../assets/images/B.jpg';
import C from '../../assets/images/C.jpg';
import './styles.css';

function Home() {
    return (
        <main className="home">
            <section className="home-hero page-screen">
                <video
                    className="hero-video"
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    playsInline={true}
                >
                    <source src={video} type="video/mp4" />
                </video>
                <div className="home-hero-text">
                    <h1>
                        Uma família para
                        <br />
                        <span>pertencer</span>
                    </h1>
                </div>
            </section>
            <section className="home-mission page-padding">
                <h3>Nossa missão é...</h3>
                <p className="home-mission-text">
                    <i>
                        Transformar pessoas comuns em discípulos extraordinários
                        de Jesus
                    </i>
                </p>
                <div className="home-mission-images-container">
                    <img src={A} />
                    <img src={B} />
                    <img src={C} />
                </div>
                <div className="home-mission-tight-images-container">
                    <div>
                        <img src={A} id="home-mission-image-a" />
                        <div className="home-mission-know-us">
                            <p>Saiba quem somos</p>
                            <FaLongArrowAltRight className="home-mission-arrow" />
                        </div>
                    </div>
                    <div>
                        <img src={B} id="home-mission-image-b" />
                        <img src={C} id="home-mission-image-c" />
                    </div>
                </div>
            </section>
            <section className="home-about page-screen page-padding">
                <div className="home-about-bg-image">
                    <img src={A} className="" />
                </div>
                <h3>
                    Nossas
                    <br />
                    <strong>Celebrações</strong>
                </h3>
                <ul className="home-about-list">
                    <li>
                        <strong>Domingo</strong>
                        <hr />
                        9h & 18h
                    </li>
                    <li>
                        <strong>Terça</strong>
                        <hr />
                        14h30
                    </li>
                </ul>
            </section>
        </main>
    );
}

export default Home;
