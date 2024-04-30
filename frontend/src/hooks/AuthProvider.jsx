import { useContext, createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(localStorage.getItem("site") || "")
    const navigate = useNavigate()

    const loginAction = async (username, password) => {
        try {
            const response = await axios.post("http://localhost:5555/account/signin", { username , password })
            console.log(response.data)
            if (response.data) {
                setUser(response.data.username)
                setToken(response.data.token)
                localStorage.setItem("site", response.data.token)
                navigate(`/`)
                return
            }
            throw new Error(res.message)
        } catch (err) {
            console.error(err)
        }
    }

    const logOut = () => {
        setUser(null)
        setToken("")
        localStorage.removeItem("site")
        navigate(`/`)
    }

    return <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider

export const useAuth = () => {
    return useContext(AuthContext)
}