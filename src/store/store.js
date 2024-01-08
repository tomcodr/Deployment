import createPersistedState from 'vuex-persistedstate';
import { createStore } from 'vuex';

export default createStore({
    plugins: [createPersistedState()],                //WENN MAN EIN AUTO LÖSCHT MUSS MAN DARAUF ACHTEN, DAS PERSISTEND ZU BEACHTEN
    state: {

        selectedBrand: null,
        imagePath: null,
    },
    mutations: {
        updateSelectedBrand(state, brand) {
            state.selectedBrand = brand;
        },
        setImagePath(state, path) {
            state.imagePath = path;
        },
    },
    actions: {
        updateSelectedBrand({ commit }, brand) {
            commit('updateSelectedBrand', brand);
        },
        setImagePath({ commit }, path) {
            commit('setImagePath', path)
        },
    },
    getters: {

        getSelectedBrand: (state) => state.selectedBrand,
        getImagePath: (state) => state.imagePath,
    },
});