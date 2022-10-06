// custom 404 page incase a directed page doesn't exist
import Link from "next/link"
// importing useEffect and useRouter to redirect users to homepage after a certain amount of time is reached
import { useEffect } from "react"
import { useRouter } from "next/router"
import Head from "next/head"

const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
        // setting the timeout as 5000millisecs or 5 secs
        setTimeout(() => {
            // router.go(-1) // to redirect to a page before current page
            router.push("/") // automatically redirects to the homepage after 5secs
        }, 5000)
    }, [])
    return (
        <>
            {/* Creating a title for this specific page */}
            <Head>
                <title>Ryder's Homepage | Home</title>
                <meta name="keywords" content="Ryder" />
            </Head>
            <div className="not-found">
                <h1>Oooops</h1>
                <h2>That page cannot be found.</h2>
                {/* Link back to the homepage */}
                <p>
                    Go back to the{" "}
                    <Link href="./index">
                        <a>Homepage</a>
                    </Link>
                </p>
            </div>
        </>
    )
}

export default NotFound
