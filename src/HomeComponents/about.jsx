import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const text = "I strongly believe that how a website looks is just as important as how it works. I’m  Marwa Kouachkhia , a frontend developer creating engaging and interactive websites and apps. Always learning, I’m on my way to become a full-stack developer.";
    const textRef = useRef(null);

    useEffect(() => {
        const animatedText = textRef.current;
        animatedText.innerHTML = animatedText.textContent
        .split("")
        .map((char) => `<span>${char}</span>`)
        .join("");
        
        gsap.from(animatedText.querySelectorAll("span"), {
            scrollTrigger: {
                trigger: animatedText,
                start: "top 85%",
                end: "top 35%",
                scrub: true,
            },
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.05,
        });
    }, []);

    return(
        <section id="about" className="relative py-24 bg-gray-50 min-h-screen flex justify-center">
            
            <div className="absolute inset-0 bg-[radial-gradient(105%_105%_at_50%_90%,rgb(255,255,255)_40%,#FFE4F2_100%)]
            bg-size-[100%_100%]
            opacity-100"></div>
            <div id="about" className="max-w-7xl mx-auto text-center flex justify-center items-center relative z-10">
                <h2 ref={textRef} className=" text-black/70 w-full text-[2rem] md:text-[2.5rem] 
                font-bold uppercase">
                    {text}
                </h2>
            </div>
        </section>
    )
}