<template>
    <v-app-bar height="80" elevation="2" color="white">
        <v-row class="ma-0 pa-0" no-gutters>
            <v-col class="d-flex align-center" cols="4">
                <span class="d-inline-block pl-3" @click="$parent.$parent.routerAction('App')" style="width: 126px; cursor: pointer;">
                    <v-img src="../../assets/logo.png" alt="harryfoodlogo"></v-img>
                </span>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="d-flex" cols="2">
                <v-spacer></v-spacer>
                <v-btn class="" @click="$parent.$parent.drawer=true" icon>
                    <v-icon size="30">mdi-menu</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-app-bar>
</template>

<script>
export default {
    name: 'MobileHeader',

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