import React, { useState } from 'react'
import styled from 'styled-components'

const styles = {
  headingrow: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '30px',
  },
  resultsrow: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '5px',
    backgroundColor: 'white',
    color: '#565679',
  },
  result: {
    flex: '1',
    marginRight: '5px',
    padding: '5px',
    textAlign: 'center'
  },
}

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
            <div style={styles.headingrow}>
              <div style={styles.result}>1/4</div>
              <div style={styles.result}>1/3</div>
              <div style={styles.result}>1/2</div>
              <div style={styles.result}>1 1/2x</div>
              <div style={styles.result}>2x</div>
              <div style={styles.result}>3x</div>
            </div>
            <div style={styles.resultsrow}>
              <div style={styles.result}>{calculate(QUARTER)}</div>
              <div style={styles.result}>{calculate(THIRD)}</div>
              <div style={styles.result}>{calculate(HALF)}</div>
              <div style={styles.result}>{calculate(ONE_AND_HALF)}</div>
              <div style={styles.result}>{calculate(DOUBLE)}</div>
              <div style={styles.result}>{calculate(TRIPLE)}</div>
            </div>
          </>
        )}
      </div>
    </QuantityCalculatorWrapper>
  )
}
