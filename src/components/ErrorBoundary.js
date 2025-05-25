import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message };
  }
  componentDidCatch(error) {
    console.log(error);
  }
  render() {
    if (this.state.error) {
      return <div>Something went wrong.Try again later</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
