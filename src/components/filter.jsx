import '../App.css'
import '../Dark.css'
import { FaAngleDown } from "react-icons/fa";
export default function Filter({darkMode}) {

    return(
    <>
        <div className='filter'>
                <p>Filter by Region</p>
                <FaAngleDown className='menu'/>
        </div>
        <div className='filter-menu'>
                <li>Africa</li>
                <li>America</li>
                <li>Asia</li>
                <li>Europe</li>
                <li>Oceania</li>
                
        </div>
    </>
)}