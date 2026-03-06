import styled from "styled-components";



const HeaderWrapper = styled.header`
    text-align: left;
    background-color: #E1E2EF;
    border: 3px solid black;

    @media screen and (max-width: 750px) {
        text-align: center;
    }
`;

const HeaderText = styled.h1`
    font-size: calc(2px + 1.7vw);
`
const HeaderSubtext = styled.p`
    font-size: calc(2px + 1.4vw);
`

export default function Footer () {

    return (
        <HeaderWrapper>
            <HeaderText> Reese's Resume</HeaderText>
            <HeaderSubtext >A website showcasing my Resume, projects coursework and more!</HeaderSubtext>
        </HeaderWrapper>
    )
}