import {MEALS} from '../../data/dummy-data';
import { SET_FILTERS, TOGGLE_FAV } from '../actions/mealsActions';

const initialState={
    meals:MEALS,
    filteredMeals:MEALS,
    favMeals:[],
};

const mealsReducer=(state=initialState,action)=>{
    switch(action.type){
        case TOGGLE_FAV:
            const existingIndex=state.favMeals.findIndex(
                meal=>meal.id===action.mealId
            );
            if(existingIndex >= 0)
            {
                const updatedMeals=[...state.favMeals];
                updatedMeals.splice(existingIndex,1);
                return {...state,favMeals:updatedMeals};
            }
            else{
                const meal=state.meals.find(meal=>meal.id===action.mealId);
                return {...state,favMeals:state.favMeals.concat(meal)}
            }
            case SET_FILTERS:
                const appliedFilters=action.filters;
                const updatedFilteredMeals=state.meals.filter(meal=>
                    {
                        if(appliedFilters.glutenFree && !meal.isGlutenFree)
                        {
                            return false;
                        }
                        if(appliedFilters.lactoseFree && !meal.isLactose)
                        {
                            return false;
                        }
                        if(appliedFilters.vegan && !meal.isVegan)
                        {
                            return false;
                        }
                        if(appliedFilters.veg && !meal.isVeg)
                        {
                            return false;
                        }
                        return true;
                    });
                    return {...state,filteredMeals:updatedFilteredMeals};
            default:
                return state;
    }
}

export default mealsReducer;