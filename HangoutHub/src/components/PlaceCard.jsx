import './PlaceCard.css'

function PlaceCard({ place, handleLikes }) {
    return (
        <div className="card">
            <img className="card-image" src={place.image} alt={place.name} />
            <div className="data-display">
                <h3>{place.name}</h3>
                <p>Type: {place.type}</p>
                <p>Location: {place.location}</p>
                <p>Rating: {place.rating}</p>

                <button onClick={() => handleLikes(place.id)}>❤️ {place.likes}</button>
            </div>
        </div>
    )
}

export default PlaceCard;