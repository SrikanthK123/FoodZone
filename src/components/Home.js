import React from 'react'
import { Recipes } from './RecipesData'
import {
  Link
} from "react-router-dom";
import { animate, motion} from "framer-motion"

const Home = () => {

  return (
    <motion.div className='HomePage' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0,transition:{duration:0.10}}} >

  <div className='container p-5' style={{marginTop:'50px'}} >
    <div className='ImageBox' style={{display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
        <div className='InsideContent'>
        <h1 className='mx-3 text-white'>Where Every Dish is a Taste of Pure Joy!</h1>
        <p className='text-white px-3'>A culinary adventure where every bite is a masterpiece. Indulge in flavors that redefine enjoyment with our top-notch recipes!</p>
        </div>
        
    </div>
    <p className='text-white p-5' style={{textAlign:'justify'}} >
      Indulge your senses with our latest food adventure on "FoodZone"! Join us in the kitchen as we whip up a mouthwatering [dish name] that's perfect for any occasion. Our step-by-step guide ensures even novice cooks can master this culinary delight. 
    </p>
    <h3 style={{color:'white',borderBottom:'2px solid white',fontFamily:'monospace'}}>Food List</h3>
    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      {
        Recipes.map((item,index)=>(
          <div class="col" >
         <Link to={`/${item.Name}`} style={{textDecoration:'none',listStyle:'none'}}><div class="card" style={{backgroundImage:`linear-gradient(rgb(0 0 0 / 22%),rgba(0, 0, 0, 0.516)),url(${item.image})`,backgroundPosition:'center',backgroundSize:'cover',minHeight:'30vh',minWidth:'40vh'}}>
       
        <strong className='text-white'> {item.Name}
        </strong>
        <div class="card__body text-white ">
            {item.desc}
        </div>
        <span>View Recipe</span>
    </div></Link> 
          </div>
        ))
      }
    </div>
  </div>
</motion.div>

  )
}

export default Home
