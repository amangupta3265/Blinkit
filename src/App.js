import "./index.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Checkout from "./pages/checkout";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryId: 0,
    };
  }

  changeCategory = (categoryId) => {
    this.setState({
      categoryId: categoryId,
    });
  };

  render() {
    const { categoryId } = this.state;

    return (
      <Routes>
        <Route
          path="/"
          element={
            <Home
              categoryId={categoryId}
              changeCategory={this.changeCategory}
            />
          }
        />

        <Route
          path="/checkout"
          element={<Checkout changeCategory={this.changeCategory} />}
        />
      </Routes>
    );
  }
}

export default App;
