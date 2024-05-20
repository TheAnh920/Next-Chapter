import { useContext, createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem("user") || "")
    const [token, setToken] = useState(localStorage.getItem("site") || "")
    const navigate = useNavigate()

    const loginAction = async (username, password) => {
        try {
            const response = await axios.post("https://next-chapter.onrender.com/account/signin", { username , password })
            console.log(response.data)
            if (response.data) {
                setUser(response.data.username);
                setToken(response.data.token);
                localStorage.setItem("site", response.data.token);
                localStorage.setItem("user", response.data.username);
                localStorage.setItem("bookList", JSON.stringify(response.data.favBookList));
                localStorage.setItem("favBookTagList", JSON.stringify(response.data.favBookTagList))
                navigate(`/`);
                return;
            }
            throw new Error(res.message)
        } catch (err) {
            console.error(err)
        }
    }

    const logOut = () => {
        setUser(null);
        setToken("");
        localStorage.removeItem("site");
        localStorage.removeItem("user");
        localStorage.removeItem("bookList");
        localStorage.removeItem("favBookTagList");
        localStorage.removeItem('rcmBookList');
        navigate(`/`);
    }

    return <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider

export const useAuth = () => {
    return useContext(AuthContext)
}