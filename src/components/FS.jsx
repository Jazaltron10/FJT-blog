import { HomeStyles, BtnStyles } from "./styles/Home.styles"
import {useState} from "react"
// A hook in react is a special type of function that does a certain job in react, all hooks start with the name "use"
const Home = () => {
    // let name = "Dario"
    const[name, laughName] = useState("Dario Navares");
    const [age, setAge ] = useState(25);
    const handleClick = (e) => {
        laughName("John Carpenter");
        setAge(32);
        console.log(`Hello ${name}`, e.target);
    }
    
    // Using the setName function triggers react to rerender a component and update the value of the name variable.
    const handleClickAgain = (name, e) =>{
        laughName("Dayton Bridgerton");
        setAge(96);
        console.log(`Hello ${name}`, e.target);
    }
    
    return (
        <HomeStyles>
            <h2>Homepage</h2>
            <p>{name} is {age} years old </p>
            <BtnStyles>
            <button onClick={handleClick}>L-Click</button>
            <button onClick={(e)=>{handleClickAgain('Mario', e)}}>R-ClickA</button>
            </BtnStyles>
        </HomeStyles>
    )
}
// Using Anonymous functions, ()=>{}which are functions that are not held in memory (Constants or variables) to handle click events 
// We wrap functions that take in parameters when a click event is fired in anonymous functions in order to prevent it from automatically setting of irrespective of the event.
// it is the anon function that gets access to the event object.



// You can pass down functions and variables as props

// useEffect, the empty array means only ever fire any function in the hook once after the initial render of the page.
{/* <BlogList blogs = {blogs.filter((blog)=>blog.author==='John Smilga')} title="John's blogs"/> */}
/*
// The Filter Method
it fires a callback function for each item in the array 
if we return true for that item, it keeps it in the array and if false it filters it out of the array and then it returns a new array with only the items we don't filter out of the array included.
*/ 


// Using the setName function triggers react to rerender a component and update the value of the name variable.

// Using Anonymous functions, ()=>{}which are functions that are not held in memory (Constants or variables) to handle click events 
// We wrap functions that take in parameters when a click event is fired in anonymous functions in order to prevent it from automatically setting of irrespective of the event.
// it is the anon function that gets access to the event object.


// Starting the json-server
// npx json-server --watch Database/db.json --port 8000


{/* Logical && evaluates the left first and if it is false it never even bothers with the right, but if it is true it executes the right */}
{blogs && <BlogList blogs = {blogs} title="All Blogs" handleDelete={handleDelete}/>}
export default Home




// useEffect Dependencies 

{
const [name, setName] = useState("mario");

const handleDelete = (id) =>{
    const newBlogs = blogs.filter( blog => blog.id !== id); 
    setBlogs(newBlogs);
}
// if the blog.id we are iterating through is not equal to the id we are clicking on, return it in the newBlogs array and use the setBlogs method to set the newBlogs as the new array.

useEffect(() => {
    console.log('use effect ran');
    console.log(name); 
}, [name]);

// return (
    <HomeStyles>
        <BlogList blogs = {blogs} title="All Blogs" handleDelete={handleDelete}/>
        <BtnStyles onClick={()=> setName("Luigi")}>Change name</BtnStyles>
        <p>{name}</p>
    </HomeStyles>
// )


// export default Home
}


