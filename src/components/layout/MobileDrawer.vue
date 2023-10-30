<template>
    <v-navigation-drawer
        v-model="$parent.$parent.drawer" class="rounded-lg rounded-r-0 elevation-0" disable-resize-watcher right app>
        <div class="d-flex align-center py-5 pl-5 pr-3 txtHghColr">
            <span class="font-weight-bold white--text" style="font-size: 1.3rem;">해리지앤디</span>
            <v-spacer></v-spacer>
            <span class="d-inline-block" style="width: 36px;">
                <v-btn class="pt-1" color="white" @click="$parent.$parent.drawer=false" icon>
                    <v-icon size="28">mdi-close</v-icon>
                </v-btn>
            </span>
        </div>
        <v-divider></v-divider>
        <v-list class="pa-0">
            <v-list-group
                v-for="item in drawerList"
                :key="item.title"
                v-model="item.active"
                :prepend-icon="item.action"
                no-action>
                <template v-slot:activator>
                    <v-list-item-content>
                        <v-list-item-title class="font-weight-medium" v-text="item.title"></v-list-item-title>
                    </v-list-item-content>
                </template>
        
                <v-list-item
                    v-for="child in item.items"
                    :key="child.title" @click="$parent.$parent.routerAction(child.name)">
                    <v-list-item-content>
                        <v-list-item-title v-text="child.title"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-group>
        </v-list>
        <v-divider></v-divider>
        <template v-slot:append>
            <v-row class="ma-0 py-3 txtHghColr" no-gutters>
                <v-col cols="3">
                    
                </v-col>
                <v-spacer></v-spacer>
                <v-col class="d-flex" cols="6">
                    <v-spacer></v-spacer>
                    <v-icon class="white--text mr-3" size="30">mdi-youtube</v-icon>
                    <v-icon class="white--text mr-5" size="22">mdi-instagram</v-icon>
                </v-col>
            </v-row>
        </template>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'MobileDrawer',
        
    components: {

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
        drawerList: [
            {
                action: 'mdi-silverware-fork-knife',
                active: false,
                items: [
                    { title: '요양원 급식', name: 'NrsHmMls' },
                    { title: '회사 급식', name: 'CmpMls' },
                    { title: '병원 급식', name: 'HspMls' },
                ],
                title: '푸드 서비스',
            },
            {
                action: 'mdi-truck-fast-outline',
                active: false,
                items: [
                    { title: '취급품목', name: 'HndlItms' },
                    { title: '유통/물류', name: 'DstrLgst' },
                ],
                title: '식자재 유통',
            },
            {
                action: 'mdi-archive-cog-outline',
                active: false,
                items: [
                    { title: '위탁급식 시스템', name: 'CnsgnMlsr' },
                    { title: '위생안전', name: 'SntSft' },
                    { title: '식단연구', name: 'DietRsrch' },
                    { title: '건보평가', name: 'HltInsCrpEvl' },
                ],
                title: '운영관리',
            },
            {
                action: 'mdi-newspaper-variant-multiple-outline',
                active: false,
                items: [
                    { title: '온라인 상담', name: 'ContactUs' },
                ],
                title: '소통공간',
            },
            {
                action: 'mdi-office-building-outline',
                active: false,
                items: [
                    { title: '해리지앤디', name: 'HarrygndIntro' },
                ],
                title: '회사소개',
            },
        ],
    }),
};
</script>