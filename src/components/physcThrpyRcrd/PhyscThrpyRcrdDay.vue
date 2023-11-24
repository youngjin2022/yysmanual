<template>
    <v-row class="ma-0 pa-0" no-gutters>
        <v-spacer></v-spacer>
        <v-col class="" style="padding: 60px 0px;" :cols="this.$vuetify.breakpoint.mobile ? 10 : 8">
            <v-row class="ma-0 pa-0" v-if="this.$vuetify.breakpoint.mobile" no-gutters>
                <v-col class="mb-12" cols="12">
                    <span class="fontSizeImageTitle font-weight-medium suibTitleDL">일일치료</span>
                </v-col>
                <v-col class="d-flex justify-center px-2 pb-14" cols="12">
                    <v-card  
                        class=""
                        elevation="0" rounded="md" outlined>
                        <div class="mt-7 mb-2 mx-4 fontSizeFdT font-weight-medium">STEP 1 &#41; 기록방법.</div>
                        <v-divider class="mx-4"></v-divider>
                        <div class="mt-4 mb-5 mx-4 fontSizeOne">
                            <v-img alt="pencil" style="border: solid 1px black; height: 100%; width: 100%;" content-class
                                src="../../assets/images/PhyscThrpyRcrdDay.png">
                            </v-img>
                        </div>
                        <v-divider class="mx-4"></v-divider>
                        <div class="mt-2 mb-2 mx-4 fontSizeDE">① 물리치료추가 버튼을 클릭해주세요.</div>
                    </v-card>
                </v-col>
                <v-col class="d-flex justify-center px-2 pb-14" cols="12">
                    <v-card  
                        class=""
                        elevation="0" rounded="md" outlined>
                        <div class="mt-7 mb-2 mx-4 fontSizeFdT font-weight-medium">STEP 2 &#41; 기록방법1.</div>
                        <v-divider class="mx-4"></v-divider>
                        <div class="mt-4 mb-5 mx-4 fontSizeOne">
                            <v-img alt="pencil" style="border: solid 1px black; height: 100%; width: 100%;" content-class
                                src="../../assets/images/PhyscThrpyRcrdDay1.png">
                            </v-img>
                        </div>
                        <v-divider class="mx-4"></v-divider>
                        <div class="mt-2 mb-2 mx-4 fontSizeDE">① 기입 란에 모두 입력 후 저장 버튼을 클릭해주세요.</div>
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
                    <span class="fontSizeImageTitle font-weight-medium suibTitleDL">일일치료</span>
                </v-col>
                <v-col class="d-flex justify-center px-3" cols="12">
                    <v-card
                        class="" style="width: 100%;"
                        elevation="0" rounded="md">
                        <div class="mt-2 mb-2 fontSizeOne font-weight-medium">STEP 1 &#41; 물리치료추가 버튼을 클릭해주세요.</div>
                    </v-card>
                </v-col>
                <v-col class="d-flex mb-12" cols="12">
                    <v-col cols="10" style="position: relative;">
                        <v-img alt="pencil" style="border: solid 1px black; height: 100%; width: 100%;" content-class
                            src="../../assets/images/PhyscThrpyRcrdDay.png">
                        </v-img>
                    </v-col>
                </v-col>
                <v-col class="d-flex justify-center px-3" cols="12">
                    <v-card
                        class="" style="width: 100%;"
                        elevation="0" rounded="md">
                        <div class="mt-2 mb-2 fontSizeOne font-weight-medium">STEP 2 &#41; 기입 란에 모두 입력 후 저장 버튼을 클릭해주세요.</div>
                    </v-card>
                </v-col>
                <v-col class="d-flex mb-12" cols="12">
                    <v-col cols="10" style="position: relative;">
                        <v-img alt="pencil" style="border: solid 1px black; height: 100%; width: 100%;" content-class
                            src="../../assets/images/PhyscThrpyRcrdDay1.png">
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
    name: 'PhyscThrpyRcrdDay',

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