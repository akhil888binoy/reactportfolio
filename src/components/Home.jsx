import React from 'react'
import {motion } from "framer-motion"
import Typewriter from "typewriter-effect";
import {BsArrowUpRight} from "react-icons/bs"
import me from "../assets/my.jpg";

function Home() {
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
                <motion.h1 {...animations.h1} > hi I am <br />Akhil Binoy</motion.h1>
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
                        <span>100</span>
                    </p>
                    <span>Clients Worldwide</span>
                </article>
                <aside>
                <article>
                    <p>+
                        <span>500</span>
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

    </div>
  )
}

export default Home