import React,{useEffect} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { Recipes, SoupsItems } from './RecipesData'

const Soups = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  return (
    <div className='HomePage'>
      <div class="container"  style={{marginTop:'50px'}}>
       <div className='TextVeg' style={{display:'flex',justifyContent:'center'}}>
        <h2 className='p-3 text-white mt-5' style={{backgroundColor:'black',borderRadius:'10px',boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>Soups</h2>
        </div>
        <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-4">
          {
            SoupsItems.map((VegItem,index)=>(
              <div class="col" > 
                     <div class="card" id='VegCards' style={{background:`url(${VegItem.ImageUrl})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'100% 100%',height:'35vh',textAlign:'center'}}>
      <p class="card-title">{VegItem.Name}</p>
      <p class="small-desc">
        {VegItem.desc.slice(0,100)}...
      </p>
      <Link to={`/${VegItem.Name}`} id="ViewLinkVeg"><button type="button" className='btn btn-primary' id='VegViewBtn'>View</button></Link>
      <div class="go-corner">
        <div class="go-arrow">👈</div>
      </div>
    </div>
              </div>
            ))
          }
       
        </div>
  </div>
  </div>
  )
}

export default Soups
