import React from 'react'
import styled from 'react-emotion'
import scrollToComponent from 'react-scroll-to-component'

const ScrollNavContainer = styled.div`
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    left: 64px;
    z-index: 100;
    display: flex;
    flex-direction: column;
`

const ScrollButton = styled.button`
    background: ${props => props.theme.whiteColor};
    height: 3px;
    width: 16px;
    border: none;
    padding: 0;
    margin-bottom: 40px;
    transition: all 0.2s;
`

class Navigation extends React.Component {
    handleClick = (section) => {
        console.log('click')
        scrollToComponent(section, { offset: 0, align: 'top', duration: 500 })
    }

    render() {
        const { sections, heroSection, keys } = this.props

        return (
            <ScrollNavContainer>
                <ScrollButton onClick={() => this.handleClick(heroSection)} key={heroSection} />
                {sections.map((section, i) => (
                    <ScrollButton onClick={() => this.handleClick(section)} key={keys[i]} />)
                )}
            </ScrollNavContainer>
        )
    }
}

export default Navigation