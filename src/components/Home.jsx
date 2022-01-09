import {useState, useEffect} from "react"
import { HomeStyles} from "./styles/Home.styles"
import BlogList from "./BlogList";
import { BtnStyles } from "./styles/Button.styles";
// A hook in react is a special type of function that does a certain job in react, all hooks start with the name "use"
const Home = () => {
    const [blogs, setBlogs ] = useState([
        {title:'Tales of a Spy', body:'lorem ipsum...', author:'lory Bond', id: 1},
        {title:'Welcome party!', body:'lorem ipsum...', author:'Peter Killmonger', id: 2},
        {title:'Just Business', body:'lorem ipsum...', author:'Jasmine Neutron', id: 3},
        {title:'BlockChain vs Krypto', body:'lorem ipsum...', author:'Annie Bareda', id: 4}
    ]);
    
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

    return (
        <HomeStyles>
            <BlogList blogs = {blogs} title="All Blogs" handleDelete={handleDelete}/>
            <BtnStyles onClick={()=> setName("Luigi")}>Change name</BtnStyles>
            <p>{name}</p>
        </HomeStyles>
    )
}

export default Home
// You can pass down functions and variables as props


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