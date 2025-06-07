import { useState } from "react";

function Main1(){
    let [ingredients,setIngredients] = useState([]);

    const ingredient = ingredients.map(n =>
        <li key={n}> {n} </li>
    )
    function HandleForm(event){
        event.preventDefault();
        
        const formData = new FormData(event.currentTarget);
        let data = formData.get("ingrediant");
        setIngredients((t) => [...t,data]);
        
    }
    
    return <>

        <main>
            <form className="input-form" onSubmit={HandleForm}>
                <input 
                    type="text" 
                    aria-label="Add Ingrediant"
                    placeholder="e.g Dosa"
                    name="ingrediant" 
                />
                <button>
                    Add Ingrediant
                </button>
            </form>
            <ul>
                {ingredient}
            </ul>

        </main>
    </>
}



export default Main1;