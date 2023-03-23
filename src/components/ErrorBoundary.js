import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    console.log("getDerivedStateFromError");
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.log("componentDidCatch");
    console.log(error);
    console.log(info);
  }

  render() {
    console.log("render");
    if (this.state.hasError) {
      return (
        <div className="productsContainer">
          <h1
            style={{
              textAlign: "center",
              margin: "auto",
              height: "50rem",
            }}
          >
            Something went wrong
          </h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
