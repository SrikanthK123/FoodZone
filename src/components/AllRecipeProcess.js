import React, { useEffect, useState } from 'react';
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Instruction from './Instruction';
import { animate, motion } from "framer-motion"
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';
import AddedBellsound from "../assets/Bell_Success.wav"

const AllRecipeProcess = (props) => {
  const [alertMessage, setAlertMessage] = useState('');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const playAudio = () => {
    const audio = new Audio(AddedBellsound);
    audio.play();
  };

  const dispatch = useDispatch();

  const addToFavourite = (props) => {
    dispatch(add(props));
    playAudio(); 
    
  };
  

  return (
    <motion.div className='HomePage' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.1 } }} >
      <div className='SingleVideoBox' style={{ width: '100%', height: '80vh' }}>
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90%' }}>
          
          <iframe
            src={`https://www.youtube.com/embed/${props.ytLink}?autoplay=5&mute=1`}
            style={{ width: '450px', height: '300px', marginTop: '40px', border: '2px solid white', borderRadius: '15px' }}
            title="YouTube video"
            allowFullScreen>
          </iframe>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <ul style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '50px', marginBottom: '20px' }}>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" id='LikeIcon' fill="currentColor" onClick={() => addToFavourite(props)} class="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
              </svg>
            </li>
          </ul>
        </div>
      </div>

      <div className='container' >
        <h2 style={{ borderBottom: '2px solid white', padding: '10px', fontFamily: 'monospace', color: 'white' }}><span style={{ color: '#ffb5b5' }}>{props.Name}</span> Process</h2>
        <div>
          <div class="bd-example-snippet bd-code-snippet"><div class="bd-example m-0 border-0">
            <nav style={{ display: 'flex', justifyContent: 'center' }}>
              <div class="nav nav-tabs mb-3 gap-3 my-4" id="nav-tab" role="tablist" >
                <button class="nav-link active" id="nav-Instruction-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true" style={{ backgroundColor: '#a2a8d3' }}>Instruction</button>
                <button class="nav-link" id="nav-Ingredients-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false" tabindex="-1" style={{ backgroundColor: '#a2a8d3' }}>Ingredients</button>
                <button class="nav-link" id="nav-Tips-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false" tabindex="-1" style={{ backgroundColor: '#a2a8d3' }}>Tips </button>
              </div>
            </nav>
            <div class="tab-content" id="nav-tabContent" style={{ minHeight: '35vh' }}>
              <div class="tab-pane fade show active text-white lead" id="nav-home" role="tabpanel" aria-labelledby="nav-Instruction-tab">
                <div className='ImageInstruction my-4' style={{ display: 'flex', justifyContent: 'center' }}>
                  <img src={props.InstructionImage} style={{ width: '300px', height: '300px', marginTop: '40px', border: '2px solid white', borderRadius: '15px' }} alt="gif" />
                </div>
                <ol>
                  {props.InstructionPara1.split('.').map((sentence, index) => (
                    <li key={index}>{sentence.trim()}</li>
                  ))}
                </ol>
              </div>
              <div class="tab-pane fade text-white lead" id="nav-profile" role="tabpanel" aria-labelledby="nav-Ingredients-tab">
                <div className='ImageInstruction my-4' style={{ display: 'flex', justifyContent: 'center' }}>
                  <img src={props.IngredientsImage} style={{ width: '300px', height: '300px', marginTop: '40px', border: '2px solid white', borderRadius: '15px' }} alt="gif" />
                </div>
                <ul>
                  {props.IngredientsPara.split('.').map((sentence, index) => (
                    <li key={index}>{sentence.trim()}</li>
                  ))}
                </ul>
              </div>
              <div class="tab-pane fade text-white lead" id="nav-contact" role="tabpanel" aria-labelledby="nav-Tips-tab">
                <div className='ImageInstruction my-4' style={{ display: 'flex', justifyContent: 'center' }}>
                  <img src={props.TipsImage} style={{ width: '300px', height: '300px', marginTop: '40px', border: '2px solid white', borderRadius: '15px' }} alt="gif" />
                </div>
                <p>Here are some tips and tricks to enhance your {props.Name}:</p>
                <ul>
                  {props.TipsPara.split('.').map((sentence, index) => (
                    <li key={index}>{sentence.trim()}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div></div>
        </div>
      </div>
    </motion.div>
  )
}

export default AllRecipeProcess;
