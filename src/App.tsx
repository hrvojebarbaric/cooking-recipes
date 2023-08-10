import { Route, Routes } from "react-router-dom"
import CreateRecipe from "./pages/CreateRecipe/CreateRecipe"
import Home from "./pages/Home/Home"
import RecipeDetails from "./pages/RecipeDetails/RecipeDetails"
import Register from "./pages/Register/Register"
import Login from "./pages/Login/Login"
import Layout from "./components/Layout/Layout"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"
import { GlobalStyle } from "./global.styles"

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/recipes/create" element={<ProtectedRoute><CreateRecipe /></ProtectedRoute>} />
          <Route path="/recipes/:id" element={<ProtectedRoute><RecipeDetails /></ProtectedRoute>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
