import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-three'
import Footer from '../containers/layout/footer/footer-one'
import HeroArea from '../containers/index-services/hero-area'
import GradationArea from '../containers/index-services/gradation-area'
import CtaArea from '../containers/global/cta-area/section-one'
import CaseStudyArea from '../containers/index-services/case-study-area'
import PricingArea from '../containers/index-services/pricing-area'
import ClientsArea from '../containers/global/clients-area'

const IndexServicesPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Services" />
    <Header />
    <main className="site-wrapper-reveal">
      <HeroArea />
      <GradationArea />
      <ClientsArea />
      <CaseStudyArea />
      <CtaArea />
      <PricingArea />
    </main>
    <Footer />
  </Layout>
)

export default IndexServicesPage
