import { Fade } from "react-awesome-reveal"

export default function BookingSection() {
    return(
        <section id="book_a_call" className="py-24 relative min-h-screen text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex flex-col justify-center items-center font-[poppins] mb-18">
                    <Fade triggerOnce direction="up" duration={800} delay={200}>
                    <h3 className="text-4xl font-bold mb-8 text-center">
                        Book a Call — Let’s Build Your Dream Website
                    </h3>
                    </Fade>
                    <Fade triggerOnce direction="up" duration={800} delay={200}>
                    <p className="text-2xl max-w-3xl text-center">
                        Book a 30-minute call to brainstorm, plan, and kickstart your next website project.
                    </p>
                    </Fade>
                </div>
                <Fade triggerOnce direction="up" duration={800} delay={200}>
                <div>
                <iframe 
                    src="https://tidycal.com/kouachkhiamarwa/30-minute-meeting?embed=true" 
                    style={{ width: "100%", height: "800px", border: "none", }}
                    title="Tidycal Booking Calendar"
                ></iframe>
                </div>
                </Fade>
            </div>
        </section>
    )
}