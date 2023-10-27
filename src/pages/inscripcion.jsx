import { Header } from '../components/header'
import { InscripcionNavbar } from '../components/InscripcionNavbar'
import { Footer } from '../components/footer'
import styles from './inscripcion.module.css'
import { useSectionInscripcion } from '../hooks/useSectionInscripcion'

export function Inscripcion () {
  const { CurrentSection, changeSection, section } = useSectionInscripcion()
  return (
    <>
      <Header />
      <main className={styles.mainInscripcion}>
        <InscripcionNavbar sectionHandler={changeSection} section={section} />
        <div className={styles.currentContainerInscripcion}>
          <CurrentSection />
        </div>
      </main>
      <Footer />
    </>
  )
}
