import React from 'react'
import styled from 'react-emotion'
import { darken } from 'polished'
import LeftContent from 'components/LeftContent'
import Showcase from 'components/Showcase'

const ShowcaseContainer = styled.div`
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
`

const Link = styled.a`
    color: ${props => props.theme.whiteColor};
    background-color: ${props => props.color};
    font-size: 1.2rem;
    line-height: 1;
    font-weight: bold;
    padding: 18px 32px;
    border-radius: 50px;
    margin: 16px auto 0 0;
    transition: all 0.1s;
    border: 1px solid ${props => props.color};
    color: #FFFFFF;
    text-shadow: none;
    box-shadow: 0 8px 0 0 ${props => darken(0.15, props.color)};
    &:hover {
        color: #FFFFFF;
        text-decoration: none;
        border: 1px solid ${props => darken(-0.05, props.color)};
        background-color: ${props => darken(-0.05, props.color)};
    }
    &:active {
        color: #FFFFFF;
        transform: translateY(0.25rem);
        box-shadow: 0 0 0 0 ${props => darken(0.1, props.color)};
    }
`

class Slide extends React.Component {
    state = { animateIn: false, animateOut: false }

    // handleScroll = (e) => {
    //     // console.log('y', window.pageYOffset)
    //     // console.log('top', ReactDOM.findDOMNode(this).getBoundingClientRect().top)
    //     // console.log('bottom', ReactDOM.findDOMNode(this).getBoundingClientRect().bottom)
    // }

    // componentDidMount() {
    //     window.addEventListener('scroll', this.handleScroll)
    //     console.log('Slide did mount')
    // }

    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.handleScroll)
    // }

    render() {
        const { slide, index, imageType } = this.props
        return (
            <ShowcaseContainer>
                <LeftContent
                    title={slide.title}
                    subtitle={slide.subtitle}
                    color={slide.color}
                    children={
                        <React.Fragment>
                            {slide.website ? <Link href={slide.website} color={slide.color} target="_blank" rel="noopener">Website</Link> : ''}
                        </React.Fragment>
                    }
                />
                <Showcase webpImage={slide.webpImage} image={slide.image} imageType={imageType} number={String(index + 1).padStart(2, '0')} color={slide.color} />
            </ShowcaseContainer>
        )
    }
}

export default Slide