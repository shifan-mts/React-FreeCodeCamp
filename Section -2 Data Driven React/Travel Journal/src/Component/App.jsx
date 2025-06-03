import Header from "./Header";
import Entry from "./Entry";
import '../index.css';
import data from '../data';



function App(){
const  entryc = data.map(
    function(n){
        return (
        <Entry
            img = {n.img}
            title = {n.title}
            country = {n.country}
            googleMapsLink = {n.googleMapsLink}
            dates = {n.dates}
            text = {n.text}
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