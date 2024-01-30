import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'
import '../App.css'
import '../Dark.css'
export default function Header({ darkMode, toggleDarkMode}) {

    return(
    <>
    
        <div className={`header ${darkMode ? 'darkmode' : ''}`}>
            <h1>Where in the world?</h1>
            <div className="theme" onClick={toggleDarkMode}> 
                <div>{darkMode ? <IoSunnyOutline/> : <IoMoonOutline />}</div>
                <p>{darkMode ? 'Light Mode' : 'Dark Mode'}</p>
            </div>
        </div>
    
        
    </>
)}