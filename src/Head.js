import './App.css';
import img0 from './Images/IMG03.png';
import img1 from './Images/IMG04.png'
import { useState } from 'react';


const Head = () => {
    const [status, setStatus] = useState(true)
    const user = localStorage.getItem("profile")

    setInterval(() => {
        user ? setStatus(false) : setStatus(true)
    }, 1000);

    const handleSignout = (e) =>{
        e.preventDefault()
     localStorage.removeItem("profile")
    }
    return (
        <header className='paint'>
    <div className='notification is-flex is-flex-direction-row is-justify-content-space-between' style={{backgroundColor:'transparent'}}>
        <img className='image is-64x64' style={{marginTop:'14px'}} src={img0} alt='pic of camera in hand'></img>
        <p className='is-size-1 mt-1 is-italic is-family-monospace'>My Gallery</p>
          <div className='has-text-centered'>
          <img className='image is-64x64 mt-3' src={img1} alt='pic of user'></img>
          
          { status ?
            <button className='button is-link is-small'><a href='/signin' style={{ textDecoration: 'none'}}>Signin</a></button>
            :
            <button onClick={(e) =>handleSignout(e)} className='button is-link is-small'>Signout</button>
          }
          </div>
    </div>
        </header>

    )

}
export default Head;