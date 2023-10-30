<template>
    <v-sheet elevation="0" style="position: relative;" app>
        <v-img :aspect-ratio="16/9" :max-height="this.$vuetify.breakpoint.height"
            width="100%" src="./assets/images/index.png" alt="">
        </v-img>
        <div class="headerMenuGroup mt-12" @mouseover="onOverEvent(0)" @mouseleave="outOverEvent(0)">
            <div class="d-flex">
                <v-spacer></v-spacer>
                <div class="d-inline-block d-flex align-center mr-14">
                    <span class="white--text headerMenuBox fontDoHyeon fontSizeFdE">
                        요양원 급식
                        <div class="headerMenuEvent d-inline-block"></div>
                    </span>
                    <span class="white--text headerMenuBox fontDoHyeon fontSizeFdE">
                        단체 급식
                        <div class="headerMenuEvent d-inline-block"></div>
                    </span>
                </div>
                <div class="d-inline-block" style="width: 190px;">
                    <v-img src="./assets/harryFoodLogo.png"></v-img>
                </div>
                <div class="d-inline-block d-flex align-center ml-14">
                    <span class="white--text headerMenuBox fontDoHyeon fontSizeFdE">
                        운영 시스템
                        <div class="headerMenuEvent d-inline-block"></div>
                    </span>
                    <span class="white--text headerMenuBox fontDoHyeon fontSizeFdE">
                    소통공간
                        <div class="headerMenuEvent d-inline-block"></div>
                    </span>
                </div>
                <v-spacer></v-spacer>
            </div>
            <v-fade-transition>
                <div v-if="hMenu[0]" class="headerSubMenuBox d-flex justify-center py-4">
                    <v-spacer></v-spacer>
                    <div class="d-inline-block d-flex align-center mr-14" style="position: relative;">
                        <span class="headerMenuBox white--text" @mouseover="onOverEvent(1)" @mouseleave="outOverEvent(1)">
                            <v-scroll-x-transition>
                                <span v-if="hMenu[1]" class="white--text d-inline-block headerSubMenuBoxEvent"></span>
                            </v-scroll-x-transition>
                            <div class="d-inline-block font-weight-medium" style="width: 100%; height: 30px;">고령친화식</div>
                            <div class="d-inline-block font-weight-medium" style="width: 100%; height: 30px;">입주위탁</div>
                            <div class="d-inline-block font-weight-medium" style="width: 100%; height: 30px;">건강보험공단 평가</div>
                        </span>
                        <span class="headerMenuBox white--text" @mouseover="onOverEvent(2)" @mouseleave="outOverEvent(2)">
                            <v-scroll-x-transition>
                                <span v-if="hMenu[2]" class="white--text d-inline-block headerSubMenuBoxEvent"></span>
                            </v-scroll-x-transition>
                            <div class="d-inline-block font-weight-medium" style="width: 100%; height: 30px;">회사위탁급식</div>
                            <div class="d-inline-block font-weight-medium" style="width: 100%; height: 30px;">병원위탁급식</div>
                            <div class="d-inline-block font-weight-medium" style="width: 100%; height: 30px;"></div>
                        </span>
                    </div>
                    <div class="d-inline-block" style="width: 190px;"></div>
                    <div class="d-inline-block d-flex align-center ml-14" style="position: relative;">
                        <span class="headerMenuBox white--text" @mouseover="onOverEvent(3)" @mouseleave="outOverEvent(3)">
                            <v-scroll-x-transition>
                                <span v-if="hMenu[3]" class="white--text d-inline-block headerSubMenuBoxEvent"></span>
                            </v-scroll-x-transition>
                            <div class="d-inline-block font-weight-medium" style="width: 100%; height: 30px;">식자재유통</div>
                            <div class="d-inline-block font-weight-medium" style="width: 100%; height: 30px;">위생안전</div>
                            <div class="d-inline-block font-weight-medium" style="width: 100%; height: 30px;">식단연구</div>
                        </span>
                        <span class="headerMenuBox white--text" @mouseover="onOverEvent(4)" @mouseleave="outOverEvent(4)">
                            <v-scroll-x-transition>
                                <span v-if="hMenu[4]" class="white--text d-inline-block headerSubMenuBoxEvent"></span>
                            </v-scroll-x-transition>
                            <div class="d-inline-block font-weight-medium" style="width: 100%; height: 30px;">1:1문의</div>
                            <div class="d-inline-block font-weight-medium" style="width: 100%; height: 30px;">포토뉴스&갤러리</div>
                            <div class="d-inline-block font-weight-medium" style="width: 100%; height: 30px;"></div>
                        </span>
                    </div>
                    <v-spacer></v-spacer>
                </div>
            </v-fade-transition>
        </div>
        <v-fade-transition>
            <div v-if="!hMenu[0]" class="headerTxtBox" style="top: 50%; transform: translateY(-50%);">
                <div class="d-flex justify-center">
                    <span class="d-inline-block fontDoHyeon font-weight-bold white--text" style="font-size: 4rem; height: 80px;">해리푸드 위탁급식</span>
                </div>
                <div class="d-flex justify-center">
                    <span class="fontDongle font-weight-bold white--text" style="font-size: 2rem;">
                        풍부한 현장 경험을 지닌 영양매니저와 전문 조리인력을 파견하여 바르고 깨끗한 음식을 제공합니다.
                    </span>
                </div>
            </div>
        </v-fade-transition>
        <div class="headerBottomBox d-inline-block">
            <v-icon class="bounceIcon white--text" size="40">mdi-chevron-down</v-icon>
        </div>
        <v-row class="px-10 my-12" no-gutters>
            <v-col cols="6">
                <div class="d-flex justify-center">
                    <span class="d-inline-block mt-4" style="width: 440px;">
                        <v-img
                            width="440"
                            src="./assets/images/presentation.png">
                        </v-img>
                    </span>
                </div>
                <div class="d-flex justify-center">
                    <span class="d-inline-block mt-4" style="width: 440px;">
                        <div class="fontSizeDE font-weight-medium" style="text-align: right;">News</div>
                        <div class="fontSizeFdF font-weight-bold" style="text-align: right;">포토뉴스&갤러리</div>
                    </span>
                </div>
            </v-col>
            <v-col cols="6">
                <div>
                    <span class="font-weight-bold" style="font-size: 3rem;">해리푸드 소개</span>
                </div>
                <div class="my-12">
                    <span class="font-weight-thin" style="font-size: 1.4rem;">
                        해리푸드 소개 내용이 간략하게 작성될 영역입니다.
                        내용을 작성해 주세요. 해리푸드 소개 내용이 간략하게 작성될 영역입니다.
                        내용을 작성해 주세요.
                    </span>
                </div>
                <v-card
                    class="" max-width="650">
                    <template slot="progress">
                        <v-progress-linear
                        color="deep-purple"
                        height="10"
                        indeterminate
                        ></v-progress-linear>
                    </template>
                    <v-row no-gutters>
                        <v-col cols="7">
                            <v-img
                                height="470"
                                src="https://wagoodfoodguide.com/wp-content/uploads/2022/11/RogueMay22-0412-Large.jpeg">
                            </v-img>
                        </v-col>
                        <v-col class="pa-10" style="background-color: #1a1a1d; position: relative;" cols="5">
                            <div class="d-inline-block" style="width: 120px; padding-bottom: 160px;">
                                <v-img
                                    style="filter: opacity(0.3) drop-shadow(0 0 0 #212121);"
                                    src="./assets/logo_white.png">
                                </v-img>
                            </div>
                            <div class="fontSizeFdF white--text mb-2" style="">제목 작성란</div>
                            <div class="white--text pb-2" style="">내용이 삽입될 영역입니다 내용을 작성해주세요</div>
                            <v-btn class="mt-1" color="white" rounded outlined>Read More</v-btn>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
        <v-row class="" style="background-color: #141416; padding: 80px 20px;" no-gutters>
        <v-spacer></v-spacer>
            <v-col class="d-flex align-center" cols="9">
                <div class="">
                    <div class="white--text">상호명: ㈜해리지앤디 | 대표: 이승준 | 사업자등록 번호: 762-81-01713</div>
                    <div class="white--text">전화: 031-546-0405 | 팩스: 031-895-0405 | information@harrygnd.com</div>
                    <div class="white--text mb-8">소재지: 경기도 수원시 반달로 7번길 40 7층 (영통동 998-1)</div>
                    <div class="white--text">
                        <v-btn class="" color="white" text>회사소개</v-btn>
                    </div>
                </div>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="2">
                <div class="mb-7">
                    <span class="d-inline-block" style="width: 160px;">
                        <v-img
                            style="filter: opacity(0.3) drop-shadow(0 0 0 #212121);"
                            src="./assets/logo_white.png">
                        </v-img>
                    </span>
                </div>
                <span class="d-block font-weight-thin" style="font-size: 0.75rem; color: rgba(255,255,255,.4);">
                    Copyright 2023 ⓒ ㈜해리지앤디.
                </span>
                <span class="d-block font-weight-thin" style="font-size: 0.75rem; color: rgba(255,255,255,.4);">
                    All right reserved.
                </span> 
            </v-col>
        </v-row>
    </v-sheet>
</template>

<script>
export default {
    name: 'WooFood',

    components: {

    },

    props: {

    },

    created: function(){
    },

    mounted: function(){
        this.$nextTick(function () {
            this.dHeight = (this.$vuetify.breakpoint.height / 16) * 9
        })
    },

    computed: {
        getDisplayWidth: function() {
           return this.$vuetify.breakpoint.width
        },
    },

    watch:{
        getDisplayWidth: function(dWidth) {
            this.dHeight = (dWidth / 16) * 9
        },
    },
        
    methods: {
        onOverEvent: function (index) {
            this.hMenu.splice(index, 1, true)
        },
        outOverEvent: function (index) {
            this.hMenu.splice(index, 1, false)
        },
    },

    data: () => ({
        dHeight: 0,
        hMenu: [false, false, false, false, false,],
    }),
};
</script>

<style>
    .v-btn--outlined { border: 2px solid currentColor !important; }
    .v-toolbar__content { padding: 0 !important; height: initial !important; }

    .headerMenuGroup { position: absolute; top: 0; left: 0; z-index: 1; width: 100%; }
    .headerTxtBox { position: absolute; left: 0; z-index: 1; width: 100%; background-color: rgba(0, 0, 0, 0.2); }
    .headerBottomBox { position: absolute; bottom: 16px; left: 0; z-index: 1; width: 100%; height: 50px; }
    .headerMenuBox { width: 200px; text-align: center; position: relative; }
    .headerMenuEvent {
        position: absolute; width: 120px; height: 80px; top: -20px; right: 40px; cursor: pointer;
        -webkit-transition: all .2s ease-out; transition: all .2s ease-out; border-bottom: solid 0px white;
    }
    .headerMenuCard { position: absolute; top: 60px; right: 20px; width: 160px; height: 120px; }
    .headerSubMenuBox { 
        position: absolute; width: 100%; top: 70%;
        background: linear-gradient( to bottom, rgba(0, 0, 0, 0.2), 30%, rgba(0, 0, 0, 0.1) );
    }
    .headerSubMenuBoxEvent { position: absolute; top: -20px; left: 40px; background-color: white; width: 120px; height: 5px; }
    .bounceIcon {
        animation: bob 2s infinite ease-in-out !important; cursor: pointer;
        bottom: 0px; left: 0; right: 0; margin-left: auto; margin-right: auto; position: absolute !important; z-index: 5;
    }
    @-webkit-keyframes all{
        0%   { width: 0px; }
        50%  { width: 10px; }
        100%  { width: 0px; }		  
    }
    @keyframes all{
        0%   { width: 0px; }
        50%  { width: 10px; }
        100%  { width: 0px; }		  
    }
    @-webkit-keyframes bob{
        0%   { bottom: 0px; }
        50%  { bottom: 10px; }
        100%  { bottom: 0px; }		  
    }
    @keyframes bob{
        0%   { bottom: 0px; }
        50%  { bottom: 10px; }
        100%  { bottom: 0px; }		  
    }
</style>