import { Component, Fragment } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    console.log(error);
    this.setState({ hasError: true });
  }

  reloadPage() {
    window.location.reload();
  }

  render() {
    if (this.state.hasError) {
      return (
        <Fragment>
          <p>Something went wrong!</p>
          <button onClick={() => this.reloadPage()}>reload</button>
        </Fragment>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
