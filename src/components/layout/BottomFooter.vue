<template>
    <v-footer class="ma-0 pa-0" color="white" fixed app>
        <v-row class="ma-0 pa-0 pointColr" no-gutters>
            <v-spacer></v-spacer>
            <v-col class="d-flex" cols="10">
                <span class="d-inline-block d-flex align-center" style="height: 70px; cursor :pointer;" @click="$parent.$parent.routerAction('ContactUs')">
                    <span class="mr-2" style="color: rgba(255,255,255,0.7);">온라인으로 무엇이든 물어보세요.</span>
                    <span style="color: rgba(255,255,255,0.7);">맛있는 일상을 위해 언제나 함께합니다.</span>
                    <span class="ml-10" style="color: rgba(255,255,255,0.7); position: relative;">
                        <span class="bounceIcon d-inline-block" style="width:120px; height: 14px;">
                            <v-icon class="" style="color: rgba(255,255,255,0.7);" size="30">mdi-chevron-double-left</v-icon>
                            <span class="pl-2">- Click!</span>
                        </span>
                    </span>
                </span>
                <v-spacer></v-spacer>
                <!-- <span class="d-inline-block d-flex align-center" style="height: 70px;">
                    <v-btn class="mr-2" style="font-size: 1rem !important; color: rgba(255,255,255,0.7);" text>{{ quickMenuItem[0].title }}</v-btn>
                    <v-btn class="mr-2" style="font-size: 1rem !important; color: rgba(255,255,255,0.7);" text>{{ quickMenuItem[1].title }}</v-btn>
                </span> -->
                <span class="d-inline-block d-flex align-center" style="height: 70px; color: rgba(255,255,255,0.7); font-size: 1.1rem !important;">
                    문의: 031-206-1257
                </span>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
        <v-scroll-y-transition>
            <v-row class="ma-0" v-show="$parent.$parent.onFooter" style="padding: 50px 0px;" no-gutters>
                <v-spacer></v-spacer>
                <v-col class="d-flex" cols="10">
                    <v-row class="ma-0 pa-0" no-gutters>
                        <v-col class="d-flex" cols="2">
                            <div>
                                <div>
                                    <v-btn class="font-weight-light mb-2"
                                        style="font-size: 1rem !important; letter-spacing: initial;"
                                        @click="$parent.$parent.routerAction('HarrygndIntro')" text>
                                        회사소개
                                    </v-btn>
                                </div>
                                <div>
                                    <v-btn class="font-weight-light mb-2"
                                        style="font-size: 1rem !important; letter-spacing: initial;"
                                        @click="$parent.$parent.routerAction('HarrygndWayCome')" text>
                                        오시는길
                                    </v-btn>
                                </div>
                                <div>
                                    <v-btn class="font-weight-light mb-2"
                                        style="font-size: 1rem !important; letter-spacing: initial;"
                                        @click="$parent.$parent.routerAction('HarrygndPolicies')" text>
                                        이용약관
                                    </v-btn>
                                </div>
                                <div>
                                    <v-btn class="font-weight-light mb-2" 
                                        style="font-size: 1rem !important; letter-spacing: initial;" 
                                        @click="$parent.$parent.routerAction('HarrygndPrvcPlcy')" text>
                                        개인정보처리방침
                                    </v-btn>
                                </div> 
                                    <v-btn class="font-weight-light" 
                                        style="font-size: 1rem !important; letter-spacing: initial;" 
                                        text>
                                        사이트 맵
                                    </v-btn>
                            </div>
                        </v-col>
                        <v-col class="" cols="1">
                            <v-divider vertical></v-divider>
                        </v-col>
                        <v-col class="" cols="4">
                            <div class="mb-1" style="color: #292929; font-size: 1rem;">경기도 수원시 반달로 7번길 40 7층</div>
                            <div class="mb-6" style="color: #292929; font-size: 1rem;">사업자등록번호&nbsp;&nbsp;104-86-51732</div>
                            <div class="mb-1" style="color: #292929; font-size: 1rem;">대표&nbsp;&nbsp;이승준</div>
                            <div class="mb-1" style="color: #292929; font-size: 1rem;">전화&nbsp;&nbsp;031-206-1257</div>
                            <div class="mb-6" style="color: #292929; font-size: 1rem;">팩스&nbsp;&nbsp;031-206-1258</div>
                            <div class="grey--text darken-4 fontSizeDE" style="color: #292929;">Copyright 2023 ⓒ ㈜해리지앤디. All right reserved.</div>
                        </v-col>
                        <v-col class="d-flex align-center" cols="5">
                            <v-spacer></v-spacer>
                            <v-img max-width="120" max-height="130" src="../../assets/logo_stamp.png" alt="harryfoodlogostamp"></v-img>
                        </v-col>
                    </v-row>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
        </v-scroll-y-transition>
    </v-footer>
</template>

<script>
export default {
    name: 'BottomFooter',

    components: {

    },

    props: {

    },

    created: function () {

    },

    mounted: function () {
        
    },

    computed: {

    },

    watch:{

    },
        
    methods: {

    },

    data: () => ({

    }),
};
</script>