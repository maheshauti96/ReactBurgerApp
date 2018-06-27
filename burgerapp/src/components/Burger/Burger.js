import React from 'react';
import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
const burger=(props)=>{

    let transformedIngredients = Object.keys(props.ingredients)
    .map(igkey => {
        return [...Array(props.ingredients[igkey])].map((_,i)=>{
            
            return <BurgerIngredients key={igkey + i} type={igkey}/>
        });
      }).reduce((arr,el)=>{return arr.concat(el)},[])
    //  console.log("transformedIngredientsi is -->",transformedIngredients);

      if(transformedIngredients.length===0){
          transformedIngredients=<p>Plese start adding ingredients</p>
      }
    return(
        <div className={classes.Burger}>
        <BurgerIngredients type="bread-top"/>
        {transformedIngredients}
        <BurgerIngredients type="bread-bottom"/>
        </div>
    );
};
export default burger;