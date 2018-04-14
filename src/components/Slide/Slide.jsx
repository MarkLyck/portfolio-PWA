import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'react-emotion'
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
    background-color: ${props => props.theme.primaryColor};
    font-size: 1.2rem;
    line-height: 1;
    font-weight: bold;
    padding: 18px 32px;
    border-radius: 50px;
    margin: 16px auto 0 0;
    transition: all 0.2s;
    &:hover {
        transform: translateY(-5px);
    }
`

class BringTheBand extends React.Component {
    state = { animateIn: false, animateOut: false }

    handleScroll = (e) => {
        // console.log('y', window.pageYOffset)
        // console.log('top', ReactDOM.findDOMNode(this).getBoundingClientRect().top)
        // console.log('bottom', ReactDOM.findDOMNode(this).getBoundingClientRect().bottom)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
        console.log('Slide did mount')
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    render() {
        const { project, index } = this.props
        return (
            <ShowcaseContainer>
                <LeftContent
                    title={project.title}
                    subtitle={project.subtitle}
                    children={
                        <React.Fragment>
                            {project.website ? <Link href={project.website} target="_blank" rel="noopener">Website</Link> : ''}
                        </React.Fragment>
                    }
                />
                <Showcase image={project.screenshot} number={String(index + 1).padStart(2, '0')} />
            </ShowcaseContainer>
        )
    }
}

export default BringTheBand