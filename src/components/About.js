import React, { useState, useEffect } from 'react';
import { animate, motion } from 'framer-motion';
import { Recipes } from './RecipesData';
import { useDispatch, useSelector } from 'react-redux';
import { addRecipe } from '../store/recipeSlice';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const About = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    userName: '',
    recipeName: '',
    ImageURL: '',
    selectedRecipe: '',
    ingredients: '',
    instructions: '',
  });

  const [submittedData, setSubmittedData] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [successalert,setSuccessalert] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedRecipe: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.userName.trim() === '' ||
      formData.recipeName.trim() === '' ||
      formData.ImageURL.trim() === '' ||
      formData.selectedRecipe.trim() === '' ||
      formData.ingredients.trim() === '' ||
      formData.instructions.trim() === ''
    ) {
      setAlertMessage(' 👎Please fill in all the fields.');

      setTimeout(() => {
        setAlertMessage('');
      }, 2000);
    } else {
      const newData = { ...formData };
      dispatch(addRecipe(newData));
      setSubmittedData((prevData) => [...prevData, newData]);
      setSubmitted(true);
      setFormData({
        userName: ' ',
        recipeName: ' ',
        ImageURL: ' ',
        selectedRecipe: ' ',
        ingredients: ' ',
        instructions: ' ',
      });
  
      setSuccessalert('👍 Successfully added');
    } 
    window.scrollTo(0, 0);
  };        

  return (
    <motion.div
      className="HomePage"
      style={{ minHeight: '100vh' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <div className="container mt-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: '800px', margin: 'auto' }}>
        <form style={{ width: '100%', padding: '10px' }}>
        {alertMessage && (
            <div className="alert mx-auto mt-4" role="alert" style={{ maxWidth: '300px',backgroundColor:'#5c5470',color:'white' }}>
              {alertMessage}
            </div>
          )}
         {successalert && (
          <div className="alert mx-auto mt-4" role="alert" style={{ maxWidth: '300px', backgroundColor: '#5c5470', color: 'white',textAlign:'center'}}>
            {successalert}
            <div style={{ display: 'flex', gap: '10px', padding: '20px' }}>
             <Link to="/UserRecipe"> <button type="button" className='btn btn-primary' id='VegViewBtn'>View</button></Link>
              <div>
              <button type="button" id='VegViewBtn' className="btn btn-outline-primary" onClick={() => setSuccessalert('')} >Close</button>

              </div>
            </div>
          </div>
        )}
          <h1 className="h3 mb-3 fw-700  " style={{ paddingTop: '15px',color:'#c3195d',fontFamily:'monospace'}}>
            <img src="https://cdn-icons-png.flaticon.com/512/6347/6347316.png" alt="recipe" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
            Make Your Recipe
          </h1>

        

          <div className="form-floating">
            <input type="text" className="form-control my-3" onChange={handleChange} name="userName" id="floatingInput" placeholder="Name" style={{ width: '100%' }} />
            <label htmlFor="floatingInput">User Name</label>
          </div>
          <div className="form-floating">
            <input type="text" className="form-control my-3" onChange={handleChange} name="recipeName" id="floatingInput" placeholder="Recipe" style={{ width: '100%' }} />
            <label htmlFor="floatingInput">Recipe Name (unique name)</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control my-3"
              onChange={handleChange}
              name="ImageURL"
              id="floatingInput"
              placeholder="Image URL"
              style={{ width: '100%' }}
            />
            <label htmlFor="floatingInput">Image URL</label>
          </div>

          <div className="input-group">
            <select
              className="form-select"
              id="inputGroupSelect04"
              aria-label="Example select with button addon"
              onChange={handleSelectChange}
              name="selectedRecipe"
            >
              <option value="">Select a recipe</option>
              {Recipes.map((recipe) => (
                <option key={recipe.Name} value={recipe.Name}>
                  {recipe.Name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-floating">
            <textarea type="text" className="form-control my-3" onChange={handleChange} name="ingredients" id="floatingPassword" placeholder="Ingredients" style={{ width: '100%' }} />
            <label htmlFor="floatingPassword">Ingredients</label>
          </div>
          <div className="form-floating">
            <textarea
              type="text"
              className="form-control my-3"
              onChange={handleChange}
              name="instructions"
              id="floatingDescription"
              style={{ height: '180px', width: '100%' }}
              placeholder="Instructions"
            />
            <label htmlFor="floatingPassword">Instruction</label>
          </div>

          <button className="btn w-100 py-2" id="Done" onClick={handleSubmit} type="submit">
            Done
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default About;
