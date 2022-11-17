import React from "react"
import styles from '../style.css'
import headerImage from '../images/troll-face.png'

export default function Header() {
    return (
        <header className="header">
            <img 
                src={headerImage}
                className="headerimage"
                alt="header Image"
            />
            <h2 className="headerTitle">Meme Generator</h2>
            <h4 className="headerProject">React Course - Project 3</h4>
        </header>
    )
}