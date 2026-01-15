import tech from "../data/tech";
import React from "react";


export default function MarqueeTech() {

    return (
        <div className="flex justify-center py-2 bg-white w-full overflow-hidden">
            <div className="flex items-center justify-center whitespace-nowrap animate-marquee2">
                {tech.map((t, i) => (
                    <div
                    key={`first-${i}`}
                    className="mx-8">
                        {React.cloneElement(t.svg, { fill: "#000000" })}
                    </div>
                ))}
                {tech.map((t, i) => (
                    <div
                    key={`second-${i}`}
                    className="mx-8">
                        {React.cloneElement(t.svg, { fill: "#000000" })}
                    </div>
                ))}
                {tech.map((t, i) => (
                    <div
                    key={`second-${i}`}
                    className="mx-8">
                        {React.cloneElement(t.svg, { fill: "#000000" })}
                    </div>
                ))}
            </div>
        </div>
    );
}
