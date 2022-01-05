import { BlogPreview } from "./styles/Home.styles"
import {BlogListStyles} from "./styles/BlogList.styles"
const BlogList = ({blogs, title}) => {
    // const BlogList = ({props}) => {
    // const blogs = props.blogs;
    // const title = props.title;
    // console.log(props, blogs);
    
    return (
        <BlogListStyles>
            <h2>{title+"!"}</h2>
            {
                blogs.map((blog)=> (
                    <BlogPreview key={blog.id}>
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                    </BlogPreview>
                ))
            }
        </BlogListStyles>
    )
}

export default BlogList
