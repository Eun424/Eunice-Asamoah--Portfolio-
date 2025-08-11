import {Outlet} from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
const RootLayout = () => {
    return (
        <div className="flex flex-col min-h-0.5-screen">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
};

export default RootLayout;