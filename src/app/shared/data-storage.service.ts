import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Recipe} from '../recipes/recipe.model';
import {RecipeService} from '../recipes/recipe.service';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService) {}

    storeRecipes() {
      const recipes = this.recipeService.getRecipes();
      this.http.put('https://my-first-angular-df16e-default-rtdb.europe-west1.firebasedatabase.app/recipes.json', recipes)
        .subscribe(response => {
          console.log(response);
      })
    }

    fetchRecipes() {
      this.http.get<Recipe[]>('https://my-first-angular-df16e-default-rtdb.europe-west1.firebasedatabase.app/recipes.json')
        .pipe(map(recipes => {
          return recipes.map(recipe => {
            return {...recipe, ingredient: recipe.ingredients ? recipe.ingredients : []}
          })
        }))
        .subscribe( recipes => {
          this.recipeService.setRecipes(recipes)
        })
    }
}
