import React from 'react'
import styled from 'styled-components'

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
`

const MethodContainer = styled.div`
  margin-bottom: 15px;
`

const Ingredient = ({ ingredient }) => {
  return (
    <IngredientContainer>
      <span>
        {ingredient.amount && `${ingredient.amount} ${ingredient.unit}`}
      </span>
      <span>{ingredient.name}</span>
    </IngredientContainer>
  )
}

const Method = ({ method }) => {
  return (
    <MethodContainer>
      <span>{method}</span>
    </MethodContainer>
  )
}

export const Recipe = ({ recipe }) => {
  return (
    <RecipeContainer>
      <IngredientsContainer>
        <h3>Ingredients</h3>
        <ol>
          {recipe &&
            recipe.ingredients.length > 0 &&
            recipe.ingredients.map((recipe, index) => (
              <Ingredient key={index} ingredient={recipe} />
            ))}
        </ol>
      </IngredientsContainer>
      <section>
        <h3>Method</h3>
        <ol>
          {recipe &&
            recipe.method.length > 0 &&
            recipe.method.map((method, index) => (
              <Method key={index} method={method} />
            ))}
        </ol>
      </section>
    </RecipeContainer>
  )
}
