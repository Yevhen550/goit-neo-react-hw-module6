import s from "./SearchBox.module.css";

const Searchbox = ({ value, onFilter }) => {
  return (
    <div className={s.searchBox}>
      <p className={s.searchTitle}>Find contacts by name</p>
      <label>
        <input
          className={s.searchInput}
          type="text"
          name="text"
          value={value}
          onChange={(ev) => onFilter(ev.target.value)}
        />
      </label>
    </div>
  );
};
export default Searchbox;
