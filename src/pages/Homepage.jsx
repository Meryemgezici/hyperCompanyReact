import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenu } from "../redux/actions/menuAction";
import MenuItems from "../components/MenuItems";
import Sidebar from "../components/Sidebar";
import FormField from "../components/FormField";

const Homepage = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);

  useEffect(() => {
    dispatch(getMenu());
  }, []);

  return (
    <div className="full-viewport">
      <div className="body-container">
        <div className="body-content">
          <MenuItems store={store} dispatch={dispatch} />
          <FormField store={store} />
        </div>
        <Sidebar title="Sidebar" />
      </div>
    </div>
  );
};

export default Homepage;
