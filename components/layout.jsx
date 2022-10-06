import Footer from "./footer"
import Navbar from "./navbar"

// the children means anything inside the layout component in the "./_app.jsx" ..which is component
// meaning that we want the layout of all out page to have a navbar and footer by surronding our component with Layout
const Layout = ({ children }) => {
    return (
        <div className="content">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
