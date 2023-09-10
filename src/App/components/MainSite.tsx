import React from 'react'
import Hero from './mainSiteComponents/Hero'
import Services from './mainSiteComponents/Services'
import FreelancePrices from './mainSiteComponents/FreelancePrices'
import Recommandation from './mainSiteComponents/Recommandation'
import Formation from './mainSiteComponents/Formation'
import Experiences from './mainSiteComponents/Experiences'
import Portfolio from './mainSiteComponents/Portfolio'
import Contacts from './mainSiteComponents/Contacts'
import Map from './mainSiteComponents/Map'

function MainSite() {
  return (
    <>
      {/* MAIN HOME  */}
      <main>
        <Hero />
        <Services />
        <FreelancePrices />
        <Recommandation />
        <Formation />
        <Experiences /> 
        <Portfolio /> 
        <Contacts /> 
        <Map /> 
        
      </main>
    </>
  )
}

export default MainSite