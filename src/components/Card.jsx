
export default function Card(props) {
    return (
        <div className="card">
            <img src={`${props.imageUrl}`} />
            <article className="card--info">
                <span className="card--location"><i className="fa-solid fa-location-dot"></i>{props.location}</span>
                <span><a href={`${props.googleMapsUrl}`}>View on google map</a></span>
                <div>
                    <h1>{props.title}</h1>
                    <h4>{props.startDate} - {props.endDate} </h4>
                    <p>{props.description}</p>
                </div>
            </article>
        </div>
    )
}

