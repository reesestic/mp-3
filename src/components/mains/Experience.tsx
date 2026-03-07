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

const ExperienceWrapper = styled.div`
    width: 77%;
    display: flex;
    flex-direction: column;
    background-color: #E1E2EF;
    border: 2px solid black;

    margin: 3% auto;
    padding: 3% 0;
    font-size: calc(2px + 1vw);
`;

const ExperienceTitle = styled.h3`
    font-size: calc(2px + 1.4vw);
`;

const ExperienceImage = styled.img`
    max-width: 95%;
    margin: auto;
`;

export default function Experience() {
    return (
        <Main>

            <ExperienceWrapper>
                <ExperienceTitle>BU Bunion & Pinky Toe Website Developer</ExperienceTitle>
                <ExperienceImage src="/bunion.png" alt="Bunion Boston University Logo"/>
                <h4>I am newly helping as the Website Developer for the Bunion Newspaper.
                    I manage the Squarespace web layout and ensure the website is in good form.</h4>
            </ExperienceWrapper>

            <ExperienceWrapper>
                <ExperienceTitle>BU Spark! Initiative Techonlogy Innovator</ExperienceTitle>
                <ExperienceImage src="/spark.png" alt="BU Spark! Logo"/>
                <h4> I am currently in the XC475 Fellowship working on a project with 3 of my good friends.
                    We are building a productivity app where we create schedules, atomize tasks and boost accountability
                    for users.</h4>
            </ExperienceWrapper>

            <ExperienceWrapper>
                <ExperienceTitle>Clemson Robot Researcher</ExperienceTitle>
                <ExperienceImage src="/clemson-logo.png" alt="Clemson University Logo"/>
                <h4>At Clemson, I helped tune parameters in a large language model system that did image classification.
                    I changed weights and tunings in files to boost accuracy by 10% through exeuction of the training
                    model.</h4>
            </ExperienceWrapper>


        </Main>
    )
}