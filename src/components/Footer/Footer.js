import rocketIcon from "../../assets/icons/rocket.svg";
import './Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <img className="footer__icon" src={rocketIcon} alt="Rocket" loading="lazy"/>
                    <p className="footer__descr">Exciting space adventure!</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;