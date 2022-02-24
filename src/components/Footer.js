import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import CopyrightIcon from '@mui/icons-material/Copyright';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
        <div className="smedia">
            <InstagramIcon/>
            <TwitterIcon/>
            <LinkedInIcon/>
        </div>
        <div className="copyright">
            <CopyrightIcon/>
            <p>2022 pizzaparlour.com</p>
        </div>
    </div>
  )
}

export default Footer
