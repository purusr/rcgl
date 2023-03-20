import Pho01 from './Images/fb.png'
import Pho02 from './Images/insta.png'
import Pho03 from './Images/twitter.png'



const footer = () => {
    return (
        <footer>
            <div><p className='has-text-centered'>
                <p><h3> pro gallery on web by ......</h3>published: March 15,2023</p>
                <p>&copy; 2023 My Website. All rights reserved.</p></p>
                <a href='/' className='is-flex is-flex-direction-row is-justify-content-center'>
                    <img alt="footer1" className='image is-64x64' src={Pho01}></img>
                    <img alt="footer2" className='image is-64x64' src={Pho02}></img>
                    <img alt="footer3" className='image is-64x64' src={Pho03}></img></a>
            </div>
        </footer>
    )
}

export default footer;