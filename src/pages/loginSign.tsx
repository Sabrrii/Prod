import {signIn} from "next-auth/react"
import {useSession} from "next-auth/react";
import {useState} from "react";

export default function loginSign() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [username,setUsername] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [password,setPassword] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {data:session} = useSession();
    return (
        <>
            <label>
                Username
                <input name="username" type="text" onChange={(e)=>{setUsername(e.target.value)} }/>
            </label>
            <label>
                Password
                <input name="password" type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
            </label>
            <button  onClick={()=>signIn("credentials",{username: username, password: password})}>Sign in</button>
            {console.log(username,password)}
        </>
    )
}