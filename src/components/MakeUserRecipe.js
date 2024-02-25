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
  ;

  
  return (
    <div className='HomePage' style={{ minHeight: '100vh' }}>
 <div class="container" style={{marginTop:'50px'}}>
<div className='TextVeg' style={{display:'flex',justifyContent:'center'}}>
 <h2 className='p-3 text-white mt-5' style={{backgroundColor:'black',borderRadius:'10px',boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>User Recipe</h2>
 </div>
 {
   recipes.length === 0 ? (
       <div style={{width:'100%',height:'75vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
           <h3 style={{ textAlign: 'center', marginTop: '20px' ,color:'white'}}>Add Your Recipe.</h3>
           </div>
       
       ) : (
           <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-4">
   {
     recipes.map((data,index)=>(
       <div class="col-md-12" > 
          <div class="card mb-3" style={{maxWidth: "540px",}}>
  <div class="row g-0">
    <div class="" style={{display:'flex',alignItems:'center'}}>
    <img src={`${data.ImageURL}`} className="img-fluid rounded-start" alt="recipes" />
    </div>
    <div className="col-md-8 mx-auto">
                      <div className="card-body text-center">
                        <h5 className="card-title">{data.userName}</h5>
                        <p className="card-text">{data.recipeName}</p>
                        <p className="card-text">{data.selectedRecipe}</p>
                        <p className="card-text">{data.ingredients}</p>
                        <p className="card-text">{data.instructions.slice(0, 150)}....</p>
                      </div>
                      <div id="ViewLinkVeg" style={{ textAlign: 'center', margin: '10px' }}>
                        <button type="button" id='VegViewBtn' className="btn btn-outline-primary" onClick={() => handleRemoveClick(data.recipeName)}>Remove</button>
                      </div>
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

