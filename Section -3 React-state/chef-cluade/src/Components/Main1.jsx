function Main1(){
    let ingredients = ["Chicken", "Oregano", "Tomatoes"]

    const ingredient = ingredients.map(n =>
        <li key={n}> {n} </li>
    )
    function HandleForm(event){
        event.preventDefault();
        
        const formData = new FormData(event.currentTarget);
        let data = formData.get("ingrediant");
        ingredients.push(data);
        alert(ingredients);
        alert("form submitted "+data);
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