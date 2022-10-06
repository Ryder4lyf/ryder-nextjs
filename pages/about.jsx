import Head from "next/head"

const About = () => {
    return (
        <>
            {/* Creating a title for this specific page */}
            <Head>
                <title>Ryder's Homepage | About Me</title>
                <meta name="keywords" content="Ryder" />
            </Head>
            <div>
                <h1>About me</h1>
                <p>
                    <h3>Hello there!</h3>
                </p>
                <p>
                    <h4>I am Kingsley Okudah aka Ryder</h4>
                </p>
                <p>I am a Fullstack Blockchain Developer with experience of 6months plus.</p>
                <p>
                    My programming skills are solidity, hardhat, node.js and ethers.js for the back
                    end development while next.js and react.js for the front end development
                </p>
                <p>My abilities are adept and I am dedicated to research!</p>
            </div>
        </>
    )
}

export default About
