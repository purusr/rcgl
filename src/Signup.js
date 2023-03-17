
import {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

const Signup = () =>{

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const handleSubmit = (e) =>{
     e.preventDefault()
     if(!firstname | !lastname | !email | !password | !password2){
      toast.error("All fields are required")
     }else{
       axios.post('http://localhost:5000/user/signup',
       {email: email,password:password,confirmPassword:password2,firstName:firstname, lastName:lastname } )
       .then((res) => {
        toast("Signup success")
        console.log(res)})
        .catch((error)=>{
            console.log(error)
            toast(error.response.data.message)
        })
     }
    }
    return(
        <div style={{width: '500px'}} className="mx-auto px-2">
            <ToastContainer/>
            <form className="control">
                <div className="field">
                <div className="control mt-3">
                <input onChange={(e) =>setFirstname(e.target.value)}  className="input is-info" type="text" value={firstname}  placeholder="First name"></input>
                </div>
                <div className="control mt-3">
                <input onChange={(e) =>setLastname(e.target.value)} className="input is-info" type="text" value={lastname}  placeholder="Last name"></input>
                </div>
                <div className="control mt-3">
                <input onChange={(e) =>setEmail(e.target.value)}  className="input is-info" type="text" value={email}   placeholder="E-mail"></input>
                </div>
                
                <div className="control mt-3">
                <input onChange={(e) =>setPassword(e.target.value)} className="input is-info" type="text" value={password}  placeholder="Password"></input>
                </div>
                
                <div className="control mt-3">
                <input onChange={(e) =>setPassword2(e.target.value)} className="input is-info" type="text" value={password2}  placeholder="Confirm password"></input>
                </div>
                
                </div>
                <div className="has-text-centered">
                <button onClick={(e) =>handleSubmit(e)} className="button is-primary is-centered">Signup</button>
                </div>
                
                
            </form>
        </div>
    )
}

export default Signup