<template>
    <v-row class="ma-0 pa-0" no-gutters>
        <v-spacer></v-spacer>
        <v-col class="" style="padding: 60px 0px;" :cols="this.$vuetify.breakpoint.mobile ? 10 : 8">
            <v-row class="ma-0 pa-0" v-if="this.$vuetify.breakpoint.mobile" no-gutters>
                <v-col class="mb-12" cols="12">
                    <span class="fontSizeImageTitle font-weight-medium suibTitleDL">고령 친화식</span>
                </v-col>
                <v-col class="d-flex justify-center px-2 pb-14" cols="12">
                    <v-card
                        class=""
                        elevation="0" rounded="md" outlined>
                        <div class="mt-7 mb-2 mx-4 fontSizeFdT font-weight-medium">일반식</div>
                        <v-divider class="mx-4"></v-divider>
                        <div class="mt-4 mb-5 mx-4 fontSizeOne">
                            조미료의 사용을 최소화하고 천연재료의 맛을 내는
                            정성이 가득담아 집밥같은 식사를 요리하여 드립니다.
                        </div>
                    </v-card>
                </v-col>
                <v-col class="d-flex justify-center px-2 pb-14" cols="12">
                    <v-card
                        class=""
                        elevation="0" rounded="md" outlined>
                        <div class="mt-7 mb-2 mx-4 fontSizeFdT font-weight-medium">다진식</div>
                        <v-divider class="mx-4"></v-divider>
                        <div class="mt-4 mb-5 mx-4 fontSizeOne">
                            저작기능이 약화되어 음식물 분쇄가 어려운 어르신들은 위하여 
                            잘게 자른 일반 반찬에 죽과 국을 곁드려 드립니다.
                        </div>
                    </v-card>
                </v-col>
                <v-col class="d-flex justify-center px-2" cols="12">
                    <v-card
                        class=""
                        elevation="0" rounded="md" outlined>
                        <div class="mt-7 mb-2 mx-4 fontSizeFdT font-weight-medium">갈식(죽식)</div>
                        <v-divider class="mx-4"></v-divider>
                        <div class="mt-4 mb-5 mx-4 fontSizeOne">
                            연하기능 및 섭식기능이 떨어져 식사하시기 어려운 어르신들은 위하여 
                            쌀, 고기, 야채 등을 갈아서 제공하여 드립니다.
                        </div>
                    </v-card>
                </v-col>
            </v-row>
            <v-row class="ma-0 pa-0" v-else no-gutters>
                <!-- <v-col class="mb-6" cols="12">
                    <span class="fontSizeImageTitle font-weight-medium suibTitleDL">요양원 급식</span>
                </v-col>
                <v-col class="mb-16" cols="12">
                    <span class="fontSizeFdT">
                        다양한 고령친화식 메뉴 편성으로, 일반식, 다진식, 갈식(죽식)등 최상의 맞춤형 식단을 제공하겠습니다.
                    </span>
                </v-col> -->
                <v-col class="mb-12" cols="12">
                    <span class="fontSizeImageTitle font-weight-medium suibTitleDL">급여수가정보</span>
                </v-col>
                <v-col class="d-flex justify-center px-3" cols="12">
                    <v-card
                        class="" style="width: 100%;"
                        elevation="0" rounded="md">
                        <div class="mt-2 mb-2 fontSizeOne font-weight-medium">STEP 1 &#41; 기본정보 입력 전 문자 발신번호 등록</div>
                    </v-card>
                </v-col>
                <v-col class="d-flex" cols="12">
                    <v-col cols="10" style="position: relative;">
                        <v-img max-height="580" alt="pencil" style="border: solid 1px black;"
                            src="../../assets/images/FacInfoMgmt.png">
                        </v-img>
                    </v-col>
                </v-col>
                <v-col class="d-flex justify-center px-3 mb-12" cols="12">
                    <v-card
                        class="" style="width: 100%;"
                        elevation="0" rounded="md">
                        <div class="mt-2 mb-2 fontSizeOne font-weight-medium">① 파란색 전화기 버튼을 클릭해주세요.</div>
                    </v-card>
                </v-col>
                <v-col class="d-flex justify-center px-3" cols="12">
                    <v-card
                        class="" style="width: 100%;"
                        elevation="0" rounded="md">
                        <div class="mt-2 mb-2 fontSizeOne font-weight-medium">STEP 2 &#41; 문자 발신번호 등록 방법</div>
                    </v-card>
                </v-col>
                <v-col class="d-flex" cols="12">
                    <v-col cols="10" style="position: relative;">
                        <v-img max-height="560" alt="pencil" style="border: solid 1px black;"
                            src="../../assets/images/FacInfoMgmt4.png">
                        </v-img>
                    </v-col>
                </v-col>
                <v-col class="d-flex justify-center px-3 mb-12" cols="12">
                    <v-card
                        class="" style="width: 100%;"
                        elevation="0" rounded="md">
                        <div class="mt-2 mb-2 fontSizeOne font-weight-medium">① 맨 밑 주의사항들을 읽어주십쇼.</div>
                        <div class="mt-2 mb-2 fontSizeOne font-weight-medium">② 발신을 할 번호를 입력 후 전화번호 가입증명서를 제출해주세요.</div>
                        <div class="mt-2 mb-2 fontSizeOne font-weight-medium">③ 문자 발신번호 등록 버튼을 클릭 후 요양시스에 등록 요청 완료해주세요.</div>
                    </v-card>
                </v-col>
                <v-col class="d-flex justify-center px-3" cols="12">
                    <v-card
                        class="" style="width: 100%;"
                        elevation="0" rounded="md">
                        <div class="mt-2 mb-2 fontSizeOne font-weight-medium">STEP 3 &#41; 문자 발신번호 등록과 모든 기본정보 기입을 한 후 저장버튼을 클릭해주세요.</div>
                    </v-card>
                </v-col>
                <v-col class="d-flex mb-12" cols="12">
                    <v-col cols="10" style="position: relative;">
                        <v-img max-height="550" alt="pencil" style="border: solid 1px black;"
                            src="../../assets/images/FacInfoMgmt5.png">
                        </v-img>
                    </v-col>
                </v-col>
            </v-row>
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
</template>

<script>
export default {
    name: 'blnftAmntInf',

    components: {
       
    },

    props: {

    },

    created: function(){
    },

    mounted: function(){
        this.$nextTick(function () {
            //console.log(this.$parent.$parent.$parent.$parent)
        })
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

<style>
    .suibTitleDL { border-left: 8px solid #dbdbdb; display: inline-block; height: 40px; line-height: 36px; padding-left: 20px; }
</style>