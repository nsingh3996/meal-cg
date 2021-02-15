import axios from 'axios';

// export class MealService {

//     getRandomMeal() {
//         return axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
//     }

//     getMealBySearchName(searchItem) {

//         return axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s='+searchItem);
//     }
// }
export function getRandomMeal() {
    return axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
}

export function getMealBySearchName(searchContent) {
    return axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s='+searchContent);
}
