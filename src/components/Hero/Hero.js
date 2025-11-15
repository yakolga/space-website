import earthImage from '../../assets/images/hero/earth.webp';
import './Hero.scss';

function Header() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__inner">
                    <div className="hero__image">
                        <img src={earthImage} alt="Earth" width="310" height="347"/>
                    </div>
                    <div className="hero__texts">
                        <h1 className="hero__heading">Discover the vast expanses of <span>space</span></h1>
                        <p className="hero__descr">Where the possibilities are <span>endless!</span></p>
                        <a className="btn btn--solid hero__btn" href="#">Learn more</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;