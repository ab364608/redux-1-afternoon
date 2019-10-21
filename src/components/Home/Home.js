import React, { Component } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./../RecipeCard/RecipeCard";
import "./Home.css";
import store, {CLEAR_FIELDS} from '../../store';

class Home extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
      recipes: reduxState.recipes
    };
  }

  
  componentDidMount() {
   store.subscribe(() => {
     const reduxState = store.getState();
     this.setState({recipes: reduxState.recipes})
   })
}

clearFields = () => {
  let action = {
    type: CLEAR_FIELDS
  }
  store.dispatch(action);
}
  
  render() {
    const recipes = this.state.recipes.map((recipe, i) => {
      return (
        <RecipeCard
          key={i}
          name={recipe.name}
          category={recipe.category}
          authorFirst={recipe.authorFirst}
          authorLast={recipe.authorLast}
          ingredients={recipe.ingredientsList}
          instructions={recipe.instructions}
          deleteRecipe={this.deleteRecipe}
          recipes={this.state.recipes}
          index={i}
        />
      );
    });
    return (
      <div className="Home">
        <Link to="/add/name">
          <button onClick={this.clearFields}>Create New Recipe</button>
        </Link>
        <div className="card_container">{recipes}</div>
      </div>
    );
  }
}

export default Home;
