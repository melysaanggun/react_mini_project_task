import React from 'react'
import Routers from '../../routes/Router'
import Header from '../Header'
import Footer from '../Footer'

const Layout = () => {
  return (
      <>
        <Header />
        <div>
            <Routers />
        </div>
        <Footer />
    </>
  )
}

export default Layout