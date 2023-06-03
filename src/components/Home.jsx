import React from 'react'
import {motion } from "framer-motion"
import { Typewriter } from 'typewriter-effect'

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
                
            </div>
            
        </section>
        <section>

        </section>

    </div>
  )
}

export default Home