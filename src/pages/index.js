import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-three'
import Footer from '../containers/layout/footer/footer-one'
import HeroArea from '../containers/index-processing/hero-area'
import AboutArea from '../containers/index-processing/about-area'
import ServicesArea from '../containers/index-appointment/services-area'
import FeaturesArea from '../containers/index-infotechno/features-area'

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
  </Layout>
)

export default IndexProcessing
