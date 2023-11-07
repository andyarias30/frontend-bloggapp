import { useContext } from 'react';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const { userState, setUserState } = useContext(UserContext)
    const navigate = useNavigate()

    const handleFromSubmit = e => {
        e.preventDefault()

        const fromData = {
            email: e.target.email.value,
            paswword: e.target.password.value
        }
        fetch('http://localhost:8080', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(fromData),

        })
            .then(res => res.json())
            .then(data =>{
                setUserState(data)
                navigate('/')
            
})
    }
return (
    <form action="submit" onSubmit={handleFromSubmit}>
        <label htmlFor="">
            Email:
            <input type="email" name="email" />
        </label>
        <label htmlFor="">
            Password:
            <input type="passwprd" name="password" />
        </label>
        <button >Login</button>
    </form>
)
}