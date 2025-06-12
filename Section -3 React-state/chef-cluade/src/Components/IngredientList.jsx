function IngredientsList(props){
    const ingredient = props.ingredients.map(n =>
        <li key={n}> {n} </li>
    )
    return <>

    
        {ingredient.length > 0 &&
    <section>
        <h2>Ingredients on hand:</h2>
        <ul className="ingredients-list" aria-live="polite">{ingredient}</ul>
       {ingredient.length > 3 && <div className="get-recipe-container">
            <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={props.func}>Get a recipe</button>
        </div> }
    </section> }
    </>
}

export default IngredientsList