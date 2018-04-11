import React from 'react'
import styled from 'react-emotion'

const ShowCaseContainer = styled('div')`
    height: 100vh;
`

class FormulaStocks extends React.Component {
    componentDidMount() {
        console.log('component did mount')
    }

    render() {
        return (
            <ShowCaseContainer>
                Formula Stocks
            </ShowCaseContainer>
        )
    }
}

export default FormulaStocks