import { useState } from "react";
import styled from "styled-components";
//import { add, subtract, multiply, divide, power } from "./calculator";

const Main = styled.main`
    min-height: 100vh;
    width: 70%;
    margin: auto;
    text-align: center;
    background-color: #B497D6;

    @media screen and (max-width: 750px) {
        width: 100%;
    }
`;

const ProjectsDiv = styled.div`
  width: 80%;
  margin: 2% auto;
  font-size: calc(2px + 1.2vw);
`;

const ProjectsTitle = styled.h1`
  text-decoration: underline;
  font-size: calc(2px + 3.5vw);
`;

const ProjectsImage = styled.img`
  max-width: 100%;
  height: auto;
  padding: 2%;
  background-color: #E1E2EF;
  border-radius: 20%;
`;

const ProjectDescription = styled.h4`
  padding: 2%;
  background-color: #E1E2EF;
  border-radius: 5%;
  border: 2px solid #05204A;
`;

const CalculatorDiv = styled.div`
  width: 90%;
  background-color: #8CA7C2;
  border: 3px solid #05204A;
  margin: 2% auto;
  padding: 2%;
  font-family: "Dancing Script", cursive;
`;

const Inputs = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
`;

const StyledInput = styled.input`
    width: 120px;
    background-color: #05204A;
    color: white;
    padding: 0.5rem;
`;

const StyledButton = styled.button`
    background-color: #6A849F;
    color: white;
    margin: 0.5rem;
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
`;

const StyledLabel = styled.label`
        font-size: calc(2px + 1.5vw);
        padding: 2%;
        border: 2px solid #05204A;
        background-color: #6A849F;
        color: white;
`;

export default function Projects() {
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [output, setOutput] = useState(0);

    function doAdd() {
        const ans = Number(first) + Number(second);
        setOutput(ans);
    }

    function doSubtract() {
        const ans = Number(first) - Number(second);
        setOutput(ans);
    }

    function doMultiply() {
        const ans = Number(first) * Number(second);
        setOutput(ans);
    }

    function doDivide() {
        const ans = Number(first) / Number(second);
        setOutput(ans);
    }

    function doPower() {
        const numFirst = Number(first);
        const numSecond = Number(second);

        let ans = 1;
        for (let i = 0; i < numSecond; i++) {
            ans *= numFirst;
        }

        setOutput(ans);
    }

    function doClear() {
        setFirst("");
        setSecond("");
        setOutput(0);
    }

    return (
        <Main>
            <ProjectsDiv>
                <ProjectsTitle>Projects Page</ProjectsTitle>
                <ProjectsImage src="/clock-in.jpg" alt="Clock In Project" />
                <ProjectDescription>
                    This project, Clock-In, was a project I began during a Hackathon with a CS391 classmate, Kevin.
                    We are currently enrolled in XC475 together, and we are developing it into a full-fledged prototype.
                </ProjectDescription>
            </ProjectsDiv>

            <CalculatorDiv>
                <h2>JavaScript Calculator</h2>
                <h4>A simple responsive calculator allowing basic numeric calculations!</h4>

                    <Inputs>
                        <StyledLabel htmlFor="first">First Number: </StyledLabel>
                        <StyledInput type="text" id="first"
                        value={first}
                        onChange={(e) => setFirst(e.target.value)}
                        placeholder="First"
                        />

                        <StyledLabel htmlFor="second">Second Number:</StyledLabel>
                        <StyledInput type="text" id="second"
                            value={second}
                            onChange={(e) => setSecond(e.target.value)}
                            placeholder="Second"
                        />
                    </Inputs>

                <div>
                    <StyledButton onClick={doAdd}>+</StyledButton>
                    <StyledButton onClick={doSubtract}>-</StyledButton>
                    <StyledButton onClick={doMultiply}>*</StyledButton>
                    <StyledButton onClick={doDivide}>/</StyledButton>
                    <StyledButton onClick={doPower}>**</StyledButton>
                    <StyledButton onClick={doClear}>Clear</StyledButton>
                </div>

                <h3 id="output" style={{ color: output < 0 ? "red" : "black" }}>
                    {output}
                </h3>
            </CalculatorDiv>
        </Main>
    );
}