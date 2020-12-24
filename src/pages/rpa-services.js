import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-three'
import Footer from '../containers/layout/footer/footer-one'
import PageHeader from '../components/pageheader'
import ServicesArea from '../containers/rpa-services/services-area'
//import ServicesArea from '../containers/it-solutions/services-area'
import JobsArea from '../containers/careers/services-option-area'
import ClientsArea from '../containers/global/clients-area'

const RPAServicesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title="RPA Services" />
    <Header/>
    <PageHeader 
        pageContext={pageContext} 
        location={location}
        title="RPA Services"
    />
    <main className="site-wrapper-reveal">
        <ClientsArea />
        <ServicesArea/>
        <JobsArea />
    </main>
    <Footer/>
  </Layout>
)
 
export default RPAServicesPage
 