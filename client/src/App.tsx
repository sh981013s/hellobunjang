import React from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import SearchList from './components/SearchList';

function App() {
  const getData = (keyword: string) => {
    console.log('키워드:' + keyword);
    fetch(`api/data?keyword=${keyword}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="App">
      <SearchForm getData={getData} />
      <SearchList />
    </div>
  );
}

export default App;
