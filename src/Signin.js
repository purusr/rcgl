import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Signin = () =>{
const navigate = useNavigate()
const [email, setEmail] = useState()
const [password, setPassword] = useState()


const handleSubmit = (e)=>{
    e.preventDefault()
    if (!email | !password){
        toast.error("Please fill all fields.")
        return;
    }else{
        axios.post('http://localhost:5000/user/signin',{email:email, password:password})
        .then((res) =>{
            toast.success('Signin success')
            localStorage.setItem("profile",JSON.stringify(res.data))
            console.log(res.data)
            setEmail("")
            setPassword("")
            setTimeout(()=>{
                navigate('/')
            },2000)
        }).catch((error) => {
            toast.error(error.response.data.message)
            console.log(error)})
    }
}
    return(
        <div style={{width: '500px', height: '70vh', marginTop:"50px"}} className="mx-auto px-2">
            <ToastContainer/>
            <form className="control">
                <div className="field">
                <div className="control mt-3">
                <input onChange={(e) =>setEmail(e.target.value)}  className="input is-info" type="text" value={email}  placeholder="Email"></input>
                </div>
                <div className="control mt-3">
                <input onChange={(e) =>setPassword(e.target.value)} className="input is-info" type="text" value={password}  placeholder="Password"></input>
                </div>
                </div>
                <div className="has-text-centered">
                <button onClick={(e) =>handleSubmit(e)} className="button is-primary is-centered">Signin</button>
                </div> 
                <p className="has-text-centered">If you are new please <a href="/signup">signup</a>.</p>
            </form>
        </div>
    )
}

export default Signin