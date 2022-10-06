import Layout from "../components/layout"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
    return (
        // wrapping the pageProps with the layout
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
