import React from 'react'

/**Components */
import MainSection from '../../components/ui/MainSection'
import ListTenant from '../../components/ui/ListTenant'
import ListEvents from '../../components/ui/ListEvents'
import ContactSection from '../../components/ui/ContactSection'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <>
    <Header/>
      <MainSection/>
      <ListTenant />
      <ListEvents />
      <ContactSection />
      <Footer/>
    </>
  )
}

export default Home