import Vue from 'vue';
import VueRouter from 'vue-router';

import StartApp from '../components/StartApp.vue'
import ContactUs from '../components/ContactUs.vue'
import NotFound from '../components/layout/NotFound.vue'

import SignUp from '../components/start/SignUp.vue'
import FacInfoMgmt1 from '../components/start/FacInfoMgmt1.vue'
import FacInfoMgmt2 from '../components/start/FacInfoMgmt2.vue'
import FacInfoMgmt3 from '../components/start/FacInfoMgmt3.vue'
import FacInfoMgmt4 from '../components/start/FacInfoMgmt4.vue'
import BlnftAmntInfNew from '../components/start/BlnftAmntInfNew.vue'
import EmpInfMgmtNew from '../components/start/EmpInfMgmtNew.vue'
import BnfcrInfrmMgmt from '../components/start/BnfcrInfrmMgmt.vue'

import BnfcrInfrmMgmtWrt from '../components/bnfcrInfrmMgmt/BnfcrInfrmMgmtWrt.vue'
import BnfcrExtLinkRec from '../components/bnfcrInfrmMgmt/BnfcrExtLinkRec.vue'
import CnslnJrnlsModal from '../components/bnfcrInfrmMgmt/CnslnJrnlsModal.vue'
import BnftSrvPln from '../components/bnfcrInfrmMgmt/BnftSrvPln.vue'
import Veri from '../components/bnfcrInfrmMgmt/Veri.vue'
import BnfcrMgmtCntInfPymnt from '../components/bnfcrInfrmMgmt/BnfcrMgmtCntInfPymnt.vue'
import BnfcrInFrmMgmtCntrcAcptn from '../components/bnfcrInfrmMgmt/BnfcrInFrmMgmtCntrcAcptn.vue'
import SignModel from '../components/bnfcrInfrmMgmt/SignModel.vue'
import BnfcrCnsntDcmntBepr from '../components/bnfcrInfrmMgmt/BnfcrCnsntDcmntBepr.vue'
import BnfcrDocMgmt from '../components/bnfcrInfrmMgmt/BnfcrDocMgmt.vue'
import BnfcrCctvBdrmMgmt from '../components/bnfcrInfrmMgmt/BnfcrCctvBdrmMgmt.vue'

import BnfcrCnslnJrnls from '../components/cnslnJrnls/BnfcrCnslnJrnls.vue'

import StayOutMgmt from '../components/stayOutMgmt/StayOutMgmt.vue'

import PsnStatus from '../components/fmlyLeter/PsnStatus.vue'
import SendOpt from '../components/fmlyLeter/SendOpt.vue'

import BnfcrStatus from '../components/allBnfcrStts/BnfcrStatus.vue'
import SRHS from '../components/allBnfcrStts/SRHS.vue'
import AllBnfcrCctvBdrmMgmt from '../components/allBnfcrStts/AllBnfcrCctvBdrmMgmt.vue'

import CopayClmsMgmt from '../components/copayClmsMgmt/CopayClmsMgmt.vue'

import CopayDpstMgmt from '../components/copayDpstMgmt/CopayDpstMgmt.vue'

import AllBnftSrvPrcs from '../components/allBnftSrvPrcs/AllBnftSrvPrcs.vue'

import BnftSrvMgmt from '../components/bnftSrvMgmt/BnftSrvMgmt.vue'

import WeekMenu from '../components/weekMenu/WeekMenu.vue'
import FoodInfo from '../components/weekMenu/FoodInfo.vue'

import BathSchdl from '../components/bathSchdl/BathSchdl.vue'

import CaseMgmtTab1 from '../components/caseMgmt/CaseMgmtTab1.vue'
import CaseMgmtTab2 from '../components/caseMgmt/CaseMgmtTab2.vue'

import AllBlnftSrvRcrd from '../components/allBlnftSrvRcrd/AllBlnftSrvRcrd.vue'

import CareBlnftSrvRcrd1 from '../components/careBlnftSrvRcrd/CareBlnftSrvRcrd1.vue'
import CareBlnftSrvRcrd2 from '../components/careBlnftSrvRcrd/CareBlnftSrvRcrd2.vue'

import CncntExcrtObsrvRcrd from '../components/cncntExcrtObsrvRcrd/CncntExcrtObsrvRcrd.vue'

import BathBlnftSrvRcrd from '../components/bathBlnftSrvRcrd/BathBlnftSrvRcrd.vue'

import HlthNsgRcrdTab1 from '../components/hlthBlnftSrvRcrd/HlthNsgRcrdTab1.vue'
import HlthNsgRcrdTab2 from '../components/hlthBlnftSrvRcrd/HlthNsgRcrdTab2.vue'
import MdctnMgmtTab from '../components/hlthBlnftSrvRcrd/MdctnMgmtTab.vue'
import DctrCareTab from '../components/hlthBlnftSrvRcrd/DctrCareTab.vue'
import HlthChckpTab from '../components/hlthBlnftSrvRcrd/HlthChckpTab.vue'
import NrsngDocTab from '../components/hlthBlnftSrvRcrd/NrsngDocTab.vue'

import BdsrObsRec from '../components/nsgCareRcrd/BdsrObsRec.vue'
import BnftOfrRec from '../components/nsgCareRcrd/BnftOfrRec.vue'
import NsgCareRcrdTab2 from '../components/nsgCareRcrd/NsgCareRcrdTab2.vue'
import NsgCareRcrdTab3 from '../components/nsgCareRcrd/NsgCareRcrdTab3.vue'
import NsgCareRcrdTab4 from '../components/nsgCareRcrd/NsgCareRcrdTab4.vue'

import PhyscThrpyRcrdDay from '../components/physcThrpyRcrd/PhyscThrpyRcrdDay.vue'

import PhyscSnctnRcrd from '../components/physcSnctnRcrd/PhyscSnctnRcrd.vue'

import SpclBdrmUseRcrd from '../components/spclBdrmUseRcrd/SpclBdrmUseRcrd.vue'

import EmrgnRcrd from '../components/emrgnRcrd/EmrgnRcrd.vue'

import PrgSrvRcrd from '../components/prgSrvRcrd/PrgSrvRcrd.vue'  
import PrgrmRecTap1 from '../components/prgSrvRcrd/PrgrmRecTap1.vue'
import PrgrmRecTap2 from '../components/prgSrvRcrd/PrgrmRecTap2.vue'  

import PrgInfrmMgmt from '../components/prgInfrmMgmt/PrgInfrmMgmt.vue'

import PrgSchdlMgmt from '../components/prgSchdlMgmt/PrgSchdlMgmt.vue'

import GrpstRcpnt from '../components/prgBnfcrGrpMgmt/GrpstRcpnt.vue'
import PrpBnfcrGrp from '../components/prgBnfcrGrpMgmt/PrpBnfcrGrp.vue'

import PrgImprv from '../components/prgImprv/PrgImprv.vue'

import NghChcLog from '../components/ntyInspJrnls/NghChcLog.vue'
import NghWrkLog from '../components/ntyInspJrnls/NghWrkLog.vue'

import DailyDsnfcJrnls from '../components/dailyDsnfcJrnls/DailyDsnfcJrnls.vue'

import HygInsLog from '../components/foodHygnMgmt/HygInsLog.vue'
import SntDsnLog from '../components/foodHygnMgmt/SntDsnLog.vue'

import NsgEqpmnMgmt from '../components/nsgEqpmnMgmt/NsgEqpmnMgmt.vue'

import GasSftIns from '../components/fcsftInspc/GasSftIns.vue'
import ElcSftIns from '../components/fcsftInspc/ElcSftIns.vue'
import FirePrvn from '../components/fcsftInspc/FirePrvn.vue'
import FineDust from '../components/fcsftInspc/FineDust.vue'

import DrugInspc from '../components/infctCntrlInspc/DrugInspc.vue'
import PrdcDsnfc from '../components/infctCntrlInspc/PrdcDsnfc.vue'
import EmrMdcDvcIns from '../components/infctCntrlInspc/EmrMdcDvcIns.vue'
import MdcWstIns from '../components/infctCntrlInspc/MdcWstIns.vue'
import InfDssMng from '../components/infctCntrlInspc/InfDssMng.vue'

import MealSrvcLog from '../components/mealSrvcLog/MealSrvcLog.vue'

import CnfrnRcrd from '../components/cnfrnRcrd/CnfrnRcrd.vue'

import LvnRmStts from '../components/lvnRmStts/LvnRmStts.vue'

import MnthlPlan from '../components/anlWrkPln/MnthlPlan.vue'
import AnualPlan from '../components/anlWrkPln/AnualPlan.vue'

import FacInfoMgmtTab1 from '../components/facInfoMgmt/FacInfoMgmtTab1.vue'
import FacInfoMgmtTab2 from '../components/facInfoMgmt/FacInfoMgmtTab2.vue'
import FacInfoMgmtTab3 from '../components/facInfoMgmt/FacInfoMgmtTab3.vue'
import FacInfoMgmtTab4 from '../components/facInfoMgmt/FacInfoMgmtTab4.vue'

import BlnftAmntInf from '../components/blnftAmntInf/BlnftAmntInf.vue'

import EmpInfMgmt from '../components/empInfMgmt/EmpInfMgmt.vue'
import EmpWorkInfo from '../components/empInfMgmt/EmpWorkInfo.vue'
import EmpCrtfInfo from '../components/empInfMgmt/EmpCrtfInfo.vue'
import EmpDocMgmt from '../components/empInfMgmt/EmpDocMgmt.vue'

import EmpWrkngSchdl from '../components/wrkngSchdl/EmpWrkngSchdl.vue'
import SchdlMgmt from '../components/wrkngSchdl/SchdlMgmt.vue'

import WrkSttEmp from '../components/wrkngJrnl/WrkSttEmp.vue'
import WrkSttDay from '../components/wrkngJrnl/WrkSttDay.vue'

import edctnJrnlEmpRprt from '../components/edctnJrnl/edctnJrnlEmpRprt.vue'
import edctnJrnlSilvCareRprt from '../components/edctnJrnl/edctnJrnlSilvCareRprt.vue'
import edctnJrnlDssRes from '../components/edctnJrnl/edctnJrnlDssRes.vue'
import edctnJrnlInfrm from '../components/edctnJrnl/edctnJrnlInfrm.vue'

import WrkSMntlWrkshttEmp from '../components/otsdExprtMgmt/WrkSMntlWrkshttEmp.vue'
import PrdWorkJrnl from '../components/otsdExprtMgmt/PrdWorkJrnl.vue'

import GrvncHndlnMgmt from '../components/grvncHndlnMgmt/GrvncHndlnMgmt.vue'

import EmpHlthMgmt from '../components/empHlthMgmt/EmpHlthMgmt.vue'

import EmpWageStmtMgmt from '../components/empWageStmtMgmt/EmpWageStmtMgmt.vue'

import FcltylWgeMgmt from '../components/fcltylWgeMgmt/FcltylWgeMgmt.vue'

import EmpWageInfMgmt from '../components/empWageInfMgmt/EmpWageInfMgmt.vue'

import CareBlnftAddMgmt from '../components/careBlnftAddMgmt/CareBlnftAddMgmt.vue'

import MnthlPrlssMgmt from '../components/mnthlPrlssMgmt/MnthlPrlssMgmt.vue'

import LbrCstExpRtCalc from '../components/lbrCstExpRtCalc/LbrCstExpRtCalc.vue'

import BnfcrSttsTab1 from '../components/bnfcrStts/BnfcrSttsTab1.vue'
import BnfcrSttsTab2 from '../components/bnfcrStts/BnfcrSttsTab2.vue'

import EmpInfSttsTab1 from '../components/empInfStts/EmpInfSttsTab1.vue'
import EmpInfSttsTab2 from '../components/empInfStts/EmpInfSttsTab2.vue'
import EmpInfSttsTab3 from '../components/empInfStts/EmpInfSttsTab3.vue'

import CopayStts from '../components/copayStts/CopayStts.vue'

import NsgRcrdSttsTab1 from '../components/nsgRcrdStts/NsgRcrdSttsTab1.vue'
import NsgRcrdSttsTab2 from '../components/nsgRcrdStts/NsgRcrdSttsTab2.vue'
import NsgRcrdSttsTab3 from '../components/nsgRcrdStts/NsgRcrdSttsTab3.vue'

import PrgBnfcrPrtcpStts from '../components/prgBnfcrPrtcpStts/PrgBnfcrPrtcpStts.vue'

import FcsftOprtnJrnl from '../components/fcsftOprtnJrnl/FcsftOprtnJrnl.vue'

import SmsSndWrt from '../components/smsSndMgmt/SmsSndWrt.vue'
import SmsSndHist from '../components/smsSndMgmt/SmsSndHist.vue'

import NtcMgmt from '../components/ntcMgmt/NtcMgmt.vue'

import CmmCdMgmt from '../components/cmmCdMgmt/CmmCdMgmt.vue'

import CmmAuthMgmt from '../components/cmmAuthMgmt/CmmAuthMgmt.vue'

Vue.use(VueRouter);

// Vue Router를 관리하는 객체
export const router = new VueRouter({
    mode: 'history',

    scrollBehavior() {
        return { x: 0, y: 0 }
    },

    routes: [
        {
            path: '*',
            component: NotFound
        },
        {
            path: '/harrygndIntro',
            name: 'HarrygndIntro',
            beforeEnter() {
                window.location.href = 'https://www.harrygnd.co.kr/cmp/cmpInt'
            },
        },
        {
            path: '/harrygndWayCome',
            name: 'HarrygndWayCome',
            beforeEnter() {
                window.location.href = 'https://www.harrygnd.co.kr/cmp/cmpWayCome'
            },
        },
        {
            path: '/harrygndPolicies',
            name: 'HarrygndPolicies',
            beforeEnter() {
                window.location.href = 'https://www.harrygnd.co.kr/cmp/policies'
            },
        },
        {
            path: '/harrygndPrvcPlcy',
            name: 'HarrygndPrvcPlcy',
            beforeEnter() {
                window.location.href = 'https://www.harrygnd.co.kr/cmp/prvcPlcy'
            },
        },
        {
            // path: url 경로, component: 표시될 컴포넌트
            path: '/',
            name: 'App',
            component: StartApp,
            props: true,
        },
        {
            path: '/contact',
            name: 'ContactUs',
            component: ContactUs,
            props: true,
        },
        {
            path: '/start/SignUp',
            name: 'SignUp',
            component: SignUp,
            props: true,
        },
        {
            path: '/start/FacInfoMgmt1',
            name: 'FacInfoMgmt1',
            component: FacInfoMgmt1,
            props: true,
        },
        {
            path: '/start/FacInfoMgmt2',
            name: 'FacInfoMgmt2',
            component: FacInfoMgmt2,
            props: true,
        },
        {
            path: '/start/FacInfoMgmt3',
            name: 'FacInfoMgmt3',
            component: FacInfoMgmt3,
            props: true,
        },
        {
            path: '/start/FacInfoMgmt4',
            name: 'FacInfoMgmt4',
            component: FacInfoMgmt4,
            props: true,
        },
        {
            path: '/start/BlnftAmntInfNew',
            name: 'BlnftAmntInfNew',
            component: BlnftAmntInfNew,
            props: true,
        },
        {
            path: '/start/EmpInfMgmtNew',
            name: 'EmpInfMgmtNew',
            component: EmpInfMgmtNew,
            props: true,
        },
        {
            path: '/start/BnfcrInfrmMgmt',
            name: 'BnfcrInfrmMgmt',
            component: BnfcrInfrmMgmt,
            props: true,
        },
        {
            path: '/bnfcrInfrmMgmt/BnfcrInfrmMgmtWrt',
            name: 'BnfcrInfrmMgmtWrt',
            component: BnfcrInfrmMgmtWrt,
            props: true,
        },
        {
            path: '/bnfcrInfrmMgmt/BnfcrExtLinkRec',
            name: 'BnfcrExtLinkRec',
            component: BnfcrExtLinkRec,
            props: true,
        },
        {
            path: '/bnfcrInfrmMgmt/CnslnJrnlsModal',
            name: 'CnslnJrnlsModal',
            component: CnslnJrnlsModal,
            props: true,
        },
        {
            path: '/bnfcrInfrmMgmt/BnftSrvPln',
            name: 'BnftSrvPln',
            component: BnftSrvPln,
            props: true,
        },
        {
            path: '/bnfcrInfrmMgmt/Veri',
            name: 'Veri',
            component: Veri,
            props: true,
        },
        {
            path: '/bnfcrInfrmMgmt/BnfcrMgmtCntInfPymnt',
            name: 'BnfcrMgmtCntInfPymnt',
            component: BnfcrMgmtCntInfPymnt,
            props: true,
        },
        {
            path: '/bnfcrInfrmMgmt/BnfcrInFrmMgmtCntrcAcptn',
            name: 'BnfcrInFrmMgmtCntrcAcptn',
            component: BnfcrInFrmMgmtCntrcAcptn,
            props: true,
        },
        {
            path: '/bnfcrInfrmMgmt/SignModel',
            name: 'SignModel',
            component: SignModel,
            props: true,
        },
        {
            path: '/bnfcrInfrmMgmt/BnfcrCnsntDcmntBepr',
            name: 'BnfcrCnsntDcmntBepr',
            component: BnfcrCnsntDcmntBepr,
            props: true,
        },
        {
            path: '/bnfcrInfrmMgmt/BnfcrDocMgmt',
            name: 'BnfcrDocMgmt',
            component: BnfcrDocMgmt,
            props: true,
        },
        {
            path: '/bnfcrInfrmMgmt/BnfcrCctvBdrmMgmt',
            name: 'BnfcrCctvBdrmMgmt',
            component: BnfcrCctvBdrmMgmt,
            props: true,
        },
        {
            path: '/cnslnJrnls/BnfcrCnslnJrnls',
            name: 'BnfcrCnslnJrnls',
            component: BnfcrCnslnJrnls,
            props: true,
        },
        {
            path: '/stayOutMgmt/StayOutMgmt',
            name: 'StayOutMgmt',
            component: StayOutMgmt,
            props: true,
        },
        {
            path: '/fmlyLeter/PsnStatus',
            name: 'PsnStatus',
            component: PsnStatus,
            props: true,
        },
        {
            path: '/fmlyLeter/SendOpt',
            name: 'SendOpt',
            component: SendOpt,
            props: true,
        },
        {
            path: '/allBnfcrStts/BnfcrStatus',
            name: 'BnfcrStatus',
            component: BnfcrStatus,
            props: true,
        },
        {
            path: '/allBnfcrStts/SRHS',
            name: 'SRHS',
            component: SRHS,
            props: true,
        },
        {
            path: '/allBnfcrStts/AllBnfcrCctvBdrmMgmt',
            name: 'AllBnfcrCctvBdrmMgmt',
            component: AllBnfcrCctvBdrmMgmt,
            props: true,
        },
        {
            path: '/copayClmsMgmt/CopayClmsMgmt',
            name: 'CopayClmsMgmt',
            component: CopayClmsMgmt,
            props: true,
        },
        {
            path: '/copayDpstMgmt/CopayDpstMgmt',
            name: 'CopayDpstMgmt',
            component: CopayDpstMgmt,
            props: true,
        },
        {
            path: '/allBnftSrvPrcs/AllBnftSrvPrcs',
            name: 'AllBnftSrvPrcs',
            component: AllBnftSrvPrcs,
            props: true,
        },
        {
            path: '/bnftSrvMgmt/BnftSrvMgmt',
            name: 'BnftSrvMgmt',
            component: BnftSrvMgmt,
            props: true,
        },
        {
            path: '/weekMenu/WeekMenu',
            name: 'WeekMenu',
            component: WeekMenu,
            props: true,
        },
        {
            path: '/weekMenu/FoodInfo',
            name: 'FoodInfo',
            component: FoodInfo,
            props: true,
        },
        {
            path: '/bathSchdl/BathSchdl',
            name: 'BathSchdl',
            component: BathSchdl,
            props: true,
        },
        {
            path: '/caseMgmt/CaseMgmtTab1',
            name: 'CaseMgmtTab1',
            component: CaseMgmtTab1,
            props: true,
        },
        {
            path: '/caseMgmt/CaseMgmtTab2',
            name: 'CaseMgmtTab2',
            component: CaseMgmtTab2,
            props: true,
        },
        {
            path: '/allBlnftSrvRcrd/AllBlnftSrvRcrd',
            name: 'AllBlnftSrvRcrd',
            component: AllBlnftSrvRcrd,
            props: true,
        },
        {
            path: '/careBlnftSrvRcrd/CareBlnftSrvRcrd1',
            name: 'CareBlnftSrvRcrd1',
            component: CareBlnftSrvRcrd1,
            props: true,
        },
        {
            path: '/careBlnftSrvRcrd/CareBlnftSrvRcrd2',
            name: 'CareBlnftSrvRcrd2',
            component: CareBlnftSrvRcrd2,
            props: true,
        },
        {
            path: '/cncntExcrtObsrvRcrd/CncntExcrtObsrvRcrd',
            name: 'CncntExcrtObsrvRcrd',
            component: CncntExcrtObsrvRcrd,
            props: true,
        },
        {
            path: '/bathBlnftSrvRcrd/BathBlnftSrvRcrd',
            name: 'BathBlnftSrvRcrd',
            component: BathBlnftSrvRcrd,
            props: true,
        },
        {
            path: '/hlthBlnftSrvRcrd/HlthNsgRcrdTab1',
            name: 'HlthNsgRcrdTab1',
            component: HlthNsgRcrdTab1,
            props: true,
        },
        {
            path: '/hlthBlnftSrvRcrd/HlthNsgRcrdTab2',
            name: 'HlthNsgRcrdTab2',
            component: HlthNsgRcrdTab2,
            props: true,
        },
        {
            path: '/hlthBlnftSrvRcrd/MdctnMgmtTab',
            name: 'MdctnMgmtTab',
            component: MdctnMgmtTab,
            props: true,
        },
        {
            path: '/hlthBlnftSrvRcrd/DctrCareTab',
            name: 'DctrCareTab',
            component: DctrCareTab,
            props: true,
        },
        {
            path: '/hlthBlnftSrvRcrd/HlthChckpTab',
            name: 'HlthChckpTab',
            component: HlthChckpTab,
            props: true,
        },
        {
            path: '/hlthBlnftSrvRcrd/NrsngDocTab',
            name: 'NrsngDocTab',
            component: NrsngDocTab  ,
            props: true,
        },
        {
            path: '/nsgCareRcrd/BdsrObsRec',
            name: 'BdsrObsRec',
            component: BdsrObsRec,
            props: true,
        },
        {
            path: '/nsgCareRcrd/BnftOfrRec',
            name: 'BnftOfrRec',
            component: BnftOfrRec,
            props: true,
        },
        {
            path: '/nsgCareRcrd/NsgCareRcrdTab2',
            name: 'NsgCareRcrdTab2',
            component: NsgCareRcrdTab2,
            props: true,
        },
        {
            path: '/nsgCareRcrd/NsgCareRcrdTab3',
            name: 'NsgCareRcrdTab3',
            component: NsgCareRcrdTab3,
            props: true,
        },
        {
            path: '/nsgCareRcrd/NsgCareRcrdTab4',
            name: 'NsgCareRcrdTab4',
            component: NsgCareRcrdTab4,
            props: true,
        },
        
        {
            path: '/physcThrpyRcrd/PhyscThrpyRcrdDay',
            name: 'PhyscThrpyRcrdDay',
            component: PhyscThrpyRcrdDay,
            props: true,
        },
        {
            path: '/physcSnctnRcrd/PhyscSnctnRcrd',
            name: 'PhyscSnctnRcrd',
            component: PhyscSnctnRcrd,
            props: true,
        },
        {
            path: '/spclBdrmUseRcrd/SpclBdrmUseRcrd',
            name: 'SpclBdrmUseRcrd',
            component: SpclBdrmUseRcrd,
            props: true,
        },
        {
            path: '/emrgnRcrd/EmrgnRcrd',
            name: 'EmrgnRcrd',
            component: EmrgnRcrd,
            props: true,
        },
        {
            path: '/prgSrvRcrd/PrgSrvRcrd',
            name: 'PrgSrvRcrd',
            component: PrgSrvRcrd,
            props: true,
        },
        {
            path: '/prgSrvRcrd/PrgrmRecTap1',
            name: 'PrgrmRecTap1',
            component: PrgrmRecTap1,
            props: true,
        },
        {
            path: '/prgSrvRcrd/PrgrmRecTap2',
            name: 'PrgrmRecTap2',
            component: PrgrmRecTap2,
            props: true,
        },
        {
            path: '/prgInfrmMgmt/PrgInfrmMgmt',
            name: 'PrgInfrmMgmt',
            component: PrgInfrmMgmt,
            props: true,
        },
        {
            path: '/prgSchdlMgmt/PrgSchdlMgmt',
            name: 'PrgSchdlMgmt',
            component: PrgSchdlMgmt,
            props: true,
        },
        {
            path: '/prgBnfcrGrpMgmt/GrpstRcpnt',
            name: 'GrpstRcpnt',
            component: GrpstRcpnt,
            props: true,
        },
        {
            path: '/prgBnfcrGrpMgmt/PrpBnfcrGrp',
            name: 'PrpBnfcrGrp',
            component: PrpBnfcrGrp,
            props: true,
        },
        {
            path: '/prgImprv/PrgImprv',
            name: 'PrgImprv',
            component: PrgImprv,
            props: true,
        },
        {
            path: '/ntyInspJrnls/NghChcLog',
            name: 'NghChcLog',
            component: NghChcLog,
            props: true,
        },
        {
            path: '/ntyInspJrnls/NghWrkLog',
            name: 'NghWrkLog',
            component: NghWrkLog,
            props: true,
        },
        {
            path: '/dailyDsnfcJrnls/DailyDsnfcJrnls',
            name: 'DailyDsnfcJrnls',
            component: DailyDsnfcJrnls,
            props: true,
        },
        {
            path: '/foodHygnMgmt/HygInsLog',
            name: 'HygInsLog',
            component: HygInsLog,
            props: true,
        },
        {
            path: '/foodHygnMgmt/SntDsnLog',
            name: 'SntDsnLog',
            component: SntDsnLog,
            props: true,
        },
        {
            path: '/nsgEqpmnMgmt/NsgEqpmnMgmt',
            name: 'NsgEqpmnMgmt',
            component: NsgEqpmnMgmt,
            props: true,
        },
        {
            path: '/fcsftInspc/GasSftIns',
            name: 'GasSftIns',
            component: GasSftIns,
            props: true,
        },
        {
            path: '/fcsftInspc/ElcSftIns',
            name: 'ElcSftIns',
            component: ElcSftIns,
            props: true,
        },
        {
            path: '/fcsftInspc/FirePrvn',
            name: 'FirePrvn',
            component: FirePrvn,
            props: true,
        },
        {
            path: '/fcsftInspc/FineDust',
            name: 'FineDust',
            component: FineDust,
            props: true,
        },
        {
            path: '/infctCntrlInspc/DrugInspc',
            name: 'DrugInspc',
            component: DrugInspc,
            props: true,
        },
        {
            path: '/infctCntrlInspc/PrdcDsnfc',
            name: 'PrdcDsnfc',
            component: PrdcDsnfc,
            props: true,
        },
        {
            path: '/infctCntrlInspc/EmrMdcDvcIns',
            name: 'EmrMdcDvcIns',
            component: EmrMdcDvcIns,
            props: true,
        },
        {
            path: '/infctCntrlInspc/MdcWstIns',
            name: 'MdcWstIns',
            component: MdcWstIns,
            props: true,
        },
        {
            path: '/infctCntrlInspc/InfDssMng',
            name: 'InfDssMng',
            component: InfDssMng,
            props: true,
        },
        {
            path: '/mealSrvcLog/MealSrvcLog',
            name: 'MealSrvcLog',
            component: MealSrvcLog,
            props: true,
        },
        {
            path: '/cnfrnRcrd/CnfrnRcrd',
            name: 'CnfrnRcrd',
            component: CnfrnRcrd,
            props: true,
        },
        {
            path: '/cnfrnRcrd/CnfrnRcrd',
            name: 'CnfrnRcrd',
            component: CnfrnRcrd,
            props: true,
        },
        {
            path: '/lvnRmStts/LvnRmStts',
            name: 'LvnRmStts',
            component: LvnRmStts,
            props: true,
        },
        {
            path: '/anlWrkPln/MnthlPlan',
            name: 'MnthlPlan',
            component: MnthlPlan,
            props: true,
        },
        {
            path: '/anlWrkPln/AnualPlan',
            name: 'AnualPlan',
            component: AnualPlan,
            props: true,
        },
        {
            path: '/facInfoMgmt/FacInfoMgmtTab1',
            name: 'FacInfoMgmtTab1',
            component: FacInfoMgmtTab1,
            props: true,
        },
        {
            path: '/facInfoMgmt/FacInfoMgmtTab2',
            name: 'FacInfoMgmtTab2',
            component: FacInfoMgmtTab2,
            props: true,
        },
        {
            path: '/facInfoMgmt/FacInfoMgmtTab3',
            name: 'FacInfoMgmtTab3',
            component: FacInfoMgmtTab3,
            props: true,
        },
        {
            path: '/facInfoMgmt/FacInfoMgmtTab4',
            name: 'FacInfoMgmtTab4',
            component: FacInfoMgmtTab4,
            props: true,
        },
        {
            path: '/blnftAmntInf/BlnftAmntInf',
            name: 'BlnftAmntInf',
            component: BlnftAmntInf,
            props: true,
        },
        {
            path: '/empInfMgmt/EmpInfMgmt',
            name: 'EmpInfMgmt',
            component: EmpInfMgmt,
            props: true,
        },
        {
            path: '/empInfMgmt/EmpWorkInfo',
            name: 'EmpWorkInfo',
            component: EmpWorkInfo,
            props: true,
        },
        {
            path: '/empInfMgmt/EmpCrtfInfo',
            name: 'EmpCrtfInfo',
            component: EmpCrtfInfo,
            props: true,
        },
        {
            path: '/empInfMgmt/EmpDocMgmt',
            name: 'EmpDocMgmt',
            component: EmpDocMgmt,
            props: true,
        },
        {
            path: '/wrkngSchdl/EmpWrkngSchdl',
            name: 'EmpWrkngSchdl',
            component: EmpWrkngSchdl,
            props: true,
        },
        {
            path: '/wrkngSchdl/SchdlMgmt',
            name: 'SchdlMgmt',
            component: SchdlMgmt,
            props: true,
        },
        {
            path: '/wrkngJrnl/WrkSttEmp',
            name: 'WrkSttEmp',
            component: WrkSttEmp,
            props: true,
        },
        {
            path: '/wrkngJrnl/WrkSttDay',
            name: 'WrkSttDay',
            component: WrkSttDay,
            props: true,
        },
        {
            path: '/edctnJrnl/edctnJrnlEmpRprt',
            name: 'edctnJrnlEmpRprt',
            component: edctnJrnlEmpRprt,
            props: true,
        },
        {
            path: '/edctnJrnl/edctnJrnlSilvCareRprt',
            name: 'edctnJrnlSilvCareRprt',
            component: edctnJrnlSilvCareRprt,
            props: true,
        },
        {
            path: '/edctnJrnl/edctnJrnlDssRes',
            name: 'edctnJrnlDssRes',
            component: edctnJrnlDssRes,
            props: true,
        },
        {
            path: '/edctnJrnl/edctnJrnlInfrm',
            name: 'edctnJrnlInfrm',
            component: edctnJrnlInfrm,
            props: true,
        },
        {
            path: '/otsdExprtMgmt/WrkSMntlWrkshttEmp',
            name: 'WrkSMntlWrkshttEmp',
            component: WrkSMntlWrkshttEmp,
            props: true,
        },
        {
            path: '/otsdExprtMgmt/PrdWorkJrnl',
            name: 'PrdWorkJrnl',
            component: PrdWorkJrnl,
            props: true,
        },
        {
            path: '/grvncHndlnMgmt/GrvncHndlnMgmt',
            name: 'GrvncHndlnMgmt',
            component: GrvncHndlnMgmt,
            props: true,
        },
        {
            path: '/empHlthMgmt/EmpHlthMgmt',
            name: 'EmpHlthMgmt',
            component: EmpHlthMgmt,
            props: true,
        },
        {
            path: '/empWageStmtMgmt/EmpWageStmtMgmt',
            name: 'EmpWageStmtMgmt',
            component: EmpWageStmtMgmt,
            props: true,
        },
        {
            path: '/fcltylWgeMgmt/FcltylWgeMgmt',
            name: 'FcltylWgeMgmt',
            component: FcltylWgeMgmt,
            props: true,
        },
        {
            path: '/empWageInfMgmt/EmpWageInfMgmt',
            name: 'EmpWageInfMgmt',
            component: EmpWageInfMgmt,
            props: true,
        },
        {
            path: '/careBlnftAddMgmt/CareBlnftAddMgmt',
            name: 'CareBlnftAddMgmt',
            component: CareBlnftAddMgmt,
            props: true,
        },
        {
            path: '/mnthlPrlssMgmt/MnthlPrlssMgmt',
            name: 'MnthlPrlssMgmt',
            component: MnthlPrlssMgmt,
            props: true,
        },
        {
            path: '/lbrCstExpRtCalc/LbrCstExpRtCalc',
            name: 'LbrCstExpRtCalc',
            component: LbrCstExpRtCalc,
            props: true,
        },
        {
            path: '/bnfcrStts/BnfcrSttsTab1',
            name: 'BnfcrSttsTab1',
            component: BnfcrSttsTab1,
            props: true,
        },
        {
            path: '/bnfcrStts/BnfcrSttsTab2',
            name: 'BnfcrSttsTab2',
            component: BnfcrSttsTab2,
            props: true,
        },
        {
            path: '/empInfStts/EmpInfSttsTab1',
            name: 'EmpInfSttsTab1',
            component: EmpInfSttsTab1,
            props: true,
        },
        {
            path: '/empInfStts/EmpInfSttsTab2',
            name: 'EmpInfSttsTab2',
            component: EmpInfSttsTab2,
            props: true,
        },
        {
            path: '/empInfStts/EmpInfSttsTab3',
            name: 'EmpInfSttsTab3',
            component: EmpInfSttsTab3,
            props: true,
        },
        {
            path: '/copayStts/CopayStts',
            name: 'CopayStts',
            component: CopayStts,
            props: true,
        },
        {
            path: '/nsgRcrdStts/NsgRcrdSttsTab1',
            name: 'NsgRcrdSttsTab1',
            component: NsgRcrdSttsTab1,
            props: true,
        },
        {
            path: '/nsgRcrdStts/NsgRcrdSttsTab2',
            name: 'NsgRcrdSttsTab2',
            component: NsgRcrdSttsTab2,
            props: true,
        },
        {
            path: '/nsgRcrdStts/NsgRcrdSttsTab3',
            name: 'NsgRcrdSttsTab3',
            component: NsgRcrdSttsTab3,
            props: true,
        },
        {
            path: '/nsgRcrdStts/PrgBnfcrPrtcpStts',
            name: 'PrgBnfcrPrtcpStts',
            component: PrgBnfcrPrtcpStts,
            props: true,
        },
        {
            path: '/fcsftOprtnJrnl/FcsftOprtnJrnl',
            name: 'FcsftOprtnJrnl',
            component: FcsftOprtnJrnl,
            props: true,
        },
        {
            path: '/smsSndMgmt/SmsSndWrt',
            name: 'SmsSndWrt',
            component: SmsSndWrt,
            props: true,
        },
        {
            path: '/smsSndMgmt/SmsSndHist',
            name: 'SmsSndHist',
            component: SmsSndHist,
            props: true,
        },
        {
            path: '/ntcMgmt/NtcMgmt',
            name: 'NtcMgmt',
            component: NtcMgmt,
            props: true,
        },
        {
            path: '/cmmCdMgmt/CmmCdMgmt',
            name: 'CmmCdMgmt',
            component: CmmCdMgmt,
            props: true,
        },
        {
            path: '/cmmAuthMgmt/CmmAuthMgmt',
            name: 'CmmAuthMgmt',
            component: CmmAuthMgmt,
            props: true,
        },
       
    ]
})