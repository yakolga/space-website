import Offer from '../Offer/Offer';
import ReadMore from '../ReadMore/ReadMore';
import './Offers.scss';

function Offers() {
    return (
        <section className="offers">
            <div className="container">
                <h2 className="offers__heading">Offers</h2>
                <div className="offers__layout">
                    <Offer title="Move the borders of reality!" subtitle="Go on a space adventure" link="#" bgClass="offer--borders"/>
                    <Offer title="Space is not just stars and planets" subtitle="It is a majestic journey to" link="#" bgClass="offer--space"/>
                    <Offer title="For those who dream of stars" subtitle="Our offer: make your dream come true" link="#" bgClass="offer--stars"/>
                    <Offer title="Fulfill your fantastic dreams" subtitle="Space has never been so close" link="#" bgClass="offer--dreams"/>
                </div>

                <div className="offers__descr">
                    <h2 className="offers__descr-title">Embark on a space journey</h2>
                    <div className="offers__descr-more">
                        <p>Travelling into space is one of the most exciting and unforgettable adventures that can change your life forever. And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream. We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe. We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries. Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space. We offer various options for space excursions.</p>
                        <ReadMore>
                            <p>Travelling into space is one of the most exciting and unforgettable adventures that can change your life forever. And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream. We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe. We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries. Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space. We offer various options for space excursions.</p>
                        </ReadMore>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offers;