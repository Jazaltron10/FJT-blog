import { BlogPreview } from "./styles/Home.styles"
import {BlogListStyles} from "./styles/BlogList.styles"
import { BtnStyles } from "./styles/Button.styles"
import { Link } from "react-router-dom"
const BlogList = ({blogs, title}) => {
    
    return (
        <BlogListStyles>
            <h2>{title+"!"}</h2>
            {
                blogs.map((blog)=> (
                    <BlogPreview key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                            <h2>{ blog.title }</h2>
                            <p>Written by { blog.author }</p>
                        </Link>
                    </BlogPreview>
                ))
            }
        </BlogListStyles>
    )
}

export default BlogList






// const BlogList = ({props}) => {
// const blogs = props.blogs;
// const title = props.title;
// console.log(props, blogs);
