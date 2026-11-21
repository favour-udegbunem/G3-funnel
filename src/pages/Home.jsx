
import Hero from '../components/Hero'
import Problem from '../components/Problem'
import Transformation from '../components/Transformation'
import Curriculum from '../components/Curriculum'
import WhyG3 from '../components/WhyG3'
import Included from '../components/Included'
import Audience from '../components/Audience'
import Programmes from '../components/Programmes'
import Trainer from '../components/Trainer'
import Gallery from '../components/Gallery'
import VideoTestimonial from "../components/VideoTestimonial"
import FAQ from "../components/FAQ"
import G3CallToAction from "../components/G3CallToAction"
import RegistrationForm from "../components/RegistrationForm"
import Footer from "../components/Footer"

function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Transformation />
      <Curriculum />
      <WhyG3 />
      <Included />
      <Audience />
      <Programmes />
      <Trainer />
      <Gallery />
      <VideoTestimonial />
      <FAQ />
      <G3CallToAction />
      <RegistrationForm />
      <Footer />
    </main>
  )
}

export default Home