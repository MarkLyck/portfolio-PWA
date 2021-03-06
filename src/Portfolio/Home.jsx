import React from 'react'
import styled from 'react-emotion'
import Parallax from 'parallax-js'
import { Motion, spring } from 'react-motion'
import Slide from 'components/Slide'
import ScrollNavigation from 'components/ScrollNavigation'
import Hero from './00_Hero'
import slides from 'common/slides'
import { check_webp_feature } from 'common/featureTests'

import stars from './images/stars.svg'
import moonlight from './images/moonlight.svg'

const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    position: relative;
    color: #fff;
    overflow-x: hidden;
`

const Layer = styled.div`
    width: 100%;
    height: 100%;
`

const SkyBackground = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-image: linear-gradient(to bottom, #072142, #061c37, #07182b, #061220, #020b16);
    background-image: -o-linear-gradient(top, #072142, #061c37, #07182b, #061220, #020b16);
    background-image: -webkit-linear-gradient(top, #072142, #061c37, #07182b, #061220, #020b16);
    background-image: -webkit-gradient(linear, left top, left bottom, from(#072142), color-stop(#061c37), color-stop(#07182b), color-stop(#061220), to(#020b16));
    z-index: -1;
`

const MoonLightBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    z-index: 0;
`

const MoonLightContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 30%;
    margin: auto;
    height: 1385px;
    width: 1385px;
`

const MoonLightParallax = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`

const MoonLight = styled.div`
    height: 100%;
    background-image: url(${moonlight});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
`

const StarsParallax = styled.div`
    width: 1300px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 30%;
    z-index: 0;
`

const StarImageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`



class Home extends React.Component {
    state = {
        hasRefs: false,
        visibleSlides: [],
        imageType: '',
    }

    componentDidMount() {
        const moonLightScene = document.getElementById('js-parallax-moonlight')
        new Parallax(moonLightScene)

        const starsScene = document.getElementById('js-parallax-stars')
        new Parallax(starsScene)

        check_webp_feature('lossless', this.useImage)

        this.setState({ hasRefs: true })
    }

    useImage = (feature, result) => {
        if (result) {
            this.setState({ imageType: 'webp' })
        } else {
            this.setState({ imageType: 'normal' })
        }
    }

    handleVisibilityChange = (isVisible, index) => {
        let visibleSlides = this.state.visibleSlides
        if (isVisible) {
            visibleSlides.push(index + 1)
        } else {
            visibleSlides = visibleSlides.filter(item => item !== index + 1)
        }

        this.setState({ visibleSlides })
    }

    render() {
        return (
            <Container className="Home" >
                <Hero ref={(section) => { this.heroSection = section; }} />

                {slides.map((slide, i) => (
                    <Slide
                        slide={slide}
                        imageType={this.state.imageType}
                        index={i}
                        key={slide.id}
                        handleVisibilityChange={this.handleVisibilityChange}
                        ref={(section) => { this[slide.id] = section; }}
                    />)
                )}

                {<ScrollNavigation keys={slides.map(s => s.id)} sections={slides.map(slide => this[slide.id])} heroSection={this.heroSection} />}

                <MoonLightBackground>
                    <MoonLightContainer>
                        <MoonLightParallax id="js-parallax-moonlight">
                            <Motion defaultStyle={{ size: 0, opacity: 0 }} style={{ size: spring(100), opacity: spring(1) }}>
                                {value => (
                                    <MoonLight data-depth="0.2" style={{ backgroundSize: `${value.size}%`, opacity: value.opacity }}/>
                                )}        
                            </Motion>
                        </MoonLightParallax>
                    </MoonLightContainer>
                </MoonLightBackground>

                <StarsParallax id="js-parallax-stars">
                    <Layer data-depth="0.1">
                        <StarImageContainer>
                            <img src={stars} alt="stars" />
                        </StarImageContainer>
                    </Layer>
                </StarsParallax>

                <SkyBackground />
            </Container>
        )
    }
}

export default Home;
