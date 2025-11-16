function Offer({title, subtitle, link, bgClass}) {
    return (
        <div className={`offer ${bgClass}`}>
            <div className="offer__inner">
                <span className="offer__title">{title}</span>
                <p className="offer__subtitle">{subtitle}</p>
                <a className="btn btn--outline offer__btn" href={link} title="Learn more">Learn more</a>
            </div>
        </div>
    )
}

export default Offer;