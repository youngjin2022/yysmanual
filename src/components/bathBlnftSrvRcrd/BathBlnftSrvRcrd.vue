<template>
    <v-row class="ma-0 pa-0" no-gutters>
        <v-spacer></v-spacer>
        <v-col class="" style="padding: 60px 0px;" :cols="this.$vuetify.breakpoint.mobile ? 10 : 8">
            <v-row class="ma-0 pa-0" v-if="this.$vuetify.breakpoint.mobile" no-gutters>
                <v-col class="mb-12" cols="12">
                    <span class="fontSizeImageTitle font-weight-medium suibTitleDL">목욕 급여제공기록</span>
                </v-col>
                <v-col class="d-flex justify-center px-2 pb-14" cols="12">
                    <v-card  
                        class=""
                        elevation="0" rounded="md" outlined>
                        <div class="mt-7 mb-2 mx-4 fontSizeFdT font-weight-medium">STEP 1 &#41; 목욕시간 설정하기.</div>
                        <v-divider class="mx-4"></v-divider>
                        <div class="mt-4 mb-5 mx-4 fontSizeOne">
                            <v-img alt="pencil" style="border: solid 1px black; height: 100%; width: 100%;" content-class
                                src="../../assets/images/BathBlnftSrvRcrd.png">
                            </v-img>
                        </div>
                        <v-divider class="mx-4"></v-divider>
                        <div class="mt-2 mb-2 mx-4 fontSizeDE">① 10-3 코드관리 페이지로 이동해주세요.</div>
                        <div class="mt-2 mb-2 mx-4 fontSizeDE">② 목욕시간을 저장해주세요.</div>
                    </v-card>
                </v-col>
                <v-col class="d-flex justify-center px-2 pb-14" cols="12">
                    <v-card  
                        class=""
                        elevation="0" rounded="md" outlined>
                        <div class="mt-7 mb-2 mx-4 fontSizeFdT font-weight-medium">STEP 2 &#41; 목욕시간 저장하기.</div>
                        <v-divider class="mx-4"></v-divider>
                        <div class="mt-4 mb-5 mx-4 fontSizeOne">
                            <v-img alt="pencil" style="border: solid 1px black; height: 100%; width: 100%;" content-class
                                src="../../assets/images/BathBlnftSrvRcrd1.png">
                            </v-img>
                        </div>
                        <v-divider class="mx-4"></v-divider>
                        <div class="mt-2 mb-2 mx-4 fontSizeDE">① 수급자 선택 버튼 클릭 후 목욕할 수급자를 선택해주세요.</div>
                        <div class="mt-2 mb-2 mx-4 fontSizeDE">② 목욕시간을 저장해주세요.</div>
                    </v-card>
                </v-col>
                <v-col class="d-flex justify-center px-2 pb-14" cols="12">
                    <v-card  
                        class=""
                        elevation="0" rounded="md" outlined>
                        <div class="mt-7 mb-2 mx-4 fontSizeFdT font-weight-medium">STEP 3 &#41; 목욕 급여제공기록 저장.</div>
                        <v-divider class="mx-4"></v-divider>
                        <div class="mt-4 mb-5 mx-4 fontSizeOne">
                            <v-img alt="pencil" style="border: solid 1px black; height: 100%; width: 100%;" content-class
                                src="../../assets/images/BathBlnftSrvRcrd2.png">
                            </v-img>
                        </div>
                        <v-divider class="mx-4"></v-divider>
                        <div class="mt-2 mb-2 mx-4 fontSizeDE">① 목욕방법과 작성자를 선택 후 처리에 있는 파란색 저장버튼을 클릭해주세요.</div>
                        <div class="mt-2 mb-2 mx-4 fontSizeDE">② 이후 기록을 작성해주세요.</div>
                        <div class="mt-2 mb-2 mx-4 fontSizeDE">③ 리스트가 여러개일땐 오른쪽 상단 일괄 선택 후 일괄 저장을 이용하면 편하게 기록이 가능합니다.</div>
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
                    <span class="fontSizeImageTitle font-weight-medium suibTitleDL">목욕 급여제공기록</span>
                </v-col>
                <v-col class="d-flex justify-center px-3" cols="12">
                    <v-card
                        class="" style="width: 100%;"
                        elevation="0" rounded="md">
                        <div class="mt-2 mb-2 fontSizeOne font-weight-medium">STEP 1 &#41; 목욕시간 설정하기.</div>
                    </v-card>
                </v-col>
                <v-col class="d-flex" cols="12">
                    <v-col cols="10" style="position: relative;">
                        <v-img alt="pencil" style="border: solid 1px black; height: 100%; width: 100%;" content-class
                            src="../../assets/images/BathBlnftSrvRcrd.png">
                        </v-img>
                    </v-col>
                </v-col>
                <v-col class="d-flex justify-center px-3 mb-12" cols="12">
                    <v-card
                        class="" style="width: 100%;"
                        elevation="0" rounded="md">
                        <div class="mt-2 mb-2 fontSizeOne font-weight-medium">① 10-3 코드관리 페이지로 이동해주세요.</div>
                        <div class="mt-2 mb-2 fontSizeOne font-weight-medium">② 목욕시간을 저장해주세요.</div>
                    </v-card>
                </v-col>
                <v-col class="d-flex justify-center px-3" cols="12">
                    <v-card
                        class="" style="width: 100%;"
                        elevation="0" rounded="md">
                        <div class="mt-2 mb-2 fontSizeOne font-weight-medium">STEP 2 &#41; 목욕일정 저장하기.</div>
                    </v-card>
                </v-col>
                <v-col class="d-flex" cols="12">
                    <v-col cols="10" style="position: relative;">
                        <v-img alt="pencil" style="border: solid 1px black; height: 100%; width: 100%;" content-class
                            src="../../assets/images/BathBlnftSrvRcrd1.png">
                        </v-img>
                    </v-col>
                </v-col>
                <v-col class="d-flex justify-center px-3 mb-12" cols="12">
                    <v-card
                        class="" style="width: 100%;"
                        elevation="0" rounded="md">
                        <div class="mt-2 mb-2 fontSizeOne font-weight-medium">① 수급자 선택 버튼 클릭 후 목욕할 수급자를 선택해주세요.</div>
                        <div class="mt-2 mb-2 fontSizeOne font-weight-medium">② 목욕시간을 저장해주세요.</div>
                    </v-card>
                </v-col>
                <v-col class="d-flex justify-center px-3" cols="12">
                    <v-card
                        class="" style="width: 100%;"
                        elevation="0" rounded="md">
                        <div class="mt-2 mb-2 fontSizeOne font-weight-medium">STEP 3 &#41; 목욕 급여제공기록 저장.</div>
                    </v-card>
                </v-col>
                <v-col class="d-flex" cols="12">
                    <v-col cols="10" style="position: relative;">
                        <v-img alt="pencil" style="border: solid 1px black; height: 100%; width: 100%;" content-class
                            src="../../assets/images/BathBlnftSrvRcrd2.png">
                        </v-img>
                    </v-col>
                </v-col>
                <v-col class="d-flex justify-center px-3 mb-12" cols="12">
                    <v-card
                        class="" style="width: 100%;"
                        elevation="0" rounded="md">
                        <div class="mt-2 mb-2 fontSizeOne font-weight-medium">① 목욕방법과 작성자를 선택 후 처리에 있는 파란색 저장버튼을 클릭해주세요.</div>
                        <div class="mt-2 mb-2 fontSizeOne font-weight-medium">② 이후 기록을 작성해주세요.</div>
                        <div class="mt-2 mb-2 fontSizeOne font-weight-medium">③ 리스트가 여러개일땐 오른쪽 상단 일괄 선택 후 일괄 저장을 이용하면 편하게 기록이 가능합니다.</div>
                    </v-card>
                </v-col>
            </v-row>
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
</template>

<script>
export default {
    name: 'BathBlnftSrvRcrd',

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