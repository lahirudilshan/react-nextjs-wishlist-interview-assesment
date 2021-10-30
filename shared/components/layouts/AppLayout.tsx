import Footer from "../Footer";
import Navbar from "../Navbar";


const AppLayout = ({ children }: { children: any }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

export default AppLayout;

