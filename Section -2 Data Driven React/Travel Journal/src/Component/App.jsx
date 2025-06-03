import Header from "./Header";
import Entry from "./Entry";
import '../index.css';
import data from '../data';



function App(){
const  entryc = data.map(
    function(n){
        return (
        <Entry
            /* entry = {n} */
            {...n}

        /> 
        )
    }
);
    return (
        <>
         <Header />
        
         {entryc}

         
        
       
        </>
       
    )
}

export default App;