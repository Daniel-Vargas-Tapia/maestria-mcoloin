import { Header } from './components/header'
import { Navbar } from './components/navbar'
import { Footer } from './components/footer'
import { useSection } from './hooks/useSection'

function App () {
  const { CurrentSection, changeSection, section } = useSection()
  return (
    <>
      <Header />
      <main>
        <Navbar sectionHandler={changeSection} section={section} />
        <div className='currentContainer'>
          <CurrentSection />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
