import React, { useEffect,useState} from "react";
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, defaultTheme, whiteTheme } from "./theme";
import { Navbar, Footer } from "./components";
import { HeroSection, AboutSection, SkillsSection, WorkSection } from './sections';
import { ScrollingProvider, Section } from 'react-scroll-section';


function App() {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const selectedTheme = localStorage.getItem('theme');
        if (selectedTheme) {
            setTheme(selectedTheme);
        }
    },[])

    const handleSetTheme = (updateTheme) => {
        localStorage.setItem('theme', updateTheme);
        setTheme(updateTheme);
    }

    const isDarkTheme = theme === "dark";
    
    return (
        <ThemeProvider theme={isDarkTheme ? defaultTheme : whiteTheme}>
            <GlobalStyles />
            <ScrollingProvider>
                <Navbar setTheme={handleSetTheme} />
                <Section id="home">
                    <HeroSection light />
                </Section>  
                <Section id="about">
                    <AboutSection />
                </Section>
                <Section id="skills">
                    <SkillsSection light />
                </Section>
                <Section id="work">
                    <WorkSection />
                </Section>
                <Footer />
            </ScrollingProvider>
        </ThemeProvider>
    );
}

export default App;
