import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-three'
import Footer from '../containers/layout/footer/footer-one'
import HeroArea from '../containers/index-processing/hero-area'
import AboutArea from '../containers/index-processing/about-area'
import ServicesArea from '../containers/index-appointment/services-area'
import FeaturesArea from '../containers/index-infotechno/features-area'
import CookieConsent from 'react-cookie-consent';

const IndexProcessing = ({ location }) => (
  <Layout location={location}>
    <SEO title="Processing" />
    <Header />
    <main className="site-wrapper-reveal">
      <HeroArea />
      <AboutArea />
      <ServicesArea />
      <FeaturesArea />
    </main>
    <Footer />
    <CookieConsent
          location="bottom"
          buttonText="Accept"
          declineButtonText="Decline"
          cookieName="gatsby-gdpr-google-analytics">
          Please, check your cookie asking!
    </CookieConsent>
  </Layout>
)

export default IndexProcessing
