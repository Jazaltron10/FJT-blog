import { NavbarStyles, LinkStyles } from "./styles/Navbar.styles"


export default function Navbar() {
    return (
        <NavbarStyles>
            <h1>The FloJoTer Blog</h1>
            <LinkStyles>
                <a href="/">Home</a>
                <a href="create/">New Blog</a>
            </LinkStyles>
        </NavbarStyles>
    )
}
