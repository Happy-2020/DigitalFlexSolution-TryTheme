import React from 'react'
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from "gatsby"
import { TiSocialFacebook, TiSocialTwitter, TiSocialInstagram, TiSocialLinkedin } from "react-icons/ti";
import parse from 'html-react-parser'
import { Container } from 'react-bootstrap'
import Logo from '../../../../assets/images/logo/dark-logo-160x48.png'
import gplayImage from '../../../../assets//images/icons/aeroland-button-google-play.jpg'
import appImage from '../../../../assets//images/icons/aeroland-button-app-store.jpg'
import { Row, Col } from '../../../../components/ui/wrapper'
import Text from '../../../../components/ui/text'
import Anchor from '../../../../components/ui/anchor'
import Button from '../../../../components/ui/button'
import Heading from '../../../../components/ui/heading'
import Social, { SocialLink } from '../../../../components/ui/social'
import {
    FooterWrap,
    FooterTop,
    FooterWidget,
    LogoWidget,
    TextWidget,
    FooterWidgetList,
    FooterBottom
} from './footer.style'

const Footer = ({ copyrightStyle, ...props }) => {
    const siteInfo = useStaticQuery(graphql`
        query FooterSiteQuery {
            site {
                siteMetadata {
                    copyright
                    contact {
                        phone
                        email
                        address
                        website
                    }
                    social {
                        facebook
                        twitter
                        instagram
                        linkedin
                    }
                    description
                }
            }
        }      
    `)
    const { phone, email, address, website } = siteInfo.site.siteMetadata.contact;
    const { copyright } = siteInfo.site.siteMetadata;
    const { description } = siteInfo.site.siteMetadata;
    const { facebook, twitter, instagram, linkedin } = siteInfo.site.siteMetadata.social;
    return (
        <FooterWrap {...props}>
            <FooterTop>
                <Container>
                    <Row>
                        <Col lg={3} sm={6}>
                            <FooterWidget responsive={{ medium: { mb: '31px' } }}>
                                <LogoWidget>
                                    <img src={Logo} alt="Logo" />
                                </LogoWidget>
                                <TextWidget>
                                    {address && <Text mb="10px">{description}</Text>}
                                    {/* {email && <Text mb="10px"><Anchor path={`mailto:${email}`} color="textColor" hoverstyle="2">{email}</Anchor></Text>}
                                    {phone && <Text mb="10px"><Anchor path={`tel:${phone}`} fontWeight="800" color="#333" hoverstyle="2">{phone}</Anchor></Text>}
                                    {website && <Text mb="10px"><Anchor path={website} hoverstyle="2">{website}</Anchor></Text>} */}
                                </TextWidget>
                            </FooterWidget>
                        </Col>
                        <Col lg={3} md={5} sm={9}>
                            <FooterWidget responsive={{ medium: { mb: '31px' } }} ml="40px">
                                <Heading as="h6" mt="-3px" mb="20px">QUICK LINKS</Heading>
                                <FooterWidgetList>
                                    <li><Anchor path="/" color="textColor" hoverstyle="2">Home</Anchor></li>
                                    <li><Anchor path="/technologies/" color="textColor" hoverstyle="2">Technologies</Anchor></li>
                                    <li><Anchor path="/about-us/" color="textColor" hoverstyle="2">About Us</Anchor></li>
                                    <li><Anchor path="/contact-us/" color="textColor" hoverstyle="2">Contact Us</Anchor></li>
                                    <li><Anchor path="/copyright-notice/" color="textColor" hoverstyle="2">Copyright Notice</Anchor></li>
                                    <li><Anchor path="/terms-of-use/" color="textColor" hoverstyle="2">Terms of use</Anchor></li>
                                </FooterWidgetList>
                            </FooterWidget>
                        </Col>
                        <Col lg={3} md={5} sm={9}>
                            <FooterWidget responsive={{ medium: { mb: '27px' } }} ml="40px">
                                <Heading as="h6" mt="-3px" mb="20px">SERVICES</Heading>
                                <FooterWidgetList>
                                    <li><Anchor path="/digital-marketing-manager-solution/" color="textColor" hoverstyle="2">Digital Marketing Manager</Anchor></li>
                                    <li><Anchor path="/ai-chartbot/" color="textColor" hoverstyle="2">AI Charbot</Anchor></li>
                                    <li><Anchor path="/process-automation-orchestration-services/" color="textColor" hoverstyle="2">Process Automatin &amp; Orchestration Services</Anchor></li>
                                    <li><Anchor path="/business-intelligence-services/" color="textColor" hoverstyle="2">Business Intelligence Services</Anchor></li>
                                    <li><Anchor path="/ai-ml-services/" color="textColor" hoverstyle="2">Artificial Intelligence and Machine Learning Services</Anchor></li>
                                    <li><Anchor path="/digital-cloud-book-keeping-and-accounting-services/" color="textColor" hoverstyle="2">Digital Cloud Book Keeping and Accounting Services</Anchor></li>
                                    <li><Anchor path="/rpa-services/" color="textColor" hoverstyle="2">RPA Services</Anchor></li>
                                </FooterWidgetList>
                            </FooterWidget>
                        </Col>
                        <Col lg={3} md={5} sm={8}>
                            <FooterWidget  ml="40px">
                                <Heading as="h6" mt="-3px" mb="20px">CONTACT US</Heading>
                                <FooterWidgetList>
                                    <li><Text color="textColor" hoverstyle="2">20-22 Wenlock Road</Text></li>
                                    <li><Text color="textColor" hoverstyle="2">N1 7GU</Text></li>
                                    <li><Text color="textColor" hoversty    le="2">London</Text></li>
                                    <li><Anchor path="tel:+4401738506283" color="textColor" hoverstyle="2">(+44)-01738-506283</Anchor></li>
                                    <li><Anchor path="mailto:info@digitalflexsolutions.com" color="textColor" hoverstyle="2">info@digitalflexsolutions.com</Anchor></li>
                                </FooterWidgetList>
                            </FooterWidget>
                        </Col>
                    </Row>
                </Container>
            </FooterTop>
            <FooterBottom>
                <Container>
                    <Row className="align-items-center">
                        <Col md={6} className="text-center text-md-left">
                            {copyright && <Text {...copyrightStyle}>&copy; {parse(copyright)}</Text>}
                        </Col>
                    </Row>
                </Container>
            </FooterBottom>
        </FooterWrap>
    )
}

Footer.propTypes = {
    bgcolor: PropTypes.string,
    reveal: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

Footer.defaultProps = {
    bgcolor: '#232222',
    reveal: 'false',
    copyrightStyle: {
        responsive: {
            small: {
                pb: '15px'
            }
        }
    }
};

export default Footer
