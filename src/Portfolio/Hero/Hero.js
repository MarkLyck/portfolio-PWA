import React from 'react';
import styled, { css } from 'react-emotion'
import Parallax from 'parallax-js'
import { Motion, spring } from 'react-motion';

import moon from './images/moon.svg'
import cloud1 from './images/cloud1.svg'
import cloud2 from './images/cloud2.svg'
import cloud3 from './images/cloud3.svg'
import b_cloud1 from './images/b_cloud01.svg'
import b_cloud2 from './images/b_cloud02.svg'

const MoonContainer = styled('div')`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 30%;
    margin: auto;
    height: 1385px;
    width: 1385px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
`

const MoonParallax = styled('div')`
    position: relative;
    width: 40%;
    height: 40%;
`

const Layer = styled('div')`
    width: 100%;
    height: 100%;
`

const MoonTextWrapper = styled('div')`
    position: absolute;
    left: -15%;
    top: 45%;
`

const MoonText = styled('p')`
    font-size: 5rem;
    font-weight: bold;
    letter-spacing: 0.1em;
    text-shadow: 0 10px 15px rgba(2, 11, 22, 0.2);
    color: #ff4d5a;
    font-family: "Helvetica";
`

const cloudCSS = css`
    position: absolute;
`

const CloudFront1 = styled('div')`
    ${cloudCSS};
    top: 15%;
    right: -50%;
    width: 89%;
`

const CloudFront2 = styled('div')`
    ${cloudCSS};
    bottom: -19%;
    right: -29%;
    width: 90%;
`

const CloudFront3 = styled('div')`
    ${cloudCSS};
    bottom: -5%;
    left: -50%;
    width: 88%;
`

const CloudBack1 =  styled('div')`
    ${cloudCSS};
    top: -22%;
    right: -8%;
    width: 70%;
`

const CloudBack2 =  styled('div')`
    ${cloudCSS};
    top: -6%;
    left: -39%;
    width: 88%;
`

const Moon =  styled('div')`
    position: absolute;
    width: 100%;
    height: 100%;
`

class Home extends React.Component {
    componentDidMount() {
        const moonScene = document.getElementById('js-parallax-moon');
        const parallaxMoonInstance = new Parallax(moonScene);
    }

    render() {
        return (
            <React.Fragment>
                <Motion defaultStyle={{left: 0}} style={{left: spring(30)}}>
                    {value => (
                        <MoonContainer style={{ left: `${value.left}%` }}>
                        <MoonParallax id="js-parallax-moon">
                            <Layer data-depth="0.3">
                                <CloudBack1>
                                    <img src={b_cloud1} alt="cloud" />
                                </CloudBack1>
                            </Layer>

                            <Layer data-depth="0.4">
                                <CloudBack2>
                                    <img src={b_cloud2} alt="cloud" />
                                </CloudBack2>
                            </Layer>                        

                            <Moon data-depth="0.5">
                                    <img src={moon} alt="moon" />
                            </Moon>

                            <Layer data-depth="0.6">
                                <CloudFront2>
                                    <img src={cloud2} alt="cloud" />
                                </CloudFront2>
                            </Layer>

                            <Layer data-depth="0.7">
                                <CloudFront3>
                                    <img src={cloud3} alt="cloud" />
                                </CloudFront3>
                            </Layer>

                            <Layer data-depth="0.2">
                                <MoonTextWrapper>
                                    <MoonText data-depth="0.5">
                                        PORTFOLIO
                                    </MoonText>
                                </MoonTextWrapper>
                            </Layer>

                            <Layer data-depth="0.8">
                                <CloudFront1 >
                                    <img src={cloud1} alt="cloud" />
                                </CloudFront1>
                            </Layer>
                        </MoonParallax>
                    </MoonContainer>
                    )}
            
                    
                </Motion>
            </React.Fragment>
        );
    }
}

export default Home;
