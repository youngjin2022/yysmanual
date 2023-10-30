<template>
    <v-footer class="ma-0 pa-0" color="white" app>
        <v-row class="ma-0 px-6 pt-5 pb-4 pointColr" no-gutters>
            <v-col class="d-flex" cols="12" @click="$parent.$parent.routerAction('ContactUs')">
                <span class="fontSizeOne" style="color: rgba(255,255,255,0.7); cursor :pointer;">온라인 문의하기.</span>
                <v-spacer></v-spacer>
                <span class="fontSizeOne" style="color: rgba(255,255,255,0.7);">
                    031-206-1257
                </span>
            </v-col>
        </v-row>
        <v-scroll-y-transition>
            <v-row class="ma-0 py-8 px-4" v-show="$parent.$parent.onFooter" no-gutters>
                <v-col class="d-flex align-center" cols="4">
                    <div>
                        <div>
                            <v-btn class="fontSizeDE font-weight-light mb-2" style="letter-spacing: initial;"
                                @click="$parent.$parent.routerAction('HarrygndIntro')" text>
                                회사소개
                            </v-btn>
                        </div>
                        <div>
                            <v-btn class="fontSizeDE font-weight-light mb-2" style="letter-spacing: initial;"
                                @click="$parent.$parent.routerAction('HarrygndWayCome')" text>
                                오시는길
                            </v-btn>
                        </div>
                        <div>
                            <v-btn class="fontSizeDE font-weight-light mb-2" style="letter-spacing: initial;"
                                @click="$parent.$parent.routerAction('HarrygndPolicies')" text>
                                이용약관
                            </v-btn>
                        </div>
                        <div>
                            <v-btn class="fontSizeDE font-weight-light mb-2" style="letter-spacing: initial;"
                                @click="$parent.$parent.routerAction('HarrygndPrvcPlcy')" text>
                                개인정보처리방침
                            </v-btn>
                        </div>
                        <div>
                            <v-btn class="fontSizeDE font-weight-light mb-2" style="letter-spacing: initial;"
                                text>
                                사이트 맵
                            </v-btn>
                        </div>
                    </div>
                </v-col>
                <v-col class="d-flex justify-center" cols="1">
                    <v-divider vertical></v-divider>
                </v-col>
                <v-col class="d-flex justify-center" cols="7">
                    <div>
                        <div class="d-flex justify-center mb-5">
                            <v-img max-width="70" max-height="80" src="../../assets/logo_stamp.png" alt="harryfoodlogostamp"></v-img>
                        </div>
                        <div class="mb-1 fontSizeDE" style="color: #292929;">경기도 수원시 반달로 7번길 40 7층</div>
                        <div class="mb-1 fontSizeDE" style="color: #292929;">사업자등록번호&nbsp;&nbsp;104-86-51732</div>
                        <div class="mb-1 fontSizeDE" style="color: #292929;">대표&nbsp;&nbsp;이승준</div>
                        <div class="mb-1 fontSizeDE" style="color: #292929;">전화&nbsp;&nbsp;031-206-1257</div>
                        <div class="mb-4 fontSizeDE" style="color: #292929;">팩스&nbsp;&nbsp;031-206-1258</div>
                        <div class="mb-1 fontSizeDS grey--text darken-4">Copyright 2023 ⓒ ㈜해리지앤디.</div>
                        <div class="mb-1 fontSizeDS grey--text darken-4">All right reserved.</div>   
                    </div>
                </v-col>
            </v-row>
        </v-scroll-y-transition>
    </v-footer>
</template>

<script>
export default {
    name: 'MobileFooter',

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