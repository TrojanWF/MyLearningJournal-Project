
export const articleListArr = [
    {
        picture: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
        heading: "Understanding Linux Fundamentals",
        excerpt: "Learning Linux is less about memorising commands and more about understanding how an operating system works. The filesystem, processes, permissions, and services all play a part.",
        paragraph: `Linux is more than just an operating system; it is an environment that gives users considerable control over how their machines operate. Understanding its fundamentals is an important step towards system administration, infrastructure management, and DevOps.

I started by exploring the Linux filesystem and understanding how directories are organised. From there, I moved on to file permissions, ownership, and commands such as chmod, grep, sort, and find. Understanding pipes and command arguments also helped me see how individual tools can work together to accomplish more complex tasks.

Eventually, I explored processes, signals, systemd, services, and journald. Networking introduced another layer, covering IP addresses, ports, sockets, DNS, routing, and tools such as curl, dig, and ss.

The biggest takeaway has been learning to understand what is happening underneath the commands rather than simply memorising their syntax. Knowing how to investigate a system is far more valuable than remembering every command.`,
        date: "2026-10-20"
    },
    {
        picture: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
        heading: "Getting Started with DevOps",
        excerpt: "DevOps initially seemed like a collection of tools. However, the more I explored it, the more I realised that the tools are only one part of the picture.",
        paragraph: `DevOps is often presented as a collection of technologies and tools, but its underlying purpose is much broader. It focuses on improving how software is developed, deployed, maintained, and monitored through automation and collaboration.

My introduction to DevOps began with Linux administration and networking. These foundations helped me understand the infrastructure on which applications run and why reliable systems require more than just functional code.

I gradually moved towards version control, Docker, and the concepts behind continuous integration and continuous delivery. Each technology addresses a particular problem, whether it is maintaining code history, packaging applications, or automating deployment workflows.

One thing that became clear is that knowing how to use a tool is not the same as understanding the problem it solves. I want to build that understanding rather than simply collect technologies on a list.

There is still a lot to explore, particularly cloud infrastructure, CI/CD pipelines, monitoring, and infrastructure automation. For now, the focus is on building strong foundations and connecting the different parts of the ecosystem.`,
        date: "2026-10-22"
    },
    {
        picture: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
        heading: "Git and Version Control",
        excerpt: "Version control provides a way to track changes, experiment safely, and maintain a history of development. It becomes increasingly important as projects grow.",
        paragraph: `Version control is one of those things that becomes essential once a project starts growing. Git provides a way to track changes, experiment safely, and maintain a history of development.

I started with repositories, the working directory, staging, and commits. Understanding the difference between these stages made Git's workflow much easier to follow. Instead of treating Git as a command-line tool, I began understanding it as a system that tracks the evolution of a project.

From there, I explored branches, merging, remotes, and pushing projects to GitHub. Branches make it possible to work on different features independently, while remotes allow local repositories to communicate with platforms such as GitHub.

I also configured SSH authentication so that my local machine could communicate with GitHub without repeatedly entering credentials.

Git is not just about uploading code. It is about maintaining a reliable history of a project and having the freedom to experiment without losing previous work.`,
        date: "2026-10-24"
    },
    {
        picture: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800",
        heading: "Exploring Docker Containers",
        excerpt: "Docker addresses a common development problem: ensuring that applications behave consistently across different environments through containerisation.",
        paragraph: `One of the interesting problems in software development is ensuring that an application behaves consistently across different environments. An application that works on one machine might fail on another because of differences in dependencies, configurations, or system environments.

Docker approaches this problem through containerisation. It packages an application and its required dependencies into an image, which can then be used to create containers.

I started by understanding the difference between images and containers. An image provides the packaged environment, while a container is a running instance created from that image.

I explored commands for pulling images, creating containers, managing their lifecycle, and mapping ports. Running an NGINX container was a useful practical exercise because it connected containerisation with something tangible: serving a web page.

Docker made more sense once I stopped treating it as a collection of commands and started understanding how containers isolate applications and their dependencies.

There is still more to explore, particularly Dockerfiles, volumes, networks, and container orchestration.`,
        date: "2026-10-26"
    },
    {
        picture: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
        heading: "Data Analysis with Python",
        excerpt: "Raw data is rarely useful in its original form. Python provides tools to clean, organise, process, and analyse datasets to extract meaningful insights.",
        paragraph: `Raw data is rarely useful in its original form. Before meaningful conclusions can be drawn, data often needs to be cleaned, organised, processed, and analysed.

Python provides a useful ecosystem for these tasks. Libraries such as pandas make it possible to work with tabular data, inspect datasets, handle missing values, and perform transformations.

I have also started exploring how data analysis can become part of a larger application. A project involving CSV uploads, data cleaning, visualisations, and automated insights has given me a reason to look beyond standalone Python scripts.

The interesting part is understanding how the different components communicate. A user uploads a dataset through a web interface, the backend receives it, Python processes the information, and the resulting analysis is sent back to the frontend for presentation.

This has introduced me to the relationship between frontend development, backend frameworks, and data processing. It has also given me a practical reason to explore how Python applications work beyond the command line.`,
        date: "2026-10-27"
    },
    {
        picture: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800",
        heading: "Building Responsive Websites",
        excerpt: "A website's structure, styling, and behaviour work together to create an interface. I'm exploring HTML, CSS, JavaScript, DOM manipulation, and responsive design.",
        paragraph: `A website is more than a collection of elements placed on a screen. Its structure, styling, and behaviour work together to create an interface that people can interact with.

I started with HTML to understand document structure and semantics, followed by CSS for layouts, typography, spacing, and responsive design. Flexbox and Grid introduced more systematic ways to arrange elements across different screen sizes.

JavaScript added interactivity. I explored variables, functions, arrays, objects, loops, and DOM manipulation. Building small projects helped me understand how JavaScript can create elements, update content, and respond to user actions.

Recently, I have been focusing on responsive layouts, CSS Grid, and dynamic content rendering. I have also been experimenting with generating page content from JavaScript objects instead of manually writing every element in HTML.

Rather than immediately jumping into frameworks, I want to become comfortable with how the browser handles HTML, CSS, and JavaScript first. Understanding these fundamentals should make it easier to work with frameworks later.`,
        date: "2026-10-29"
    },
    {
        picture: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
        heading: "My Journey So Far: From Linux to Web Development",
        excerpt: "What started as simple curiosity gradually turned into an attempt to understand how computers, operating systems, applications, and the internet actually work. Every new subject opened another door.",
        paragraph: `What started as simple curiosity gradually turned into an attempt to understand how computers, operating systems, applications, and the internet actually work. I didn't have a fixed destination when I started, but every new subject opened another door.

My first serious learning journey was Linux and DevOps. I spent time understanding the Linux filesystem, permissions, processes, services, networking, and Git. Eventually, I moved into Docker and started exploring how applications are packaged and deployed. The interesting part wasn't simply learning commands; it was understanding the systems behind them.

Alongside this, I became increasingly interested in web development. I started working through the Scrimba Fullstack Path, beginning with HTML, CSS, and JavaScript fundamentals. Small projects gave me an opportunity to apply what I was learning, from building simple interfaces and unit converters to experimenting with responsive layouts.

I have also started exploring how frontend applications connect to Python backends. A data-analysis project involving CSV uploads, data processing, graphs, and insights has given me a reason to look beyond the browser and understand how different parts of an application communicate.

There is still a considerable amount I haven't learned. Frameworks, backend development, asynchronous JavaScript, databases, and deployment workflows are all areas I want to explore further. I am trying not to rush through them just to collect technologies on a list.

Looking back, the journey has been less about following one straight path and more about gradually connecting different pieces of technology. I don't have everything figured out yet, but I have a much better idea of what I want to understand and where I want to go next.`,
        date: "2026-10-31"
    }
];
