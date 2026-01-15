import Header from "./header";
import HeroSection from "./HomeComponents/heroSection";
import About from "./HomeComponents/about";
import Tech from "./HomeComponents/tech";
import Projects from "./HomeComponents/projects";
import MarqueeAbout from "./HomeComponents/MarqueeAbout";
import MarqueeTech from "./HomeComponents/MarqueeTech";
import MusicCard from "./HomeComponents/musicCard";
import Contact from "./HomeComponents/contact";
import BookingSection from "./HomeComponents/BookingSection";
import Footer from "./Footer";
import { Fade } from "react-awesome-reveal";

export default function Homepage() {
    const nav = [
        {
            name: "Home",
            href: "/#home"
        },
        {
            name:"About",
            href: "/#about"
        },
        { 
            name:"Projects",
            href: "/#projects"
        },
        {
            name:"Contact",
            href:"/#contact"
        },
        {
            name:"Book a Call",
            href:"/#book_a_call"
        },
    ]
    return (
        <div className="relative min-h-screen bg-black">
            <Header />
            <Fade triggerOnce>
                <HeroSection />
            </Fade>
                <MarqueeAbout />
            <About />
                <MarqueeAbout />
                <MarqueeTech />
            <Tech />
                <MarqueeTech />
            <Projects />
            <Fade triggerOnce direction="left" duration={800} delay={400}>
                <Contact />
            </Fade>
            <BookingSection />
            <Footer nav={nav} />

            <MusicCard />
        </div>
    )
}