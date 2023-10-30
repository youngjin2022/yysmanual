import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import { en, ko } from 'vuetify/es5/locale';

Vue.use(Vuetify);

export default new Vuetify({
    // 언어 설정
    lang: {
        locales: { ko, en },
        current: 'ko',
    },
    //사용자 아이콘 설정
    icons: {
        iconfont: 'mdi',
    },
    //테마 설정
    theme: {
        dark: false,
        default: 'light',
        themes: {
            light: {
                primaryText: '#343434',
                pointColr: '#5b493f',
                txtHghColr: '#f7ae22',
                slctdTxtColor: '#1976d2',
            },
            dark: {
                primaryText: '#9e9e9e',
            },
        },
    },
});
