import './ReadMore.scss';

function ReadMore({summary = "Read more", children}) {
    return (
        <details className="readmore">
            <summary className="readmore__summary">{summary}</summary>
            <div className="readmore__content">
                {children}
            </div>
        </details>
    )
}

export default ReadMore