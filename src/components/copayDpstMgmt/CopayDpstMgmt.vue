<template>
    <v-row class="ma-0 pa-0" no-gutters>
        <v-spacer></v-spacer>
        <v-col class="" style="padding: 60px 0px;" :cols="this.$vuetify.breakpoint.mobile ? 10 : 8">
            <v-row class="ma-0 pa-0" v-if="this.$vuetify.breakpoint.mobile" no-gutters>
                <v-col class="mb-12" cols="12">
                    <span class="fontSizeImageTitle font-weight-medium suibTitleDL">코드관리</span>
                </v-col>
                <v-col class="d-flex justify-center px-2 pb-14" cols="12">
                    <v-card style="margin-bottom: 260px !important;"
                        class=""
                        elevation="0" rounded="md" outlined>
                        <div class="mt-7 mb-2 mx-4 fontSizeFdT font-weight-medium">STEP 1 &#41; 코드관리 방법.</div>
                        <v-divider class="mx-4"></v-divider>
                        <div class="mt-4 mb-5 mx-4 fontSizeOne">
                            <v-img alt="pencil" style="border: solid 1px black; height: 100%; width: 100%;" content-class
                                src="../../assets/images/CmmAuthMgmtStart.png">
                            </v-img>
                        </div>
                        <v-divider class="mx-4"></v-divider>
                        <div class="mt-2 mb-2 mx-4 fontSizeDE">① 추가가 필요한 항목 선택 후 개별 저장 및 삭제.</div>
                        <div class="mt-2 mb-2 mx-4 fontSizeDE">② 공통 코드들은 수정 및 삭제가 불가능합니다.</div>
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
                    <span class="fontSizeImageTitle font-weight-medium suibTitleDL">본인부담금 입금관리</span>
                </v-col>
                <v-col class="d-flex justify-center px-3" cols="12">
                    <v-card
                        class="" style="width: 100%;"
                        elevation="0" rounded="md">
                        <div class="mt-2 mb-2 fontSizeOne font-weight-medium">STEP 1 &#41; 기타비용 입력 필요시 상단 버튼을 클릭해주세요.</div>
                    </v-card>
                </v-col>
                <v-col class="d-flex mb-12" cols="12">
                    <v-col cols="10" style="position: relative;">
                        <v-img alt="pencil" style="border: solid 1px black; height: 100%; width: 100%;" content-class
                            src="../../assets/images/SelfFund.png">
                        </v-img>
                    </v-col>
                </v-col>
                <v-col class="d-flex justify-center px-3" cols="12">
                    <v-card
                        class="" style="width: 100%;"
                        elevation="0" rounded="md">
                        <div class="mt-2 mb-2 fontSizeOne font-weight-medium">STEP 2 &#41; 왼쪽 수급자 리스트중 해당 수급자를 선택 후 입력 버튼을 클릭해주세요.</div>
                    </v-card>
                </v-col>
                <v-col class="d-flex mb-12" cols="12">
                    <v-col cols="10" style="position: relative;">
                        <v-img alt="pencil" style="border: solid 1px black; height: 100%; width: 100%;" content-class
                            src="../../assets/images/SelfFund1.png">
                        </v-img>
                    </v-col>
                </v-col>
                <v-col class="d-flex justify-center px-3" cols="12">
                    <v-card
                        class="" style="width: 100%;"
                        elevation="0" rounded="md">
                        <div class="mt-2 mb-2 fontSizeOne font-weight-medium">STEP 3 &#41; 모든 내용 기입 후 저장 버튼을 클릭해주세요.</div>
                    </v-card>
                </v-col>    
                <v-col class="d-flex mb-12" cols="12">
                    <v-col cols="10" style="position: relative;">
                        <v-img alt="pencil" style="border: solid 1px black; height: 100%; width: 100%;" content-class
                            src="../../assets/images/SelfFund2.png">
                        </v-img>
                    </v-col>
                </v-col>
                <v-col class="d-flex justify-center px-3" cols="12">
                    <v-card
                        class="" style="width: 100%;"
                        elevation="0" rounded="md">
                        <div class="mt-2 mb-2 fontSizeOne font-weight-medium">STEP 4 &#41; 급여청구 생성할 수급자 선택 후 상단 버튼을 클릭해주세요.</div>
                    </v-card>
                </v-col>
                <v-col class="d-flex mb-12" cols="12">
                    <v-col cols="10" style="position: relative;">
                        <v-img alt="pencil" style="border: solid 1px black; height: 100%; width: 100%;" content-class
                            src="../../assets/images/SelfFund3.png">
                        </v-img>
                    </v-col>
                </v-col>
                <v-col class="d-flex justify-center px-3" cols="12">
                    <v-card
                        class="" style="width: 100%;"
                        elevation="0" rounded="md">
                        <div class="mt-2 mb-2 fontSizeOne font-weight-medium">STEP 5 &#41; 급여청구 확정 버튼 클릭시 확정 여부가 파란색으로 바뀝니다.</div>
                    </v-card>
                </v-col>
                <v-col class="d-flex" cols="12">
                    <v-col cols="10" style="position: relative;">
                        <v-img alt="pencil" style="border: solid 1px black; height: 100%; width: 100%;" content-class
                            src="../../assets/images/SelfFund5.png">
                        </v-img>
                    </v-col>
                </v-col>
                <v-col class="d-flex justify-center px-3" cols="12">
                    <v-card
                        class="" style="width: 100%;"
                        elevation="0" rounded="md">
                        <div class="mt-2 mb-2 fontSizeOne font-weight-medium">STEP 6 &#41; 급여청구 확정 버튼 클릭시 확정 여부가 파란색으로 바뀝니다.</div>
                    </v-card>
                </v-col>
                <v-col class="d-flex mb-12" cols="12">
                    <v-col cols="10" style="position: relative;">
                        <v-img alt="pencil" style="border: solid 1px black; height: 100%; width: 100%;" content-class
                            src="../../assets/images/SelfFund4.png">
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
    name: 'SelfPay',

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
      
    },

    data: () => ({

    }),
};
</script>