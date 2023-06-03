import React from 'react'
import {animate, motion } from "framer-motion"
import Typewriter from "typewriter-effect";
import {BsArrowUpRight, BsChevronBarDown} from "react-icons/bs"
import me from "../assets/my.jpg";
import { useRef } from 'react';

function Home() {
    const clientCount= useRef(null);
    const projectCount=useRef(null);

    const animationClientCount=()=>{
        animate(0,100,{
            duration:1,
            onUpdate:(v)=>(clientCount.current.textContent=v.toFixed()),
        })
    }
    const animationProjectCount=()=>{
        animate(0,100,{
            duration:1,
            onUpdate:(v)=>(projectCount.current.textContent=v.toFixed()),
        })
    }
    const animations={
        h1:{
            initial :{
                x:"-100%",
                opacity:0,
            },
            whileInView:{
                x:0,
                opacity:1,
            }

        },
        button:{
            initial :{
                y:"-100%",
                opacity:0,
            },
            whileInView:{
                y:0,
                opacity:1,
            }

        }
    }
  return (
    <div id='home'>
        <section>
            <div>
                <motion.h1 {...animations.h1} > Hi I am <br />Akhil Binoy</motion.h1>
                <Typewriter options={{
                    strings:["Software Robots", "MERN" , "DevOps"],
                    autoStart: true,
                    loop:true,
                    wrapperClassName: "typewriterpara",
                }}></Typewriter>
                <div>
                    <a href="mailto: akhil888binoy@gmail.com">
                        Hire Me
                    </a>
                    <a href= "work">
                        Projects <BsArrowUpRight></BsArrowUpRight>
                    </a>
                </div>
                <article>
                    <p>+
                        <motion.span whileInView={animationClientCount} ref={projectCount}>100</motion.span>
                    </p>
                    <span>Clients Worldwide</span>
                </article>
                <aside>
                <article>
                    <p>+
                        <motion.span whileInView={animationProjectCount} ref={clientCount}>500</motion.span>
                    </p>
                    <span>Projects Made</span>
                </article>
                <article data-special>
                    <p>
                        Contact
                    </p>
                    <span>akhil888binoy@gmail.com</span>
                </article>
                </aside>
            </div>
            
        </section>
            <section>
                    <img  src={me} alt="Akhil" />
            </section>
     <BsChevronBarDown className='bs'></BsChevronBarDown>

    </div>
  )
}

export default Home