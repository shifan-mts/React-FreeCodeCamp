import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientList";
import {getRecipeFromMistral} from "../../ai"

function Main1(){
    let [ingredients,setIngredients] = useState(['tomato','potato','brinjal','water']);
    const [recipe,setRecipe] = useState();

async  function getRecipe(){
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown)
  }
   
   function formAction(data){
        let item = data.get('ingrediant');
        setIngredients(
            (ing)=> [...ing,item]
        )
   }
    
    return <>

        <main>
            <form className="input-form" action = {formAction}>
                <input 
                    type="text" 
                    aria-label="Add Ingrediant"
                    placeholder="e.g Thakkali"
                    name="ingrediant" 
                />
                <button>
                    Add Ingrediant
                </button>

                
               
            </form>

            <IngredientsList ingredients={ingredients}
            func ={getRecipe}/>
            {recipe && <ClaudeRecipe 
                recipe = {recipe}
            
            />
            }
         
        </main>
    </>
}



export default Main1;