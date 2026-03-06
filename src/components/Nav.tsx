import { Link } from 'react-router';
import styled from "styled-components";

const NavBody = styled.nav`
    width: 30%;
    margin: auto;
    
    @media screen and (max-width: 750px) {
        width: 100%;
    }
`

const NavLi = styled.li`
    border: 3px solid white;
    width: 80%;
    margin: 15% auto;
    text-align: center;
    padding: 3%;

    @media screen and (max-width: 750px) {
        margin: 0;
        padding: 2%;
        border: 1px solid black;
    }
`;

const NavUl = styled.ul`
    padding-left: 0;
    list-style: none;

    @media screen and (max-width: 750px) {
        display: flex;
    }
`

const NavLink = styled(Link)`
    color: #E1E2EF;
    font-size: calc(2px + 2vw);
`

export default function Nav() {
    return (
        <NavBody>
            <NavUl>
                <NavLi><NavLink to="/">Home</NavLink></NavLi>
                <NavLi><NavLink to="/education/education.html">Education</NavLink></NavLi>
                <NavLi><NavLink to="/coursework/coursework.html">Coursework</NavLink></NavLi>
                <NavLi><NavLink to="/projects/projects.html">Projects</NavLink></NavLi>
                <NavLi><NavLink to="/experience/experience.html">Experience</NavLink></NavLi>
                <NavLi><NavLink to="/externallinks/externallinks.html">External Links</NavLink></NavLi>
            </NavUl>
        </NavBody>
    )
}