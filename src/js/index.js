// Global app controller
import Search from './models/Search';

/**
 * Global State of teh app
 * Search object
 * current recipe obj
 * shopping list obj
 * liked recipes
 */
const state = {}

const controlSearch = async () => {
    //1. Get query from view
    const query = 'Ethiopian'; // TODO

    if (query) {
        //2. New search obj and add to state
        state.search = new Search(query);

        // 3. Prepare UI for results

        // 4. Search for recipes
        await state.search.getResults();

        // 5. Render results on UI
        console.log(state.search.result);
    }
}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

