import React from 'react'
import { NF404Styles } from './styles/NotFound.styles'
import { Link } from 'react-router-dom'
const NotFound = () => {
    return (
        <NF404Styles>
            <h2>Sorry</h2>
            <p>That page cannot be found at the moment</p>
            <Link to="/">Back to the homepage...</Link>
        </NF404Styles>
    )
}

export default NotFound
