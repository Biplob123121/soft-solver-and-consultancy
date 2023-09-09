import React from 'react'
import footer from '../../images/footer2.jpg';
import { NavLink } from 'react-router-dom';
import logo from '../../images/log2.png';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { TiSocialLinkedinCircular } from 'react-icons/ti';


function Footer() {
  return (

    <footer className="w-full h-3/4 bg-black bg-cover bg-center relative bg-gradient-to-tr from-gray-900 to-green-900">
      <img src={footer} alt="" className='w-full h-full object-cover absolute opacity-50 mix-blend-overlay' />
      <div className='px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 text-slate-100 relative'>
        <div className='flex flex-col justify-center'>
          <h1 className='text-2xl font-bold uppercase'>Soft Solver and Consultancy</h1>
          <p className='text-lg font-semibold'>Software Company in Canada</p>
          <div className=''>
            <a href="https://www.facebook.com/profile.php?id=100095049597399" target='_blank'>
              <div className="avatar mt-6 hover:text-primary">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <h3 className='text-center p-1'><BsFacebook size={32} className='text-center' /></h3>
                </div>
              </div>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100095049597399" target='_blank' className='ml-12'>
              <div className="avatar mt-6 hover:text-primary">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <h3 className='text-center p-1'><BsFacebook size={32} className='text-center' /></h3>
                </div>
              </div>
            </a>
            <a href="https://www.linkedin.com/company/96930916/admin/feed/posts/" target='_blank' className='mx-12'>
              <div className="avatar mt-6 hover:text-primary">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <h3 className='text-center'><TiSocialLinkedinCircular size={40} className='text-center' /></h3>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div>
          <h1 className='text-2xl font-semibold'>Get Free Estimation</h1>
          <ul>
            <li className='text-lg pt-6 hover:text-primary'>Address: 10408 92 Street NW, Edmonton, AB, T5H1T7, Canada</li>
            <li className='text-lg py-1 hover:text-primary'>Email : contact@ssconsult.ca</li>
            <li className='text-lg py-1 hover:text-primary'>Phone: 780-707-2835</li>
          </ul>
        </div>
        <div>
          <h1 className='text-2xl font-semibold'>Services</h1>
          <ul>
            <li className='text-lg pt-6 hover:text-primary'>Web Development</li>
            <li className='text-lg py-1 hover:text-primary'>Ecommerce Website Development</li>
            <li className='text-lg py-1 hover:text-primary'>Web Design</li>
            <li className='text-lg py-1 hover:text-primary'>Website Consultancy</li>
            <li className='text-lg py-1 hover:text-primary'>Search Engine Optimization(SEO)</li>
          </ul>
        </div>
        <div>
          <h1 className='text-2xl font-semibold'>Information</h1>
          <ul>
            <NavLink to='/about'><li className='text-lg pt-6 hover:text-primary flex items-center'>About Us</li></NavLink>
            <NavLink to='/blog'><li className='text-lg py-1 hover:text-primary'>Blog</li></NavLink>
            <NavLink to='/contact'><li className='text-lg py-1 hover:text-primary'>Contact Us</li></NavLink>
          </ul>
        </div>
      </div>
      <hr />
      <p className='text-lg text-slate-100 text-center py-4'>Copyright &copy; {new Date().getFullYear()}. All rights reserved.</p>
    </footer>
  )
}

export default Footer