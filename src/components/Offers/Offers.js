import Offer from '../Offer/Offer';
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
            </div>
        </section>
    )
}

export default Offers;