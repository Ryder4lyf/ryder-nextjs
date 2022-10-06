// square bracket naming of this file tells nextjs that it is going to be changeable

// gets pages and routes of all our members for their respective details page
export const getStaticPaths = async () => {
    // fetching the data
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()

    const paths = data.map((onehive) => {
        return {
            params: { id: onehive.id.toString() },
        }
    })

    return {
        // the paths reurns the number of html pages created for each members
        paths: paths,
        fallback: false, // shows false if the user tries to visit a page with an id that doesn't exist
    }
}

// context from getStaticProps returns 10 different details for our ids
export const getStaticProps = async (context) => {
    const id = context.params.id
    // fetch request for each id
    const res = await fetch("https://jsonplaceholder.typicode.com/users" + id)
    const data = await res.json()

    return {
        props: { onehive: data },
    }
}

const Details = ({ onehive }) => {
    return (
        <div>
            <h1>{onehive.name}</h1>
            <p>{onehive.email}</p>
            <p>{onehive.website}</p>
            <p>{onehive.address}</p>
        </div>
    )
}

export default Details
