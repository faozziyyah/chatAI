import React from 'react'
import logo from '../images/Logo2.png'
import facebook from '../images/facebook.png'
import insta from '../images/instagram.png'
import x from '../images/outlined.png'
import linkedin from '../images/linkedin.png'

const Footer = () => {

  const footlinks = [
    {
      id: 1,
      link: "about",
    },
    {
      id: 2,
      link: "use cases",
    },
    {
      id: 3,
      link: "contact us",
    },
  ];

  return (
    <footer className='footer flex flex-col justify-center items-center text-center py-4'>

      <div className='foottop md:flex md:justify-between items-center w-full pt-2'>

        <img src={logo} alt='' id='' style={{width: '10%'}} />

        <div className="navitems flex justify-between items-center md:w-2/4">

          {footlinks.map(({ id, link }) => (
            <div
              key={id}
            >
              <a className='capitalize font-base text-white' href={link}>{link}</a>
            </div>
          ))}

        </div>

      </div>

      <hr className='bg-white rule' />

      <div className='footbottom justify-center md:flex md:justify-between items-center'>

          <div className='logos flex justify-between items-center'>

            <img src={facebook} alt='' id='' />
            <img src={insta} alt='' id='' />
            <img src={x} alt='' id='' />
            <img src={linkedin} alt='' id='' />

          </div>

          <p className='text-sm text-white'>Powered by Goviral --an AI Research Lab in Lagos.</p>

      </div>

    </footer>
  )
}

export {Footer}