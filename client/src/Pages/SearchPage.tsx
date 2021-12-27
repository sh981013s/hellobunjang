import SearchForm from '../components/SearchForm';
import SearchLoading from '../components/SearchLoading';
import SearchList from '../components/SearchList';
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 95vh;
  padding: 1rem;
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
`;

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
    <Container>
      <SearchForm getData={getData} isOnLoading={isOnLoading} />
      <SearchLoading isOnLoading={isOnLoading} />
      <SearchList searchData={searchData} isOnLoading={isOnLoading} />
    </Container>
  );
};

export default SearchPage;
