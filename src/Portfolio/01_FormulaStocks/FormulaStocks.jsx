import React from 'react'
import styled from 'react-emotion'
import LeftContent from 'components/LeftContent'
import Showcase from 'components/Showcase'
import screenshot from './fs_screenshot.jpg'

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

class FormulaStocks extends React.Component {
    componentDidMount() {
        console.log('component did mount')
    }

    render() {
        return (
            <ShowcaseContainer>
                <LeftContent
                    title={<span>Formula<br/>Stocks</span>}
                    subtitle={
                        <span>
                            Beat the stock market with
                            <br/>
                            an +89% winrate using AI.
                        </span>
                    }
                    children={
                        <React.Fragment>
                            <Link href="https://formulastocks.com" target="_blank" rel="noopener">Website</Link>
                        </React.Fragment>
                    }
                />
                <Showcase image={screenshot} number="01" />
            </ShowcaseContainer>
        )
    }
}

export default FormulaStocks