import React from "react"
import SEO from "../components/seo"
import Layout from '../containers/layout/layout'
import Header from '../containers/layout/header/header-three'
import Footer from '../containers/layout/footer/footer-one'
import PageHeader from '../components/pageheader'
import SkillArea from '../containers/why-choose-us/our-skills'
import ServicesArea from '../containers/why-choose-us/services-area'
import ContactArea from '../containers/global/contact-area/contact-two'

const technologiesPage = ({ pageContext, location }) => (
  <Layout location={location}>
    <SEO title="Technologies" />
    <Header />
    <PageHeader
      pageContext={pageContext}
      location={location}
      title="Technologies"
    />
    <main className="site-wrapper-reveal">
      <SkillArea />
      <ServicesArea />
      <ContactArea />
    </main>
    <Footer />
  </Layout>
)

export default technologiesPage
