import './App.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify"
import axios from 'axios';

const Main = () => {
    const navigate = useNavigate()
    const [imagedata, setImagedata] = useState()
    const [failed, setFailed] = useState(false)
    const [count, setCount] = useState(0)
    const user = localStorage.getItem("profile")

    // if(!user){
    //   navigate('/signin')
    // }

    useEffect(() => {
        axios.get("http://localhost:5000/getGallery")
            .then((res) => setImagedata(res.data))
            .catch((error) => setFailed(true))
    },[count])

    const handleLikes = (e,id) =>{
        e.preventDefault()
        if(!user){
            toast.warn("Please login to like or comment")
            return;
        }else{
          axios.post(`http://localhost:5000/updateLikes/${id}`).then((res)=>{
            toast.success('Liked')
            setCount(count+1)
          }).catch((error)=>{
            toast.info('Something went wrong')
          })
        }
    }


    const handleComment = (id)=>{
        navigate(`/comments/${id}`)
    }
    return (
        <div className='container'>
            <ToastContainer/>
            {imagedata ?
                <div className='is-flex is-flex-wrap-wrap is-justify-content-space-evenly'>
                      {imagedata.map((idata) =>{
                        return(
                        <div className='items'>
                            <img className='image' src={idata.image_url} alt="product"></img>
                            <div className='caption is-flex is-flex-direction-row is-justify-content-space-between'>
                                <button onClick={(e) =>handleLikes(e,idata._id)} className='button is-link'><i class="fa-solid fa-thumbs-up fa-2x"></i>{idata.likes}</button>
                                <button onClick={() =>handleComment(idata._id)} className='button is-link'><i class="fa-solid fa-comments fa-2x"></i></button>
                            </div>
                        </div>
                        );
                      })}


                </div>
                :
                <h3 className='is-size-3 has-text-centered'>Loading.....</h3>
            }
            {
                failed &&
                <h3 className='is-size-3 has-text-centered'>Please try again later.....</h3>
            }
        </div>
    )
}

export default Main;