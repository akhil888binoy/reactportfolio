import React, { useState } from 'react'
import vg from "../assets/vg.png"
import { toast } from 'react-hot-toast';

function Contact() {
    const [name, setName] =useState("");
    const [email, setEmail] =useState("");
    const [message, setMessage] =useState("");

    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(name, email, message)
        toast.success("Message Sent")

    }
  return (
    <div id='contact'>
        <section>
            <form onSubmit={submitHandler}>
                <h2>Contact me</h2>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='your name' required/>
                <input type="text" placeholder='your email' required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="text" placeholder='your message' required value={message} onChange={(e)=>setMessage(e.target.value)}/>
                <button type='submit'>Send</button>
            </form>
        </section>
        <aside>
            <img src={vg} alt="Graphics" />
        </aside>
    </div>
  )
}

export default Contact