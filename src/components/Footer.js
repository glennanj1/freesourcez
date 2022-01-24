import React from 'react'
import '../styles/Footer.css'

export default function Footer() {
    return (
        <div className="footer_wrapper">
            <div className="left_bottom">
                <image src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="google" />
                <p>Thanks for Visiting</p>
                <p>Privacy Policy Link</p>
                <p>Terms of Service</p>
            </div>
            <div className="right_bottom">
                <p>Web Design By: <a href="https://glennan.netlify.app">Glennan</a></p>
                <p>FreeSourcez Copyright © 2021</p>
            </div>
        </div>
    )
}
