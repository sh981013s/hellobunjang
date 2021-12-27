const SearchItem = (props: { item: any }) => {
  const { item } = props;
  return (
    <div className="card">
      <div className="top">
        <div className="category">{item.category}</div>
        <div className="title">{item.title}</div>
      </div>
      <div className="bottom">
        <div className="text">{item.text}</div>
        <a href={item.link} className="link" target="_blank" rel="noreferrer">
          더보기
        </a>
      </div>
    </div>
  );
};

export default SearchItem;
