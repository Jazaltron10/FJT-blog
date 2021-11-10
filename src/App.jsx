import { StyledContent } from "./components/styles/Content.styles"
import GlobalStyles from './components/styles/Global'
import {ContainerStyles} from './components/styles/Container.styled'
import Navbar from "./components/Navbar"

function App() {

  const title = "App Component"
  const likes = 50
  const person = {name:"yoshi", age: 30};
  return (
    <ContainerStyles>
    <GlobalStyles/>
      <Navbar/>
      
      <StyledContent>
        <h1>{title}</h1>
      </StyledContent>
    </ContainerStyles>
  )
}

export default App
