<template>
    <div class="left">
        <v-card class="mx-auto mt-15" width="300">
            <v-list>
                <v-list-group :value="false">
                    <template v-slot:activator>
                        <v-list-item-title>{{ title[0].title }}</v-list-item-title>
                    </template>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[0].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in signUp" :key="i" link  @click="routerAction(title.name)">
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                </v-list-group>
                <v-list-group :value="false">
                    <template v-slot:activator>
                        <v-list-item-title>{{ title[1].title }}</v-list-item-title>
                    </template>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[1].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in bnfcrInfrmMgmt" :key="i" link @click="routerAction(title.name)">
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[2].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in cnslnJrnls" :key="i" link @click="routerAction(title.name)">
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[3].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in stayOutMgmt" :key="i" link @click="routerAction(title.name)">
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[4].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in fmlyLeter" :key="i" link @click="routerAction(title.name)">
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[5].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in allBnfcrStts" :key="i" link @click="routerAction(title.name)">
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[6].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in copayClmsMgmt" :key="i" link @click="routerAction(title.name)">
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[7].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in copayDpstMgmt" :key="i" link @click="routerAction(title.name)">
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                </v-list-group>
                <v-list-group :value="false">
                    <template v-slot:activator>
                        <v-list-item-title>{{ title[2].title }}</v-list-item-title>
                    </template>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[8].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in allBnftSrvPrcs" :key="i" link @click="routerAction(title.name)">
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[9].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in bnftSrvMgmt" :key="i" link @click="routerAction(title.name)">
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[10].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in weekMenu" :key="i" link @click="routerAction(title.name)">
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[11].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in weekMenu" :key="i" link @click="routerAction(title.name)">
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[12].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in bathSchdl" :key="i" link @click="routerAction(title.name)">
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[13].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in caseMgmt" :key="i" link @click="routerAction(title.name)">
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                </v-list-group>
                <v-list-group :value="false">
                    <template v-slot:activator>
                        <v-list-item-title>{{ title[3].title }}</v-list-item-title>
                    </template>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[14].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in allBlnftSrvRcrd" :key="i" link @click="routerAction(title.name)">
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[15].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in careBlnftSrvRcrd" :key="i" link @click="routerAction(title.name)">
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[16].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in cncntExcrtObsrvRcrd" :key="i" link @click="routerAction(title.name)">
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[17].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in bathBlnftSrvRcrd" :key="i" link @click="routerAction(title.name)">
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[18].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in hlthBlnftSrvRcrd" :key="i" link @click="routerAction(title.name)">
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[19].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in nsgCareRcrd" :key="i" link @click="routerAction(title.name)">
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[20].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in physcThrpyRcrd" :key="i" link @click="routerAction(title.name)">
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[21].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in physcSnctnRcrd" :key="i" link @click="routerAction(title.name)">
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[22].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in spclBdrmUseRcrd" :key="i" link @click="routerAction(title.name)">
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[23].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in emrgnRcrd" :key="i" link @click="routerAction(title.name)"> 
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                </v-list-group>
                <v-list-group :value="false">
                    <template v-slot:activator>
                        <v-list-item-title>{{ title[4].title }}</v-list-item-title>
                    </template>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[24].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in prgSrvRcrd" :key="i" link @click="routerAction(title.name)"> 
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[25].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in prgInfrmMgmt" :key="i" link @click="routerAction(title.name)"> 
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[26].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in prgSchdlMgmt" :key="i" link @click="routerAction(title.name)"> 
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[27].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in prgBnfcrGrpMgmt" :key="i" link @click="routerAction(title.name)"> 
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[28].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in prgImprv" :key="i" link @click="routerAction(title.name)"> 
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                </v-list-group>
                <v-list-group :value="false">
                    <template v-slot:activator>
                        <v-list-item-title>{{ title[5].title }}</v-list-item-title>
                    </template>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[29].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in ntyInspJrnls" :key="i" link @click="routerAction(title.name)"> 
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[30].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in dailyDsnfcJrnls" :key="i" link @click="routerAction(title.name)"> 
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[31].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in foodHygnMgmt" :key="i" link @click="routerAction(title.name)"> 
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[32].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in nsgEqpmnMgmt" :key="i" link @click="routerAction(title.name)"> 
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[33].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in fcsftInspc" :key="i" link @click="routerAction(title.name)"> 
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[34].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in infctCntrlInspc" :key="i" link @click="routerAction(title.name)"> 
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[35].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in mealSrvcLog" :key="i" link @click="routerAction(title.name)"> 
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                </v-list-group>
                <v-list-group :value="false">
                    <template v-slot:activator>
                        <v-list-item-title>{{ title[6].title }}</v-list-item-title>
                    </template>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[36].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in cnfrnRcrd" :key="i" link @click="routerAction(title.name)"> 
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[37].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in lvnRmStts" :key="i" link @click="routerAction(title.name)"> 
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[38].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in anlWrkPln" :key="i" link @click="routerAction(title.name)"> 
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[39].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in facInfoMgmt" :key="i" link @click="routerAction(title.name)"> 
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[40].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in blnftAmntInf" :key="i" link @click="routerAction(title.name)"> 
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                </v-list-group>
                <v-list-group :value="false">
                    <template v-slot:activator>
                        <v-list-item-title>{{ title[7].title }}</v-list-item-title>
                    </template>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[41].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in empInfMgmt" :key="i" link @click="routerAction(title.name)"> 
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[42].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in wrkngSchdl" :key="i" link @click="routerAction(title.name)"> 
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[43].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in wrkngJrnl" :key="i" link @click="routerAction(title.name)"> 
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[44].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in edctnJrnl" :key="i" link @click="routerAction(title.name)"> 
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[45].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in otsdExprtMgmt" :key="i" link @click="routerAction(title.name)"> 
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[46].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in grvncHndlnMgmt" :key="i" link @click="routerAction(title.name)"> 
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[47].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in empHlthMgmt" :key="i" link @click="routerAction(title.name)"> 
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                </v-list-group>
                <v-list-group :value="false">
                    <template v-slot:activator>
                        <v-list-item-title>{{ title[8].title }}</v-list-item-title>
                    </template>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[48].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in empWageStmtMgmt" :key="i" link @click="routerAction(title.name)"> 
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[49].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in fcltylWgeMgmt" :key="i" link @click="routerAction(title.name)"> 
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[50].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in empWageInfMgmt" :key="i" link @click="routerAction(title.name)"> 
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[51].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in careBlnftAddMgmt" :key="i" link @click="routerAction(title.name)"> 
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[52].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in mnthlPrlssMgmt" :key="i" link @click="routerAction(title.name)"> 
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[53].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in lbrCstExpRtCalc" :key="i" link @click="routerAction(title.name)"> 
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                </v-list-group>
                <v-list-group :value="false">
                    <template v-slot:activator>
                        <v-list-item-title>{{ title[9].title }}</v-list-item-title>
                    </template>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[54].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in bnfcrStts" :key="i" link @click="routerAction(title.name)"> 
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[55].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in empInfStts" :key="i" link @click="routerAction(title.name)"> 
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[56].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in copayStts" :key="i" link @click="routerAction(title.name)"> 
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[57].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in nsgRcrdStts" :key="i" link @click="routerAction(title.name)"> 
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[58].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in prgBnfcrPrtcpStts" :key="i" link @click="routerAction(title.name)"> 
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[59].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in fcsftOprtnJrnl" :key="i" link @click="routerAction(title.name)"> 
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <!-- <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[60].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in fcsftOprtnJrnl" :key="i" link @click="routerAction(title.name)"> 
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group> -->
                </v-list-group>
                <v-list-group :value="false">
                    <template v-slot:activator>
                        <v-list-item-title>{{ title[10].title }}</v-list-item-title>
                    </template>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[61].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in smsSndMgmt" :key="i" link @click="routerAction(title.name)"> 
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[62].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in ntcMgmt" :key="i" link @click="routerAction(title.name)"> 
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[63].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in cmmCdMgmt" :key="i" link @click="routerAction(title.name)"> 
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                    <v-list-group no-action sub-group >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ subTitle[64].subTitle }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(title, i) in cmmAuthMgmt" :key="i" link @click="routerAction(title.name)"> 
                            <v-list-item-title> {{ title.sub }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>
                </v-list-group>
            </v-list>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'LeftBar',
    computed:{
            
    },
    mounted: function(){
        //돔 로딩이 끝난 후 작업
        this.$nextTick(function () {
        })
    },

    watch:{
    },
    methods: {
        routerAction: function (path){
            this.$router.push({ name: path, });
        },
    },
    data: () => ({
        title: [ 
            {title:'0. 시작하기'},
            {title:'1. 수급자 관리'},
            {title:'2. 급여제공과정'},
            {title:'3. 급여제공기록'},
            {title:'4. 프로그램'},
            {title:'5. 환경및안전'},
            {title:'6. 기관운영관리'},
            {title:'7. 직원관리'},
            {title:'8. 수입지출관리'},
            {title:'9. 보고서'},
            {title:'10. 기타관리'},
        ],
        subTitle:[
            {subTitle:'0-1. 시작하기'},
            {subTitle:'1-1. 수급자 정보관리'},
            {subTitle:'1-2. 상담일지'},
            {subTitle:'1-3. 외출·외박 관리'},
            {subTitle:'1-4. 가정통신문'},
            {subTitle:'1-5. 전체수급자현황'},
            {subTitle:'1-6. 본인부담금 청구관리'},
            {subTitle:'1-7. 본인부담금 입금관리'},
            {subTitle:'2-1. 전체급여 제공과정'},
            {subTitle:'2-2. 급여제공 계획 및 결과평가'},
            {subTitle:'2-3. 물리'},
            {subTitle:'2-4. 주간식단표'},
            {subTitle:'2-5. 목욕일정'},
            {subTitle:'2-6. 사례관리'},
            {subTitle:'3-1. 전체 급여제공기록'},
            {subTitle:'3-2. 요양 급여 제공기록'},
            {subTitle:'3-3. 집중 배설 관찰기록'},
            {subTitle:'3-4. 목욕 급여제공기록'},
            {subTitle:'3-5. 건강 급여 제공기록'},
            {subTitle:'3-6. 간호 처치기록'},
            {subTitle:'3-7. 물리(작업)치료기록'},
            {subTitle:'3-8. 신체제재기록'},
            {subTitle:'3-9. 특별침실사용기록'},
            {subTitle:'3-10. 응급상황기록'},
            {subTitle:'4-1. 프로그램 운영기록'},
            {subTitle:'4-2. 프로그램 정보관리'},
            {subTitle:'4-3. 프로그램 일정관리'},
            {subTitle:'4-4. 프로그램 수급자 그룹관리'},
            {subTitle:'4-5. 프로그램 개선(의견수렴)'},
            {subTitle:'5-1. 야간점검(근무)일지'},
            {subTitle:'5-2. 일상소독일지'},
            {subTitle:'5-3. 식품위생관리'},
            {subTitle:'5-4. 간호비품관리'},
            {subTitle:'5-5. 시설안전점검'},
            {subTitle:'5-6. 감염관리점검'},
            {subTitle:'5-7. 급식운영일지'},
            {subTitle: '6-1. 회의기록'},
            {subTitle: '6-2. 생활실 현황'},
            {subTitle: '6-3. 시설업무일정'},
            {subTitle: '6-4. 시설정보관리'},
            {subTitle: '6-5. 급여수가정보'},
            {subTitle: '7-1. 직원정보관리' },
            {subTitle: '7-2. 근무일정현황' },
            {subTitle: '7-3. 근무일지(출퇴근)' },
            {subTitle: '7-4. 교육및훈련일지' },
            {subTitle: '7-5. 외부강사/자원봉사자 관리'}, 
            {subTitle: '7-6. 고충처리관리' },
            {subTitle: '7-7. 직원건강관리' },
            {subTitle: '8-1. 직원 임금명세서 관리' },
            {subTitle: '8-2. 기관 부담금관리' },
            {subTitle: '8-3. 직원 임금정보 관리' },
            {subTitle: '8-4. 요양 급여가산 관리' },
            {subTitle: '8-5. 월별손익관리' },
            {subTitle: '8-6. 인건비 지출비율 계산' },
            {subTitle: '9-1. 수급자 정보현황' },
            {subTitle: '9-2. 직원 정보현황' },
            {subTitle: '9-3. 본인부담금' },
            {subTitle: '9-4. 간호기록현황' },
            {subTitle: '9-5. 프로그램 수급자 참여현황' },
            {subTitle: '9-6. 시설운영일지' },
            {subTitle: '9-7. 물리치료기록' },
            {subTitle: '10-1. SMS 발송관리' },
            {subTitle: '10-2. 공지사항 관리' },
            {subTitle: '10-3. 코드관리' },
            {subTitle: '10-4. 권한관리' },
        ],
        signUp: [
            { slc: '2', expsr: '2', sub: '1. 회원가입', name: 'SignUp', path: '/start/SignUp' },
            { slc: '2', expsr: '2', sub: '2. 기관 기본정보', name: 'FacInfoMgmt1', path: '/start/FacInfoMgmt1' },
            { slc: '2', expsr: '2', sub: '3. 본인부담금 입금정보', name: 'FacInfoMgmt2', path: '/start/FacInfoMgmt2' },
            { slc: '2', expsr: '2', sub: '4. 생활실정보', name: 'FacInfoMgmt3', path: '/start/FacInfoMgmt3' },
            { slc: '2', expsr: '2', sub: '5. 기본정보(식사)', name: 'FacInfoMgmt4', path: '/start/FacInfoMgmt4' },
        ],
        bnfcrInfrmMgmt: [
            { slc: '2', expsr: '2', sub: '1. 수급자 신규 저장', name: 'BnfcrInfrmMgmtWrt', path: '/bnfcrInfrmMgmt/BnfcrInfrmMgmtWrt' },
            { slc: '2', expsr: '2', sub: '2. 퇴소/연계기록지', name: 'BnfcrExtLinkRec', path: '/bnfcrInfrmMgmt/BnfcrExtLinkRec' },
            { slc: '2', expsr: '2', sub: '3. 상담일지', name: 'CnslnJrnlsModal', path: '/bnfcrInfrmMgmt/CnslnJrnlsModal' },
            { slc: '2', expsr: '2', sub: '4. 급여제공반영', name: 'BnftSrvPln', path: '/bnfcrInfrmMgmt/BnftSrvPln' },
            { slc: '2', expsr: '2', sub: '5. 입소사실확인서', name: 'Veri', path: '/bnfcrInfrmMgmt/Veri' },
            { slc: '2', expsr: '2', sub: '6. 계약정보/비급여수가', name: 'BnfcrMgmtCntInfPymnt', path: '/bnfcrInfrmMgmt/BnfcrMgmtCntInfPymnt' },
            { slc: '2', expsr: '2', sub: '7. 계약서 확인사항', name: 'BnfcrInFrmMgmtCntrcAcptn', path: '/bnfcrInfrmMgmt/BnfcrInFrmMgmtCntrcAcptn' },
            { slc: '2', expsr: '2', sub: '8. 전자서명', name: 'SignModel', path: '/bnfcrInfrmMgmt/SignModel' },
            { slc: '2', expsr: '2', sub: '9. 동의 및 제공서류', name: 'BnfcrCnsntDcmntBepr', path: '/bnfcrInfrmMgmt/BnfcrCnsntDcmntBepr' },
            { slc: '2', expsr: '2', sub: '10. 기타 서류', name: 'BnfcrDocMgmt', path: '/bnfcrInfrmMgmt/BnfcrDocMgmt' },
            { slc: '2', expsr: '2', sub: '11. CCTV 동의', name: 'BnfcrCctvBdrmMgmt', path: '/bnfcrInfrmMgmt/BnfcrCctvBdrmMgmt' },
        ],
        cnslnJrnls: [
            { slc: '2', expsr: '2', sub: '1. 상담일지', name: 'BnfcrCnslnJrnls', path: '/cnslnJrnls/BnfcrCnslnJrnls' },
        ],
        stayOutMgmt: [
            { slc: '2', expsr: '2', sub: '1. 외출·외박 관리', name: 'StayOutMgmt', path: '/stayOutMgmt/StayOutMgmt' },
        ],  
        fmlyLeter: [
            { slc: '2', expsr: '2', sub: '1. 개인현황', name: 'PsnStatus', path: '/fmlyLeter/PsnStatus' },
            { slc: '2', expsr: '2', sub: '2. 발송 및 출력', name: 'SendOpt', path: '/fmlyLeter/SendOpt' },
        ],
        allBnfcrStts: [
            { slc: '2', expsr: '2', sub: '1. 수급자 현황', name: 'BnfcrStatus', path: '/allBnfcrStts/BnfcrStatus' },
            { slc: '2', expsr: '2', sub: '2. 노인인권, 건강검진', name: 'SRHS', path: '/allBnfcrStts/SRHS' },
            { slc: '2', expsr: '2', sub: '3. CCTV동의', name: 'AllBnfcrCctvBdrmMgmt', path: '/allBnfcrStts/AllBnfcrCctvBdrmMgmt' },
        ],
        copayClmsMgmt: [
            { slc: '2', expsr: '2', sub: '1. 본인부담금 청구관리', name: 'CopayClmsMgmt', path: '/copayClmsMgmt/CopayClmsMgmt' },
        ],
        copayDpstMgmt: [
            { slc: '2', expsr: '2', sub: '1. 본인부담금 입금관리', name: 'CopayDpstMgmt', path: '/copayDpstMgmt/CopayDpstMgmt' },
        ],
        allBnftSrvPrcs: [
            { slc: '2', expsr: '2', sub: '1. 전체급여 제공과정', name: 'AllBnftSrvPrcs', path: '/allBnftSrvPrcs/AllBnftSrvPrcs' },
        ],
        bnftSrvMgmt: [
            { slc: '2', expsr: '2', sub: '1. 급여제공 계획 및 결과평가', name: 'BnftSrvMgmt', path: '/bnftSrvMgmt/BnftSrvMgmt' },
        ],
        weekMenu: [
            { slc: '2', expsr: '2', sub: '1. 주간식단표', name: 'WeekMenu', path: '/weekMenu/WeekMenu' },
            { slc: '2', expsr: '2', sub: '2. 식이정보', name: 'FoodInfo', path: '/weekMenu/FoodInfo' },
        ],
        bathSchdl: [
            { slc: '2', expsr: '2', sub: '1. 목욕일정', name: 'BathSchdl', path: '/bathSchdl/BathSchdl' },
        ],
        caseMgmt: [
            { slc: '2', expsr: '2', sub: '1. 사례관리 회의 상세정보', name: 'CaseMgmtTab1', path: '/caseMgmt/CaseMgmtTab1' },
            { slc: '2', expsr: '2', sub: '2. 급여제공반영 정보', name: 'CaseMgmtTab2', path: '/caseMgmt/CaseMgmtTab2' },
        ],
        allBlnftSrvRcrd: [
            { slc: '2', expsr: '2', sub: '1. 전체 급여제공기록', name: 'AllBlnftSrvRcrd', path: '/allBlnftSrvRcrd/AllBlnftSrvRcrd' },
        ],
        careBlnftSrvRcrd: [
            { slc: '2', expsr: '2', sub: '1. 신체활동지원', name: 'CareBlnftSrvRcrd1', path: '/careBlnftSrvRcrd/CareBlnftSrvRcrd1' },
            { slc: '2', expsr: '2', sub: '2. 인지/정서/기능회복', name: 'CareBlnftSrvRcrd2', path: '/careBlnftSrvRcrd/CareBlnftSrvRcrd2' },
        ],
        cncntExcrtObsrvRcrd: [
            { slc: '2', expsr: '2', sub: '1. 집중 배설관찰기록', name: 'CncntExcrtObsrvRcrd', path: '/cncntExcrtObsrvRcrd/CncntExcrtObsrvRcrd' },
        ],
        bathBlnftSrvRcrd: [
            { slc: '2', expsr: '2', sub: '1. 목욕 급여제공기록', name: 'BathBlnftSrvRcrd', path: '/bathBlnftSrvRcrd/BathBlnftSrvRcrd' },
        ],
        hlthBlnftSrvRcrd: [
            { slc: '2', expsr: '2', sub: '1. 급여제공기록', name: 'HlthNsgRcrdTab1', path: '/hlthBlnftSrvRcrd/HlthNsgRcrdTab1' },
            { slc: '2', expsr: '2', sub: '2. 바이탈기록', name: 'HlthNsgRcrdTab2', path: '/hlthBlnftSrvRcrd/HlthNsgRcrdTab2' },
            { slc: '2', expsr: '2', sub: '3. 투약관리', name: 'MdctnMgmtTab', path: '/hlthBlnftSrvRcrd/MdctnMgmtTab' },
            { slc: '2', expsr: '2', sub: '4. 의사진료', name: 'DctrCareTab', path: '/hlthBlnftSrvRcrd/DctrCareTab' },
            { slc: '2', expsr: '2', sub: '5. 건강검진', name: 'HlthChckpTab', path: '/hlthBlnftSrvRcrd/HlthChckpTab' },
            { slc: '2', expsr: '2', sub: '6. 기타자료', name: 'NrsngDocTab', path: '/hlthBlnftSrvRcrd/NrsngDocTab' },
        ],
        nsgCareRcrd: [
            { slc: '2', expsr: '2', sub: '1. 욕창변화관찰기록', name: 'BdsrObsRec', path: '/nsgCareRcrd/BdsrObsRec' },
            { slc: '2', expsr: '2', sub: '2. 욕창예방기록', name: 'BnftOfrRec', path: '/nsgCareRcrd/BnftOfrRec' },
            { slc: '2', expsr: '2', sub: '3. 경관영양', name: 'NsgCareRcrdTab2', path: '/nsgCareRcrd/NsgCareRcrdTab2' },
            { slc: '2', expsr: '2', sub: '4. 배설관리', name: 'NsgCareRcrdTab3', path: '/nsgCareRcrd/NsgCareRcrdTab3' },
            { slc: '2', expsr: '2', sub: '5. 도뇨관관리', name: 'NsgCareRcrdTab4', path: '/nsgCareRcrd/NsgCareRcrdTab4' },
            { slc: '2', expsr: '2', sub: '5. 체위변경', name: 'ChgPosObsrvRcrd', path: '/nsgCareRcrd/ChgPosObsrvRcrd' },
        ],
        physcThrpyRcrd: [
            { slc: '2', expsr: '2', sub: '1. 일일치료', name: 'PhyscThrpyRcrdDay', path: '/physcThrpyRcrd/PhyscThrpyRcrdDay' },
            { slc: '2', expsr: '2', sub: '2. 주간치료', name: 'PhyscThrpyRcrdWeek', path: '/physcThrpyRcrd/PhyscThrpyRcrdWeek' },
        ],
        physcSnctnRcrd: [
            { slc: '2', expsr: '2', sub: '1. 신체제재기록', name: 'PhyscSnctnRcrd', path: '/physcSnctnRcrd/PhyscSnctnRcrd' },
        ],
        spclBdrmUseRcrd: [
            { slc: '2', expsr: '2', sub: '1. 특별침실사용기록', name: 'SpclBdrmUseRcrd', path: '/spclBdrmUseRcrd/SpclBdrmUseRcrd' },
        ],
        emrgnRcrd: [
            { slc: '2', expsr: '2', sub: '1. 응급상황기록', name: 'EmrgnRcrd', path: '/emrgnRcrd/EmrgnRcrd' },
        ],
        prgSrvRcrd: [
            { slc: '2', expsr: '2', sub: '1. 프로그램 운영기록', name: 'PrgSrvRcrd', path: '/prgSrvRcrd/PrgSrvRcrd' },
        ],
        prgInfrmMgmt: [
            { slc: '2', expsr: '2', sub: '1. 프로그램 정보관리', name: 'PrgInfrmMgmt', path: '/prgInfrmMgmt/PrgInfrmMgmt' },
        ],
        prgSchdlMgmt: [
            { slc: '2', expsr: '2', sub: '1. 프로그램 일정관리', name: 'PrgSchdlMgmt', path: '/prgSchdlMgmt/PrgSchdlMgmt' },
        ],
        prgBnfcrGrpMgmt: [
            { slc: '2', expsr: '2', sub: '1. 수급자별 그룹설정', name: 'GrpstRcpnt', path: '/prgBnfcrGrpMgmt/GrpstRcpnt' },
            { slc: '2', expsr: '2', sub: '2. 그룹별 수급자설정', name: 'PrpBnfcrGrp', path: '/prgBnfcrGrpMgmt/PrpBnfcrGrp' },
        ],
        prgImprv: [
            { slc: '2', expsr: '2', sub: '1. 프로그램개선(의견수렴)', name: 'PrgImprv', path: '/prgImprv/PrgImprv' },
        ],
        ntyInspJrnls: [
            { slc: '2', expsr: '2', sub: '1. 야간점검일지', name: 'NghChcLog', path: '/ntyInspJrnls/NghChcLog' },
            { slc: '2', expsr: '2', sub: '2. 야간근무일지', name: 'NghWrkLog', path: '/ntyInspJrnls/NghWrkLog' },
        ],
        dailyDsnfcJrnls: [
            { slc: '2', expsr: '2', sub: '1. 일상소독일지', name: 'DailyDsnfcJrnls', path: '/dailyDsnfcJrnls/DailyDsnfcJrnls' },
        ],
        foodHygnMgmt: [
            { slc: '2', expsr: '2', sub: '1. 위생점검일지', name: 'HygInsLog', path: '/foodHygnMgmt/HygInsLog' },
            { slc: '2', expsr: '2', sub: '2. 위생소독일지', name: 'SntDsnLog', path: '/foodHygnMgmt/SntDsnLog' },
        ],
        nsgEqpmnMgmt: [
            { slc: '2', expsr: '2', sub: '1. 간호비품관리', name: 'NsgEqpmnMgmt', path: '/nsgEqpmnMgmt/NsgEqpmnMgmt' },
        ],
        fcsftInspc: [
            { slc: '2', expsr: '2', sub: '1. 가스안전점검', name: 'GasSftIns', path: '/fcsftInspc/GasSftIns' },
            { slc: '2', expsr: '2', sub: '2. 전기안전점검', name: 'ElcSftIns', path: '/fcsftInspc/ElcSftIns' },
            { slc: '2', expsr: '2', sub: '3. 화재예방점검', name: 'FirePrvn', path: '/fcsftInspc/FirePrvn' },
            { slc: '2', expsr: '2', sub: '4. 미세먼지', name: 'FineDust', path: '/fcsftInspc/FineDust' },
        ],
        infctCntrlInspc: [
            { slc: '2', expsr: '2', sub: '1. 약품점검', name: 'DrugInspc', path: '/infctCntrlInspc/DrugInspc' },
            { slc: '2', expsr: '2', sub: '2. 정기소독', name: 'PrdcDsnfc', path: '/infctCntrlInspc/PrdcDsnfc' },
            { slc: '2', expsr: '2', sub: '3. 응급의료기기점검', name: 'EmrMdcDvcIns', path: '/infctCntrlInspc/EmrMdcDvcIns' },
            { slc: '2', expsr: '2', sub: '4. 의료폐기물점검', name: 'MdcWstIns', path: '/infctCntrlInspc/MdcWstIns' },
            { slc: '2', expsr: '2', sub: '5. 감염병관리', name: 'InfDssMng', path: '/infctCntrlInspc/InfDssMng' },
        ],
        mealSrvcLog: [
            { slc: '2', expsr: '2', sub: '1. 급식운영일지', name: 'MealSrvcLog', path: '/mealSrvcLog/MealSrvcLog' },
        ],
        cnfrnRcrd: [
            { slc: '2', expsr: '2', sub: '1. 회의기록', name: 'CnfrnRcrd', path: '/cnfrnRcrd/CnfrnRcrd' },
        ],
        lvnRmStts: [
            { slc: '2', expsr: '2', sub: '1. 생활실 현황', name: 'LvnRmStts', path: '/lvnRmStts/LvnRmStts' },
        ],
        anlWrkPln: [
            { slc: '2', expsr: '2', sub: '1. 월간계획', name: 'MnthlPlan', path: '/anlWrkPln/MnthlPlan' },
            { slc: '2', expsr: '2', sub: '2. 연간계획', name: 'AnualPlan', path: '/anlWrkPln/AnualPlan' },
        ],
        facInfoMgmt: [
            { slc: '2', expsr: '2', sub: '1. 기관 기본정보', name: 'FacInfoMgmtTab1', path: '/facInfoMgmt/FacInfoMgmtTab1' },
            { slc: '2', expsr: '2', sub: '2. 본인부담금 입금정보', name: 'FacInfoMgmtTab2', path: '/facInfoMgmt/FacInfoMgmtTab2' },
            { slc: '2', expsr: '2', sub: '3. 생활실정보', name: 'FacInfoMgmtTab3', path: '/facInfoMgmt/FacInfoMgmtTab3' },
            { slc: '2', expsr: '2', sub: '4. 기본정보(식사)', name: 'FacInfoMgmtTab4', path: '/facInfoMgmt/FacInfoMgmtTab4' },
        ],
        blnftAmntInf: [
            { slc: '2', expsr: '2', sub: '1. 급여수가정보', name: 'BlnftAmntInf', path: '/blnftAmntInf/BlnftAmntInf' },
        ],
        empInfMgmt: [
            { slc: '2', expsr: '2', sub: '1. 직원정보관리', name: 'EmpInfMgmt', path: '/empInfMgmt/EmpInfMgmt' },
            { slc: '2', expsr: '2', sub: '2. 근무정보', name: 'EmpWorkInfo', path: '/empInfMgmt/EmpWorkInfo' },
            { slc: '2', expsr: '2', sub: '3. 기타정보', name: 'EmpCrtfInfo', path: '/empInfMgmt/EmpCrtfInfo' },
            { slc: '2', expsr: '2', sub: '4. 서류관리', name: 'EmpDocMgmt', path: '/empInfMgmt/EmpDocMgmt' },
        ],
        wrkngSchdl: [
            { slc: '2', expsr: '2', sub: '1. 근무일정', name: 'EmpWrkngSchdl', path: '/wrkngSchdl/EmpWrkngSchdl' },
            { slc: '2', expsr: '2', sub: '2. 일정등록', name: 'SchdlMgmt', path: '/wrkngSchdl/SchdlMgmt' },
        ],
        wrkngJrnl: [
            { slc: '2', expsr: '2', sub: '1. 직원별 근무현황', name: 'WrkSttEmp', path: '/wrkngJrnl/WrkSttEmp' },
            { slc: '2', expsr: '2', sub: '2. 일별 근무현황', name: 'WrkSttDay', path: '/wrkngJrnl/WrkSttDay' },
        ],
        edctnJrnl: [
            { slc: '2', expsr: '2', sub: '1. 직원교육', name: 'edctnJrnlEmpRprt', path: '/edctnJrnl/edctnJrnlEmpRprt' },    
            { slc: '2', expsr: '2', sub: '2. 노인인권 및 학대 예방교육', name: 'edctnJrnlSilvCareRprt', path: '/edctnJrnl/edctnJrnlSilvCareRprt' },
            { slc: '2', expsr: '2', sub: '3. 재난상황대응훈련', name: 'edctnJrnlDssRes', path: '/edctnJrnl/edctnJrnlDssRes' },
            { slc: '2', expsr: '2', sub: '4. 교육정보', name: 'edctnJrnlInfrm', path: '/edctnJrnl/edctnJrnlInfrm' },
        ],
        otsdExprtMgmt: [
            { slc: '2', expsr: '2', sub: '1. 월별 근무표', name: 'WrkSMntlWrkshttEmp', path: '/otsdExprtMgmt/WrkSMntlWrkshttEmp' },
            { slc: '2', expsr: '2', sub: '2. 기간별 활동일지', name: 'PrdWorkJrnl', path: '/otsdExprtMgmt/PrdWorkJrnl' },
        ],
        grvncHndlnMgmt: [
            { slc: '2', expsr: '2', sub: '1. 고충처리관리', name: 'GrvncHndlnMgmt', path: '/grvncHndlnMgmt/GrvncHndlnMgmt' },
        ],
        empHlthMgmt: [
            { slc: '2', expsr: '2', sub: '1. 직원건강관리', name: 'EmpHlthMgmt', path: '/empHlthMgmt/EmpHlthMgmt' },
        ],
        empWageStmtMgmt: [
            { slc: '2', expsr: '2', sub: '1. 직원 임금명세서 관리', name: 'EmpWageStmtMgmt', path: '/empWageStmtMgmt/EmpWageStmtMgmt' },
        ],
        fcltylWgeMgmt: [
            { slc: '2', expsr: '2', sub: '1. 기관 부담금 관리', name: 'FcltylWgeMgmt', path: '/fcltylWgeMgmt/FcltylWgeMgmt' },
        ],
        empWageInfMgmt: [
            { slc: '2', expsr: '2', sub: '1. 직원 임금정보 관리', name: 'EmpWageInfMgmt', path: '/empWageInfMgmt/EmpWageInfMgmt' },
        ],
        careBlnftAddMgmt: [
            { slc: '2', expsr: '2', sub: '1. 요양급여가산관리', name: 'CareBlnftAddMgmt', path: '/careBlnftAddMgmt/CareBlnftAddMgmt' },
        ],
        mnthlPrlssMgmt: [
            { slc: '2', expsr: '2', sub: '1. 월별 손익관리', name: 'MnthlPrlssMgmt', path: '/mnthlPrlssMgmt/MnthlPrlssMgmt' },
        ],
        lbrCstExpRtCalc: [
            { slc: '2', expsr: '2', sub: '1. 인건비 지출비율 계산', name: 'LbrCstExpRtCalc', path: '/lbrCstExpRtCalc/LbrCstExpRtCalc' },
        ],
        bnfcrStts: [
            { slc: '2', expsr: '2', sub: '1. 수급자목록', name: 'BnfcrSttsTab1', path: '/bnfcrStts/BnfcrSttsTab1' },
            { slc: '2', expsr: '2', sub: '1. 외출/외박 현황', name: 'BnfcrSttsTab2', path: '/bnfcrStts/BnfcrSttsTab2' },
        ],
        empInfStts: [
            { slc: '2', expsr: '2', sub: '1. 직원현황', name: 'EmpInfSttsTab1', path: '/empInfStts/EmpInfSttsTab1' },
            { slc: '2', expsr: '2', sub: '1. 연차내역', name: 'EmpInfSttsTab2', path: '/empInfStts/EmpInfSttsTab2' },
            { slc: '2', expsr: '2', sub: '1. 휴가사용내역', name: 'EmpInfSttsTab3', path: '/empInfStts/EmpInfSttsTab3' },
        ],
        copayStts: [
            { slc: '2', expsr: '2', sub: '1. 본인부담금', name: 'CopayStts', path: '/copayStts/CopayStts' },
        ],
        nsgRcrdStts: [
            { slc: '2', expsr: '2', sub: '1. 건강기록', name: 'NsgRcrdSttsTab1', path: '/nsgRcrdStts/NsgRcrdSttsTab1' },
            { slc: '2', expsr: '2', sub: '1. 간호처치 기록', name: 'NsgRcrdSttsTab2', path: '/nsgRcrdStts/NsgRcrdSttsTab2' },
            { slc: '2', expsr: '2', sub: '1. 투약기록', name: 'NsgRcrdSttsTab3', path: '/nsgRcrdStts/NsgRcrdSttsTab3' },
        ],
        prgBnfcrPrtcpStts: [
            { slc: '2', expsr: '2', sub: '1. 수급자 참여', name: 'PrgBnfcrPrtcpStts', path: '/prgBnfcrPrtcpStts/PrgBnfcrPrtcpStts' },
        ],
        fcsftOprtnJrnl: [
            { slc: '2', expsr: '2', sub: '1. 시설운영일지', name: 'FcsftOprtnJrnl', path: '/fcsftOprtnJrnl/FcsftOprtnJrnl' },
        ],
        smsSndMgmt: [
            { slc: '2', expsr: '2', sub: '1. 문자전송', name: 'SmsSndWrt', path: '/smsSndMgmt/SmsSndWrt' },
            { slc: '2', expsr: '2', sub: '1. 발송내역', name: 'SmsSndHist', path: '/smsSndMgmt/SmsSndHist' },
        ],
        ntcMgmt: [
            { slc: '2', expsr: '2', sub: '1. 공지사항 관리', name: 'NtcMgmt', path: '/ntcMgmt/NtcMgmt' },
        ],
        cmmCdMgmt: [
            { slc: '2', expsr: '2', sub: '1. 코드관리', name: 'CmmCdMgmt', path: '/cmmCdMgmt/CmmCdMgmt' },
        ],
        cmmAuthMgmt: [
            { slc: '2', expsr: '2', sub: '1. 권한관리', name: 'CmmAuthMgmt', path: '/cmmAuthMgmt/CmmAuthMgmt' },
        ],
        
    }),
};
</script>
<style>
    .left{
        position:fixed; 
        top:0px; 
        left:0px; 
        width:300px; 
        height:1000px; 
        background:rgba(255, 255, 255); 
        padding:40px 0; 
        overflow: hidden
    }
</style>
