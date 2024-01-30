
import '../App.css'
import '../Dark.css'
import { IoSearch } from "react-icons/io5";
export default function Search({darkMode}) {

    return(
    <>
    <div className={`input ${darkMode ? 'darkmode' : ''}`}>
    <IoSearch className='search-icon'/> <input type='text' placeholder='Search for a country'/>
    </div>
   
        
    </>
)}