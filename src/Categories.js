export default function Categories({ category, filterItem }) {
  return (
    <div className="btn-container">
      {category.map((category, index) => {
        return (
          <button
            className="filter-btn"
            key={index}
            onClick={() => filterItem(category)}
          >
            {category}{" "}
          </button>
        );
      })}
    </div>
  );
}
