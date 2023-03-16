


const Signup = () =>{
    return(
        <div style={{width: '500px'}} className="mx-auto px-2">
            <form className="control">
                <div className="field">
                <div className="control mt-3">
                <input  className="input is-info" type="text"  placeholder="First name"></input>
                </div>
                <div className="control mt-3">
                <input className="input is-info" type="text"   placeholder="Last name"></input>
                </div>
                <div className="control mt-3">
                <input  className="input is-info" type="text"   placeholder="E-mail"></input>
                </div>
                
                <div className="control mt-3">
                <input className="input is-info" type="text"   placeholder="Password"></input>
                </div>
                
                <div className="control mt-3">
                <input className="input is-info" type="text"   placeholder="Confirm password"></input>
                </div>
                
                </div>
                <div className="has-text-centered">
                <button className="button is-primary is-centered">Signup</button>
                </div>
                
                
            </form>
        </div>
    )
}

export default Signup