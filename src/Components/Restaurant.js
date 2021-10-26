import React,{useState} from 'react';
import "./style.css";
import Menu from "./menuApi";
import MenuCard from './MenuCard';
import Nav from "./Nav";



function Restaurant() {
    const uniqueList = [...new Set(Menu.map((curElem)=>{
        return curElem.category;
    })
),"All",]
    
    const [menuData, setMenuData] = useState(Menu);
    const [menuList] = useState(uniqueList);
    const filterItem = (category)=>{
        if(category==="All"){
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((curElem)=>{
            return curElem.category===category;
        });
        setMenuData(updatedList);
    };
    
    return (
        <>
        <Nav filterItem={filterItem} menuList={menuList}/>
        <MenuCard menuData={menuData} menuList={menuList}/>
        
        </>
    )
}

export default Restaurant

