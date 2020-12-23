import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import Heading from '../../../components/ui/heading'
import Anchor from '../../../components/ui/anchor'
import {Container, Row, Col} from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import FeatureBox from '../../../components/box-image/layout-one'
import {SectionWrap, SectionBottom} from './services-area.style'

const ServicesArea = (props) => {
    const featuredDataQuery = useStaticQuery(graphql `
        query ITServicesQueryData {
            allContentfulDfsServicesModelData(sort: {order: DESC, fields: id}, filter: {node_locale: {eq: "en-US"}}) {
                edges {
                  node {
                    id
                    title
                    excerpt
                    icon {
                      img{
                        file {
                            url
                        }
                      }
                    }
                  }
                }
            }
        }
    `); 
    const featureData = featuredDataQuery.allContentfulDfsServicesModelData.edges;
    const {linkStyle, headingStyle} = props;
    return (
        <SectionWrap>
            <Container>
                <Row>
                    <Col lg={12}>
                        <SectionTitle
                            subtitle="Our Services"
                            title="Our Service's <br/><span>Options</span>"
                        />
                    </Col>
                </Row>
                <Row>
                    {featureData.map(feature => (
                        <Col lg={4} md={6} className="box-item" key={feature.node.id}>
                            <FeatureBox
                                title={feature.node.title}
                                imageSrc={feature.node.icon.img.file.url}
                                desc={feature.node.excerpt}
                                path={`/it-service/`}
                            />
                        </Col>
                    ))}
                </Row>
                <Row>
                    <Col lg={12}>
                        <SectionBottom>
                            <Heading {...headingStyle}>Challenges are just opportunities in disguise. <Anchor {...linkStyle} path="/">Take the challenge!</Anchor></Heading>
                        </SectionBottom>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

ServicesArea.propTypes = {
    headingStyle: PropTypes.object,
    linkStyle: PropTypes.object
}

ServicesArea.defaultProps = {
    headingStyle: {
        as: 'h3',
        fontSize: '18px',
        fontweight: 500,
        lineHeight: 1.40,
        color: '#333333'
    },
    linkStyle: {
        layout: 'underline',
        hover: {
            layout: 2
        }
    }
}

export default ServicesArea;