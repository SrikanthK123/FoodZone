import React from 'react'
import {
    
    Route,
    Link,useLocation, Switch
  } from "react-router-dom";
  import SingleRecipe from './SingleRecipe';
  import Home from './Home';
  import About from './About'
  import {AnimatePresence} from "framer-motion"
  import {AllRecipesprocess} from "./RecipesData"
import AllRecipeProcess from './AllRecipeProcess';
import VegetarianRecipes from './VegetarianRecipes';
import Soups from './Soups';
import Salads from './Salads';
import MainDishes from './MainDishes';
import Desserts from './Desserts';
import SpecialRecipe from './SpecialRecipe';
import FavouriteRecipes from './FavouriteRecipes';
import MakeUserRecipe from './MakeUserRecipe';


const AnimationRouters = () => {
    const location = useLocation();
  return (
    <AnimatePresence>
     
    <Switch location={location} key={location.pathname}>
    <Route exact path="/FoodZone"><Home/></Route>
   <Route exact path="/SingleRecipe"><SingleRecipe/></Route>
   <Route exact path="/About" ><About/></Route>
   {
     
                    AllRecipesprocess.map((recipe, index) => (
                      <Route exact path={`/${recipe.Name}`}>
                        <AllRecipeProcess
                            key={index}
                            Name={recipe.Name}
                            ytLink={recipe.ytLink}
                            InstructionImage={recipe.InstructionImage}
                            InstructionPara1={recipe.InstructionPara1}
                            IngredientsImage={recipe.IngredientsImage}
                            IngredientsPara={recipe.IngredientsPara}
                            TipsImage={recipe.TipsImage}
                            TipsPara={recipe.TipsPara}

                        />
                        </Route>
                    ))
                    
                }
                <Route exact path="/Vegetarian"><VegetarianRecipes/></Route>
                <Route exact path="/Soups"><Soups/></Route>
                <Route exact path="/Salads"><Salads/></Route>
                <Route exact path="/Main Dishes"><MainDishes/></Route>
                <Route exact path="/Desserts"><Desserts/></Route>
                <Route exact path="/SpecialRecipe"><SpecialRecipe/></Route>
                <Route exact path="/FavouriteRecipes"><FavouriteRecipes/></Route>
                <Route exact path="/UserRecipe"><MakeUserRecipe/></Route>
  
    </Switch>
    </AnimatePresence>
  )
}

export default AnimationRouters
