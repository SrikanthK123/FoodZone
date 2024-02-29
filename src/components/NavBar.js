import React,{ useState} from 'react';
import { Link,useHistory  } from "react-router-dom";
import { useSelector } from 'react-redux';
import {AllRecipesprocess} from "./RecipesData"

const NavBar = () => {
  const FavouriteProduct = useSelector(state => state.cart);

  // Define a class for the heart icon color
  const heartIconClass = FavouriteProduct.length > 0 ? 'heart-filled' : 'red';
  const [searchTerm, setSearchTerm] = useState('');
  const filteredRecipes = AllRecipesprocess.filter((recipe) =>
  recipe.Name.toLowerCase().includes(searchTerm.toLowerCase())
);
const handleSearchInputChange = (event) => {
  setSearchTerm(event.target.value);

};

const history = useHistory()
const handleSearchSubmit = (event) => {
  event.preventDefault();
  // Redirect to the first recipe matching the search term
  if (filteredRecipes.length > 0) {
    const firstRecipe = filteredRecipes[0];
    history.push(`/${firstRecipe.Name}`);
  }
  setSearchTerm('');
};

  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{ backgroundColor: '#132743' }}>
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/" id="NavLogo" >Food Zone</Link>
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/FavouriteRecipes">Favourite</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/UserRecipe">User-Recipes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">Contribute</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Categories</a>
              <ul className="dropdown-menu" style={{ backgroundColor: '#79c2d0' }}>
                <li><Link className="dropdown-item" to="/Vegetarian">Vegetarian</Link></li>
                <li><Link className="dropdown-item" to="/SpecialRecipe">Quick Meals</Link></li>
                <li><Link className="dropdown-item" to="/Desserts">Desserts</Link></li>
              </ul>
            </li>
          
          </ul>
          <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
          <input
  className="form-control me-2"
  type="search"
  list="recipes"
  placeholder="Search"
  aria-label="Search"
  
  value={searchTerm}
  onChange={handleSearchInputChange}
/>
            <datalist id='recipes' >
            {filteredRecipes.map((recipe) => (
          <option value={recipe.Name}></option>
        ))}
              
            </datalist>
            <button className="btn btn" id='searchBtn' type="submit">Search</button>
          </form>
        
          <Link className="nav-link" style={{ margin: '10px' }} to="/FavouriteRecipes">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill={FavouriteProduct.length > 0 ? 'red' : 'currentColor'} className="bi bi-heart-fill" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
  </svg> {FavouriteProduct.length}
</Link>

        </div>
      </div>
    </nav>
  );
}

export default NavBar;
