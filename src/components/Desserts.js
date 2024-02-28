import React,{useEffect} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { Recipes, DessertsItems } from './RecipesData'

const Desserts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <div className='HomePage'>
    <div class="container" style={{marginTop:'50px'}}>
     <div className='TextVeg' style={{display:'flex',justifyContent:'center'}}>
      <h2 className='p-3 text-white mt-5' style={{backgroundColor:'black',borderRadius:'10px',boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>Desserts</h2>
      </div>
      <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      {
        DessertsItems.map((item,index)=>(
          <div class="col" >
         <Link to={`/${item.Name}`} style={{textDecoration:'none',listStyle:'none'}}>

         <div class="card">
    <div class="card-image" style={{background:`url(${item.ImageUrl})`,backgroundPosition:'center',backgroundSize:'100% 100%'}}></div>
    <div class="category"> {item.Name} </div>
    <div class="heading">  {item.desc.slice(0,100)}...
    </div>
    </div></Link> 
          </div>
        ))
      }
    </div>
</div>
</div>
  )
}

export default Desserts
