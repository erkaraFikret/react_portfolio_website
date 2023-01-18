import './portfolio.css'
import ProjectsCategories from './ProjectsCategories'
import Projects from './Projects'
import data from './data'
import { useState } from 'react'

function Portfolio() {
    const [projects, setProjects] = useState(data)

    const categories = data.map(item => item.category);
    const uniqueCategories = ["all", ...new Set(categories)];

    const filterProjectsHandler = (category) => {
        if (category === "all") {
            setProjects(data);
            return;
        }
        const filterProjects = data.filter(project => project.category === category)
        setProjects(filterProjects)
    }

    return (
        <section id='portfolio'>
            <h2>Recent Projects</h2>
            <p>Check out some of the projects I recently worked on for my clients.
                Use the buttons to toggle the different categiroes.
            </p>
            <div className="container portfolio_container">
                <ProjectsCategories categories={uniqueCategories} onFilterProject={filterProjectsHandler} />
                <Projects projects={projects} />
            </div>
        </section>
    )
}

export default Portfolio