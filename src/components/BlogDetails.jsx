import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BdStyles } from './styles/BlogDetails.styles'
import useFetch from './useFetch';
import { BtnStyles } from './styles/Button.styles';

const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id)

    const navigate = useNavigate();
    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: "DELETE"
        }).then(()=>{
            navigate("/");            
        })
    }

    return (
        <BdStyles>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <BtnStyles onClick={handleDelete}>delete</BtnStyles>
                </article>
            )}
        </BdStyles>
    )
}

export default BlogDetails
