import React from 'react'
import styled from 'react-emotion'
import LeftContent from 'components/LeftContent'

const ShowcaseContainer = styled.div`
    height: 100vh;
    position: relative;
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
                            AI that beats the stock market
                            <br/>
                            with a +89% winrate
                        </span>
                    }
                    link="https://formulastocks.com"
                />
            </ShowcaseContainer>
        )
    }
}

export default FormulaStocks