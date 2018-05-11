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
    

    @media (max-width: 700px) {
        top: unset;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
        flex-direction: row;
        align-items: flex-end;
        height: 32px;
        

        button {
            height: 16px;
            width: 3px;
            margin: 0 16px 24px;
            &:hover {
                height: 32px;
                width: 3px;
            }
        }
    }
`

const ScrollButton = styled.button`
    background-color: transparent;
    border: transparent 12px solid;
    box-sizing: content-box;
    height: 3px;
    width: 16px;
    padding: 0;
    position: relative;
    margin-bottom: 24px;
    transition: all 0.2s;

    &:hover {
        width: 32px;
    }

    &::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: ${props => props.theme.whiteColor};
    }
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