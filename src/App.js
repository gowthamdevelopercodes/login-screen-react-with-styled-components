import React from "react";
import styled from "styled-components";
import LoginScreen from "./components/LoginScreen";

function App() {
  return (
    <AppContainer>
      <LoginScreen />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
