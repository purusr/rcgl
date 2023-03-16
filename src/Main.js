import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Main = () => {

    const [imagedata, setImagedata] = useState()
    const [failed, setFailed] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:5000/getGallery")
            .then((res) => setImagedata(res.data))
            .catch((error) => setFailed(true))
    },[])
    return (
        <div className='container'>
            {imagedata ?
                <div className='is-flex is-flex-wrap-wrap is-justify-content-space-evenly'>
                      {imagedata.map((idata) =>{
                        return(
                        <div className='items'>
                            <img className='image' src={idata.image_url} alt="product-image"></img>
                            <div className='caption is-flex is-flex-direction-row is-justify-content-space-between'>
                                <button>L</button>
                                <button>C</button>
                            </div>
                        </div>
                        );
                      })}


                </div>
                :
                <h3 className='is-size-3 has-text-centered'>Loading.....</h3>
            }
        </div>
    )
}

export default Main;