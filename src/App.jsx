import { ThemeProvider } from "styled-components"
import { StyledContent } from "./components/styles/Content.styles"
import GlobalStyles from './components/styles/Global'
import {ContainerStyles} from './components/styles/Container.styled'
import Navbar from "./components/Navbar"
import Home from "./components/Home"

const theme = {
  colors:{
    hoveCols: "#f1356d",
    PrimoCols:  "hsl(192, 100%, 9%)",
  },
  IpadMobile:"768px",
  SduoMobile:"540px",
  IphoneMobile:"360px",
  GfoldMobile:"280px"
}


function App() {

  const title = "App Component"
  const likes = 50
  const person = {name:"yoshi", age: 30};
  return (
    <ThemeProvider theme = {theme}>
    <ContainerStyles>
    <GlobalStyles/>
      <Navbar/>
      
      <StyledContent>
        <Home/>
      </StyledContent>
    </ContainerStyles>
    </ThemeProvider>
  )
}

export default App
