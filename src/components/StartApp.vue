<template>
    <v-container class="pa-0" fluid>
        <v-row class="ma-0 pa-0" v-if="this.$vuetify.breakpoint.mobile" no-gutters>
            <v-col cols="12" style="position: relative;">
                <v-img width="100%" height="500" alt="foodService"
                    gradient="45deg, rgba(0, 0, 0, .1) 0%, rgba(0, 0, 0, 0.6) 100%"
                    src="../assets/images/vegetable.jpg">
                </v-img>
                <div class="d-inline-block imgOnTxtBox" style="width: 330px; top: 44%; right: 50%; transform: translate(50%, -50%);" :style="trnStyle">
                    <div class="fontSizeImageTitle white--text font-weight-light mb-7">
                        <span class="fontNotoSans pb-3" style="border-bottom: 1px solid white;">ICMSN.</span>
                    </div>
                    <div class="d-inline-block fontSizeImageTitle2 fontDoHyeon white--text" style="height: 38px;">
                        "Integrated"는 "통합"을
                    </div>
                    <div class="d-inline-block fontSizeImageTitle2 fontDoHyeon white--text" style="height: 38px;">
                        "Care Management"는 "사례관리"
                    </div>
                    <div class="white--text fontSizeOne mt-5" style="position: relative;">
                        "Solution"은 "솔루션"을 의미
                        <v-icon class="white--text" size="100"
                            style="position: absolute; top: 60px; right: -10px;">mdi-format-quote-close</v-icon>
                    </div>
                    <div class="white--text fontSizeOne" style="">
                        따라서 ICMSN은 "요양시설을 위한 통합 사례관리 솔루션"
                    </div>
                    <div class="white--text fontSizeOne" style="">
                        믿고 맡기세요.
                    </div>
                </div>
            </v-col>
        </v-row>
        <v-row class="ma-0 pa-0" v-else no-gutters>
            <v-col cols="12" style="position: relative;">
                <v-img max-height="500" alt="foodService"
                    gradient="90deg, rgba(0, 0, 0, .1) 0%, rgba(0, 0, 0, 0.5) 100%"
                    src="../assets/yoyangdeco.png">
                </v-img>
                <div class="d-inline-block imgOnTxtBox" :style="trnStyle">
                    <div class="fontSizeImageTitle white--text font-weight-light mb-7">
                        <span class="fontNotoSans pb-3" style="border-bottom: 1px solid white;">ICMSN.</span>
                    </div>
                    <div class="d-inline-block fontSizeImageTitle fontDoHyeon white--text" style="height: 60px;">
                        "Integrated"
                    </div><br/>
                    <div class="d-inline-block fontSizeImageTitle fontDoHyeon white--text" style="height: 60px;">
                        "Care"
                    </div><br/>
                    <div class="d-inline-block fontSizeImageTitle fontDoHyeon white--text" style="height: 60px;">
                        "Management"
                    </div><br/>
                    <div class="d-inline-block fontSizeImageTitle fontDoHyeon white--text " style="height: 60px;">
                        "Solution"
                    </div><br/>
                    <div class="d-inline-block fontSizeImageTitle fontDoHyeon white--text mb-3" style="height: 60px;">
                        "for Nursing Homes"
                    </div>
                    <div class="d-inline-block white--text" style="">
                        따라서 ICMSN은 "요양시설을 위한 통합 사례관리 솔루션"
                    </div>
                </div>
            </v-col>
        </v-row>
        <div v-if="this.$vuetify.breakpoint.mobile" style="padding: 80px 0px;">
            <v-row class="ma-0 px-4" no-gutters>
                <v-col class="" cols="12">
                    <v-img src="../assets/images/fresh.jpg" alt="freshfood"></v-img>
                </v-col>
                <v-col class="" cols="12">
                    <div class="mt-8">
                        <div class="">
                            <span class="fontNotoSans fontSizeFdS pb-3"
                                style="border-bottom: 1px solid #3e3838;">Fresh.</span>
                        </div>
                        <div class="fontSizeOne pointColr--text mt-6">
                            몸과 마음을 깨끗하게 정화해 주는 신선한 식재료를 엄선하여 고객의 신뢰를 이어갑니다.
                        </div>
                    </div>
                </v-col>
            </v-row>
            <v-row class="ma-0 px-4 pt-12" no-gutters>
                <v-col class="" cols="12">
                    <v-img src="../assets/images/korean_food2.jpg" alt="koreanfood"></v-img>
                </v-col>
                <v-col class="" cols="12">
                    <div class="mt-8">
                        <div class="">
                            <span class="fontNotoSans fontSizeFdS pb-3"
                                style="border-bottom: 1px solid #3e3838;">Delicious.</span>
                        </div>
                        <div class="fontSizeOne pointColr--text mt-6">
                            밥심으로 살아가는 한국인, 매끼 식사가 즐겁고 기다려지는 시간으로 다가옵니다.
                        </div>
                    </div>
                </v-col>
            </v-row>
            <v-row class="ma-0 px-4 pt-12" no-gutters>
                <v-col class="" cols="12">
                    <v-img src="../assets/images/healthy.jpg" alt="healthyfood"></v-img>
                </v-col>
                <v-col class="" cols="12">
                    <div class="mt-8">
                        <div class="">
                            <span class="fontNotoSans fontSizeFdS pb-3"
                                style="border-bottom: 1px solid #3e3838;">Healthy.</span>
                        </div>
                        <div class="fontSizeOne pointColr--text mt-6">
                            고객의 건강을 위해 필수 영양소와 칼로리를 고려한 균형잡힌 식단을 제공합니다.
                        </div>
                    </div>
                </v-col>
            </v-row>
        </div>
        <div v-else style="padding: 120px 20px;">
            <v-row class="ma-0 pa-0" no-gutters>
                <v-spacer></v-spacer>
                <v-col cols="8">
                    <v-row class="ma-0 pa-0" no-gutters>
                        <v-col class="d-flex align-center" cols="3">
                            <div class="">
                                <div class="">
                                    <span class="fontNotoSans fontSizeImageTitle pb-3"
                                        style="border-bottom: 1px solid #3e3838;">efficient.</span>
                                </div>
                                <div class="fontSizeFdS font-weight-medium pointColr--text mt-10">
                                    최상의 서비스와<br/>효율적인 운영을 위한<br/>요양시설 관리시스템.
                                </div>
                            </div>
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col cols="8">
                            <v-img max-height="450" src="../assets/images/efficient.jpg" alt="freshfood">
                            </v-img>
                        </v-col>
                    </v-row>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
            
        </div>
    </v-container>
</template>

<script>
export default {
    name: 'StartApp',

    components: {

    },

    props: {

    },

    created: function(){
    },

    mounted: function(){
        this.$nextTick(function () {
            this.imgTxtPosn = (this.$vuetify.breakpoint.width - 1100) / 100
            this.$parent.$parent.$parent.onFooter = false
        })
    },

    computed: {
        trnStyle () {
            return {
                '--rPosn': this.imgTxtPosn + '%',
            }
        },
        getDisplayWidth: function () {
           return this.$vuetify.breakpoint.width
        },
    },

    watch:{
        getDisplayWidth: function (value) {
            this.imgTxtPosn = (value - 1100) / 100
        },
    },
        
    methods: {

    },

    data: () => ({
        imgTxtPosn: 2,
    }),
};
</script>

<style>
    .imgOnTxtBox { position: absolute; top: 50%; right: var(--rPosn); transform: translateY(-50%); width: 660px; }
</style>