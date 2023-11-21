import { useSelector } from "react-redux";

const Footer = () => {
  const store = useSelector((store) => store);

  let backgroundColor = "#2a9d8f";
  // Resete basılmamışsa ve aktif olan Menu Item rengini alsın
  if (store.selectedIndex !== null && store.menu[store.selectedIndex]) {
    backgroundColor = store.menu[store.selectedIndex].color;
  }
  // resete basılmışsa ilk rengine dönsün
  if (store.resetColor) {
    backgroundColor = "#2a9d8f";
  }

  return (
    <div className="flex-container footer" style={{ backgroundColor }}>
      <h1>Footer</h1>
    </div>
  );
};

export default Footer;
