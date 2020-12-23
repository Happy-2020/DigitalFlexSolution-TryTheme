import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Row, Col } from '../../../components/ui/wrapper'
import SectionTitle from '../../../components/ui/section-title'
import Button from '../../../components/ui/button'
import { SectionWrap, JobList, JobItem, JobTitle, JobDesc, JobButton } from './style'

const JobsArea = () => {
    const getJobsData = useStaticQuery(graphql`
        query GET_OPTIONS_DATA {
            allContentfulDfsServicesFeaturesItems(sort: {order: ASC, fields: createdAt}, filter: {node_locale: {eq: "en-US"}}) {
                edges {
                    node {
                        id
                        title
                        desc {
                            desc
                        }
                    }
                }                
            }
        }      
    `);
    const jobs = getJobsData.allContentfulDfsServicesFeaturesItems.edges;

    return (
        <SectionWrap>
            <Container>
                <Row justify="center">
                    <Col lg={7} >
                        <SectionTitle title="Services Options" />
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <JobList>
                            {jobs.map((job, i) => {
                                const isEven = i % 2 === 0;
                                if (i == 0) return;
                                const descs = job.node.desc.desc.split('\n');
                                return (
                                    <JobItem key={job.node.id} isEven={isEven}>
                                        <Row>
                                            <Col lg={3}>
                                                <JobTitle>{job.node.title}</JobTitle>
                                            </Col>
                                            <Col lg={6}>
                                                {descs.map(txt => (                       
                                                    <JobDesc><li>{txt}</li></JobDesc>
                                                ))}                           
                                            </Col>
                                            <Col lg={3}>
                                                <JobButton>
                                                    <Button varient="outlined" bordercolor="#ddd">Get Started</Button>
                                                </JobButton>
                                            </Col>
                                        </Row>
                                    </JobItem>
                                )
                            })}
                        </JobList>
                    </Col>
                </Row>
            </Container>
        </SectionWrap>
    )
}

export default JobsArea
