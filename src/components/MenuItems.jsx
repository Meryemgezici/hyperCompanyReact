import { selectedItem } from "../redux/slices/menuSlice";
import Loading from "./Loading";

const MenuItems = ({ store, dispatch }) => {
  // Basılı olan item değerini true yap
  const handleClick = (id) => {
    dispatch(selectedItem(id));
  };

  return (
    <div className="menu-items">
      {store.isLoading && <Loading />}
      <ul>
        {store.menu.map((item, index) => (
          <li
            onClick={() => handleClick(item.id)}
            style={{ backgroundColor: item.color }}
            className="menu-item"
            key={index}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuItems;
