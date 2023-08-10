import { Link } from "react-router-dom"
import User from "../User/User"
import { RecipesCardProps } from "./RecipesCard.types"
import { forwardRef } from "react"
import { RecipesCardStyled } from "./RecipesCard.styles"

const RecipesCard = forwardRef((props: RecipesCardProps, ref) => {
    const { recipe: {dateCreated, id, title, authorId, tags}, myRef } = props
    
    return (
        <RecipesCardStyled>
            <div>
                <span>Created: </span> 
                <label>{dateCreated}</label>
            </div>
            <h2><Link to={`/recipes/${id}`}>{title}</Link></h2>
            <User id={authorId} />
            <div ref={myRef}>
                <span>Tags: </span>
                {
                    tags.map((tag, key) => key === 0 ? <label key={key}>{tag}</label> : <label key={key}>, {tag}</label>)
                }
            </div>
        </RecipesCardStyled>
    )
})

export default RecipesCard