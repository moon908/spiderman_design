import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Game from './components/Game'
import Villans from './components/Villans'
import Footer from './components/Footer'

const App = () => {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Game />
      <Villans />
      <Footer />
    </main>
  )
}

export default App