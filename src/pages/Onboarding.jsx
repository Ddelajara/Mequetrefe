import { CardProduct } from "../components/CardProduct"
import { CardWelcomeLogin } from "../components/CardWelcomeLogin"
import { Footer } from '../components/Footer'
import Container from 'react-bootstrap/Container';


export const Onboarding = () => {
  return (
      <Container >
        <CardWelcomeLogin/>
        <Footer/>
      </Container>
  )
}
