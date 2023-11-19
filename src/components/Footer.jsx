import { useDispatch, useSelector } from "react-redux";

const Footer = () => {

  const store = useSelector((store) => store);

  let backgroundColor = "#2a9d8f";

  if (store.selectedIndex !== null && store.menu[store.selectedIndex]) {
    backgroundColor = store.menu[store.selectedIndex].color;
  }

  if (store.resetColor) {
    backgroundColor = "#2a9d8f";
  }
  return (
    <div className="flex-container footer" style={{ backgroundColor }}>
      <h1>Footer</h1>
    </div>
  )
}

export default Footer
