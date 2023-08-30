import React from 'react'
import AboutBanner from './AboutBanner'
import Team from './Team'
import WhyChoose from './WhyChoose'

function About() {
  return (
    <div className='px-6'>
      <AboutBanner />
      <WhyChoose />
      <Team />
    </div>
  )
}

export default About