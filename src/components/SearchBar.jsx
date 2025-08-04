// src/components/SearchBar.jsx
import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({ city, setCity, handleSearch }) {
  return (
    <form onSubmit={handleSearch} className="d-flex justify-content-center mb-4">
      <input
        type="text"
        className="form-control w-50 me-2"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
}

SearchBar.propTypes = {
  city: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;
