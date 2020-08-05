import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Karla', Verdana, Geneva, Tahoma, sans-serif;
}

`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
    </div>
  );
}

export default App;
