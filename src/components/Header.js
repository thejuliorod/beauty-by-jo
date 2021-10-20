import { Link } from "react-router-dom"
import { useState } from "react"
import Logo from "../assets/images/logo.jpg"

import AppointmentModal from "./AppointmentModal"
import { IoIosLogIn } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
// import DatePicker from 'react-date-picker'

export default function Header() {

    const [modalOpen, setModalOpen] = useState(false)
    const [service, setService] = useState("Choose a service")
     
     return (
       <>
            <div className="header">
                 <div className="header-container">
                      <Link to="/calendar">
                           <button onClick={() => setModalOpen(true)}>
                                Schedule an appointment
                           </button>
                      </Link>

                      <img src={Logo}/>
                      <button>Contact Us</button>
                 </div> 
                 {modalOpen && <AppointmentModal label="Pick a service to schedule your appointment" onClose={() => setModalOpen(false)} />} 
                 {/* when modalOpen is true it will render the Modal component             */}
            </div>
        </> 
    )

}