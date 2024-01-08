import { createStore } from 'vuex';






export default createStore({

    state: {
        selectedLanguage: 'de', // default language
    },
    mutations: {
        updateSelectedLanguage(state, lang) {
            state.selectedLanguage = lang;
        },
    },
    actions: {
        updateSelectedLanguage({ commit }, lang) {
            commit('updateSelectedLanguage', lang);
        },
    },
    getters: {
        getSelectedLanguage: (state) => state.selectedLanguage,
    },
});
