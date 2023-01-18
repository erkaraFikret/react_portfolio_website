import React from 'react'
import Card from '../../components/Card'

function Project({ project }) {
    return (
        <Card className="portfolio_project">
            <div className="portfolio_project_image">
                <img src={project.image} alt={project.category} />
            </div>
            <h4>{project.title}</h4>
            <p>{project.desc}</p>
            <div className="portfolio_project-cta">
                <a href={project.demo} className="btn sm" target="_blank" rel='noopener noreferrer'>Demo</a>
                <a href={project.demo} className="btn sm primary" target="_blank" rel='noopener noreferrer'>Github</a>
            </div>
        </Card>
    )
}

export default Project