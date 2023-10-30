<template>
    <v-row class="ma-0" style="padding: 120px 0px;" no-gutters>
        <v-spacer></v-spacer>
        <v-col class="d-flex justify-center align-center" cols="8">
            <div class="">
                <div class="d-flex justify-center align-center">
                    <span class="d-inline-block d-flex justify-center align-center notFound" style="">
                        <span class="white--text pb-4 pr-1" style="font-size: 8rem;">404</span>
                    </span>
                </div>
                <div class="fontSizeImageTitle2 pointColr--text font-weight-bold mt-16 mb-8">
                    페이지를 찾을 수 없습니다.
                </div>
                <div class="fontSizeFdT pointColr--text">
                    원하시는 결과를 찾을 수 없습니다.
                </div>
                <div class="fontSizeFdT pointColr--text">
                    올바른 URL을 입력하였는지 확인하세요. 자세한 내용은 관리자에게 문의하시기 바랍니다.
                </div>
                <div class="mt-10">
                    <v-btn class="mr-5" outlined @click="$router.go(-1)">이전 페이지로</v-btn>
                    <v-btn outlined @click="$parent.$parent.$parent.routerAction('App')">초기화면으로</v-btn>
                </div>
            </div>
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
</template>

<script>
export default {
    name: 'NotFound',

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
        page: 1,
    }),
};
</script>

<style>
 .notFound { width: 300px; height: 300px; background-color: #5b493f; clip-path: circle(50% at 50% 50%); }
</style>