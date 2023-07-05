import '../styles/reset.scss'
import '../styles/index.scss'

import Accueil from "../pages/Accueil/Accueil";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

function App() {

  return (
    <div id="app">
      <Accueil />
      <Contact />
      <Footer />

    </div>
  )
}

export default App
