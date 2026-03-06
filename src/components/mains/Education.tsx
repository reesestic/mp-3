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

const PageTitle = styled.h1`
  margin: 3% 0;
`;

const SchoolCard = styled.div`
  width: 87%;
  display: flex;
  flex-direction: column;
  background-color: #E1E2EF;
  border: 2px solid black;
  margin: 3% auto;
  padding: 3% 2%;
  border-radius: 11%;
`;

const SchoolImage = styled.img`
  max-width: 50%;
  margin: 0 auto;
`;

const SchoolTitle = styled.h3`
  width: 100%;
  margin: 0 auto;
`;

const SchoolDescription = styled.h4`
  width: 100%;
  margin: 0 auto;
`;

export default function Education() {
    return (
        <Main>
            <PageTitle>Education Page</PageTitle>

            <SchoolCard>
                <SchoolTitle>Clemson University</SchoolTitle>
                <SchoolImage
                    src="/clemson-logo.png"
                    alt="Picture of the Clemson paw"
                />
                <SchoolDescription>
                    I started my academic journey as a Freshman at Clemson University in 2023. I studied Computer
                    Science there!
                    I learned C/C++ at Clemson, and classes were more focused on project development and hands-on
                    learning.
                    I did not want to continue my education at Clemson however, so I transferred out of Clemson
                    University after my first year.
                </SchoolDescription>
            </SchoolCard>

            <SchoolCard>
                <SchoolTitle>Boston University</SchoolTitle>
                <SchoolImage
                    src="/bu-logo.png"
                    alt="Picture of the BU Rhett logo"
                />
                <SchoolDescription>
                    I continued my academic journey as a Sophomore at Boston University in 2024. I also study Computer
                    Science here!
                    I have learned Java and Python at Boston University, and classes seem much more focused on theory
                    development and high-level thinking.
                    I really enjoy my time in Computer Science classes here, and I have learned things like HTML/CSS/JS,
                    TypeScript and API usage in my free time!
                </SchoolDescription>
            </SchoolCard>

        </Main>
    )
}