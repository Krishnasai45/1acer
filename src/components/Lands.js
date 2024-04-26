import React, { useEffect, useState } from 'react'
import Card from './Card';

const Lands = () => {
    const [cards, setCards] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(false);
    console.log("cardsData",cards)
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        const response = await fetch(`https://prod-be.1acre.in/lands/?ordering=-updated_at&page=${pageNumber}&page_size=10`);
        const data = await response.json();
        setCards((prevCards) => [...prevCards, ...data?.results]);
        setLoading(false);
      };
      fetchData();
  
      window.addEventListener('scroll', handleScroll);
  

      return () => window.removeEventListener('scroll', handleScroll);
    }, [pageNumber]);
  
    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop +1 >=
            document.documentElement.scrollHeight
        ) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      };
      
    // "state_name": "Telangana",
    // "district_name": "Kamareddy",
    // "mandal_name": "Lingampet",
    // "village_name": "Jaldipalle",

    // "total_land_size_in_acres": {
    //     "acres": 1.0,
    //     "guntas": 4.0
    // },

    // "price_per_acre_crore": {
    //     "crore": 0.0,
    //     "lakh": 40.0
    // },

    // "total_price": 44.0,
    return (
      <div>
        <h1>1Acre Lands for Sale</h1>
        <div className="main-container">
          {cards.map((card, index) => (
            <Card key={index} card={card}/>
          ))}
        </div>
        {loading && <p>Loading...</p>}
      </div>
    );
}

export default Lands