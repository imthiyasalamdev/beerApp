import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BeerCard from './BeerCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const BeerList = () => {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.sampleapis.com/beers/ale')
      .then(response => {
        setBeers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the beers!', error);
      });
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredBeers = beers.filter(beer =>
    beer.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="my-4">Beer List</h1>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search beers..."
        value={search}
        onChange={handleSearch}
      />
      <div className="row">
        {filteredBeers.map(beer => (
          <div className="col-md-4" key={beer.id}>
            <BeerCard beer={beer} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeerList;
