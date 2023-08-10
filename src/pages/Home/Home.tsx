import { useQuery } from "@tanstack/react-query"
import { getAllRecipes } from "../../api/recipe"
import { Recipe } from "../../global.types"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import RecipesCard from "../../components/RecipesCard/RecipesCard"
import { HomeStyled } from "./Home.styles"
import Loader from "../../components/Loader/Loader"
import { useAuth } from "../../context/AuthContext"

const Home = () => {
    const RECIPES_PER_PAGE = 5;
    
    const [recipesNumber, setRecipesNumber] = useState(RECIPES_PER_PAGE)
    const [filterFunction, setFilterFunction] = useState('title')
    const [query, setQuery] = useState<string>('')
    const { user } = useAuth()

    const { ref, inView } = useInView()

    const recipesQuery = useQuery({
        queryKey: ['recipes'],
        queryFn: () => getAllRecipes(),
    })

    useEffect(() => {
        inView && setRecipesNumber(recipesNumber => recipesNumber + RECIPES_PER_PAGE)
    }, [inView])

    if (recipesQuery.isLoading) return <Loader />
    if (recipesQuery.isError) return <div>Something went wrong. Please contact your administrator.</div>

    const searchByTitle = (recipe: Recipe) => recipe.title.toLowerCase().includes(query.toLowerCase())

    const searchByTags = (recipe: Recipe) => {
        const filteredResipe = recipe.tags.filter(tag => tag.toLowerCase().includes(query.toLowerCase()))
        return filteredResipe.length !== 0 && filteredResipe
    }

    const searchByUser = (recipe: Recipe) => recipe.authorId.includes(user.id)

    const renderRecipes = recipesQuery.data.recipes
        .slice(0, recipesNumber)
        .filter(
            (filterFunction === 'title' && searchByTitle) || 
            (filterFunction === 'tags' && searchByTags) || 
            (filterFunction === 'user' && searchByUser)
        )
        .map((recipe: Recipe, key: number) => (
            <RecipesCard key={key} myRef={ref} recipe={recipe} />
        ))

    return (
        <HomeStyled>
            <h1>Dashboard</h1>
            <div className="search-bar">
                <label>Search by {filterFunction}: </label>
                {filterFunction !== 'user' && <input type="search" onChange={e => setQuery(e.target.value)} />}
                <select className="dropdown" onChange={(e) => setFilterFunction(e.target.value)} name="searchBy">
                    <option value="title">Title</option>
                    <option value="user">User</option>
                    <option value="tags">Tags</option>                    
                </select>
            </div>
            <div className="recipes-list">{renderRecipes}</div>
        </HomeStyled>
    )
}

export default Home