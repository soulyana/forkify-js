// Global app controller
import axios from 'axios';

async function getResults(query) {
    const key = 'af202cfb67a1a63c8ea68bad9a410022';
    try {
        const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`);
        const recipes = res.data.recipes;
        console.log(recipes);
    } catch (error) {
        alert(error);
    }
}
getResults('ethiopian');
