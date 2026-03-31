import { useState } from 'react';
import placesData from '../data/placesData';
import PlaceCard from '../components/PlaceCard';
import './Home.css'
import { db } from '../firebase';
import { useEffect } from "react";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";

function SearchBar({ search, setSearch }) {
    return (
        <div className="search-container">
            <input 
                className="search-input" 
                type="text" 
                placeholder="Search for places..." 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} />
        </div>
    )
} 

function Home() {
    const [places, setPlaces] = useState(placesData);

    useEffect(() => {
        const fetchPlaces = async () => {
        const querySnapshot = await getDocs(collection(db, "places"));
    
        const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
        }));

            setPlaces(data);
        };

        fetchPlaces();
        }, []);

    const handleLikes = async (id) => {
  const placeRef = doc(db, "places", id);

  const updatedPlaces = places.map((place) => {
    if (place.id === id) {
      return { ...place, likes: place.likes + 1 };
    }
    return place;
  });

  setPlaces(updatedPlaces);

  const updatedPlace = updatedPlaces.find(p => p.id === id);

  await updateDoc(placeRef, {
    likes: updatedPlace.likes
  });
};

    const [search, setSearch] = useState("")

    const filteredPlaces = places.filter(place => place.name.toLowerCase().includes(search.toLowerCase()) || place.type.toLowerCase().includes(search.toLowerCase()) || place.location.toLowerCase().includes(search.toLowerCase()))

    let content;


    if (filteredPlaces.length > 0) {
        content = filteredPlaces.map(place => 
            <PlaceCard key={place.id} place={place} handleLikes={handleLikes} />
        )
    } else {
        content = <p>No places found matching "{search}"</p>
    }
    return (
        <div className="home-container">
            <SearchBar search={search} setSearch={setSearch} />
            <div className="filter-btn-container">
                <button className="filter-buttons" onClick={(e) => setSearch("")}>All</button>
                <button className="filter-buttons" onClick={(e) => setSearch("cafe")}>Cafe</button>
                <button className="filter-buttons" onClick={(e) => setSearch("outdoor")}>Outdoor</button>
                <button className="filter-buttons" onClick={(e) => setSearch("cinema")}>Cinema</button>
            </div>
            <div className="places-grid">
            {content}
            </div>
        </div>
    )
}


export default Home;