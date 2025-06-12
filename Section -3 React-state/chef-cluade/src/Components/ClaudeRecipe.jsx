import ReactMarkdown from 'react-markdown'
function ClaudeRecipe(props){
    return <>
        <section className='suggested-recipe-container'>
            <h2>Our Chef Ai Recommends</h2>
            <ReactMarkdown>
                {props.recipe}
            </ReactMarkdown>
            
        </section>

            
    </>
}

export default ClaudeRecipe