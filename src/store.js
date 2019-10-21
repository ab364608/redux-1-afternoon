import {createStore} from 'redux';

const initialState = {
    name: '',
    category: '',
    authorFirst: '',
    authorLast: '',
    ingredientsList: [],
    instructions: [],
    recipes: []
}

export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME';
export const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME';
export const UPDATE_INGREDIENTS = 'UPDATE_INGREDIENTS';
export const UPDATE_INSTRUCTIONS = 'UPDATE_INSTRUCTIONS';
export const ADD_RECIPE = 'ADD_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';
export const CLEAR_FIELDS = 'CLEAR_FIELDS';

function reducer(state = initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case UPDATE_NAME:
            return {
                ...state,
                name: payload
            };
        case UPDATE_CATEGORY:
            return {
                ...state,
                category: payload
            };
        case UPDATE_FIRST_NAME:
            return {
                ...state,
                authorFirst: payload
            };
        case UPDATE_LAST_NAME:
            return {
                ...state,
                authorLast: payload
            };
        case UPDATE_INGREDIENTS:
            const newIngredients = [...state.ingredientsList, payload]
            return {
                ...state,
                ingredientsList: newIngredients
            };
        case UPDATE_INSTRUCTIONS:
            const addInstructions = [...state.instructions, payload];
            return {
                ...state,
                instructions: addInstructions
            };
        case ADD_RECIPE:
            const {name, catgeory, authorFirst, authorLast, ingredientsList, instructions} = state;
            const recipe = {name, catgeory, authorFirst, authorLast, ingredientsList, instructions};
            const newRecipes = [...state.recipes, recipe];
            return {
                ...state,
                recipes: newRecipes
            };
        case DELETE_RECIPE:
            let recipeCopy = state.recipes.slice()
            recipeCopy.splice(payload, 1);
            return {
                ...state,
                recipes: recipeCopy
            }
        case CLEAR_FIELDS:
            return {
                ...state,
                name: '',
                category: '',
                authorFirst: '',
                authorLast: '',
                ingredientsList: [],
                instructions: []
            }

        default: return state;
    }
}

export default createStore(reducer);
