import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// pages
const ProductPage = React.lazy(() => import("./pages/ProductPage"));
const CartPage = React.lazy(() => import("./pages/CartPage"));

const App = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter basename="clone-class101">
        <Switch>
          <Route path="/products" component={ProductPage} exact />
          <Route path="/cart" component={CartPage} exact />
          <Redirect to="/products" />
        </Switch>
      </BrowserRouter>
    </React.Suspense>
  );
};

export default App;
