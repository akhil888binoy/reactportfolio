import React from 'react'
import { AiOutlineArrowUp , AiFillInstagram, AiFillLinkedin, AiFillGithub  } from 'react-icons/ai'
import me from "../assets/my.jpg";
function Footer() {
  return (
    <footer>
        <div>
            <img src={me} alt="Founder" />
            <h2>Akhil Binoy</h2>
        </div>
        <aside>
            <h2>Social Media</h2>
            <article>
                <a href="https://www.instagram.com/akil.binoy/"> <AiFillInstagram></AiFillInstagram> </a>
                <a href="https://www.linkedin.com/in/akhil-binoy-004978217/"> <AiFillLinkedin></AiFillLinkedin> </a>
                <a href="https://github.com/akhil888binoy"> <AiFillGithub></AiFillGithub> </a>
            </article>
        </aside>
        <a href="#home"> <AiOutlineArrowUp></AiOutlineArrowUp> </a>
    </footer>
  )
}

export default Footer