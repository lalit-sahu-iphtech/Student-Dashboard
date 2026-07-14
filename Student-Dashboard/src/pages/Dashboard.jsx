import { Outlet } from "react-router-dom";
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Dashboard(){

    return(
        <div className="main-content-dashboard">
            {/* <Header/> */}
           
            <Navbar/>
            <div className="dashboard-container">
                <Sidebar/>
                <main>
                <Outlet/>
                </main>               
            </div>
            <Footer/>

            
        </div>
    )
}