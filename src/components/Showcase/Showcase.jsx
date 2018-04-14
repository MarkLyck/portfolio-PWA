import React from 'react'
import styled from 'react-emotion'
import { Motion, spring } from 'react-motion'

const Content = styled.div`
    display: block;
    position: relative;
    width: 55%;
    height: 75%;
    margin: 0 8% 0 auto;
    background: url(${props => props.image}) no-repeat center;
    background-size: cover;
    z-index: 2;
`

const ImageUnderlayer = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
`

const ImageRedTransition = styled.div`
    position: absolute;
    width: 150%;
    height: 100%;
    top: 0;
    left: 0;
    background: ${props => props.theme.primaryColor};
`

const ImageUnderlayerBackground = styled.div`
    position: absolute;
    width: 150%;
    height: 100%;
    top: 0;
    left: 0;
    background: ${props => props.theme.secondaryColor};
`

const PageNumBerContainer = styled.div`
    position: absolute;
    overflow-y: hidden;
    right: -7.5%;
    bottom: 12.5%;
    font-size: 9rem;
    color: ${props => props.theme.whiteColor};
    font-family: "Abril Fatface";
`

const PageNumber = styled.p`
    padding-left: 24px;
    line-height: 1.1;
    text-shadow: 0 10px 30px rgba(2, 11, 22, 0.5);
`

const Showcase = ({ image, number, animate }) => {
    return (
        <Motion defaultStyle={{ scale: 0 }} style={{ scale: spring(1, { stiffness: 50, damping: 17 })}}>
            {value => (
                <Content image={image} style={{ transform: `scale(${value.scale})`}}>
                    <ImageUnderlayer>
                        <Motion defaultStyle={{ x: -10 }} style={{ x: spring(100, {stiffness: 25, damping: 17}) }}>
                            {value => (
                                <ImageRedTransition style={{ transform: `translateX(${value.x}%)`}} />
                            )}
                        </Motion>
                        <Motion defaultStyle={{ x: -20 }} style={{ x: spring(100, {stiffness: 35, damping: 17}) }}>
                            {value => (
                                <ImageUnderlayerBackground style={{ transform: `translateX(${value.x}%)`}} />
                            )}
                        </Motion>
                    </ImageUnderlayer>
                    <PageNumBerContainer>
                        <Motion defaultStyle={{ y: 100 }} style={{ y: spring(0, { stiffness: 25, damping: 17 }) }}>
                            {value => (
                                <PageNumber style={{ transform: `translateY(${value.y}%)`}}> {number}</PageNumber>
                            )}
                        </Motion>
                    </PageNumBerContainer>
                </Content>
            )}
        </Motion>
    )
}

export default Showcase