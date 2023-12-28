import './App.css'
import Articles from './components/Articles'
import Footer from './components/Footer'
import Jumbotron from './components/Jumbotron'
import Navbar from './components/Navbar'
import Quotes from './components/Quotes'

function App() {

  return (
    <>
      <Navbar />
      <div className="container m-auto py-10">
        <Jumbotron />
        <Articles />
      </div>
      <Quotes />
      <Footer />
    </>
  )
}

export default App
