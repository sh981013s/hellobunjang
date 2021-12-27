import React, { useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import SearchList from './components/SearchList';
import SearchLoading from './components/SearchLoading';

function App() {
  const [searchData, setSearchData] = useState<any>([]);
  const [isOnLoading, setIsOnLoading] = useState(false);

  const getData = (keyword: string) => {
    setIsOnLoading(true);
    console.log('키워드:' + keyword);
    fetch(`api/data?keyword=${keyword}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSearchData(data);
        setIsOnLoading(false);
        console.log(data);
      });
  };
  return (
    <div className="App">
      <SearchForm getData={getData} isOnLoading={isOnLoading} />
      <SearchLoading isOnLoading={isOnLoading} />
      <SearchList searchData={searchData} isOnLoading={isOnLoading} />
    </div>
  );
}

export default App;
