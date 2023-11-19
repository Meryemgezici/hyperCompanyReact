import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenu } from "../redux/actions/menuAction";
import Header from "../components/Header";
import MenuItems from "../components/MenuItems";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import FormField from "../components/FormField";


const Homepage = () => {
    const dispatch = useDispatch();
    const store = useSelector((store) => store);
  
    useEffect(() => {
      dispatch(getMenu());
    }, []);
  

  return (
    <div className="full-viewport">
      <Header store={store} />
      <div className="body-container">
        <div className="body-content">
          <MenuItems store={store} dispatch={dispatch} />
          <FormField store={store}/>
        </div>
        <Sidebar title="Sidebar" />
      </div>
      <Footer store={store} />

    </div>
  )
}

export default Homepage
