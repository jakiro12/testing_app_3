import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Headboard from "./components/Headboard/Headboard"
import OurProducts from "./components/OurProjects/OurProjects"
import Team from "./components/Team/Team"
import OurServices from "./components/OurServices/OurServices"
import Advantages from "./components/Advantages/Advantages"

function Home() {
  return (
    <div className="overflow-hidden">
      <Headboard />
      <OurServices />
      <Advantages />
      <Team />
      <OurProducts />
      <Contact />
      <Footer />
    </div>
  )
}
export default Home