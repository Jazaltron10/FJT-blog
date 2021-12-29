import { HomeStyles, BtnStyles } from "./styles/Home.styles"
const Home = () => {

    const handleClick = (e) => {
        console.log("Hello, Ninjas", e);
    }
    
    const handleClickAgain = (name, e) =>{
        console.log(`Hello ${name}`, e.target);
    }
    
    return (
        <HomeStyles>
            <h2>Homepage</h2>
            <BtnStyles>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e)=>{handleClickAgain('Mario', e)}}>Click Me Again</button>
            </BtnStyles>
        </HomeStyles>
    )
}
// Using Anonymous functions, ()=>{}which are functions that are not held in memory (Constants or variables) to handle click events 
// We wrap functions that take in parameters when a click event is fired in anonymous functions in order to prevent it from automatically setting of irrespective of the event.
// it is the anon function that gets access to the event object.


export default Home
