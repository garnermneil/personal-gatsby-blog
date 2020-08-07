import React, { useState } from 'react'
import styled from 'styled-components'

const QUARTER = 0.25
const HALF = 0.5
const FULL = 0
const DOUBLE = 2

const RecipeContainer = styled.section`
  margin-top: 20px;
`

const IngredientsContainer = styled.section`
  width: 100%;
  margin: 0px auto 25px auto;
`

const IngredientContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: minmax(75px, 25%) 1fr;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const MethodContainer = styled.div`
  margin-bottom: 15px;
`

const AdjustQuantityContainer = styled.section`
  width: 60%;
  margin: 0px auto 20px auto;
  display: flex;

  @media (max-width: 768px) {
    width: 90%;
  }
`
const StyledCheckbox = styled.label`
  /* Center the content horizontally */
  align-items: center;
  display: inline-flex;

  /* Cursor */
  cursor: pointer;
  color: ${props => props.textColour};
`

const HiddenCheckbox = styled.input`
  display: none;
`

const SELECTED_BACKGROUND = '#101965'
const NOT_SELECTED_BACKGROUND = '#898cbb'

const Quantity = styled.p`
  flex: 1;
  cursor: pointer;
  margin: 5px;
  background-color: ${props =>
    props.backgroundColour || NOT_SELECTED_BACKGROUND};
  color: white;
  text-align: center;
  border-radius: 5px;
  padding: 3px;
  font-size: 0.75em;
`

const AdjustQuantity = ({ quantityMultiplier, updateMultiplier }) => {
  return (
    <>
      <h4>Adjust quantity</h4>
      <AdjustQuantityContainer>
        <Quantity
          onClick={() => updateMultiplier(QUARTER)}
          backgroundColour={
            quantityMultiplier === QUARTER
              ? SELECTED_BACKGROUND
              : NOT_SELECTED_BACKGROUND
          }
        >
          Quarter
        </Quantity>
        <Quantity
          onClick={() => updateMultiplier(HALF)}
          backgroundColour={
            quantityMultiplier === HALF
              ? SELECTED_BACKGROUND
              : NOT_SELECTED_BACKGROUND
          }
        >
          Half
        </Quantity>
        <Quantity
          onClick={() => updateMultiplier(FULL)}
          backgroundColour={
            quantityMultiplier === FULL
              ? SELECTED_BACKGROUND
              : NOT_SELECTED_BACKGROUND
          }
        >
          Full
        </Quantity>
        <Quantity
          onClick={() => updateMultiplier(DOUBLE)}
          backgroundColour={
            quantityMultiplier === DOUBLE
              ? SELECTED_BACKGROUND
              : NOT_SELECTED_BACKGROUND
          }
        >
          Double
        </Quantity>
      </AdjustQuantityContainer>
    </>
  )
}

const formatQuantity = (quantity, quantityMultiplier) => {
  const value = quantity * quantityMultiplier
  const hasDecimal = value - Math.floor(value) !== 0

  return value.toFixed(hasDecimal ? 2 : 0)
}

const Ingredient = ({ ingredient, quantityMultiplier }) => {
  const updatedQuantity =
    ingredient.amount && quantityMultiplier > 0
      ? formatQuantity(ingredient.amount, quantityMultiplier)
      : ingredient.amount

  return (
    <IngredientContainer>
      <span>{updatedQuantity && `${updatedQuantity} ${ingredient.unit != null ? ingredient.unit : ''}`}</span>
      <span>{ingredient.name}</span>
    </IngredientContainer>
  )
}

const FakeSquare = styled.div`
  border: 1px solid #01087C;
  border-radius: 4px;

  /* Spacing */
  margin-right: 8px;
  //padding: 4px;
`

const InnerSquare = styled.div`
  border-radius: 4px;
  height: 20px;
  width: 20px;

  background-color: ${props =>
    props.backgroundColour || 'transparent'};
`

const Method = ({ method, index }) => {
  const [selected, setSelected] = useState(false)

  return (
    <MethodContainer>
      <StyledCheckbox textColour={selected ? '#d0d1d4' : '#3E4047'}>
        <HiddenCheckbox id={`check-${index}`} type="checkbox" checked={selected}></HiddenCheckbox>
          <FakeSquare onClick={() => setSelected(!selected)}>
            <InnerSquare backgroundColour={selected ? '#01087C' : undefined}>
            </InnerSquare>  
          </FakeSquare>
        {method}  
      </StyledCheckbox>     
    </MethodContainer>
  )
}

export const Recipe = ({ recipe }) => {
  const [quantityMultiplier, setQuantityMultiplier] = useState(0)

  return (
    <RecipeContainer>
      <AdjustQuantity
        quantityMultiplier={quantityMultiplier}
        updateMultiplier={setQuantityMultiplier}
      />

      <IngredientsContainer>
        <h3>Ingredients</h3>

        <ol>
          {recipe &&
            recipe.ingredients.length > 0 &&
            recipe.ingredients.map((recipe, index) => (
              <Ingredient
                key={index}
                ingredient={recipe}
                quantityMultiplier={quantityMultiplier}
              />
            ))}
        </ol>
      </IngredientsContainer>
      <section>
        <h3>Method</h3>
        <ol>
          {recipe &&
            recipe.method.length > 0 &&
            recipe.method.map((method, index) => (
              <Method key={index} method={method} index={index} />
            ))}
        </ol>
      </section>
    </RecipeContainer>
  )
}
