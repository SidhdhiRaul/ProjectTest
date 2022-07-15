import { useState,useEffect } from "react";
import './search.css';

let Jobs = [
    'react', 'javascript'
  ];

const Search = () => {

    const [searchData, setSearchData] = useState('');

    // useEffect( async () => {
    //      const response = await fetch('')
    // },[])
    
    const handleInput = (e) => {
      setSearchData(e.target.value);
    }
    
    const handleClearBtn = () => {
      setSearchData('');
    }
    
    const filteredProducts = Jobs.filter((product) => {
      return product.includes(searchData);
    });
    
    return (
      <div className='container'>
        <div className='input-wrap'>
          <i className="fas fa-search"></i>
          <label 
            htmlFor="product-search" 
            id="input-label"
          >
            Product Search
          </label>
          <input 
            onChange={handleInput}
            value={searchData}
            type="text" 
            name="product-search" 
            id="product-search" 
            placeholder="Search for Job"
          />
          <i 
            onClick={handleClearBtn}
            className="fas fa-times"
          ></i>
        </div>
        <div className="results-wrap">
          <ul>
            {filteredProducts.map((product) => {
              return <li key={product} className='list-item'>{product}</li>
            })}
          </ul>
        </div>
      </div>
    );
}

export default Search;


  