import {Recipe} from './recipe.model';
import {RecipeService} from './recipe.service';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {of, Subject, Subscription} from 'rxjs';
import {Ingredient} from '../shared/ingredient.model';
import {Component} from '@angular/core';

describe('RecipeService', () =>{
  let recipeService;
  let mockShoppingListService;
  let RECIPES;

  beforeEach(() => {
    RECIPES = [
      new Recipe('Recipe 0', 'Description 1', '', [new Ingredient('Ingredient1', 1)]),
      new Recipe('Recipe 1', 'Description 2', '', [new Ingredient('Ingredient2', 2)]),
      new Recipe('Recipe 2', 'Description 3', '', [new Ingredient('Ingredient3', 3)]),
    ];
    mockShoppingListService = jasmine.createSpyObj(['addIngredients'])
    recipeService = new RecipeService(mockShoppingListService);

  });
  describe('getRecipes', () =>{
    it('should return an empty list if no recipes are provided', () =>{
      let result = recipeService.getRecipes();

      expect(result.length).toBe(0)
    });

    it('should return the list provided', () =>{
      recipeService.recipes = RECIPES;

      let result = recipeService.getRecipes();

      expect(result.length).toBe(3)
    });
  });


})
