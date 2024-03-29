import React,{useEffect} from 'react'
import { Recipes } from './RecipesData'
import {
  Link
} from "react-router-dom";
import { animate, motion} from "framer-motion"
import MainImg from "../assets/Food.gif"

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 


  return (
    <motion.div className='HomePage' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0,transition:{duration:0.10}}} >

  <div className='container py-3' style={{marginTop:'50px'}} >
    <div className='ImageBox' style={{display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
        <div className='InsideContent'>
        <h1 className='mx-3 text-white' >Where Every Dish is a Taste of Pure Joy!</h1>
        <p className='text-white px-3'>A culinary adventure where every bite is a masterpiece. Indulge in flavors that redefine enjoyment with our top-notch recipes!</p>
        </div>
       {/**<img src="https://cdn.pixabay.com/photo/2020/12/31/12/28/cook-5876388_960_720.png" style={{width:'500px'}}/> */} 
        
    </div>
    <p className=' py-2' style={{textAlign:'justify',color:'black'}} >
      Indulge your senses with our latest food adventure on "FoodZone"! Join us in the kitchen as we whip up a mouthwatering recipes that's perfect for any occasion. Our step-by-step guide ensures even novice cooks can master this culinary delight. 
    </p>
    <h3 style={{color:'#c3195d',borderBottom:'2px solid white',fontFamily:'monospace',fontWeight:'800'}}>Food List</h3>
    <div className='container' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
  
    </div>
    <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      {
        Recipes.map((item,index)=>(
          <div class="col" >
         <Link to={`/${item.Name}`} style={{textDecoration:'none',listStyle:'none'}}>

         <div class="card">
    <div class="card-image" style={{background:`url(${item.image})`,backgroundPosition:'center',backgroundSize:'100% 100%'}}></div>
    <div class="category"> {item.Name} </div>
    <div class="heading"> {item.desc}
    </div>
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
