import { createStore } from 'vuex';

export default createStore({
    state: {

        carPaths: [], // Array für die gespeicherten Bildpfade
    },
    mutations: {


        addCarPath(state, path) {
            console.log("8. Mutation addCarPath wurde aufgerufen");
            console.log("9. Path, der hinzugefügt wird:", path);
            state.carPaths.push(path);
            console.log("10. Car Paths im Store nach der Mutation:", state.carPaths);
        },
    },
    actions: {
        addCarPath({ commit }, path) {
            commit('addCarPath', path);
        },
    },
    getters: {
        getCarPaths: (state) => state.carPaths,
    },
});
