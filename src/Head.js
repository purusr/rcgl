import './App.css';
import img0 from './Images/IMG03.png';
import img1 from './Images/IMG04.png'

const Head = () => {
    return (
        <header className='paint'>
    <div className='notification is-flex is-flex-direction-row is-justify-content-space-between' style={{backgroundColor:'transparent'}}>
        <img className='image is-64x64' style={{marginTop:'14px'}} src={img0} alt='pic of camera in hand'></img>
        <p className='is-size-1 mt-1 is-italic is-family-monospace'>My Gallery</p>
          <img className='image is-64x64 mt-3' src={img1} alt='pic of user'></img>
    </div>
        </header>

    )

}
export default Head;