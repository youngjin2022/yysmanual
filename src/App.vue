<template>
    <v-app>
        <!-- Header -->
        <TopHeader v-if="!this.$vuetify.breakpoint.mobile" @topHeader="topHeader"></TopHeader>
        <MobileHeader v-else></MobileHeader>
        <MobileDrawer></MobileDrawer>
        <!-- main -->
        <v-main v-scroll="checkBottom" style="width: 90%; position: absolute; right: 0px;" v-if="!this.$vuetify.breakpoint.mobile" @topHeader="topHeader">
            <router-view :key="$route.fullPath"></router-view>
        </v-main>
        <v-main v-scroll="checkBottom" v-else>
            <router-view :key="$route.fullPath"></router-view>
        </v-main>
        <!-- LeftBar -->
        <LeftBar class="overflow-y-auto" v-if="!this.$vuetify.breakpoint.mobile" v-show="show"></LeftBar>
        <!-- footer -->
        <!-- <BottomFooter v-if="!this.$vuetify.breakpoint.mobile"></BottomFooter> -->
        <!-- <MobileFooter v-else></MobileFooter></MobileFooter> -->
    </v-app>
</template>

<script>

import LeftBar from './components/layout/LeftBar.vue';
import TopHeader from './components/layout/TopHeader.vue';
import MobileHeader from './components/layout/MobileHeader.vue';
import MobileDrawer from './components/layout/MobileDrawer.vue';
// import BottomFooter from './components/layout/BottomFooter.vue';
// import MobileFooter from './components/layout/MobileFooter.vue';

require('./assets/css/FontFamily.css')

export default {
    metaInfo: {
        title: 'yosysmanual',

        htmlAttrs: {
        // lang: window.getApp.$i18n.locale // i18n 사용하지 않는 경우 직접 입력
        },

        meta: [
            { charset: 'utf-8'},

            // SEO setting
            { name: 'description', content: '단체급식 솔루선, 요양원 컨설팅, 식자재 유통사업 등 소개', vmid: 'description'},
            { name: 'keywords', content: '위탁급식'},
            { name: 'author', content: '㈜해리지앤디'},
            { name: 'robots', content: 'index'},

            // SNS 용
            {
                property: 'og:title',
                content: '해리푸드',
                template: chunk => `${chunk} | food.harrygnd.co.kr`,
                vmid: 'og:title'
            },
            {
                property: 'og:description',
                content: '단체급식 솔루선, 요양원 컨설팅, 식자재 유통사업 등 소개',
                vmid: 'og:description'
            },

            // mobile
            { name: 'viewport', content: 'width=device-width, initial-scale=1'}
        ],
    },

    name: 'App',

    components: {
        TopHeader,
        LeftBar,
        MobileHeader,
        MobileDrawer,
        // BottomFooter,
        // MobileFooter,
    },

    props: {

    },

    created: function () {

    },

    mounted: function () {
       console.log(this.$meta)
    },

    computed: {

    },

    watch:{

    },
        
    methods: {
        //상담내역 저장
        insCntctUs: function (obj) {
            return this.$axios.post(this.url + '/bbs/insCntctUs', obj)
        },
        routerAction: function ( path ) {
            this.onFooter = false
            if(this.$route.name == path)
                this.$router.go(this.$router.currentRoute)
            else
                this.$router.push({ name: path, })
        },
        checkBottom: function () {
            const box = document.querySelector('.v-application')

            if( window.scrollY != 0){
                if((window.innerHeight + window.scrollY) >= box.clientHeight)
                    this.onFooter = true
                else 
                    this.onFooter = false
            }
        },
        topHeader: function(key){
            this.show = key
        },
    },

    data: () => ({
        show: true,
        url: 'https://api.harrygnd.co.kr',
        boardList: null,
        drawer: false,
        onFooter: false,
        quickMenuItem: [
            { icon: 'mdi-pot-steam', title: '위탁급식 상담', },
            { icon: 'mdi-truck', title: '식자재 상담', },
        ],
    }),
};
</script>

<style>
    .v-application { font-family: 'Noto Sans KR', sans-serif !important; font-size: 1.1rem !important; }
    .v-footer { display: initial !important; }

    .fontNotoSans { font-family: 'Noto Serif KR', sans-serif !important; }
    .fontDongle { font-family: 'Dongle', sans-serif !important; }
    .fontDoHyeon { font-family: 'Do Hyeon', sans-serif !important; }

    .fontSizeImageTitle { font-size: 2.4rem !important; }
    .fontSizeImageTitle2 { font-size: 2rem !important; }
    .fontSizeImageSubTitle { font-size: 3.4rem !important; }
    .fontSizeFdE { font-size: 1.8rem !important; }
    .fontSizeFdS { font-size: 1.6rem !important; }
    .fontSizeFdF { font-size: 1.4rem !important; }
    .fontSizeFdT { font-size: 1.2rem !important; }
    .fontSizeOne { font-size: 1rem !important; }
    .fontSizeDE { font-size: 0.875rem !important; }
    .fontSizeDS { font-size: 0.75rem !important; }

    .ml-17 { margin-left: 68px !important; }
    .ml-18 { margin-left: 72px !important; }

    .flotingMenu { position: fixed; top: 50%; left: 20px; transform: translateY(10%); z-index: 2; width: 110px; display: inline-block; }

    .bounceIcon {
        animation: bob 1.2s infinite ease-in-out !important; cursor: pointer; color: rgba(255, 255, 255, 0.7) !important;
        bottom: 0px; left: 0; right: 0; margin-left: auto; margin-right: auto; position: absolute !important; z-index: 5;
    }

    @-webkit-keyframes bob{
        0%   { left: 0px; }
        50%  { left: 20px; }
        100%  { left: 0px; }		  
    }
    @keyframes bob{
        0%   { left: 0px; }
        50%  { left: 20px; }
        100%  { left: 0px; }		  
    }
</style>
