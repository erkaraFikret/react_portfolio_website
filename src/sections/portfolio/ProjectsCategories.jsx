import { useState } from 'react'
import CategoryButton from './CategoryButton'

function ProjectsCategories({ categories, onFilterProject }) {
    const [activeCategory, setActiveCategory] = useState('all')

    const changeCategoryHandler = (activeCat) => {
        setActiveCategory(activeCat)
        onFilterProject(activeCat)
    }
    return (
        <div className='portfolio_categories'>
            {categories.map(category => (
                <CategoryButton key={category} category={category}
                    onChangeCategory={() => changeCategoryHandler(category)}
                    className={`btn cat__btn ${activeCategory === category ? 'primary' : 'white'}`} />
            ))}
        </div>
    )
}

export default ProjectsCategories