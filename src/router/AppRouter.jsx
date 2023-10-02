import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Login } from "../components/Login"
import { MenuNav } from "../components/MenuNav"
import { Registrate } from "../components/Registrate"

export const AppRouter = () => {
  return (
    <>
       <MenuNav/>

       <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Login' element={<Login />}/>
            <Route path='/Registrate' element={<Registrate />}/>
        </Routes>

    </>
  )
}
