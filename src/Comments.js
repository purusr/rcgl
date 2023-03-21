
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Comments = () =>{
    const {id} = useParams()
    const [oneimage, setOneImage] = useState()
    const [usercomment, setUsercomment] = useState('')

    const user = localStorage.getItem('profile')
    const actualuser = JSON.parse(user)
    console.log(actualuser)

    useEffect(()=>{
        axios.get(`http://localhost:5000/getComment/${id}`)
        .then((res) => setOneImage(res.data))
        .catch((error) =>{
            console.log(error)

        })
    },[id])

    const handleComment =(e)=>{
    e.preventDefault()
    if(!user){
        toast.warn('Please login to comment')
    }else if(usercomment===''| !usercomment){
        toast.info('Comment cannot be empty')
    }else{
        axios.post(`http://localhost:5000/updateComments/${id}`,{userid:actualuser.result._id,comment: usercomment})
        .then((res) => {
            setUsercomment('')
            toast.success('Commented')})
        .catch((error) =>toast('Something went wrong'))
    }
    }
    console.log(oneimage)
    return(
        <>
        <div style={{width: '500px', height: '70vh', marginTop:"50px"}} className="mx-auto px-2">
        {oneimage &&
        <div>
            <img alt='comment-img' src={oneimage.image_url}></img>
        </div>
        } 
        </div>
        {oneimage ?
        <div>
            <ToastContainer/>
            <form>
                <div style={{width: '600px', paddingBottom:'10px'}}>
                <input onChange={(e) =>setUsercomment(e.target.value)} value={usercomment} className='input' placeholder='type your comments here'></input>
                </div>
                <button onClick={(e) => handleComment(e)} className='button is-link'>Submit</button>
            </form>
            <h1 className='is-size-2 has-text-left'>Comments</h1>
            <hr></hr>
            <div>
                <p className='is-size-5'></p>
                <hr></hr>
            </div>
            {oneimage && oneimage.comments.map((cmntdata) =>
              <div className='row text-start'>
                <p className='is-size-5 has-text-weight-bold'>{cmntdata.username}</p>
                <p> - {cmntdata.comment}</p>
                <hr />
              </div>
            )}
        </div> :
        <div>
        <h2>Loading.....</h2>
        </div>
}
        </>
    )
}


export default Comments;