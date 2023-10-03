import { CardCustom } from "../components/CardCustom"
import { CarouselNav } from "../components/CarouselNav"
import { Footer } from '../components/Footer'
import { TarjetaServicios } from "../components/TarjetaServicios"

export const Home = () => {
  return (
    <>
      <CarouselNav/>
      <CardCustom/>
      <TarjetaServicios/>
      <Footer/>
    </>
  )
}
