import Navbar from './../shared/Navbar';
import Footer from './../shared/Footer';

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

