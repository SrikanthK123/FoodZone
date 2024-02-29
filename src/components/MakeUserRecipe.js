import React, { useState ,useEffect} from 'react';
import { Recipes } from './RecipesData';
import { useDispatch,useSelector } from 'react-redux';
import { removeRecipe } from '../store/recipeSlice';

const MakeUserRecipe = () => {

  
  const recipes = useSelector((state) => state.recipes);
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  const handleRemoveClick = (recipeName) => {
    dispatch(removeRecipe(recipeName));
  };
  const maxIngredientsLength = 60;
  const maxInstructionsLength = 80;
  ;

  
  return (
    <div className='HomePage' style={{ minHeight: '100vh' }}>
 <div class="container" style={{marginTop:'50px'}}>
<div className='TextVeg' style={{display:'flex',justifyContent:'center'}}>
 <h2 className='p-3 mt-5 text-white' style={{backgroundColor:'#5c5470',borderRadius:'10px',boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>User Recipe</h2>
 </div>
 {
   recipes.length === 0 ? (
       <div style={{width:'100%',height:'75vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
           <h3 style={{ textAlign: 'center', marginTop: '20px' ,color:'black'}}>Add Your Recipe.</h3>
           </div>
       
       ) : (
        <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        {
          recipes.map((data,index)=>(
            <div class="col" >
  
           <div class="card">
      <div class="card-image" style={{background:`url(${data.ImageURL})`,backgroundPosition:'center',backgroundSize:'100% 100%'}} ></div>
      <div class="category"> {data.userName} </div>
      <div className="heading">
        <span>ingredients : </span>
        {data.ingredients.length <= maxIngredientsLength
          ? data.ingredients
          : `${data.ingredients.slice(0, maxIngredientsLength)}...`}
      </div>

      <div className="heading">
        <span>instructions : </span>
        {data.instructions.length <= maxInstructionsLength
          ? data.instructions
          : `${data.instructions.slice(0, maxInstructionsLength)}...`}
      </div>
      <div className='card-footer' style={{textAlign:'center',backgroundColor:'#e7eaf6'}}>
      
   
      <div id="ViewLinkVeg " style={{padding:'10px'}} >
        <button type="button" id='VegViewBtn' className="btn btn-outline-primary "onClick={() => handleRemoveClick(data.recipeName)}>Remove</button>
      </div>
    
         </div>
      </div> 
            </div>
          ))
        }
      </div>
   )
 }
 

 
</div>
    </div>
  );
};


export default MakeUserRecipe;

