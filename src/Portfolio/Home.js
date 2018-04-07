import React from 'react';
import styled from 'react-emotion'
import ParallaxMousemove from 'react-parallax-mousemove'
import stars from './stars.svg'
import moonlight from './moonlight.svg'

const SkyBackground = styled('div')`
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background-image: -webkit-gradient(linear, left top, left bottom, from(#072142), color-stop(#061c37), color-stop(#07182b), color-stop(#061220), to(#020b16));
    background-image: -webkit-linear-gradient(top, #072142, #061c37, #07182b, #061220, #020b16);
    background-image: -o-linear-gradient(top, #072142, #061c37, #07182b, #061220, #020b16);
    background-image: linear-gradient(to bottom, #072142, #061c37, #07182b, #061220, #020b16);
    z-index: -200;
`

const Stars = styled('img')`
    height: 100%;
`

const Moonlight = styled('img')`
    height: 120vh;
`

const parralaxStyle = {
    outer: {
        width: '1300px',
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: '30%',
        zIndex: -100,
    },

    starsLayerStyle: {
        position: 'absolute',
    },

    moonlightLayerStyle: {
        position: 'absolute',
    }
}


class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <ParallaxMousemove containerStyle={parralaxStyle.outer} fullHeight={true}>
                    <ParallaxMousemove.Layer layerStyle={parralaxStyle.starsLayerStyle} config={{
                        xFactor: 0.05,
                        yFactor: -0.05,
                        springSettings: {
                            stiffness: 50,
                            damping: 30
                        }
                        }}>
                        <Stars src={stars} alt="Parallax Layer" />
                    </ParallaxMousemove.Layer>
                    <ParallaxMousemove.Layer layerStyle={parralaxStyle.moonlightLayerStyle} config={{
                        xFactor: 0.10,
                        yFactor: -0.10,
                        springSettings: {
                            stiffness: 50,
                            damping: 30
                        }
                        }}>
                        <Moonlight src={moonlight} alt="Parallax Layer" />``
                    </ParallaxMousemove.Layer>
                </ParallaxMousemove>
                <SkyBackground />
            </div>
        );
    }
}

export default Home;
