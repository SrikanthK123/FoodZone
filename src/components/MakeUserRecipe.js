import React, { useState } from 'react';
import { Recipes } from './RecipesData';

const MakeUserRecipe = () => {
  const [formData, setFormData] = useState({
    userName: '',
    recipeName: '',
    ImageURL : '',
    selectedRecipe: '',
    ingredients: '',
    instructions: '',
  });

  const [submittedData, setSubmittedData] = useState([]);
  const [submitted, setSubmitted] = useState(false);

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
    // You can perform additional validation or data processing here
    const newData = { ...formData };
    setSubmittedData((prevData) => [...prevData, newData]);
    setSubmitted(true);
    setFormData({
      userName: '',
      recipeName: '',
      ImageURL: '',  // Make sure to include any other fields in the state
      selectedRecipe: '',
      ingredients: '',
      instructions: '',
    });
    
    
    
  };

  return (
    <div className='HomePage' style={{ minHeight: '100vh' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: '800px', margin: 'auto' }}>
      <form style={{ width: '100%' }}>
          <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal text-white">
            <img src='https://cdn-icons-png.flaticon.com/512/6347/6347316.png' alt='recipe' style={{ width: '50px', height: '50px', marginRight: '10px' }} />
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

          <div class="input-group">
            <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon" onChange={handleSelectChange} name="selectedRecipe">
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
            <textarea type="text" className="form-control my-3" onChange={handleChange} name="instructions" id="floatingDescription" style={{ height: '180px', width: '100%' }} placeholder="Instructions" />
            <label htmlFor="floatingPassword">Instruction</label>
          </div>

          <button className="btn w-100 py-2" id='Done' onClick={handleSubmit} type="submit">
            Done
          </button>
        </form>
      </div>
      {submitted && (
        <div>

          <h2>Previous Submissions</h2>
          <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-4">
          {submittedData.map((data, index) => (
            <div key={index} >
              <div className='col' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <div class="card" style={{backgroundColor:'pink'}} >
                <img src={`${data.ImageURL}`} class="card-img-top" alt="Recipe"/>

        <div class="body">
          <h5 class="card-title">{data.userName}</h5>
          <p class="card-text">{data.recipeName}</p>
          <p class="card-text">{data.selectedRecipe}</p>
          <p class="card-text">{data.ingredients}</p>
          <p class="card-text">{data.instructions}</p>
        </div>
      </div></div>
      <div class="card mb-3" style={{maxWidth: "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
    <img src={`${data.ImageURL}`} class="card-img-top" alt="Recipe"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <h5 class="card-title">{data.userName}</h5>
          <p class="card-text">{data.recipeName}</p>
          <p class="card-text">{data.selectedRecipe}</p>
          <p class="card-text">{data.ingredients}</p>
          <p class="card-text">{data.instructions}</p>
      </div>
    </div>
  </div>
</div>
            </div>
          ))}
        </div>
        </div>
      
      )}
    </div>
  );
};

export default MakeUserRecipe;
