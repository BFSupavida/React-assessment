import Navbar from "./Navbar";

const Layout = ({children}) => {
    return (
        <div className="flex flex-col bg-[#E8E8E8]">
            <Navbar />
            {children}
        </div>
    )
};

export default Layout