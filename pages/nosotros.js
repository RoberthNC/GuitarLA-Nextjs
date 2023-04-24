import Image from "next/image"
import Layout from "../components/layout"
import styles from "../styles/nosotros.module.css"

const Nosotros = () => {
  return (
    <Layout
      title="Nosotros"
      description="Sobre nosotros, guitarLA, tienda de música"
    >
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>

        <div className={styles.contenido}>
          <Image alt="Imagen sobre nosotros" src="/img/nosotros.jpg" width={1000} height={800}/>
          <div>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
            </p>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
            </p>
          </div>
        </div>
      </main>
    </Layout>

  )
}

export default Nosotros