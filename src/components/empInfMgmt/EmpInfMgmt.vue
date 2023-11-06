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
                    <span class="fontSizeImageTitle font-weight-medium suibTitleDL">직원정보관리</span>
                </v-col>
                <v-col class="d-flex justify-center px-3" cols="12">
                    <v-card
                        class="" style="width: 100%;"
                        elevation="0" rounded="md">
                        <div class="mt-2 mb-2 fontSizeOne font-weight-medium">STEP 1 &#41; 신규 직원 등록하기</div>
                    </v-card>
                </v-col>
                <v-col class="d-flex" cols="12">
                    <v-col cols="10" style="position: relative;">
                        <v-img max-height="580" alt="pencil" style="border: solid 1px black;"
                            src="../../assets/images/EmpInfMgmtNew.png">
                        </v-img>
                    </v-col>
                </v-col>
                <v-col class="d-flex justify-center px-3 mb-12" cols="12">
                    <v-card
                        class="" style="width: 100%;"
                        elevation="0" rounded="md">
                        <div class="mt-2 mb-2 fontSizeOne font-weight-medium">① 신규 버튼을 클릭하면 생기는 팝업창입니다.</div>
                        <div class="mt-2 mb-2 fontSizeOne font-weight-medium">② 신규로 등록하려는 직원에 대한 정보를 모두 기입 후 저장 버튼을 클릭해주세요.</div>
                    </v-card>
                </v-col>
                <v-col class="d-flex justify-center px-3" cols="12">
                    <v-card
                        class="" style="width: 100%;"
                        elevation="0" rounded="md">
                        <div class="mt-2 mb-2 fontSizeOne font-weight-medium">STEP 2 &#41; 직원정보 수정</div>
                    </v-card>
                </v-col>
                <v-col class="d-flex" cols="12">
                    <v-col cols="10" style="position: relative;">
                        <v-img max-height="630" alt="pencil" style="border: solid 1px black;"
                            src="../../assets/images/EmpInfMgmt1.png">
                        </v-img>
                    </v-col>
                </v-col>
                <v-col class="d-flex justify-center px-3 mb-12" cols="12">
                    <v-card
                        class="" style="width: 100%;"
                        elevation="0" rounded="md">
                        <div class="mt-2 mb-2 fontSizeOne font-weight-medium">① 등록된 직원을 선택 후 수정 버튼을 클릭해주세요.</div>
                        <div class="mt-2 mb-2 fontSizeOne font-weight-medium">② 수정이 완료되면 비밀번호를 넣고 저장 버튼을 클릭해주세요.</div>
                    </v-card>
                </v-col>
                <v-col class="d-flex justify-center px-3" cols="12">
                    <v-card
                        class="" style="width: 100%;"
                        elevation="0" rounded="md">
                        <div class="mt-2 mb-2 fontSizeOne font-weight-medium">STEP 3 &#41; 직원정보 근무시간</div>
                    </v-card>
                </v-col>
                <v-col class="d-flex" cols="12">
                    <v-col cols="10" style="position: relative;">
                        <v-img max-height="620" alt="pencil" style="border: solid 1px black;"
                            src="../../assets/images/EmpInfMgmt2.png">
                        </v-img>
                    </v-col>
                </v-col>
                <v-col class="d-flex justify-center px-3 mb-12" cols="12">
                    <v-card
                        class="" style="width: 100%;"
                        elevation="0" rounded="md">
                        <div class="mt-2 mb-2 fontSizeOne font-weight-medium">① 파란색 플러스 버튼을 클릭해주세요.</div>
                        <div class="mt-2 mb-2 fontSizeOne font-weight-medium">② 모든 내용 기입 후 파란색 디스크 버튼을 클릭해 저장을 완료해주세요.</div>
                    </v-card>
                </v-col>
                <v-col class="d-flex justify-center px-3" cols="12">
                    <v-card
                        class="" style="width: 100%;"
                        elevation="0" rounded="md">
                        <div class="mt-2 mb-2 fontSizeOne font-weight-medium">STEP 4 &#41; 직원정보 보험·자격증</div>
                    </v-card>
                </v-col>
                <v-col class="d-flex" cols="12">
                    <v-col cols="10" style="position: relative;">
                        <v-img max-height="620" alt="pencil" style="border: solid 1px black;"
                            src="../../assets/images/EmpInfMgmt3.png">
                        </v-img>
                    </v-col>
                </v-col>
                <v-col class="d-flex justify-center px-3 mb-12" cols="12">
                    <v-card
                        class="" style="width: 100%;"
                        elevation="0" rounded="md">
                        <div class="mt-2 mb-2 fontSizeOne font-weight-medium">① 4대 보험 모든 내용 기입 후 파란색 디스크 버튼을 클릭해 저장을 완료해주세요.</div>
                        <div class="mt-2 mb-2 fontSizeOne font-weight-medium">② 자격증 정보 모든 내용 기입 후 파란색 디스크 버튼을 클릭해 저장을 완료해주세요.</div>
                    </v-card>
                </v-col>
                <v-col class="d-flex justify-center px-3" cols="12">
                    <v-card
                        class="" style="width: 100%;"
                        elevation="0" rounded="md">
                        <div class="mt-2 mb-2 fontSizeOne font-weight-medium">STEP 5 &#41; 전자서명</div>
                    </v-card>
                </v-col>
                <v-col class="d-flex" cols="12">
                    <v-col cols="10" style="position: relative;">
                        <v-img max-height="620" alt="pencil" style="border: solid 1px black;"
                            src="../../assets/images/EmpInfMgmt4.png">
                        </v-img>
                    </v-col>
                </v-col>
                <v-col class="d-flex justify-center px-3 mb-12" cols="12">
                    <v-card
                        class="" style="width: 100%;"
                        elevation="0" rounded="md">
                        <div class="mt-2 mb-2 fontSizeOne font-weight-medium">① 전자서명 후 파란색 디스크 버튼을 클릭해 저장을 완료해주세요.</div>
                    </v-card>
                </v-col>
            </v-row>
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
</template>

<script>
export default {
    name: 'EmpInfMgmtNew',

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