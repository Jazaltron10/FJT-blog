import { NavbarStyles, LinkStyles } from "./styles/Navbar.styles"
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <NavbarStyles>
            <h1>The FloJoTer</h1>
            <LinkStyles>
                <Link to="/">Home</Link>
                <Link to="create/">New Blog</Link>
            </LinkStyles>
        </NavbarStyles>
    )
}
