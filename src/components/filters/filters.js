export default function Filters() {
  const selectedFilter = (e) => {
    const { value } = e.target;
  };
  return (
    <div>
      all
      <input type="radio" onChange={selectedFilter} value="all" name="filter" />
      importants
      <input
        type="radio"
        onChange={selectedFilter}
        value="important"
        name="filter"
      />
      not importants
      <input
        type="radio"
        name="filter"
        onChange={selectedFilter}
        value="!important"
      />
    </div>
  );
}
