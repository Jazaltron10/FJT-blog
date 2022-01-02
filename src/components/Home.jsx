import { HomeStyles, BlogPreview } from "./styles/Home.styles"
import {useState} from "react"
// A hook in react is a special type of function that does a certain job in react, all hooks start with the name "use"
const Home = () => {
    const [blogs, setBlogs ] = useState([
        {title:'My new website', body:'lorem ipsum...', author:'James Bond', id: 1},
        {title:'Welcome party!', body:'lorem ipsum...', author:'Peter Parker', id: 2},
        {title:'Web dev top tips', body:'lorem ipsum...', author:'John Smilga', id: 3}
    ]);
    
    return (
        <HomeStyles>
            {
                blogs.map((blog)=> (
                    <BlogPreview key={blog.id}>
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                    </BlogPreview>
                ))
            }
        </HomeStyles>
    )
}

export default Home


// Using the setName function triggers react to rerender a component and update the value of the name variable.
// Using Anonymous functions, ()=>{}which are functions that are not held in memory (Constants or variables) to handle click events 
// We wrap functions that take in parameters when a click event is fired in anonymous functions in order to prevent it from automatically setting of irrespective of the event.
// it is the anon function that gets access to the event object.

