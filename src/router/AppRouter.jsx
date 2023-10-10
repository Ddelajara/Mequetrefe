import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Login } from "../components/Login"
import { MenuNav } from "../components/MenuNav"
import { Registrate } from "../components/Registrate"
import { Onboarding } from "../pages/Onboarding"
import { ListaProductos } from "../pages/ListaProductos"
import { PagoOk } from "../pages/PagoOk"
import { Transito } from "../pages/Transito"

export const AppRouter = () => {
  return (
    <>
       <MenuNav/>

       <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Login' element={<Login />}/>
            <Route path='/Registrate' element={<Registrate />}/>
            <Route path='/Onboarding' element={<Onboarding />}/>
            <Route path='/ListaProductos' element={<ListaProductos />}/>
            <Route path='/PagoOK' element={<PagoOk />}/>
            <Route path='/Transito' element={<Transito />}/>
        </Routes>

    </>
  )
}
