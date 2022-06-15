import { Container, Item } from "./Components/Container";
import animations from "./Components/animations"
import { ThemeProvider } from "styled-components";

const theme = {
  bg: '#282424'
}

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container>
          {Object.keys(animations).map((key) => {
            const A = animations[key]
            return <Item key={key}><A onClick={() => console.log("clicked!")}></A></Item>
          })}
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
