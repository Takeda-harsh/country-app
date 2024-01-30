import '../App.css'
import '../Dark.css'
export default function Country({darkMode}) {

    return(
    <>
        <div className={`c-component ${darkMode ? 'darkmode' : ''}`}>
            <div className='flag'>

            </div>
            <div className='details'>
               <h4>United States of America</h4> 
               <p><span>Population:</span> 323,947,000</p>
               <p><span>Capital:</span> Washington DC</p>
               <p><span>Region:</span> 323,947,000</p>
            </div>
        </div>
    </>
)}