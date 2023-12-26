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
import { Comment } from "./routes/comment";
import { Cart } from "./routes/cart";
import "./css/normalize.css";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/comment">
            <Comment />
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
      </BrowserRouter>
    </>
  );
}

export default App;
