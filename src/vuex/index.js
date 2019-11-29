import Vue from 'vue';
export const state =  Vue.observable({
    language: localStorage.getItem('LANGUAGE') === 'English' ? 'en' : 'zh'
});
export const mutation = {
  changeLanguage( language ) {
    state.language = language;
  }
}
