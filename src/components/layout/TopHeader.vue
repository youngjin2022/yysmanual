<template>
    <v-app-bar height="100" elevation="2" color="white"
        @mouseover="exHeader=true" @mouseleave="exHeader=false"
        app>
      
        <v-row class="ma-0 pa-0" no-gutters>
            <v-spacer></v-spacer>
            <v-col class="d-flex" cols="10">
                <span class="d-inline-block" @click="$parent.$parent.routerAction('App')" style="width: 200px; cursor: pointer;">
                    <v-img src="../../assets/logo.png" alt="harryfoodlogo"></v-img>
                </span>
                <v-spacer></v-spacer>
                <!-- <span class="d-flex align-center">
                    <span class="d-inline-block font-weight-bold fontSizeFdT"
                        style="width: 140px; height: 30px; text-align: right;"
                        v-for="(MnTxt, i) in headerMenu" :key="i" @mouseover="onOverEvent(i)">
                        <span class="d-inline-block mb-2" style="width: 100%; cursor: pointer;"
                            @click="$parent.$parent.routerAction(MnTxt.route)">
                            {{ MnTxt.menu }}
                        </span>
                        <v-expand-x-transition>
                            <div class="d-inline-block d-flex justify-center" v-if="menuHover[i]">
                                <v-divider :class="['txtHghColr', i > 1 ? 'ml-18' : 'ml-13']" style="padding: 1px 0px;"></v-divider>
                            </div>
                        </v-expand-x-transition>
                    </span>
                </span> -->
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
       
        <!-- <v-expand-transition>
            <div v-if="exHeader" class="d-inline-block white elevation-2"
                style="position: absolute; top: 120px; left: 0; width: 100%;">
                <v-row class="ma-0 pt-4 pb-8" style="padding: 0px 16px;" no-gutters>
                    <v-spacer></v-spacer>
                    <v-col class="d-flex" cols="10">
                        <span class="d-inline-block" style="width: 280px;"></span>
                        <v-spacer></v-spacer>
                        <span class="d-flex align-center fontSizeOne">
                            <span class="d-inline-block" style="width: 140px; text-align: right;" @mouseover="onOverEvent(0)">
                                <span class="d-inline-block hMenuTxt mb-1" @click="$parent.$parent.routerAction('NrsHmMls')">요양원 급식</span>
                                <span class="d-inline-block hMenuTxt mb-1" @click="$parent.$parent.routerAction('CmpMls')">회사 급식</span>
                                <span class="d-inline-block hMenuTxt mb-1" @click="$parent.$parent.routerAction('HspMls')">병원 급식</span>
                                <span class="d-inline-block hMenuTxt" style="width: 100%; height: 24px;"></span>
                            </span>
                            <span class="d-inline-block" style="width: 140px; text-align: right;" @mouseover="onOverEvent(1)">
                                <span class="d-inline-block hMenuTxt mb-1" @click="$parent.$parent.routerAction('HndlItms')">취급품목</span>
                                <span class="d-inline-block hMenuTxt mb-1" @click="$parent.$parent.routerAction('DstrLgst')">유통/물류</span>
                                <span class="d-inline-block hMenuTxt mb-1"></span>
                                <span class="d-inline-block hMenuTxt" style="width: 100%; height: 24px;"></span>
                            </span>
                            <span class="d-inline-block" style="width: 140px; text-align: right;" @mouseover="onOverEvent(2)">
                                <span class="d-inline-block hMenuTxt mb-1" @click="$parent.$parent.routerAction('CnsgnMlsr')">위탁급식 시스템</span>
                                <span class="d-inline-block hMenuTxt mb-1" @click="$parent.$parent.routerAction('SntSft')">위생안전</span>
                                <span class="d-inline-block hMenuTxt mb-1" @click="$parent.$parent.routerAction('DietRsrch')">식단연구</span>
                                <span class="d-inline-block hMenuTxt" @click="$parent.$parent.routerAction('HltInsCrpEvl')">건보평가</span>
                            </span>
                            <span class="d-inline-block" style="width: 140px; text-align: right;" @mouseover="onOverEvent(3)">
                                <span class="d-inline-block hMenuTxt mb-1"  @click="$parent.$parent.routerAction('ContactUs')">온라인 상담</span>
                                <span class="d-inline-block hMenuTxt mb-1" style="width: 100%; height: 24px;"></span>
                                <span class="d-inline-block hMenuTxt mb-1"></span>
                                <span class="d-inline-block hMenuTxt"></span>
                            </span>
                            <span class="d-inline-block" style="width: 140px; text-align: right;" @mouseover="onOverEvent(4)">
                                <span class="d-inline-block hMenuTxt mb-1" style="width: 100%; height: 24px;"></span>
                                <span class="d-inline-block hMenuTxt mb-1" style="width: 100%; height: 24px;"></span>
                                <span class="d-inline-block hMenuTxt mb-1" style="width: 100%; height: 24px;"></span>
                                <span class="d-inline-block hMenuTxt" style="width: 100%; height: 24px;"></span>
                            </span>
                        </span>
                    </v-col>
                    <v-spacer></v-spacer>
                </v-row>
            </div>
        </v-expand-transition> -->
    </v-app-bar>
</template>

<script>
export default {
    name: 'TopHeader',

    components: {

    },

    props: {

    },

    created: function(){
    },

    mounted: function(){
        this.$nextTick(function () {

        })
    },

    computed: {
  
    },

    watch:{

    },
        
    methods: {
        onOverEvent: function (index) {
            for (let index = 0; index < this.menuHover.length; index++) {
                this.menuHover.splice(index, 1, false)
            }
            this.menuHover.splice(index, 1, true)
        },
        outOverEvent: function (index) {
            this.menuHover.splice(index, 1, false)
        },
    },

    data: () => ({
        exHeader: false,
        menuHover: [false, false, false, false, false,],
        headerMenu: [
            { menu: '푸드서비스', route: '' },
            { menu: '식자재유통', route: '' },
            { menu: '운영관리', route: '' },
            { menu: '소통공간', route: '' },
            { menu: '회사소개', route: 'HarrygndIntro' },
        ],
    }),
};
</script>

<style>
    .hMenuUnder { border: 0px solid #5b493f; -webkit-transition: all .2s ease-out; transition: all .2s ease-out; }
    .hMenuUnder:hover { border-width: 0 0px 4px 0px; }

    .hMenuTxt { width: 100%; cursor: pointer; }
    .hMenuTxt:hover { color: #f7ae22; }
</style>