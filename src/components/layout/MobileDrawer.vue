<template>
    <v-navigation-drawer
        v-model="$parent.$parent.drawer" class="rounded-lg rounded-r-0 elevation-0" disable-resize-watcher right app>
        <div class="d-flex align-center py-5 pl-5 pr-3">
            <span class="font-weight-bold black--text" style="font-size: 1.3rem;">요양시스</span>
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
                <v-list-group no-action sub-group  v-for="little in item.items" :key="little.title" >
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title v-text="little.title"></v-list-item-title>
                        </v-list-item-content>
                    </template>
                    <v-list-item
                        v-for="child in little.items"
                        :key="child.title" @click="$parent.$parent.routerAction(child.name)">
                        <v-list-item-content>
                            <v-list-item-title v-text="child.title"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
            </v-list-group>
        </v-list>
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
                action: '',
                active: false,
                items: [
                    { 
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 회원가입', name: 'SignUp' },
                            { title: '2. 기관 기본정보', name: 'FacInfoMgmt1' },
                            { title: '3. 본인부담금 입금정보', name: 'FacInfoMgmt2' },
                            { title: '4. 생활실정보', name: 'FacInfoMgmt3' },
                            { title: '5. 기본정보(식사)', name: 'FacInfoMgmt4' },
                            { title: '6. 급여수가정보', name: 'BlnftAmntInfNew' },
                            { title: '7. 권한관리', name: 'CmmAuthMgmtStart' },
                            { title: '8. 코드관리', name: 'CmmCdMgmtStart' },
                            { title: '9. 신규 직원', name: 'EmpInfMgmtNew' },
                            { title: '10. 신규 수급자', name: 'BnfcrInfrmMgmt' },
                        ],
                        title: '0-1. 시작하기',
                    },
                ],
                title: '0. 시작하기',
            },
            {
                action: '',
                active: false,
                items: [
                    { 
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 수급자 신규 저장', name: 'BnfcrInfrmMgmtWrt' },
                            { title: '2. 퇴소/연계기록지', name: 'BnfcrExtLinkRec' },
                            { title: '3. 상담일지', name: 'CnslnJrnlsModal' },
                            { title: '4. 급여제공반영', name: 'BnftSrvPln' },
                            { title: '5. 입소사실확인서', name: 'Veri' },
                            { title: '6. 계약정보/비급여수가', name: 'BnfcrMgmtCntInfPymnt' },
                            { title: '7. 계약서 확인사항', name: 'BnfcrInFrmMgmtCntrcAcptn' },
                            { title: '8. 전자서명', name: 'SignModel' },
                            { title: '9. 동의 및 제공서류', name: 'BnfcrCnsntDcmntBepr' },
                            { title: '10. 기타 서류', name: 'BnfcrDocMgmt' },
                            { title: '11. CCTV 동의', name: 'BnfcrCctvBdrmMgmt' },
                        ],
                        title: '1-1. 수급자 정보관리',
                    },
                    { 
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 상담일지', name: 'BnfcrCnslnJrnls' },
                        ],
                        title: '1-2. 상담일지',
                    },
                    { 
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 외출·외박 관리', name: 'StayOutMgmt' },
                        ],
                        title: '1-3. 외출·외박 관리',
                    },
                    { 
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 개인현황', name: 'PsnStatus' },
                            { title: '2. 발송 및 출력', name: 'SendOpt' },
                        ],
                        title: '1-4. 가정통신문',
                    },
                    { 
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 수급자 현황', name: 'BnfcrStatus' },
                            { title: '2. 노인인권, 건강검진', name: 'SRHS' },
                            { title: '3. CCTV동의', name: 'AllBnfcrCctvBdrmMgmt' },
                        ],
                        title: '1-5. 전체수급자현황',
                    },
                    { 
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 본인부담금 청구관리', name: 'CopayClmsMgmt' },
                        ],
                        title: '1-6. 본인부담금 청구관리',
                    },
                    { 
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 본인부담금 입금관리', name: 'CopayDpstMgmt' },
                        ],
                        title: '1-7. 본인부담금 입금관리',
                    },
                ],
                title: '1. 수급자 관리',
            },
            {
                action: '',
                active: false,
                items: [
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 전체급여 제공과정', name: 'AllBnftSrvPrcs' },
                        ],
                        title:'2-1. 전체급여 제공과정'
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 급여제공 계획 및 결과평가', name: 'BnftSrvMgmt' },
                        ],
                        title:'2-2. 급여제공 계획 및 결과평가'
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 물리치료평가/계획 저장', name: 'PhyscThrpyInspcPln' },
                            { title: '2. 물리치료평가', name: 'PhyscThrpyInspcPlnTab1' },
                            { title: '3. 물리치료계획', name: 'PhyscThrpyInspcPlnTab2' },
                        ],
                        title:'2-3. 물리(작업)치료기록'
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 주간식단표', name: 'WeekMenu' },
                            { title: '2. 식이정보', name: 'FoodInfo' },
                        ],
                        title:'2-4. 주간식단표'
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 목욕일정', name: 'BathSchdl' },
                        ],
                        title:'2-5. 목욕일정'
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 사례관리 회의 상세정보', name: 'CaseMgmtTab1', },
                            { title: '2. 급여제공반영 정보', name: 'CaseMgmtTab2', },
                        ],
                        title:'2-6. 사례관리'
                    },
                ],
                title: '2. 급여제공과정',
            },
            {
                action: '',
                active: false,
                items: [
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 전체 급여제공기록', name: 'AllBlnftSrvRcrd' },
                        ],
                        title:'3-1. 전체 급여제공기록'
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 신체활동지원', name: 'CareBlnftSrvRcrd1' },
                            { title: '2. 인지/정서/기능회복', name: 'CareBlnftSrvRcrd2' },
                        ],
                        title:'3-2. 요양 급여 제공기록'
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 집중 배설관찰기록', name: 'CncntExcrtObsrvRcrd' },
                        ],
                        title:'3-3. 집중 배설 관찰기록'
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 목욕 급여제공기록', name: 'BathBlnftSrvRcrd' },
                        ],
                        title:'3-4. 목욕 급여제공기록'
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 급여제공기록', name: 'HlthNsgRcrdTab1' },
                            { title: '2. 바이탈기록', name: 'HlthNsgRcrdTab2' },
                            { title: '3. 투약관리', name: 'MdctnMgmtTab' },
                            { title: '4. 의사진료', name: 'DctrCareTab' },
                            { title: '5. 건강검진', name: 'HlthChckpTab' },
                            { title: '6. 기타자료', name: 'NrsngDocTab' },
                        ],
                        title:'3-5. 건강 급여 제공기록'
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                        { title: '1. 욕창변화관찰기록', name: 'BdsrObsRec' },
                        { title: '2. 욕창예방기록', name: 'BnftOfrRec' },
                        { title: '3. 경관영양', name: 'NsgCareRcrdTab2' },
                        { title: '4. 배설관리', name: 'NsgCareRcrdTab3' },
                        { title: '5. 도뇨관관리', name: 'NsgCareRcrdTab4' },
                        ],
                        title:'3-6. 간호 처치기록'
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 일일치료', name: 'PhyscThrpyRcrdDay' },
                        ],
                        title:'3-7. 물리(작업)치료기록'
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 신체제재기록', name: 'PhyscSnctnRcrd' },
                        ],
                        title:'3-8. 신체제재기록'
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 특별침실사용기록', name: 'SpclBdrmUseRcrd' },
                        ],
                        title:'3-9. 특별침실사용기록'
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 응급상황기록', name: 'EmrgnRcrd' },
                        ],
                        title:'3-10. 응급상황기록'
                    },
                ],
                title: '3. 급여제공기록',
            },
            {
                action: '',
                active: false,
                items: [
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 프로그램 운영기록', name: 'PrgSrvRcrd' },
                            { title: '2. 상세 프로그램', name: 'PrgrmRecTap1' },
                            { title: '3. 상세 수급자', name: 'PrgrmRecTap2' },
                        ],
                        title:'4-1. 프로그램 운영기록'
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 프로그램 정보관리', name: 'PrgInfrmMgmt' },
                        ],
                        title:'4-2. 프로그램 정보관리'
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 프로그램 일정관리', name: 'PrgSchdlMgmt' },
                        ],
                        title:'4-3. 프로그램 일정관리'
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 수급자별 그룹설정', name: 'GrpstRcpnt' },
                            { title: '2. 그룹별 수급자설정', name: 'PrpBnfcrGrp' },
                        ],
                        title:'4-4. 프로그램 수급자 그룹관리'
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 프로그램개선(의견수렴)', name: 'PrgImprv' },
                        ],
                        title:'4-5. 프로그램 개선(의견수렴)'
                    },
                ],
                title: '4. 프로그램',
            },
            {
                action: '',
                active: false,
                items: [
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 야간점검일지', name: 'NghChcLog' },
                            { title: '2. 야간근무일지', name: 'NghWrkLog' },
                        ],
                        title:'5-1. 야간점검(근무)일지'
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 일상소독일지', name: 'DailyDsnfcJrnls' },
                        ],
                        title:'5-2. 일상소독일지'
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 위생점검일지', name: 'HygInsLog' },
                            { title: '1. 위생소독일지', name: 'SntDsnLog' },
                        ],
                        title:'5-3. 식품위생관리'
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 간호비품관리', name: 'NsgEqpmnMgmt' },
                        ],
                        title:'5-4. 간호비품관리'
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 가스안전점검', name: 'GasSftIns' },
                            { title: '2. 전기안전점검', name: 'ElcSftIns' },
                            { title: '3. 화재예방점검', name: 'FirePrvn' },
                            { title: '4. 미세먼지', name: 'FineDust' },
                        ],
                        title:'5-5. 시설안전점검'
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 약품점검', name: 'DrugInspc' },
                            { title: '2. 정기소독', name: 'PrdcDsnfc' },
                            { title: '3. 응급의료기기점검', name: 'EmrMdcDvcIns' },
                            { title: '4. 의료폐기물점검', name: 'MdcWstIns' },
                            { title: '5. 감염병관리', name: 'InfDssMng' },
                        ],
                        title:'5-6. 감염관리점검'
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 급식운영일지', name: 'MealSrvcLog' },
                        ],
                        title:'5-7. 급식운영일지'
                    },
                ],
                title: '5. 환경및안전',
            },
            {
                action: '',
                active: false,
                items: [
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 회의기록', name: 'CnfrnRcrd' },
                            
                        ],
                        title: '6-1. 회의기록'
                    },
                    // {
                    //     action: '',
                    //     active: false,
                    //     items: [
                    //         { title: '1. 생활실 현황', name: 'LvnRmStts' },
                            
                    //     ],
                    //     title: '6-2. 생활실 현황'
                    // },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 월간계획', name: 'MnthlPlan' },
                        ],
                        title: '6-3. 시설업무일정'
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 기관 기본정보', name: 'FacInfoMgmtTab1' },
                            { title: '2. 본인부담금 입금정보', name: 'FacInfoMgmtTab2' },
                            { title: '3. 생활실정보', name: 'FacInfoMgmtTab3' },
                            { title: '4. 기본정보(식사)', name: 'FacInfoMgmtTab4' },
                            
                        ],
                        title: '6-4. 시설정보관리'
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 급여수가정보', name: 'BlnftAmntInf' },
                            
                        ],
                        title: '6-5. 급여수가정보'
                    },
                ],
                title: '6. 기관운영관리',
            },
            {
                action: '',
                active: false,
                items: [
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 직원정보관리', name: 'EmpInfMgmt' },
                            { title: '2. 서류관리', name: 'EmpDocMgmt' },
                        ],
                        title: '7-1. 직원정보관리' 
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 근무일정', name: 'EmpWrkngSchdl' },
                            { title: '2. 일정등록', name: 'SchdlMgmt' },
                        ],
                        title: '7-2. 근무일정현황' 
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 직원별 근무현황', name: 'WrkSttEmp' },
                            { title: '2. 일별 근무현황', name: 'WrkSttDay' },
                        ],
                        title: '7-3. 근무일지(출퇴근)' 
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 직원교육', name: 'EdctnJrnlEmpRprt'},
                            { title: '2. 노인인권 및 학대 예방교육', name: 'EdctnJrnlSilvCareRprt' },
                            { title: '3. 재난상황대응훈련', name: 'EdctnJrnlDssRes' },
                            { title: '4. 교육정보', name: 'EdctnJrnlInfrm' },
                        ],
                        title: '7-4. 교육및훈련일지' 
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 월별 근무표', name: 'WrkSMntlWrkshttEmp' },
                            { title: '2. 기간별 활동일지', name: 'PrdWorkJrnl' },
                        ],
                        title: '7-5. 외부강사/자원봉사자 관리'}
                        , 
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 고충처리관리', name: 'GrvncHndlnMgmt' },
                        ],
                        title: '7-6. 고충처리관리' 
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 직원건강관리', name: 'EmpHlthMgmt' },
                        ],
                        title: '7-7. 직원건강관리' 
                    },
                ],
                title: '7. 직원관리',
            },
            {
                action: '',
                active: false,
                items: [
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 전체 급여제공기록', name: 'AllBlnftSrvRcrd' },
                        ],
                        title:'3-1. 전체 급여제공기록'
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 직원 임금명세서 관리', name: 'EmpWageStmtMgmt' },
                        ],
                        title: '8-1. 직원 임금명세서 관리' 
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 기관 부담금 관리', name: 'FcltylWgeMgmt' },
                        ],
                        title: '8-2. 기관 부담금관리' 
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 직원 임금정보', name: 'EmpWageInfMgmt' },
                            { title: '2. 임금기본정보', name: 'EmpWageInfMgmt1' },
                            { title: '3. 기관임금정보', name: 'EmpWageInfMgmt2' },
                        ],
                        title: '8-3. 직원 임금정보 관리' 
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 요양급여가산관리', name: 'CareBlnftAddMgmt' },
                        ],
                        title: '8-4. 요양 급여가산 관리' 
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 월별 손익관리', name: 'MnthlPrlssMgmt' },
                        ],
                        title: '8-5. 월별손익관리' 
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 인건비 지출비율 계산', name: 'LbrCstExpRtCalc' },
                        ],
                        title: '8-5. 인건비 지출비율 계산' 
                    },
                ],
                title: '8. 수입지출관리',
            },
            {
                action: '',
                active: false,
                items: [
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 수급자목록', name: 'BnfcrSttsTab1' },
                            { title: '2. 외출/외박 현황', name: 'BnfcrSttsTab2' },
                        ],
                        title: '9-1. 수급자 정보현황' 
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 직원현황', name: 'EmpInfSttsTab1' },
                            { title: '2. 연차내역', name: 'EmpInfSttsTab2' },
                            { title: '3. 휴가사용내역', name: 'EmpInfSttsTab3' },
                        ],
                        title: '9-2. 직원 정보현황' 
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 본인부담금', name: 'CopayStts' },
                        ],
                        title: '9-3. 본인부담금' 
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 건강기록', name: 'NsgRcrdSttsTab1' },
                            { title: '2. 간호처치 기록', name: 'NsgRcrdSttsTab2' },
                            { title: '3. 투약기록', name: 'NsgRcrdSttsTab3' },
                        ],
                        title: '9-4. 간호기록현황' 
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 수급자 참여', name: 'PrgBnfcrPrtcpStts' },
                        ],
                        title: '9-5. 프로그램 수급자 참여현황' 
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 시설운영일지', name: 'FcsftOprtnJrnl' },
                        ],
                        title: '9-6. 시설운영일지' 
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 수급자별', name: 'PhyscRecTab1' },
                            { title: '1. 일자별', name: 'PhyscRecTab2' },
                        ],
                        title: '9-7. 물리치료기록' 
                    },
                ],
                title: '9. 보고서',
            },
            {
                action: '',
                active: false,
                items: [
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 문자전송', name: 'SmsSndWrt' },
                            { title: '1. 발송내역', name: 'SmsSndHist' },
                        ],
                        title: '10-1. SMS 발송관리' 
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 공지사항 관리', name: 'NtcMgmt' },
                        ],
                        title: '10-2. 공지사항 관리' 
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 코드관리', name: 'CmmCdMgmt' },
                        ],
                        title: '10-3. 코드관리' 
                    },
                    {
                        action: '',
                        active: false,
                        items: [
                            { title: '1. 권한관리', name: 'CmmAuthMgmt' },
                        ],
                        title: '10-4. 권한관리' 
                    },
                ],
                title: '10. 기타관리',
            },
        ],
    }),
};
</script>