

function Entry(props){

console.log(props);
return <>
    <div className="card-container">
    <div className="card">
        <div className="card-img">
            <img src={props.img.src} alt={props.img.alt} />
        </div>
        <div className="card-content">
            <div className="card-location">
                <img src="marker.png" alt="" />
                <h4>{props.country}</h4>
                <a href={props.googleMapsLink} className="gmap">View on Google Maps</a>
            </div>
            <h1 className="card-title">{props.title}</h1>
            
            <div className="date">
                {props.dates}
            </div>
            <div className="details">
                <p>
                {props.text}
                </p>
                        </div>
        </div>
        
    </div>
    </div>
    
    </>
}

export default Entry;

