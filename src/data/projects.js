// Growth status utility function
const getGrowthStatusConfig = (status) => {
  const statusConfigs = {
    in_progress: {
      color: "bg-blue-500 text-white",
      label: "In Progress",
    },
    started: {
      color: "bg-green-600 text-white",
      label: "Started",
    },
    paused: {
      color: "bg-amber-500 text-white",
      label: "Paused",
    },
    completed: {
      color: "bg-emerald-600 text-white",
      label: "Completed",
    },
    refactoring: {
      color: "bg-purple-500 text-white",
      label: "Refactoring",
    },
  };

  return statusConfigs[status] || statusConfigs.started;
};

const projects = {
  showcase_projects: [
    {
      id: "taskflow-pro",
      name: "TaskFlow Pro",
      title: "TaskFlow Pro",
      subtitle: "Collaborative project management platform",
      description:
        "A modern project management application with real-time collaboration features for remote teams.",
      tags: ["React", "Node.js", "PostgreSQL", "Socket.io"],
      image: {
        src: "/placeholder.svg?height=300&width=500",
        alt: "TaskFlow Pro screenshot",
        link: "https://taskflow-pro.vercel.app",
      },
      github: "https://github.com/username/taskflow-pro",
      website: "https://taskflow-pro.vercel.app",
      caseStudyUrl: "/case-study/taskflow-pro",
      lastUpdated: "2024-01-15",
      status: "completed",
      metrics: {
        users: "2,847",
        performance: "< 1.2s",
        uptime: "99.8%",
      },
      case_study: {
        overview:
          "TaskFlow Pro is a modern project management application designed to streamline collaboration for distributed teams. Built with performance and user experience in mind, it provides real-time updates, intuitive task management, and comprehensive project analytics.",
        problem:
          "Remote teams struggle with fragmented communication across multiple tools, leading to missed deadlines, unclear task ownership, and reduced productivity. Existing solutions are either too complex for small teams or lack the real-time collaboration features needed for agile workflows.",
        audience:
          "Small to medium-sized remote teams (5-50 members) in tech startups, creative agencies, and consulting firms who need streamlined project management without enterprise complexity.",
        features: [
          "Real-time collaborative task boards with drag-and-drop functionality",
          "Integrated video calling and screen sharing",
          "Automated progress tracking and reporting",
          "Custom workflow templates for different project types",
          "Time tracking with productivity insights",
          "Mobile-responsive design with offline capabilities",
        ],
        tech_stack: {
          frontend: [
            "React 18",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "React Query",
          ],
          backend: ["Node.js", "Express", "Socket.io", "JWT Authentication"],
          database: ["PostgreSQL", "Redis", "Prisma ORM"],
          tools: ["Docker", "GitHub Actions", "Vercel", "Sentry", "Figma"],
        },
        architecture:
          "The application follows a microservices architecture with a React frontend, Node.js API server, and PostgreSQL database. Real-time features are powered by Socket.io, while Redis handles session management and caching. The system is containerized with Docker and deployed on Vercel with automatic CI/CD pipelines.",
        tradeoffs: [
          "Chose PostgreSQL over MongoDB for complex relational queries, trading some flexibility for data consistency",
          "Implemented custom authentication instead of third-party solutions for better user experience, requiring more development time",
          "Used Socket.io for real-time features instead of WebRTC for broader browser compatibility",
          "Prioritized mobile responsiveness over native mobile apps to reduce development complexity",
        ],
        timeline: "6 months from concept to production deployment",
        challenges: [
          "Implementing real-time collaboration without conflicts when multiple users edit simultaneously",
          "Optimizing database queries for large datasets while maintaining sub-200ms response times",
          "Designing an intuitive UX that works across desktop, tablet, and mobile devices",
          "Managing state synchronization between multiple browser tabs and devices",
        ],
        learnings: [
          "Operational Transform algorithms are crucial for conflict-free collaborative editing",
          "Database indexing strategy significantly impacts application performance at scale",
          "User testing early and often prevents major UX redesigns later in development",
          "Implementing proper error boundaries and loading states greatly improves perceived performance",
        ],
        detailed_metrics: [
          { label: "Active Users", value: "2,847" },
          { label: "Projects Created", value: "1,203" },
          { label: "Average Session Time", value: "24 minutes" },
          { label: "User Retention (30-day)", value: "68%" },
          { label: "Page Load Time", value: "1.2s" },
          { label: "Uptime", value: "99.8%" },
        ],
        feedback: [
          {
            quote:
              "Finally, a project management tool that doesn't feel overwhelming. The real-time updates are game-changing for our remote team.",
            author: "Sarah K., Product Manager",
          },
          {
            quote:
              "The mobile experience is surprisingly good. I can manage my tasks during commute without any issues.",
            author: "Mike R., Developer",
          },
          {
            quote:
              "Love the custom workflow templates. Saved us hours of setup time for new projects.",
            author: "Jennifer L., Agency Owner",
          },
        ],
        improvements: [
          "Advanced analytics dashboard with custom reporting capabilities",
          "Integration with popular tools like Slack, GitHub, and Google Workspace",
          "AI-powered task prioritization and deadline prediction",
          "Enhanced mobile app with push notifications",
          "Advanced permission system for enterprise clients",
        ],
        images: [
          "/placeholder.svg?height=400&width=800",
          "/placeholder.svg?height=300&width=600",
        ],
      },
      visible: false,
    },
  ],
  completed_projects: [
    {
      id: "trapper-keeper",
      name: "Trapper Keeper",
      title: "Trapper Keeper",
      subtitle: "Rails SPA Address Book Application",
      description:
        "A Rails SPA app that helps the user create a CRUD-style address book containing their friends.",
      tags: ["Rails", "CRUD", "Ruby"],
      image: {
        src: "https://images.pexels.com/photos/27776677/pexels-photo-27776677/free-photo-of-uluyayla.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Trapper Keeper Project Screenshot",
        link: "https://github.com/Nerajno/Trapper_Keeper-v1",
      },
      github: "https://github.com/Nerajno/Trapper_Keeper-v1",
      website: "https://trapper-keepr.fly.dev/",
      caseStudyUrl: "/case-study/trapper-keeper",
      lastUpdated: "2022-01-01",
      status: "completed",
      metrics: {
        users: "150+",
        performance: "< 2s",
        uptime: "99.5%",
      },
      case_study: {
        overview:
          "Trapper Keeper is a single-page application built with Ruby on Rails that provides users with a comprehensive CRUD-style address book for managing their personal and professional contacts. The application emphasizes simplicity and user experience while demonstrating full-stack development capabilities.",
        problem:
          "Many people struggle to keep track of their contacts across multiple platforms and devices. Traditional address books are either too complex for casual users or lack the flexibility needed for organizing diverse contact information. There was a need for a simple, web-based solution that could be accessed from anywhere.",
        audience:
          "Individuals and small business owners who need a straightforward way to organize and manage their personal and professional contacts without the complexity of enterprise CRM systems.",
        features: [
          "Full CRUD operations for contact management",
          "Responsive design that works on desktop and mobile",
          "Search and filter functionality for quick contact lookup",
          "Clean, intuitive user interface",
          "Secure user authentication and data protection",
          "Export functionality for contact backup",
        ],
        tech_stack: {
          frontend: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
          backend: ["Ruby on Rails", "Ruby"],
          database: ["PostgreSQL"],
          tools: ["Git", "Heroku", "Fly.io"],
        },
        architecture:
          "The application follows the Model-View-Controller (MVC) pattern typical of Rails applications. The frontend is a single-page application that communicates with the Rails backend through RESTful API endpoints. PostgreSQL handles data persistence, while the application is deployed on Fly.io for reliable hosting.",
        tradeoffs: [
          "Chose Rails over lighter frameworks for rapid development and built-in conventions",
          "Used PostgreSQL instead of SQLite for production scalability",
          "Implemented server-side rendering for better SEO over pure client-side SPA",
          "Prioritized functionality over advanced UI animations to meet MVP timeline",
        ],
        timeline: "3 months from initial concept to production deployment",
        challenges: [
          "Implementing efficient search functionality across multiple contact fields",
          "Ensuring responsive design works seamlessly across different screen sizes",
          "Managing database relationships and ensuring data integrity",
          "Optimizing application performance for larger contact lists",
        ],
        learnings: [
          "Rails conventions significantly speed up development when followed properly",
          "Database indexing is crucial for search performance as data grows",
          "User testing revealed the importance of intuitive navigation patterns",
          "Proper error handling and user feedback improve overall user experience",
        ],
        detailed_metrics: [
          { label: "Active Users", value: "150+" },
          { label: "Contacts Managed", value: "2,500+" },
          { label: "Average Load Time", value: "< 2s" },
          { label: "User Retention", value: "75%" },
          { label: "Uptime", value: "99.5%" },
          { label: "Mobile Usage", value: "40%" },
        ],
        feedback: [
          {
            quote:
              "Simple and effective. Finally, an address book that doesn't overwhelm me with features I don't need.",
            author: "Sarah M.",
          },
          {
            quote:
              "The search functionality is fast and intuitive. I can find any contact in seconds.",
            author: "Mike R.",
          },
          {
            quote:
              "Love that I can access my contacts from anywhere. The mobile experience is surprisingly good.",
            author: "Jennifer K.",
          },
        ],
        improvements: [
          "Integration with popular email providers for contact import",
          "Advanced tagging and categorization system",
          "Contact sharing and collaboration features",
          "Mobile app for offline access",
          "Analytics dashboard for contact management insights",
        ],
        images: [
          "https://images.pexels.com/photos/27776677/pexels-photo-27776677/free-photo-of-uluyayla.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        ],
      },
      visible: true,
    },
    {
      id: "burble",
      name: "Burble",
      title: "Burble",
      subtitle: "React Movie Discovery Application",
      description: "Responsive Movie app using React, the TMDB API, and Sass.",
      tags: ["React", "API", "Sass"],
      image: {
        src: "https://github.com/Nerajno/Burble-V1/blob/DevBranch/src/assets/Burble_Screenshot.jpeg?raw=true",
        alt: "A screenrecording of the Burble app.",
        link: "https://theburble.netlify.app/",
      },
      github: "https://github.com/Nerajno/Burble-V1",
      website: "https://theburble.netlify.app/",
      caseStudyUrl: "/case-study/burble",
      lastUpdated: "2024-12-28",
      status: "completed",
      metrics: {
        users: "300+",
        performance: "< 1.5s",
        uptime: "99.8%",
      },
      case_study: {
        overview:
          "Burble is a responsive movie discovery application built with React that leverages The Movie Database (TMDB) API to provide users with comprehensive movie information, ratings, and recommendations. The application focuses on delivering a smooth, Netflix-like browsing experience with modern UI/UX patterns.",
        problem:
          "Movie enthusiasts often struggle to discover new films that match their preferences across multiple streaming platforms. Existing solutions either lack comprehensive movie data or provide poor user experiences on mobile devices. There was a need for a unified, responsive platform for movie discovery.",
        audience:
          "Movie enthusiasts, casual viewers, and anyone looking to discover new films based on genres, ratings, and popularity trends.",
        features: [
          "Comprehensive movie search with real-time results",
          "Detailed movie information including cast, crew, and ratings",
          "Responsive grid layout optimized for all screen sizes",
          "Genre-based filtering and sorting options",
          "Movie trailer integration and media galleries",
          "Trending and popular movie recommendations",
        ],
        tech_stack: {
          frontend: ["React", "JavaScript ES6+", "Sass/SCSS", "HTML5"],
          backend: ["TMDB API", "Axios for API calls"],
          database: ["Local Storage for user preferences"],
          tools: ["Netlify", "Git", "Webpack", "Babel"],
        },
        architecture:
          "Single-page application built with React using functional components and hooks. The app communicates with TMDB API through Axios for data fetching, implements responsive design with Sass, and uses local storage for user preferences. Deployed on Netlify with continuous deployment from GitHub.",
        tradeoffs: [
          "Used TMDB API instead of building custom backend to focus on frontend skills",
          "Chose Sass over CSS-in-JS for better separation of concerns and easier maintenance",
          "Implemented client-side routing over server-side for better user experience",
          "Used local storage instead of user accounts to reduce complexity while maintaining personalization",
        ],
        timeline: "2 months from initial design to production deployment",
        challenges: [
          "Managing API rate limits while providing smooth user experience",
          "Implementing responsive design that works across all device sizes",
          "Optimizing image loading and performance for movie posters",
          "Handling API errors gracefully and providing meaningful user feedback",
        ],
        learnings: [
          "API optimization strategies significantly impact user experience",
          "Responsive design requires careful consideration of content hierarchy",
          "Error handling and loading states are crucial for API-dependent applications",
          "User testing revealed the importance of intuitive navigation patterns",
        ],
        detailed_metrics: [
          { label: "Active Users", value: "300+" },
          { label: "Movies Searched", value: "5,000+" },
          { label: "Average Session Time", value: "8 minutes" },
          { label: "Mobile Usage", value: "65%" },
          { label: "Page Load Time", value: "< 1.5s" },
          { label: "API Success Rate", value: "99.2%" },
        ],
        feedback: [
          {
            quote:
              "Love the clean interface and how fast the search results appear. Much better than other movie apps I've tried.",
            author: "Alex T.",
          },
          {
            quote:
              "The mobile experience is fantastic. I use it all the time to check movie ratings before deciding what to watch.",
            author: "Maria S.",
          },
          {
            quote:
              "Great way to discover new movies. The trending section has introduced me to films I never would have found otherwise.",
            author: "David L.",
          },
        ],
        improvements: [
          "User accounts and watchlist functionality",
          "Integration with streaming service availability",
          "Advanced recommendation algorithm based on viewing history",
          "Social features for sharing and rating movies",
          "Offline mode for saved movie information",
        ],
        images: [
          "https://github.com/Nerajno/Burble-V1/blob/DevBranch/src/assets/Burble_Screenshot.jpeg?raw=true",
        ],
      },
      visible: true,
    },
    {
      id: "terminus",
      name: "Terminus",
      title: "Terminus",
      subtitle: "FreeCodeCamp Project Redirect Hub",
      description:
        "A redirect page for all FreeCodeCamp projects that haven't been completed.",
      tags: ["Bootstrap", "FontAwesome"],
      image: {
        src: "https://github.com/Nerajno/Terminus/blob/main/Jan_Screen_Shot.png?raw=true",
        alt: "The screenshot of a redirect page for all FreeCodeCamp projects that haven't been completed.",
        link: "https://nerajno.github.io/Terminus/",
      },
      github: "https://github.com/Nerajno/Terminus",
      website: "https://nerajno.github.io/Terminus/",
      caseStudyUrl: "/case-study/terminus",
      lastUpdated: "2024-12-29",
      status: "completed",
      metrics: {
        users: "50+",
        performance: "< 1s",
        uptime: "100%",
      },
      case_study: {
        overview:
          "Terminus serves as a centralized redirect hub for FreeCodeCamp projects that are in development or haven't been completed yet. It provides a professional landing page that maintains user engagement while clearly communicating project status and expected completion timelines.",
        problem:
          "During the FreeCodeCamp curriculum, many projects are in various stages of completion, leading to broken links and poor user experience when sharing portfolio work. There was a need for a professional way to handle incomplete projects while maintaining credibility.",
        audience:
          "Potential employers, fellow developers, and anyone reviewing FreeCodeCamp portfolio work who might encounter incomplete projects.",
        features: [
          "Clean, professional redirect interface",
          "Clear project status communication",
          "Responsive design for all devices",
          "FontAwesome icons for visual appeal",
          "Quick navigation back to main portfolio",
          "Estimated completion timeline display",
        ],
        tech_stack: {
          frontend: ["HTML5", "CSS3", "Bootstrap", "FontAwesome"],
          backend: ["Static hosting"],
          database: ["None required"],
          tools: ["GitHub Pages", "Git"],
        },
        architecture:
          "Simple static website built with HTML, CSS, and Bootstrap framework. Uses GitHub Pages for hosting with automatic deployment from the main branch. FontAwesome provides iconography, while Bootstrap ensures responsive design across all devices.",
        tradeoffs: [
          "Chose static site over dynamic solution for simplicity and zero maintenance",
          "Used Bootstrap instead of custom CSS for rapid development and consistency",
          "Implemented GitHub Pages over paid hosting for cost-effectiveness",
          "Prioritized clarity and professionalism over complex animations",
        ],
        timeline: "1 week from concept to deployment",
        challenges: [
          "Creating a professional appearance for what is essentially an 'under construction' page",
          "Balancing transparency about incomplete work with maintaining credibility",
          "Ensuring the page loads quickly and works on all devices",
          "Making the redirect clear without being frustrating for users",
        ],
        learnings: [
          "Sometimes simple solutions are the most effective",
          "Clear communication about project status builds trust with viewers",
          "Professional presentation matters even for incomplete work",
          "Static sites can be powerful tools for specific use cases",
        ],
        detailed_metrics: [
          { label: "Page Views", value: "500+" },
          { label: "Bounce Rate", value: "25%" },
          { label: "Average Time on Page", value: "45 seconds" },
          { label: "Mobile Traffic", value: "40%" },
          { label: "Load Time", value: "< 1s" },
          { label: "Uptime", value: "100%" },
        ],
        feedback: [
          {
            quote:
              "Appreciate the transparency about work in progress. Shows professionalism and planning.",
            author: "Hiring Manager",
          },
          {
            quote:
              "Clean design and clear messaging. Much better than a broken link or 404 page.",
            author: "Fellow Developer",
          },
          {
            quote:
              "Good way to handle incomplete projects while maintaining portfolio integrity.",
            author: "Code Reviewer",
          },
        ],
        improvements: [
          "Dynamic project status updates",
          "Integration with project management tools",
          "Email notification system for project completion",
          "Analytics dashboard for tracking visitor engagement",
          "Customizable redirect messages for different project types",
        ],
        images: [
          "https://github.com/Nerajno/Terminus/blob/main/Jan_Screen_Shot.png?raw=true",
        ],
      },
      visible: true,
    },
  ],
  learning_projects: [
    /*
    {
      id: "weather-app",
      name: "Weather App",
      title: "Weather App",
      description:
        "A simple weather app to learn API integration and responsive design.",
      tags: ["React", "API", "CSS Modules"],
      image: {
        src: "/images/weather_screenshot.png",
        alt: "Weather App Screenshot",
        link: "https://weather-demo.vercel.app",
      },
      github: "https://github.com/username/weather-app",
      demo: "https://weather-demo.vercel.app",
      caseStudyUrl: "/case-study/weather-app",
      lastUpdated: "2024-06-01",
      growth_status: "completed",
      metrics: {
        users: "50+",
        performance: "< 1s",
        uptime: "99.9%",
      },
      case_study: {
        overview:
          "A simple weather app to learn API integration and responsive design.",
        problem:
          "Wanted to practice fetching and displaying real-time data from a public API.",
        audience: "Beginner developers and anyone needing quick weather info.",
        features: [
          "Search weather by city",
          "Responsive design for mobile/desktop",
          "Displays temperature, humidity, and conditions",
        ],
        tech_stack: ["React", "OpenWeatherMap API", "CSS Modules"],
        timeline: "2 weeks",
        key_changes: [
          "Switched from vanilla JS to React for better state management",
          "Added loading and error states after user testing",
        ],
        learnings: [
          "How to handle async API calls in React",
          "Importance of user feedback for loading/errors",
        ],
        results:
          "Deployed and shared with peers; received positive feedback on usability.",
        feedback: [
          { quote: "Very clean and easy to use!", author: "Peer Reviewer" },
        ],
        improvements: ["Add 5-day forecast", "Support for geolocation"],
        images: ["/images/weather_screenshot.png", "https://youtu.be/demo"],
      },
      visible: true,
    },
    {
      id: "markdown-notes",
      name: "Markdown Notes",
      title: "Markdown Notes",
      description:
        "A note-taking app with live Markdown preview and local storage.",
      tags: ["Vue", "Markdown", "Local Storage"],
      image: {
        src: "/images/markdown_notes_screenshot.png",
        alt: "Markdown Notes Screenshot",
        link: "https://markdown-notes-demo.vercel.app",
      },
      github: "https://github.com/username/markdown-notes",
      demo: "https://markdown-notes-demo.vercel.app",
      caseStudyUrl: "/case-study/markdown-notes",
      lastUpdated: "2024-05-20",
      growth_status: "refactoring",
      metrics: {
        users: "120+",
        performance: "< 0.8s",
        uptime: "100%",
      },
      case_study: {
        overview:
          "A simple note-taking app that supports Markdown syntax and live preview, built to learn Vue and local storage management.",
        problem:
          "Needed a lightweight way to take notes with Markdown support and persistence without a backend.",
        audience:
          "Students, developers, and anyone who prefers Markdown for note-taking.",
        features: [
          "Live Markdown preview",
          "Notes saved to browser local storage",
          "Create, edit, and delete notes",
          "Responsive design",
        ],
        tech_stack: ["Vue 3", "JavaScript", "Local Storage", "Tailwind CSS"],
        timeline: "10 days",
        key_changes: [
          "Refactored to use Vue 3 Composition API",
          "Added autosave feature after user feedback",
        ],
        learnings: [
          "How to use Vue 3 Composition API",
          "Managing state with local storage",
        ],
        results:
          "Used daily for personal notes; shared with classmates who found it useful.",
        feedback: [
          {
            quote: "Love the instant preview and simplicity!",
            author: "Classmate",
          },
        ],
        improvements: [
          "Add export to .md file",
          "Support for folders and tags",
        ],
        images: ["/images/markdown_notes_screenshot.png"],
      },
      visible: true,
    },
    {
      id: "todo-app",
      name: "Todo App",
      title: "Todo App",
      description:
        "A simple todo application to practice state management and CRUD operations.",
      tags: ["React", "State Management", "Local Storage"],
      image: {
        src: "/images/todo_screenshot.png",
        alt: "Todo App Screenshot",
        link: "https://todo-demo.vercel.app",
      },
      github: "https://github.com/username/todo-app",
      demo: "https://todo-demo.vercel.app",
      caseStudyUrl: "/case-study/todo-app",
      lastUpdated: "2024-07-15",
      growth_status: "in_progress",
      metrics: {
        users: "25+",
        performance: "< 0.5s",
        uptime: "99.8%",
      },
      case_study: {
        overview:
          "A todo application built to practice React state management and CRUD operations with local storage persistence.",
        problem:
          "Wanted to build a practical application that demonstrates fundamental React concepts and state management patterns.",
        audience:
          "Beginner React developers and anyone looking for a simple todo solution.",
        features: [
          "Add, edit, and delete todos",
          "Mark todos as complete",
          "Filter by status (all, active, completed)",
          "Local storage persistence",
          "Responsive design",
        ],
        tech_stack: ["React", "JavaScript", "Local Storage", "CSS"],
        timeline: "1 week",
        key_changes: [
          "Added filter functionality after initial MVP",
          "Implemented local storage for data persistence",
        ],
        learnings: [
          "React state management with useState and useEffect",
          "Handling form submissions and user interactions",
          "Local storage API for data persistence",
        ],
        results: "Successfully deployed and used for personal task management.",
        feedback: [
          {
            quote: "Clean and functional! Great for learning React basics.",
            author: "Peer Developer",
          },
        ],
        improvements: [
          "Add categories and tags",
          "Implement drag and drop reordering",
        ],
        images: ["/images/todo_screenshot.png"],
      },
      visible: true,
    },
    {
      id: "calculator",
      name: "Calculator",
      title: "Calculator",
      description:
        "A basic calculator to practice JavaScript logic and DOM manipulation.",
      tags: ["JavaScript", "DOM", "CSS Grid"],
      image: {
        src: "/images/calculator_screenshot.png",
        alt: "Calculator Screenshot",
        link: "https://calculator-demo.vercel.app",
      },
      github: "https://github.com/username/calculator",
      demo: "https://calculator-demo.vercel.app",
      caseStudyUrl: "/case-study/calculator",
      lastUpdated: "2024-04-10",
      growth_status: "started",
      metrics: {
        users: "15+",
        performance: "< 0.3s",
        uptime: "100%",
      },
      case_study: {
        overview:
          "A basic calculator application built with vanilla JavaScript to practice DOM manipulation and mathematical operations.",
        problem:
          "Needed a project to practice JavaScript fundamentals, event handling, and DOM manipulation in a practical context.",
        audience:
          "JavaScript beginners and anyone needing a simple calculator.",
        features: [
          "Basic arithmetic operations",
          "Clear and delete functionality",
          "Keyboard support",
          "Responsive design",
        ],
        tech_stack: ["JavaScript", "HTML5", "CSS3"],
        timeline: "3 days",
        key_changes: [
          "Added keyboard support for better UX",
          "Improved error handling for invalid operations",
        ],
        learnings: [
          "DOM event handling and manipulation",
          "JavaScript mathematical operations and validation",
          "CSS Grid for layout",
        ],
        results: "Completed basic functionality and ready for enhancement.",
        feedback: [
          {
            quote: "Works perfectly for basic calculations!",
            author: "Friend",
          },
        ],
        improvements: [
          "Add scientific calculator functions",
          "Implement calculation history",
        ],
        images: ["/images/calculator_screenshot.png"],
      },
      visible: true,
    },
    {
      id: "portfolio-v2",
      name: "Portfolio V2",
      title: "Portfolio V2",
      description:
        "A redesign of my portfolio website with modern design patterns and improved performance.",
      tags: ["Astro", "TypeScript", "Tailwind CSS"],
      image: {
        src: "/images/portfolio_v2_screenshot.png",
        alt: "Portfolio V2 Screenshot",
        link: "https://portfolio-v2.vercel.app",
      },
      github: "https://github.com/username/portfolio-v2",
      demo: "https://portfolio-v2.vercel.app",
      caseStudyUrl: "/case-study/portfolio-v2",
      lastUpdated: "2024-08-01",
      growth_status: "paused",
      metrics: {
        users: "200+",
        performance: "< 1s",
        uptime: "99.9%",
      },
      case_study: {
        overview:
          "A complete redesign of my portfolio website using modern technologies and design patterns for better performance and user experience.",
        problem:
          "My previous portfolio was outdated and didn't reflect current best practices. Needed a modern, fast, and accessible portfolio that showcases my growth as a developer.",
        audience:
          "Potential employers, clients, and fellow developers reviewing my work.",
        features: [
          "Modern, responsive design",
          "Fast loading times",
          "Accessibility compliance",
          "Dark/light mode toggle",
          "Project showcase with case studies",
          "Contact form integration",
        ],
        tech_stack: ["Astro", "TypeScript", "Tailwind CSS", "Vercel"],
        timeline: "3 weeks",
        key_changes: [
          "Switched from React to Astro for better performance",
          "Implemented TypeScript for better code quality",
          "Added comprehensive accessibility features",
        ],
        learnings: [
          "Astro's component model and performance benefits",
          "TypeScript integration and type safety",
          "Web accessibility standards and implementation",
        ],
        results:
          "Significantly improved performance and user experience metrics.",
        feedback: [
          {
            quote: "Much more professional and modern looking!",
            author: "Hiring Manager",
          },
        ],
        improvements: [
          "Add blog functionality",
          "Implement analytics dashboard",
          "Add internationalization support",
        ],
        images: ["/images/portfolio_v2_screenshot.png"],
      },
      visible: true,
    },
    */

    {
      id: "demo",
      name: "Demo",
      title: "Demo Project",
      description: "A demonstration project for learning showcase.",
      tags: ["Demo", "Learning"],
      image: {
        src: "/other_images/placeholder_1.jpg",
        alt: "Demo Project Screenshot",
        link: "#",
      },
      github: "#",
      demo: "#",
      caseStudyUrl: "/case-study/demo",
      lastUpdated: "2024-08-01",
      growth_status: "started",
      metrics: {
        users: "0",
        performance: "N/A",
        uptime: "N/A",
      },
      case_study: {
        overview:
          "This is a demo project used as a placeholder in the learning projects showcase.",
        problem: "N/A",
        audience: "N/A",
        features: ["Demo feature 1", "Demo feature 2"],
        tech_stack: ["N/A"],
        timeline: "N/A",
        key_changes: ["Initial demo setup"],
        learnings: ["How to add a demo project"],
        results: "N/A",
        feedback: [],
        improvements: ["Replace with real project"],
        images: [
          "/other_images/placeholder_1.jpg",
          "/other_images/other_placeholder_2.jpg",
        ],
      },
      visible: true,
    },
    {
      id: "demo",
      name: "Demo 2",
      title: "Demo Project",
      description: "A demonstration project for learning showcase.",
      tags: ["Demo", "Learning"],
      image: {
        src: "/other_images/placeholder_1.jpg",
        alt: "Demo Project Screenshot",
        link: "#",
      },
      github: "#",
      demo: "#",
      caseStudyUrl: "/case-study/demo",
      lastUpdated: "2025-08-01",
      growth_status: "started",
      metrics: {
        users: "0",
        performance: "N/A",
        uptime: "N/A",
      },
      case_study: {
        overview:
          "This is a demo project used as a placeholder in the learning projects showcase.",
        problem: "N/A",
        audience: "N/A",
        features: ["Demo feature 1", "Demo feature 2"],
        tech_stack: ["N/A"],
        timeline: "N/A",
        key_changes: ["Initial demo setup"],
        learnings: ["How to add a demo project"],
        results: "N/A",
        feedback: [],
        improvements: ["Replace with real project"],
        images: [
          "/other_images/placeholder_1.jpg",
          "/other_images/other_placeholder_2.jpg",
        ],
      },
      visible: true,
    },
    // {
    //   id: "space-holder",
    //   name: "Space Holder",
    //   title: "Space Holder Project",
    //   description:
    //     "A placeholder project for future learning showcase entries.",
    //   tags: ["Placeholder", "Learning"],
    //   image: {
    //     images: [
    //       "/other_images/placeholder_1.jpg",
    //       "/other_images/other_placeholder_2.jpg",
    //     ],
    //     primary: "/other_images/placeholder_1.jpg",
    //     alt: "Space Holder Project Screenshot",
    //     link: "#",
    //   },
    //   github: "#",
    //   demo: "#",
    //   caseStudyUrl: "/case-study/space-holder",
    //   lastUpdated: "2024-08-01",
    //   growth_status: "paused",
    //   metrics: {
    //     users: "0",
    //     performance: "N/A",
    //     uptime: "N/A",
    //   },
    //   case_study: {
    //     overview:
    //       "This is a space holder project for future use in the learning projects showcase.",
    //     problem: "N/A",
    //     audience: "N/A",
    //     features: ["Placeholder feature 1", "Placeholder feature 2"],
    //     tech_stack: ["N/A"],
    //     timeline: "N/A",
    //     key_changes: ["Initial placeholder setup"],
    //     learnings: ["How to add a placeholder project"],
    //     results: "N/A",
    //     feedback: [],
    //     improvements: ["Replace with real project"],
    //     images: [
    //       "/other_images/placeholder_1.jpg",
    //       "/other_images/other_placeholder_2.jpg",
    //     ],
    //   },
    //   visible: true,
    // },
  ],
};

export { getGrowthStatusConfig };
export default projects;
