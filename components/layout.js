import Head from "next/head"
import Header from "./header"
import Footer from "./footer"

const Layout = ({children, title = '', description = ''}) => {
  return (
    <>
        <Head>
            <title>{`GuitarLA - ${title}`}</title>
            <meta name="description" content={description}/>
            {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
            {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> */}
            {/* <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" rel="stylesheet" /> */}
            <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"/>
        </Head>
        <Header />
        {children}
        <Footer />
    </>
  )
}

export default Layout