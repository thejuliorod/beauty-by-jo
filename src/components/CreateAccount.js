import { useState } from "react"

import "../styles/components/sign-in-create-account.scss"

export default function CreateAccount() {

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="form-container">
                <form onSubmit={submit}>
                    <h4>Create account</h4>
                    <label htmlFor="name">
                        Name
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}  />
                    </label>
                    <label htmlFor="email">
                        Email
                        <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}  />
                    </label>
                    <label htmlFor="password">
                        Password 
                        <input type="text" placeholder="" id="password" value={password} onChange={(e) => setPassword(e.target.value)}  />
                        <p className="password-minimum">(At least 6 characters)</p>
                    </label>
                    <button type="submit" className="sign-in-button">Submit</button> 
                </form>
            
        </div>
    )
}
