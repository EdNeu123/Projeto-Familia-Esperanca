import { IoLogoWhatsapp } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoMapOutline } from "react-icons/io5";
import "./styles.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <h3 className="footer-title">Entre em contato</h3>
      <div className="footer-separator">
        <div className="footer-info">
          <h3>Entre em contato</h3>
          <ul>
            <li>
              <IoLogoWhatsapp />
              <a
                href="https://api.whatsapp.com/send?phone=5547933867270"
                target="_blank"
                rel="noopener noreferrer"
              >
                (47) 93386-7270
              </a>
            </li>
            {/* <li>
              <IoMailOutline />
              <a href="mailto:secretaria@familiaesperanca.com.br">
                secretaria@familiaesperanca.com.br
              </a>
            </li> */}
            <li>
              <IoLogoInstagram />
              <a href="https://www.instagram.com/familiaesperancaa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D">
                @familiaesperancaa
              </a>
            </li>
            <li>
              <IoMapOutline />
              <a
                href="https://www.google.com/maps/place/R.+Dona+Francisca,+3114+-+Saguaçu,+Joinville+-+SC,+89221-008"
                target="_blank"
                rel="noopener noreferrer"
              >
                Família Esperança | Sede: R. Herman Lange, 239 - Costa e Silva
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1788.921516771842!2d-48.86862075313285!3d-26.266757328216574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deafc14f5a0625%3A0xd92f26bdbbbe7a56!2zRmFtw61saWEgRXNwZXJhbsOnYQ!5e0!3m2!1spt-BR!2sbr!4v1772236185545!5m2!1spt-BR!2sbr"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}
