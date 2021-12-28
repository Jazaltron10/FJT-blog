import { ThemeProvider } from "styled-components"
import { StyledContent } from "./components/styles/Content.styles"
import GlobalStyles from './components/styles/Global'
import {ContainerStyles} from './components/styles/Container.styled'
import Navbar from "./components/Navbar"
import Home from "./components/Home"

const theme = {
  colors:{
    pinkcols: "#f1356d",
    PrimoCols:  "hsl(192, 100%, 9%)",
    TransCols:  "rgba(0,250,0,0.15)",
    limecols:  "limegreen",
  },
  IpadMobile:"768px",
  SduoMobile:"540px",
  IphoneMobile:"360px",
  GfoldMobile:"280px",
  
  assets:{
    radius: "0.5rem",
    radius_2: "1rem",
    padding: "1rem",
    padding_2: "0.5rem",
    fontSizeSmallest: "1rem",
    fontSizeSmall: "2rem",
    fontSizeMid: "3.5rem",
    fontSizeLarge: "5rem",
    color_a: "#18ffff",
    color_b: "#6fffd2",
    color_c: "#0affad",
    color_d: "#08a573",
    color_e: "#1de9b6",
    color_f: "#004d40",
    color_g: "#84ffff",
    color_h: "#0b6953",
    color_i: "#fcfc18",
    color_j: "#f71111",
    color_0: "#0ed80e",
    color_1: "#2885db",
    color_2: "#f56980",
    color_3: "#07075f",
    color_4: "#8f2c2cbe",
    color_5: "#00ff00",
    color_6: "#807676",
    color_7: "#ff7b00",
    color_8: "#dd06dd",
    color_9: "#FBF9F9",
    color_10: "rgba(50, 50, 50, 0.3)",   
    box_shadow: "0px 2px 5px 1px black",     
  },
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
