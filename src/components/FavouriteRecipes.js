import React,{useEffect} from 'react'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { remove } from '../store/cartSlice'
import { Dispatch } from '@reduxjs/toolkit'



const FavouriteRecipes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
    const FavouriteProduct = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const removeItem = (Name) => {
            dispatch(remove(Name))
            console.log(Name)
    }
  return (
    <div className='HomePage' style={{minHeight:'100vh'}}>
        <div class="container" style={{marginTop:'50px'}}>
     <div className='TextVeg' style={{display:'flex',justifyContent:'center'}}>
      <h2 className='p-3 text-white mt-5' style={{backgroundColor:'black',borderRadius:'10px',boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>Favourite Product</h2>
      </div>
      {
        FavouriteProduct.length === 0 ? (
            <div style={{width:'100%',height:'75vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <h3 style={{ textAlign: 'center', marginTop: '20px' ,color:'white'}}>No favorite items 😞.</h3>
                </div>
            
            ) : (
              <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
              {
                FavouriteProduct.map((item,index)=>(
                  <div class="col " style={{background:'grey',borderRadius:'10px'}} >
        
                 <div class="card mt-2">
            <div class="card-image" style={{background:`url(${item.IngredientsImage})`,backgroundPosition:'center',backgroundSize:'100% 100%'}}></div>
            
            </div>
            <div class="category my-2 text-white" > {item.Name}
            <div id="ViewLinkVeg" style={{ display: 'flex', gap: '10px',padding:'10px',justifyContent:'center' }}>
          <Link to={`/${item.Name}`}>
            <button type="button" className='btn btn-primary' id='VegViewBtn'>View</button>
          </Link>
          <div id="ViewLinkVeg">
            <button type="button" id='VegViewBtn' className="btn btn-outline-primary" onClick={() => removeItem(item.Name)}>Remove</button>
          </div>
        </div> </div>
                  </div>
                ))
              }
            </div>
      
        )
      }
    
      
      
</div>
    </div>
  )
}

export default FavouriteRecipes
