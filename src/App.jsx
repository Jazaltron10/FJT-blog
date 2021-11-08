import { StyledContent } from "./components/styles/Content.styles"
import GlobalStyles from './components/styles/Global'
import {ContainerStyles} from './components/styles/Container.styled'

function App() {
  return (
    <ContainerStyles>
    <GlobalStyles/>
      <StyledContent>
        <h1>App Component </h1>
      </StyledContent>
    </ContainerStyles>
  )
}

export default App
