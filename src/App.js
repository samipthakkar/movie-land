import { useEffect } from 'react';
import './App.css';
import searchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=62c76933';

const App = () => {

  const searchMovies = async (title) => {
    const response =  await fetch(`${API_URL}&s=${title}`);
    const data = await response.json()
    console.log(data.Search)
  }

  useEffect(() => {
    searchMovies('Spiderman');
  },[]);

  return (  
    <div className="App">
      <h1>Movie Land</h1>
    </div>
  );
}

export default App;
