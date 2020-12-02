import React from "react";
import styled from "styled-components";

interface AppProps {
  className?: string;
}

const AppContainer: React.FC<AppProps> = (props) => {
  return <div className={props.className}>{props.children}</div>;
};

const StyledAppContainer = styled(AppContainer)<{ customColor?: string }>`
  color: ${(props) =>
    props.customColor ? props.customColor : props.theme.colors.secondary};
`;

const Text: React.FC = ({ children }) => <h1>{children}</h1>;

const App = () => {
  return (
    <StyledAppContainer customColor="blue">
      <Text>Hello World!</Text>
    </StyledAppContainer>
  );
};

export default App;
