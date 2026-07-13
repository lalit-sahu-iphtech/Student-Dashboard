import {Link} from "react-router-dom"
export default function Sidebar(){
    return(
        <aside>
            <h3>Dashboard</h3>

            {/* <Link to="/dashboard">Students</Link> */}
            <h3>Students</h3>
            <h3>Classes</h3>
            <h3>Sessions</h3>
            <h3>Tutors</h3>
            <h3>Attendance</h3>
            <h3>Reports</h3>
            <h3>Settings</h3>
        </aside>
    )
}