import { useState } from "react";
import Home from "./pages/home";
import Order from "./pages/order";
import { Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
      </Switch>
    </>
  );
}

export default App;
