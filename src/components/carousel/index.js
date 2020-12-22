import { CarouselProvider, Image, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Divider } from "semantic-ui-react";
import CustomDotGroup from "./CustomDotGroup";
import { useStaticQuery, graphql } from "gatsby"

const imageData = useStaticQuery(graphql `
    query CarouselQuery {
        indexProcessingJson(id: {eq: "processing-hero-content"}) {            
            carousel {
                image {
                    childImageSharp {
                      fluid(maxWidth: 601, maxHeight: 715, quality: 100) {
                        ...GatsbyImageSharpFluid_tracedSVG
                        presentationWidth
                        presentationHeight
                      }
                    }
                }
            }
        }
    }
`)

const { images } = imageData.indexProcessingJson;

const ImageCarousel = () => (
  <CarouselProvider
    naturalSlideWidth={1}
    naturalSlideHeight={1}
    totalSlides={3}
  >
    <Slider>
      <Slide tag="a" index={0}>
        <Image fluid={images.carousel.childImageSharp.fluid} />
      </Slide>
    </Slider>

    <Divider />
    <CustomDotGroup slides={3} />
  </CarouselProvider>
);

export default ImageCarousel;
