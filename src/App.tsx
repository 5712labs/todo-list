import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
  text-align: center;
`;

const Header = Styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Label = Styled.label`
  color: gray;
`;


function App() {
  return (
    <Container>
      <Header>
        <Label>5712 labs</Label>
      </Header>
    </Container>
  );
}

export default App;