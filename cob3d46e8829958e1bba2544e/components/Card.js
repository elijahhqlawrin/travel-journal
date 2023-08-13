import React from "react"

export default function Card({id, title, location, googleMapsUrl, startDate, endDate, description, imageUrl}) {
    return (
        <div className="container">
            <div className="card">
                <img src={imageUrl} className="card-img"/>
                <div className="card-text-container">
                    <div className="card-location-stats">
                        <img src="../images/map-marker.png" className="map-marker-icon"/>
                        <span className="monospaced">{location}</span>
                        <span>
                            <a href={googleMapsUrl} className="card-maps-link">View on Google Maps</a>
                        </span>
                    </div>
                    <h1 className="card-title">{title}</h1>
                    <h4 className="card-dates">{startDate} - {endDate}</h4>
                    <p className="card-paragraph">{description}</p>
                </div>
            </div>
            {id <= 12  && <hr/>}
        </div>
    )
}