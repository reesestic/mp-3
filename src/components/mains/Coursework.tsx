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

const CourseWrapperDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const CourseInfoWrapper = styled.div<{ school: string }>`
    width: 35%;
    margin: 3% auto;
    padding: 2%;
    border: 2px solid black;
    border-radius: 7%;

  background-color: ${({ school }) =>
    school === "clemson" ? "#edce8e" : "#e67c6a"};
`;

const ClassName = styled.h3`
    text-decoration: underline;
    margin-bottom: 1%;
`;

const ClassDescription = styled.h4`
    font-size: calc(2px + 1.3vw);
`;

export default function Coursework() {
    return (
        <Main>
            <h1>Relevant Coursework Page</h1>

            <CourseWrapperDiv>
                <CourseInfoWrapper school="clemson">
                    <ClassName>CPSC 1020 - Clemson University</ClassName>
                    <ClassDescription> I took CPSC 1020 at Clemson University, where I learned how to code in C. We built weekly lab
                        projects.</ClassDescription>
                </CourseInfoWrapper>
                <CourseInfoWrapper school="clemson">
                    <ClassName>CPSC 1021 - Clemson University</ClassName>
                    <ClassDescription> I took CPSC 1021 at Clemson University, where I learned how to code in C++. We also built
                        weekly lab projects.</ClassDescription>
                </CourseInfoWrapper>
                <CourseInfoWrapper school="bu">
                    <ClassName>CS 112 - Boston University</ClassName>
                    <ClassDescription> In Data Structures, I first learned about how to properly use arrays, hash maps, inheritance,
                        and other difficult concepts.</ClassDescription>
                </CourseInfoWrapper>
                <CourseInfoWrapper school="bu">
                    <ClassName>CS 131 - Boston University</ClassName>
                    <ClassDescription> In Combinatoric Structures, I first learned about the languages of logic and how to build and
                        analyze concrete proofs.</ClassDescription>
                </CourseInfoWrapper>
                <CourseInfoWrapper school="bu">
                    <ClassName>CS 210 - Boston University</ClassName>
                    <ClassDescription>CS 210 was my favorite course to date, in which we decoded command logs, built calculators in
                        Assembly, and learned Git/Github.</ClassDescription>
                </CourseInfoWrapper>
                <CourseInfoWrapper school="bu">
                    <ClassName>CS 330 - Boston University</ClassName>
                    <ClassDescription> CS 330 focused on popular interview algorithms like Dikstra, DFS/BFS, Topological sorting, and
                        many other essential algorithms..</ClassDescription>
                </CourseInfoWrapper>
                <CourseInfoWrapper school="bu">
                    <ClassName>CS 460 - Boston University</ClassName>
                    <ClassDescription> In CS 460, I learned a lot about how distributed systems form a database and how to execute
                        complicated SQL queries.</ClassDescription>
                </CourseInfoWrapper>
                <CourseInfoWrapper school="bu">
                    <ClassName>CS 391 - Boston University</ClassName>
                    <ClassDescription> I am now currently enrolled in CS391 with a very talented and lovely professor, Taymaz
                        Davoodi!</ClassDescription>
                </CourseInfoWrapper>
            </CourseWrapperDiv>

    </Main>

    )
}