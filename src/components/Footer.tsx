import { Link } from 'react-router';
import styled from "styled-components";


const FooterWrapper = styled.footer`
  background-color: #E1E2EF;
  text-align: center;
  border: 2px solid black;
  font-size: calc(2px + 1.2vw);
`;

export default function Footer () {

    return (
        <FooterWrapper >
            <p> All Rights Reserved By Reese Stichter <Link to="">Credits</Link> &#169;</p>
        </FooterWrapper>
    )
}