import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        primary: '#002E5D',
        secondary: '#FFFFFF',
        accent: '#0062B8',
        error: '#E61744',
        info: '#1FB3D1',
        success: '#10A170',
        warning: '#FFB700',
      },
      dark: {
        primary: '#0062B8',
        secondary: '#141414',
        accent: '#FFFFFF',
        error: '#E61744',
        info: '#1FB3D1',
        success: '#10A170',
        warning: '#FFB700',
      },
    },
  },
});
