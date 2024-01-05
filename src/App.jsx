import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Main } from "./components/mainComponent";
import { SmartCase } from "./components/smartCase";
import { TimeWork } from "./components/timeWork";
import { TechSpecs } from "./routes/techSpecs";
import { Cart } from "./routes/cart";
import "./css/normalize.css";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Switch>
            <Route path="/techSpecs">
              <TechSpecs />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/">
              <Header />
              <Main />
              <SmartCase />
              <TimeWork />
              <Footer />
            </Route>
          </Switch>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
