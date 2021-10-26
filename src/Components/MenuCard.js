import React from 'react'
import Menu from './Menu'


    const MenuCard = ({menuData}) =>{
    return (
        <>
        
        <section className="main-card--cointainer"> 
            {menuData.map((curElem, key)=>{
                const {id, name, image, description ,price} = curElem;
                 return(
                     <>
                    <Menu id={id} name={name} description = {description} image={image} price={price} key={key}/>
                     </>
                
                 )
            })}
        </section>
        
        
        
        
        </>
    )
}

export default MenuCard
