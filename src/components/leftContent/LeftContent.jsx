import React from 'react'
import styled from 'react-emotion'
import { Motion, spring } from 'react-motion'

const Content = styled.div`
    color: ${props => props.theme.whiteColor};
    position: absolute;
    overflow: hidden;
    top: 50%;
    transform: translate3d(0, -50%, 0);
    z-index: 200;
    margin-left: 180px;
    padding-bottom: 8px;
    flex-direction: column;
    display: flex;

    @media (max-width: 700px) {
        margin-left: 48px;
    }
`

const TitleText = styled.h1`
    font-size: 6rem;
    line-height: 1;
    letter-spacing: 0.1em;
    margin-bottom: 1.6rem;
    font-family: "Helvetica";
    font-weight: bold;
    text-shadow: 0 10px 30px rgba(2, 11, 22, 0.5);
    text-transform: uppercase;

    @media (max-width: 700px) {
        font-size: 3rem;
    }
`

const Divider = styled.div`
    display: inline-block;
    margin-bottom: 2.5rem;
`

const Line = styled.span`
    display: block;
    width: 88px;
    height: 4px;
    border-radius: 5px;
    background: ${props => props.color || props.theme.primaryColor};
`

const SubItemsContainer = styled.div`
    color: ${props => props.theme.whiteColor};
    font-size: 1.5rem;
    line-height: 1.5;
    letter-spacing: 0.1em;
    font-family: "Helvetica";
    word-wrap: break-word;
    white-space: normal;
    display: flex;
    flex-direction: column;
    text-shadow: 1px 2px 2px rgba(0,0,0,0.8);
`

const LeftContent = ({ title, subtitle, color, children }) => {
    return (
        <Content>
            <Motion defaultStyle={{ x: -100 }} style={{ x: spring(0) }}>
                {value => (
                    <TitleText style={{ transform: `translateX(${value.x}%)` }}>
                        {title}
                    </TitleText>
                )}
            </Motion>

            <Divider>
                <Motion defaultStyle={{ x: 54, opacity: 0 }} style={{ x: spring(0), opacity: spring(1) }}>
                    {value => (
                        <Line color={color} style={{ marginBottom: '1.4rem', transform: `translateX(${value.x}px)`, opacity: value.opacity }}/>
                    )}
                </Motion>
                <Motion defaultStyle={{ x: -54, opacity: 0 }} style={{ x: spring(0), opacity: spring(1) }}>
                    {value => (
                        <Line color={color} style={{ marginLeft: '54px', transform: `translateX(${value.x}px)`, opacity: value.opacity }}/>
                    )}
                </Motion>
            </Divider>
            <Motion defaultStyle={{ x: -250 }} style={{ x: spring(0) }}>
                {value => (
                    <SubItemsContainer style={{ transform: `translateX(${value.x}%)` }}>
                        {subtitle}
                        {children}
                    </SubItemsContainer>
                )}
            </Motion>
        </Content>
    )
}

export default LeftContent