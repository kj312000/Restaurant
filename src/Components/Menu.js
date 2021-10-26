import React,{useState}from "react";
import ReactCardFlip from "react-card-flip";

const Menu = ({id, name, image, description ,price}) => {
    console.log(price)
  const [isFlipped, setisFlipped] = useState(false);
    const handleClick = ()=> {
        setisFlipped(!isFlipped)
    }
  return (
    <>
      
        <div className="card-container">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">{name}</h4>
                            <br></br>
                            <div>                        
                            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                                <section>
                                    <div  className="card-media" onMouseOver={handleClick}>
                                        <img src={image} alt="images" className="card-media"></img>
                                    </div>
                                </section>
                                <section>
                                    <div onMouseOutCapture={handleClick}>
                                        <span className="card-description">
                                        {description}
                                        </span>
                                    </div>
                                </section>
                            </ReactCardFlip>                      
                            <br></br>
                            <h3 className="price">{price}</h3>
                            <span className="card-tag">Order now</span>
                            </div>                    
                        </div>
                    </div>
                </div>
    </>
  );
};

export default Menu
