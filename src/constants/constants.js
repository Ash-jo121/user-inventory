export const GENDER = {
  MALE: "male",
  FEMALE: "female",
};

export const FAVORITE_FOODS = {
  PIZZA: "PIZZA",
  BURGER: "BURGER",
  PASTA: "PASTA",
};

export const USER_MODES = {
  VIEW: "VIEW",
  EDIT: "EDIT",
  ADD: "ADD",
  REMOVE: "REMOVE",
  NONE: "NONE",
};

export const INITIAL_USER_LIST = [
  {
    id: 1,
    name: "Ashish John",
    badge: "green",
    age: 23,
    dateOfBirth: new Date(),
    gender: GENDER.MALE,
    favoriteFood: FAVORITE_FOODS.PIZZA,
    hobbies: "Cycling, Swimming and Coding",
  },
  {
    id: 2,
    name: "Arun Jose",
    badge: "green",
    age: 22,
    dateOfBirth: new Date(),
    gender: GENDER.MALE,
    favoriteFood: FAVORITE_FOODS.BURGER,
    hobbies: "AI alignment and reading",
  },
  {
    id: 3,
    name: "Niranjana",
    badge: "green",
    age: 23,
    dateOfBirth: new Date(),
    gender: GENDER.FEMALE,
    favoriteFood: FAVORITE_FOODS.PASTA,
    hobbies: "Reading and watching Netflix",
  },
  {
    id: 4,
    name: "Steve Rogers",
    badge: "purple",
    age: 29,
    dateOfBirth: new Date(),
    gender: GENDER.MALE,
    favoriteFood: FAVORITE_FOODS.PASTA,
    hobbies: "Saving the world",
  },
  {
    id: 5,
    name: "Natasha Romanoff",
    badge: "purple",
    age: 27,
    dateOfBirth: new Date(),
    gender: GENDER.FEMALE,
    favoriteFood: FAVORITE_FOODS.BURGER,
    hobbies: "Dancing and saving the world",
  },
  {
    id: 6,
    name: "Tony Stark",
    badge: "purple",
    age: 27,
    dateOfBirth: new Date(),
    gender: GENDER.MALE,
    favoriteFood: FAVORITE_FOODS.BURGER,
    hobbies: "Genius",
  },
  {
    id: 7,
    name: "Clark Kent",
    badge: "purple",
    age: 27,
    dateOfBirth: new Date(),
    gender: GENDER.FEMALE,
    favoriteFood: FAVORITE_FOODS.BURGER,
    hobbies: "Superman",
  },
];

export const TOTAL_USERS = 7;

export const FINAL_ID = 7;

export const USERS_PER_PAGE = 6;

export const CONTEXT_ACTIONS = {
  ADD_USER: "ADD_USER",
  REMOVE_USER: "REMOVE_USER",
  EDIT_USER: "EDIT_USER",
  GET_USER: "GET_USER",
};

export const PAGINATION_BOX_COLOR = "rgb(94, 102, 115)";

export const PAGINATION_TEXT_COLOR = "rgb(213, 221, 232)";
