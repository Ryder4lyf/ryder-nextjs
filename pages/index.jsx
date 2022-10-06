import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import styles from "../styles/Home.module.css"

export default function Home() {
    return (
        // using fragments <> </> because we can't return 2 root components here...that is, the Head and the div
        <>
            {/* Creating a title for this specific page */}
            <Head>
                <title>Ryder's Homepage | Home</title>
                <meta name="keywords" content="Ryder" />
            </Head>
            <div>
                {/* using the class name title to import the .title from the styles from "../styles/Home.module.css" */}
                <h1 className={styles.title}>Welcome To My Homepage!</h1>
                <p className={styles.text}>Finally Building Greatness!!!</p>
                <p className={styles.text}>It feels too good to be true!</p>
                <p className={styles.text}>I feel like I'm on top of the world!</p>
                <Link href="/onehive/onehive">
                    <a className={styles.btn}>My Community </a>
                </Link>
            </div>
        </>
    )
}
