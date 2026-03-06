// returns views that are needed but with appropriate urls (bookmark)
import Nav from "./components/Nav.tsx";
import {Route, Routes} from "react-router";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import Home from "./components/mains/Home.tsx";
import Education from "./components/mains/Education.tsx";
import Experience from "./components/mains/Experience.tsx";
import ExternalLinks from "./components/mains/ExternalLinks.tsx";
import Projects from "./components/mains/Projects.tsx";
import Coursework from "./components/mains/Coursework.tsx";
import styled from "styled-components";

const PageWrapper = styled.div`
    width: 80vw;
    background-color: #05204A;
    margin: 0 auto;
`

const NavMain = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

    @media screen and (max-width: 750px) {
        flex-direction: column;
    }
`

export default function Root() {
    return (
        <>
            <PageWrapper>
                <Header />
                <NavMain>
                    <Nav />
                    <Routes>

                        <Route
                            path={"/"}
                            element={<Home/>}
                        />

                        <Route
                            path={"/education/education.html"}
                            element={<Education/>}
                        />

                        <Route
                            path={"/experience/experience.html"}
                            element={<Experience/>}
                        />

                        <Route
                            path={"/externallinks/externallinks.html"}
                            element={<ExternalLinks/>}
                        />

                        <Route
                            path={"/projects/projects.html"}
                            element={<Projects/>}
                        />

                        <Route
                            path={"/coursework/coursework.html"}
                            element={<Coursework/>}
                        />

                    </Routes>
                </NavMain>
                <Footer />
            </PageWrapper>
        </>
    )
}