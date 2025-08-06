import logo from "./logo.svg";
import "./App.css";
import Body from "./components/Body";
import { Provider } from "react-redux";
import AppStore from "./Utils/AppStore";

function App() {
  return (
    <Provider store={AppStore}>
      <Body />
    </Provider>
  );
}

export default App;
