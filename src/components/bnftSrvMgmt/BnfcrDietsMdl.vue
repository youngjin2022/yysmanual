<template>
  <v-row class="ma-0 pa-0" no-gutters>
      <v-spacer></v-spacer>
      <v-col class="" style="padding: 60px 0px;" :cols="this.$vuetify.breakpoint.mobile ? 10 : 8">
          <v-row class="ma-0 pa-0" v-if="this.$vuetify.breakpoint.mobile" no-gutters>
              <v-col class="mb-12" cols="12">
                  <span class="fontSizeImageTitle2 font-weight-medium suibTitleDL">식이정보관리</span>
              </v-col>
              <v-col class="d-flex justify-center px-2 pb-14" cols="12">
                  <v-card 
                      class=""
                      elevation="0" rounded="md" outlined>
                      <div class="mt-7 mb-2 mx-4 fontSizeFdT font-weight-medium">STEP 1 &#41; 작성방법.</div>
                      <v-divider class="mx-4"></v-divider>
                      <div class="mt-4 mb-5 mx-4 fontSizeOne">
                          <v-img alt="pencil" style="border: solid 1px black; height: 100%; width: 100%;" content-class
                              src="../../assets/images/CareProPln.png">
                          </v-img>
                      </div>
                      <v-divider class="mx-4"></v-divider>
                      <div class="mt-2 mb-2 mx-4 fontSizeDE">① 작성이 필요한 해당 수급자의 급여제공 항목을 선택해주세요.</div>
                      <div class="mt-2 mb-2 mx-4 fontSizeDE">② 파란색 작성 버튼은 신규작성이며, 기존 작성된 내용 수정 필요시 버튼 밑으로 나열된 항목중 맞는 날짜를 클릭해주세요.</div>
                  </v-card>
              </v-col>
              <v-col class="d-flex justify-center px-2 pb-14" cols="12">
                  <v-card 
                      class=""
                      elevation="0" rounded="md" outlined>
                      <div class="mt-7 mb-2 mx-4 fontSizeFdT font-weight-medium">STEP 2 &#41; 작성방법1.</div>
                      <v-divider class="mx-4"></v-divider>
                      <div class="mt-4 mb-5 mx-4 fontSizeOne">
                          <v-img alt="pencil" style="border: solid 1px black; height: 100%; width: 100%;" content-class
                              src="../../assets/images/AllCarePP1.png">
                          </v-img>
                      </div>
                      <v-divider class="mx-4"></v-divider>
                      <div class="mt-2 mb-2 mx-4 fontSizeDE">① 이전자료와 동일하거나 비슷하게 평가된다면 저장 옆 이전자료 버튼을 클릭해주세요.</div>
                      <div class="mt-2 mb-2 mx-4 fontSizeDE">② 한번에 저장이 가능하니 현재 탭 작성 후 다음 탭으로 이어 작성하고 마지막에 저장을 클릭해주시면 됩니다.</div>
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
                  <span class="fontSizeImageTitle font-weight-medium suibTitleDL">식이정보관리</span>
              </v-col>
              <v-col class="d-flex justify-center px-3" cols="12">
                  <v-card
                      class="" style="width: 100%;"
                      elevation="0" rounded="md">
                      <div class="mt-2 mb-2 fontSizeOne font-weight-medium">STEP 1 &#41; 작성이 필요한 해당 수급자의 급여제공 항목을 선택해주세요.</div>
                  </v-card>
              </v-col>
              <v-col class="d-flex" cols="12">
                  <v-col cols="10" style="position: relative;">
                      <v-img alt="pencil" style="border: solid 1px black; height: 100%; width: 100%;" content-class
                          src="../../assets/images/BnfcrDietsMdl.png">
                      </v-img>
                  </v-col>
              </v-col>
              <v-col class="d-flex justify-center px-3 mb-12" cols="12">
                  <v-card
                      class="" style="width: 100%;"
                      elevation="0" rounded="md">
                      <div class="mt-2 mb-2 fontSizeOne font-weight-medium">① 파란색 작성 버튼은 신규작성이며, 기존 작성된 내용 수정 필요시 버튼 밑으로 나열된 항목중 맞는 날짜를 클릭해주세요.</div>
                  </v-card> 
              </v-col>
              <v-col class="d-flex justify-center px-3" cols="12">
                  <v-card
                      class="" style="width: 100%;"
                      elevation="0" rounded="md">
                      <div class="mt-2 mb-2 fontSizeOne font-weight-medium">STEP 2 &#41; 각 탭의 내용들을 모두 기입 후 저장 버튼을 클릭해주세요.</div>
                  </v-card>
              </v-col>
              <v-col class="d-flex" cols="12">
                  <v-col cols="10" style="position: relative;">
                      <v-img alt="pencil" style="border: solid 1px black; height: 100%; width: 100%;" content-class
                          src="../../assets/images/AllCarePP1.png">
                      </v-img>
                  </v-col>
              </v-col>
              <v-col class="d-flex justify-center px-3 mb-12" cols="12">
                  <v-card
                      class="" style="width: 100%;"
                      elevation="0" rounded="md">
                      <div class="mt-2 mb-2 fontSizeOne font-weight-medium">① 이전자료와 동일하거나 비슷하게 평가된다면 저장 옆 이전자료 버튼을 클릭해주세요.</div>
                      <div class="mt-2 mb-2 fontSizeOne font-weight-medium">② 한번에 저장이 가능하니 현재 탭 작성 후 다음 탭으로 이어 작성하고 마지막에 저장을 클릭해주시면 됩니다.</div>
                  </v-card>
              </v-col>
          </v-row>
      </v-col>
      <v-spacer></v-spacer>
  </v-row>
</template>

<script>
export default {
  name: 'BnfcrDietsMdl',

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