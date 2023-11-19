import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const store = useSelector((store) => store);
    let backgroundColor = "#264653";

    if (store.selectedIndex !== null && store.menu[store.selectedIndex]) {
        backgroundColor = store.menu[store.selectedIndex].color;
    }

    if(store.resetColor){
        backgroundColor = "#264653";
    }

    return (
        <div className="flex-container   header" style={{ backgroundColor }}>
            <h1>Header</h1>
        </div>
    )
}

export default Header
