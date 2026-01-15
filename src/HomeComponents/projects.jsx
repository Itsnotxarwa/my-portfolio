import projects from "../data/projects";
import { Fade } from "react-awesome-reveal";

export default function Projects() {
    return(
        <section id="projects" className="relative py-24 min-h-screen bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <Fade triggerOnce direction="up" duration={800} delay={200}>
                <h1 className="mb-12 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                    My Projects
                </h1>
                </Fade>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((p,i) => (
                        <Fade triggerOnce direction="up" duration={800} delay={200}>
                        <div
                        key={i}
                        className="group flex overflow-hidden rounded-xl flex-col justify-between border 
                        border-white/10 bg-white/10">
                            <div>
                                <img src={p.image}
                                className="md:h-60 group-hover:scale-105 
                                transition-transform duration-300" />
                            </div>
                            <div className="p-4 sm:p-5 flex flex-col justify-start flex-1">
                                <h2 className="font-[poppins] text-lg sm:text-xl font-semibold text-gray-50">
                                    {p.title}
                                </h2>
                                <p className="font-[poppins] leading-relaxed text-sm sm:text-base text-gray-50/50 mt-2">
                                    {p.description}
                                </p>
                            </div>
                            <div className="p-4 sm:p-5 flex items-center justify-between">
                                <div className="flex justify-center items-center">
                                    <a 
                                    href={p.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-github">
                                        <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        >
                                        <path
                                            d="M7.99992 1.33331C7.12444 1.33331 6.25753 1.50575 5.4487 1.84078C4.63986 2.17581 3.90493 2.66688 3.28587 3.28593C2.03563 4.53618 1.33325 6.23187 1.33325 7.99998C1.33325 10.9466 3.24659 13.4466 5.89325 14.3333C6.22659 14.3866 6.33325 14.18 6.33325 14C6.33325 13.8466 6.33325 13.4266 6.33325 12.8733C4.48659 13.2733 4.09325 11.98 4.09325 11.98C3.78659 11.2066 3.35325 11 3.35325 11C2.74659 10.5866 3.39992 10.6 3.39992 10.6C4.06659 10.6466 4.41992 11.2866 4.41992 11.2866C4.99992 12.3 5.97992 12 6.35992 11.84C6.41992 11.4066 6.59325 11.1133 6.77992 10.9466C5.29992 10.78 3.74659 10.2066 3.74659 7.66665C3.74659 6.92665 3.99992 6.33331 4.43325 5.85998C4.36659 5.69331 4.13325 4.99998 4.49992 4.09998C4.49992 4.09998 5.05992 3.91998 6.33325 4.77998C6.85992 4.63331 7.43325 4.55998 7.99992 4.55998C8.56659 4.55998 9.13992 4.63331 9.66659 4.77998C10.9399 3.91998 11.4999 4.09998 11.4999 4.09998C11.8666 4.99998 11.6333 5.69331 11.5666 5.85998C11.9999 6.33331 12.2533 6.92665 12.2533 7.66665C12.2533 10.2133 10.6933 10.7733 9.20659 10.94C9.44659 11.1466 9.66659 11.5533 9.66659 12.1733C9.66659 13.0666 9.66659 13.7866 9.66659 14C9.66659 14.18 9.77325 14.3933 10.1133 14.3333C12.7599 13.44 14.6666 10.9466 14.6666 7.99998C14.6666 7.1245 14.4941 6.25759 14.1591 5.44876C13.8241 4.63992 13.333 3.90499 12.714 3.28593C12.0949 2.66688 11.36 2.17581 10.5511 1.84078C9.7423 1.50575 8.8754 1.33331 7.99992 1.33331V1.33331Z"
                                            fill="currentcolor"
                                        ></path>
                                        </svg>
                                        <span>View on Github</span>
                                    </a>
                                </div>
                                <div className="flex justify-center items-center">
                                    <a href={p.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="button"
                                    >
                                        <svg
                                            width="14"
                                            class="svgIcon"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 14 15"
                                        >
                                            <path
                                            fill="currentColor"
                                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                            ></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        </Fade>
                    ))}
                </div>
            </div>
        </section>
    )
}