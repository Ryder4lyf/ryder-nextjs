import styles from "../../styles/onehive.module.css"
import Link from "next/link"

// to fetch api
export const getStaticProps = async () => {
    // name type api
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()

    // to use the data fetched
    // returns the data variable passed to onehive
    return { props: { onehive: data } }
}

// passing the props onehive here
const Onehive = ({ onehive }) => {
    return (
        <div>
            <h1>Welcome to OneHive DAO</h1>
            <h3>
                <p>Some of our highly esteemed members are below;</p>
            </h3>
            {onehive.map((onehive) => (
                // use div if you aren't using links, use link if you are using link href={'/' + }
                // links meaning giving each id a link page
                <Link href={"/onehive/" + onehive.id} key={onehive.id}>
                    <a className={styles.single}>
                        <strong>{onehive.name}</strong>
                    </a>
                </Link>
            ))}
            <br />
            <p>
                <h2>
                    A community of brilliant minds, ranging from Traders to Technical analysts to
                    UI/UX Engineers to Fullstack Blockchain Developers to Front End Developers!
                </h2>
            </p>
            <p>Name it all, we got exactly what you need in our community!!!</p>
            <p>
                Join us now at a decent price of <strong>$1000 per month</strong> and see yourself
                successful before ASUU strike!
            </p>
            <br />
            <p>
                <em>Na who sabi dey make money ooo!!!</em>
            </p>
            <p>
                <em>You snooze you loose!</em>
            </p>
        </div>
    )
}

export default Onehive
