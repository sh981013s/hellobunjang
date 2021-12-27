import SearchForm from '../components/SearchForm';
import SearchLoading from '../components/SearchLoading';
import SearchList from '../components/SearchList';
import React, { useState } from 'react';

const SearchPage = () => {
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
    <>
      <SearchForm getData={getData} isOnLoading={isOnLoading} />
      <SearchLoading isOnLoading={isOnLoading} />
      <SearchList searchData={searchData} isOnLoading={isOnLoading} />
    </>
  );
};

export default SearchPage;
