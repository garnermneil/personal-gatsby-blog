import React, { useState } from 'react'
import styled from 'styled-components'

const QuantityCalculatorWrapper = styled.section`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #565679;
  color: white;
  padding: 25px;
`

const Labels = styled.label`
  margin-right: 20px;
`

const QuantityInput = styled.input`
  margin-top: 15px;
  padding: 10px;
  color: #565679;
  font-size: 16px;
`

const ResultsRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  background-color: white;
  color: #565679;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const RowCell = styled.div`
  flex: 1;
  marginright: 5px;
  padding: 5px;
  textalign: center;
`

const ResultCell = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 5px;
  }
`

const RowCellHeading = styled(ResultCell)`
  background-color: #565679;
  color: white;
`

export const QuantityCalculator = () => {
  const [quantity, setQuantity] = useState(undefined)

  const QUARTER = 0.25
  const THIRD = 0.33
  const HALF = 0.5
  const ONE_AND_HALF = 1.5
  const DOUBLE = 2
  const TRIPLE = 3

  const calculate = multiplier => {
    const quantityValue = parseFloat(quantity)
    return quantity ? (quantityValue * multiplier).toFixed(2) : ''
  }

  return (
    <QuantityCalculatorWrapper>
      <h3>Want to adjust the values?</h3>
      <div>
        <Labels for="quantity">Quantity to convert</Labels>
        <QuantityInput
          id="quantity"
          type="text"
          value={quantity}
          onChange={event => setQuantity(event.target.value)}
        />
      </div>
      <div>
        {quantity && (
          <>
            <ResultsRow>
              <ResultCell>
                <RowCellHeading>1/4</RowCellHeading>
                <RowCell>{calculate(QUARTER)}</RowCell>
              </ResultCell>
              <ResultCell>
                <RowCellHeading>1/3</RowCellHeading>
                <RowCell>{calculate(THIRD)}</RowCell>
              </ResultCell>
              <ResultCell>
                <RowCellHeading>1/2</RowCellHeading>
                <RowCell>{calculate(HALF)}</RowCell>
              </ResultCell>
              <ResultCell>
                <RowCellHeading>1 1/2x</RowCellHeading>
                <RowCell>{calculate(ONE_AND_HALF)}</RowCell>
              </ResultCell>
              <ResultCell>
                <RowCellHeading>2x</RowCellHeading>
                <RowCell>{calculate(DOUBLE)}</RowCell>
              </ResultCell>
              <ResultCell>
                <RowCellHeading>3x</RowCellHeading>
                <RowCell>{calculate(TRIPLE)}</RowCell>
              </ResultCell>
            </ResultsRow>
            <ResultsRow></ResultsRow>
          </>
        )}
      </div>
    </QuantityCalculatorWrapper>
  )
}
