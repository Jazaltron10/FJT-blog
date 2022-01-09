import { HomeStyles} from "./styles/Home.styles"
import BlogList from "./BlogList";
import useFetch from "./useFetch";

// A hook in react is a special type of function that does a certain job in react, all hooks start with the name "use"
const Home = () => {
const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

    return (
        <HomeStyles>
            {error && <div>{error}</div>}
            {isPending && <div> Loading... </div>}
            {blogs && <BlogList blogs = {blogs} title="All Blogs"/>}
        </HomeStyles>
    )
}

export default Home
