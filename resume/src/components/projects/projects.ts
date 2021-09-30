
export interface Project {
    name: String,
    url: String,
    tools: String[],
    description: String,
    loc: number,
    time_started: Date,
    time_ended: Date,
}

export const projects: Project[] = [
    {
        name: "BRShtop",
        url: "https://github.com/StappsWorld/brshtop",
        tools: ["rust"],
        description: "<u><strong>A Rusty implementation of BpyTop</strong></u>, a stronger, more informative Top written in Python. I ported this program to Rust as a means of immersing myself further the language. It is fully memory safe.",
        loc: 50000,
        time_started: new Date('November 1, 2020 00:00:00'),
        time_ended: new Date('March 1, 2021 00:00:00'),
    },
    {
        name: "YALAL",
        url: "https://github.com/StappsWorld/YALAL",
        tools: ["rust"],
        description: "<u><strong>A simple linear algebra library</strong></u> written in Rust with N dimensional vectors and matrices.",
        loc: 3000,
        time_started: new Date('August 1, 2021 00:00:00'),
        time_ended: null,
    },
    {
        name: "OpenGL Demos",
        url: "https://github.com/StappsWorld/openGLDemos",
        tools: ["rust"],
        description: "<u><strong>Some OpenGL demos</strong></u> written in Rust. A bit of an on and off collection of graphical projects when I feel like writing something creative.",
        loc: 30000,
        time_started: new Date('June 1, 2021 00:00:00'),
        time_ended: null,
    },
    {
        name: "RHS Mesial API",
        url: "https://github.com/Riverbend-High-School/rhs-mesial-api",
        tools: ["python", "rust"],
        description: "<u><strong>A small API written for the RHS Mesial Project</u></strong> in efforts for a volunteer mentorship program at Riverbend Highschool in Fredericksburg, VA. I mentored students in this program. I contributed the code that interfaces with the Google Calendar API to request and parse calendar data to deduce the current block schedule and special events for a specific day.",
        loc: 1000,
        time_started: new Date('September 1, 2021 00:00:00'),
        time_ended: null,
    },
    {
        name: "RHS Mesial Dashboard",
        url: "https://github.com/Riverbend-High-School/rhs-mesial-dashboard",
        tools: ["vue"],
        description: "<u><strong>The frontend of the RHS Mesial Project.</u></strong>",
        loc: 1000,
        time_started: new Date('September 1, 2021 00:00:00'),
        time_ended: null,
    },
    
]