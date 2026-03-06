import styled from "styled-components";

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

const Introduction = styled.div`
    background-color: #E1E2EF;
    border: 3px solid black;
    width: 85%;
    margin: 5% auto;

    img {
        max-width: 100%;
    }
`

const BioParagraph = styled.h4`
    padding: 2vh 2vw;
    width: 90%;
    margin: 2% auto;
`

export default function Home() {
    return (
        <Main>
            <h1>Home Page</h1>

            <Introduction>
                <img src="/headshot.jpg" alt="My headshot"/>
                <BioParagraph> My name is Reese Stichter, and I am a Junior studying Computer Science at Boston
                    University!
                    I really enjoy the Web Development/Software Engineering side of Computer Science,
                    and I particularly enjoy Agile/Scrum environments, building user-facing applications and
                    creating innovative tools for users to interact with.
                </BioParagraph>
            </Introduction>

        </Main>
    )
}