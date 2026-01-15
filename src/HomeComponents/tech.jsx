import tech from "../data/tech";
import { Fade } from "react-awesome-reveal";

export default function Tech() {
    return(
        <section className="relative py-24 min-h-screen bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <Fade direction="up" triggerOnce cascade duration={400} delay={100}>
                <h1 className="mb-12 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                    Tools & Stack
                </h1>
                </Fade>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tech.map((t,i) => (
                        <Fade direction="up" triggerOnce duration={800} delay={200}>
                        <div
                        key={i}
                        className="group transition-transform duration-700 hover:scale-105 rlative overflow-hidden flex justify-between p-4 md:p-6 rounded-xl bg-white text-black">
                            <div className="flex gap-6">
                            <div className="flex justify-center items-center w-10 h-10 transition-transform duration-700 group-hover:scale-105">
                                {t.svg}
                            </div>
                            <h3 className="font-[poppins] text-xl md:text-xl lg:text-2xl font-bold tracking-tight transition-transform duration-700 group-hover:scale-105">
                                {t.name}
                            </h3>
                            </div>
                            <div className="font-[poppins] text-xl md:text-xl lg:text-2xl font-bold tracking-tight transition-transform duration-700 flex items-center group-hover:scale-105">
                                {t.percent}%
                            </div>
                        </div>
                        </Fade>
                    ))}
                </div>
            </div>
        </section>
    )
}