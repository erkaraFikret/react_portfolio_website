import Project from "./Project"

function Projects({ projects }) {
    return (
        <div className="portfolio_projects">
            {
                projects.map(project => (
                    <Project key={project.id} project={project} />
                ))
            }
        </div>
    )
}

export default Projects