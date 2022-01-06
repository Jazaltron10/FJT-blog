import { BlogPreview } from "./styles/Home.styles"
import {BlogListStyles} from "./styles/BlogList.styles"
import { BtnStyles } from "./styles/Button.styles"
const BlogList = ({blogs, title , handleDelete}) => {
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
                        <BtnStyles onClick={()=>handleDelete(blog.id)}>delete me</BtnStyles>
                    </BlogPreview>
                ))
            }
        </BlogListStyles>
    )
}
export default BlogList
