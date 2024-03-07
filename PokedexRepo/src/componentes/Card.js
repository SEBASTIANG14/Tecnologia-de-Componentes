import React, {useState} from 'react';

function Card ({image, name, description, fullDescripcion}){
    const [showFullDescription, setShowFullDescription] = useState(false);
    const handleClick = () => {
        setShowFullDescription(!showFullDescription);
    };
    return(
        <div className={`card ${showFullDescription ? `full-description` : ``}`}>
            <div className="productInfo">
                {!showFullDescription &&(
                    <>
                        <img src={image} alt={name}/>
                        <h2>{name}</h2>
                        <p>{description}</p>
                    </>  
                )}
                <button type="button" onClick={handleClick}>{showFullDescription ? "Ver menos" : "Ver más"}</button>
            </div>
        </div>
    );
}

export default Card;

