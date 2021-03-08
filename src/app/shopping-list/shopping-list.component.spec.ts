import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ShoppingListComponent} from './shopping-list.component';
import {ShoppingListService} from './shopping-list.service';

describe('ShoppingListComponent', () => {
  let fixture: ComponentFixture<ShoppingListComponent>
  let mockShoppingListService;
  let INGREDIENTS;

  @Component({
  selector: 'app-shopping-edit',
  template: '<div></div>',
  })
  class FakeShoppingEditComponent {}

  beforeEach(() => {
    INGREDIENTS = [
      {name: 'Ingredient 1', amount: 1},
      {name: 'Ingredient 2', amount: 2},
      {name: 'Ingredient 3', amount: 3}
    ];

    mockShoppingListService = jasmine.createSpyObj(['getIngredients']);
    TestBed.configureTestingModule({
      declarations: [ShoppingListComponent, FakeShoppingEditComponent],
      providers: [{ provide: ShoppingListService, useValue: mockShoppingListService }]
    });

    fixture = TestBed.createComponent(ShoppingListComponent);
  });


})
