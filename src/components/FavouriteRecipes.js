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
                <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-4">
        {
          FavouriteProduct.map((VegItem,index)=>(
            <div class="col-md-12" > 
                   <div class="card" id='VegCards' style={{background:`url(${VegItem.IngredientsImage})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'100% 100%',height:'35vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <p class="card-title">{VegItem.Name}</p>
    <div id="ViewLinkVeg" style={{ display: 'flex', gap: '10px' }}>
  <Link to={`/${VegItem.Name}`}>
    <button type="button" className='btn btn-primary' id='VegViewBtn'>View</button>
  </Link>
  <div id="ViewLinkVeg">
    <button type="button" id='VegViewBtn' className="btn btn-outline-primary" onClick={() => removeItem(VegItem.Name)}>Remove</button>
  </div>
</div>

    <div class="go-corner">
      <div class="go-arrow">👈</div>
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
  )
}

export default FavouriteRecipes
