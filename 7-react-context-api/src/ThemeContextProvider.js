import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class ThemeContextProvider extends Component {
  state = {
    theme: "light"
  };

  toggleTheme = () => {
    this.setState(prevState => {
      return {
        theme: prevState.theme === "light" ? "dark" : "light"
      };
    });
  };

  render() {
    const { children } = this.props;
    const { theme } = this.state;
    return (
      <Provider value={{ theme, toggleTheme: this.toggleTheme }}>
        {children}
      </Provider>
    );
  }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
