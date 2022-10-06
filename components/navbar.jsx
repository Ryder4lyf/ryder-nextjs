// importing the link component that allows us to use links for our navigation bar, after that we surround the anchor tags with the links
import Link from "next/link"
// importing the link component that allows us to use Image with strictly width,height or layout=fill
import Image from "next/image"
const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                {/* <h1>Ryder's Page</h1> */}
                <Image src="/ryder.jpg" width={128} height={100} />
            </div>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About me</a>
            </Link>
            <Link href="/contact-me">
                <a>Contact me</a>
            </Link>
        </nav>
    )
}

export default Navbar
