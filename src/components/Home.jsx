import { HomeStyles } from "./styles/Home.styles"
const Home = () => {

    const handleClick = () => {
        console.log("Hello, Ninjas");
    }
    
    const handleClickAgain = ()=>{
        console.log("Hello, Ninjas");
    }
    
    return (
        <HomeStyles>
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button>Click Me Again</button>
        </HomeStyles>
    )
}


export default Home
