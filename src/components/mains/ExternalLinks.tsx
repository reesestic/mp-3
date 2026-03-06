import styled from "styled-components";
import { Link } from 'react-router';

const Main = styled.main`
    min-height: 100vh;
    width: 70%;
    text-align: center;
    font-size: calc(2px + 1.7vw);
    background-color: #B497D6;

    * {
        margin: 2% 0;
    }

    @media screen and (max-width: 750px) {
        width: 100%;
    }
`;

const LinkWrapper = styled.div`
    border: 2px solid black;
    width: 85%;
    margin: 2% auto;
    background-color: #E1E2EF;
`;

const LinksList = styled.ul`
    padding-left: 5%;
    text-align: left;
`;

const StyledLink = styled(Link)`
    font-size: calc(2px + 2.5vw);
    color: #2f4f80;
`;

export default function ExternalLinks() {
    return (
        <Main>
            <h1>External Links Page</h1>

            <LinkWrapper>
                <h3><StyledLink to="">GitHub</StyledLink></h3>
                <LinksList>
                    <li>Home to Personal and academic projects</li>
                    <li>Repositories for all projects exist here</li>
                    <li>Private repos for ongoing semester projects</li>
                </LinksList>
            </LinkWrapper>

            <LinkWrapper>
                <h3><StyledLink to="">LinkedIn</StyledLink></h3>
                <LinksList>
                    <li>List of current and past professional experiences</li>
                    <li>Favorite place to make updates when I first achieve new things</li>
                    <li>Networking and career development</li>
                </LinksList>
            </LinkWrapper>

            <LinkWrapper>
                <h3><StyledLink to="">Personal Website</StyledLink></h3>
                <LinksList>
                    <li>Portfolio I built with React and routing</li>
                    <li>Houses my resume, Github and projects</li>
                    <li>Created high-tech aesthetic</li>
                </LinksList>
            </LinkWrapper>

        </Main>
    )
}