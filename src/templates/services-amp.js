import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-three'
import Footer from '../containers/layout/footer/footer-one'
import PageHeader from '../components/pageheader'
import ClientsArea from '../containers/global/clients-area'
import ServicesArea from '../containers/it-services/services-area'
import ContactArea from '../containers/global/contact-area/contact-two'

const ITServicePage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title="IT Services" />
    <Header/>
    <PageHeader 
        pageContext={pageContext} 
        location={location}
        title="Services"
    />
    <main className="site-wrapper-reveal">
        <ClientsArea />
        <ServicesArea/>
        <ContactArea/>
    </main>
    <Footer/>
  </Layout>
)
 
export default ITServicePage
 