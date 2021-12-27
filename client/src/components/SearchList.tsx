import SearchItem from './SearchItem';

const SearchList = (props: { searchData: []; isOnLoading: boolean }) => {
  const { searchData, isOnLoading } = props;
  return (
    <div className="card-list">
      {searchData.map((item: any, idx: number): JSX.Element => {
        return <SearchItem key={idx} item={item} />;
      })}
    </div>
  );
};

export default SearchList;
