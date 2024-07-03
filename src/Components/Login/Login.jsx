import React, { useState } from 'react'
import "../Login/Login.css"
import Avatar from "../../Image/avatar.png"
import { toast } from 'react-toastify'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { auth, db } from '../../lib/firebase'
import { doc, setDoc } from 'firebase/firestore'


const Login = () => {

    const auth = getAuth();

    const [avatar, setAvatar] = useState({
        file: null,
        url: ""
    })

    const handleAvatar = e => {
        if (e.target.files[0]) {



            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }


    };
    const handleRegister = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        const { username, email, password } = Object.fromEntries(formData)
        console.log(username)

        try {

            const res = await createUserWithEmailAndPassword(auth, email, password)

            const imgUrl = await upload(avatar.file)


            await setDoc(doc(db, "users", res.user.uid), {
                username,
                email,
                avatar: imgUrl,
                id: res.user.uid,
                blocked:[],   

              });
           
              await setDoc(doc(db, "userchats", res.user.uid), {
               chats: [],

              });



              toast.success("Account created! You Can Login Now")

        } catch (err) {
            console.log(err)
            toast.error(err.message)
        }
    };

    const handleLogin = e => {
        e.preventDefault()

    }



    return (
        <div className='login'>
            <div className='items'>
                <h2>Welcome back</h2>
                <form onSubmit={handleLogin}>
                    <input type="text" placeholder='Email' name='email' />
                    <input type="password" placeholder='password' name='password' />

                    <button>Sign In</button>
                </form>

            </div>
            <div className='separator'></div>
            <div className='items'>
                <h2>Create an Account</h2>
                <form onSubmit={handleRegister}>
                    <label htmlFor="file">
                        <img src={avatar.url || Avatar} alt="" /> Upload An Image</label>
                    <input type="file" id='file' style={{ display: "none" }} onChange={handleAvatar} />
                    <input type="text" placeholder='Username' name='username' />
                    <input type="text" placeholder='Email' name='email' />
                    <input type="password" placeholder='password' name='password' />

                    <button>Sign Up</button>
                </form>
            </div>


        </div>
    )
}

export default Login