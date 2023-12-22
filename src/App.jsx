import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Education, Hero, Navbar, Skills, Projects,} from "./components";
const App = () => {
  

  return (
    <BrowserRouter>
    <div className='relative z-0 bg-primary'>
        <Navbar />
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Hero />
      </div>
      <About />
      <Skills />
      <Projects />
      {/* <Education /> */}
      <Contact />

    </div>
  </BrowserRouter>
  )
}

export default App
