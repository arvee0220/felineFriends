import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBox from '../components/SearchBox';
import Cardlist from '../components/Cardlist';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

const App = () => {
  const [felines, setFelines] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => setFelines(users))
  }, []);

  const onSearchRender = (event) => {
    setSearch(event.target.value);
  };

  const filteredResults = felines.filter(feline => {
    return feline.name.toLowerCase().includes(search.toLowerCase())
  });

  return !felines.length ?
    <h1>Loading</h1>
    :
    <div className='tc'>
      <h1 className='f1'>Feline Friends</h1>
      <SearchBox searchRender={onSearchRender}/>
      <Scroll>
        <ErrorBoundry>
          <Cardlist felines={filteredResults}/>
        </ErrorBoundry>
      </Scroll>
    </div>
  
}

export default App;
