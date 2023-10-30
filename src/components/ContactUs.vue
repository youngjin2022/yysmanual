<template>
    <v-container class="pa-0" fluid>
        <v-row class="ma-0 pa-0" v-if="this.$vuetify.breakpoint.mobile" no-gutters>
            <v-col cols="12" style="position: relative;">
                <v-img height="200" position="60% 0%" alt="pencil"
                    gradient="90deg, rgba(0, 0, 0, .2) 0%, rgba(0, 0, 0, 0) 100%"
                    src="../assets/images/memo.png">
                </v-img>
            </v-col>
        </v-row>
        <v-row class="ma-0 pa-0" v-else no-gutters>
            <v-col cols="12" style="position: relative;">
                <v-img max-height="300" alt="pencil"
                    gradient="90deg, rgba(0, 0, 0, .2) 0%, rgba(0, 0, 0, 0) 100%"
                    src="../assets/images/memo.png">
                </v-img>
            </v-col>
        </v-row>
        <v-row class="ma-0 py-15" no-gutters>
            <v-spacer></v-spacer>
            <v-col class="" :cols="this.$vuetify.breakpoint.mobile ? 10 : 8">
                <div class="pb-4">
                    <span class="fontSizeImageTitle font-weight-medium pb-4" style="border-bottom: 1px solid black;">
                        상담내용 작성
                    </span>
                </div>
                <v-form ref="consultForm">
                    <v-row class="pa-0 mt-16" no-gutters>
                        <v-col class="mr-16" :cols="this.$vuetify.breakpoint.mobile ? 12 : 4">
                            <v-select
                                class="mb-6"
                                v-model="contactusKind" :items="consItem"
                                item-color="black" item-text="name" item-value="cd"
                                hint="*위탁급식상담 : 일반급식, 병원급식, 골프장 식음료, 외식 위탁문의" label="문의항목*"
                                persistent-hint>
                            </v-select>

                            <v-text-field
                                v-model="consultObj.mngr"
                                class="mb-6"
                                label="담당자명 *"
                                :rules="[rules.required]"
                                clearable>
                            </v-text-field>

                            <v-text-field
                                v-model="consTel"
                                class="mb-6"
                                label="연락처 *"
                                hint="예시) 010-0000-0000"
                                :rules="[rules.checkPhoneNumber]"
                                clearable>
                            </v-text-field>

                            <v-text-field
                                v-model="consEmail"
                                class="mb-6"
                                label="이메일 *"
                                hint="예시) harryfood@google.com"
                                :rules="[rules.emailDomain]"
                                clearable>
                            </v-text-field>

                            <v-text-field
                                v-model="consultObj.cmpNm"
                                class="mb-6"
                                label="회사명"
                                clearable>
                            </v-text-field>

                            <v-text-field
                                v-model="consultObj.cmpAddr"
                                append-outer-icon="mdi-map-search-outline"
                                class="mb-6"
                                label="회사주소"
                                @click:append-outer="onDaumPost()"
                                readonly>
                            </v-text-field>

                            <v-text-field
                                v-model="consultObj.cmpAddrDtl"
                                class="mb-6"
                                label="상세주소"
                                clearable>
                            </v-text-field>

                            <v-text-field
                                v-model="consultObj.cmpZip"
                                class="mb-6"
                                label="우편번호"
                                readonly>
                            </v-text-field>

                        </v-col>
                        <v-col class="" :cols="this.$vuetify.breakpoint.mobile ? 12 : 5">
                            <v-textarea
                                v-model="consultObj.contactusCntnt"
                                :rules="[rules.required]"
                                label="상담내용*"
                                hint="※ 상기 내용을 함께 보내주시면, 빠른 처리를 도와드립니다."
                                no-resize rows="15">
                            </v-textarea>
                            <div class="d-inline-block mt-15" style="position: relative; width: 100%; height: 50px;">
                                <v-btn class="fontSizeFdS white--text" color="blue-grey"
                                    style="position: absolute; bottom: 0; right: 0;"
                                    @click="preCntctUs()" x-large>
                                    등록
                                </v-btn>
                            </div>
                        </v-col>
                    </v-row>
                </v-form>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
        <v-dialog v-model="daumPost" max-width="500">
            <VueDaumPostcode @complete="onAddressComp" :height="400" />
        </v-dialog>
        <v-snackbar
            v-model="snackOptions[0]" :timeout="snackOptions[1]" :value="true" :color="snackOptions[3]"
            class="pa-0" style="bottom: 254px;"
            min-width="200" max-width="500" rounded="pill" transition="slide-y-transition" absolute >
            <div style="text-align: center;">
                <span class="text-h6 white--text font-weight-bold ml-4 mr-2">{{snackOptions[2]}}</span>
            </div>
        </v-snackbar>
    </v-container>
</template>

<script>
import { VueDaumPostcode } from "vue-daum-postcode"

export default {
    name: 'ContactUs',

    components: {
        VueDaumPostcode,
    },

    props: {

    },

    created: function(){
    },

    mounted: function(){
        this.$nextTick(function () {
            this.$parent.$parent.$parent.onFooter = false
        })
    },

    computed: {

    },

    watch:{
  
    },
        
    methods: {
        setCntctUs: function (obj) {
            this.$parent.$parent.$parent.insCntctUs(obj)
                .then((response) => ( this.setCntctUsAfter(response.data) ))
                .catch((error) => console.log('connect error /board/insCntctUs : ' + error))
        },
        setCntctUsAfter: function (res) {
            if(res.statusCode == 200){
                this.snackControll([true, 2500, res.message, 'info'])
                this.$refs.consultForm.reset()
            }
            else
                this.snackControll([true, 5000, res.message, 'error'])
        },
        preCntctUs: function () {
            let res = this.$refs.consultForm.validate()
            if(res){
                let tmpObj = Object.assign({}, this.consultObj)
                tmpObj.contactusKind = this.contactusKind
                tmpObj.cmpTel1 = this.consTel.split('-', 3)[0]
                tmpObj.cmpTel2 = this.consTel.split('-', 3)[1]
                tmpObj.cmpTel3 = this.consTel.split('-', 3)[2]
                tmpObj.cmpEmail = this.consEmail.split('@', 2)[0]
                tmpObj.cmpEmailDmn = this.consEmail.split('@', 2)[1]

                this.setCntctUs(tmpObj)
            }
            else
                this.snackControll([true, 2500, '필수 항목을 입력해주세요.', 'warning'])
        },
        onDaumPost: function () {
            this.daumPost = !this.daumPost
        },
        onAddressComp: function (result) {
            this.consultObj.cmpZip = result.zonecode
            this.consultObj.cmpAddr = result.address
            this.consultObj.cmpAddrDtl = result.buildingName
            this.onDaumPost()
        },
        snackControll: function (options) {
            this.snackOptions = options
            //this.snackOptions[0] = true
            //this.snackOptions[1] = 2500
            //this.snackOptions[2] = '신규 작성 모드'
            //info, success, warning, error
            //this.snackOptions[3] = 'info'
        },
    },

    data: () => ({
        daumPost: false,
        consTel: '',
        consEmail: '',
        contactusKind: '1',
        consItem: [
            { cd: '1', name: '위탁급식 상담' }, { cd: '2', name: '식자재구매 상담' },
        ],
        consultObj: {
            contactusKind: '', mngr: '', cmpTel1: '', cmpTel2: '', cmpTel3: '', cmpNm: '', cmpZip: '', cmpAddr: '', cmpAddrDtl: '',
            contactusCntnt: '상담내용을 작성해주세요.\n\n기업명:\n소재지:\n업군(급식/외식, 단체급식/레스토랑, 카페 등):\n매출규모(월 식재료비):\n당사 이용동기:',
            cmpEmail: '', cmpEmailDmn: '',
        },
        rules: {
            required: value => !!value || '필수 입력 항목 입니다.',
            checkPhoneNumber: value => /^\d{2,3}-\d{3,4}-\d{4}$/.test(value) || '전화번호 양식이 잘못되었습니다.',
            emailDomain: value => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value) || '이메일 양식이 잘못되었습니다.',
        },
        snackOptions: [ false, 3000, '', 'info' ],
    }),
};
</script>

<style>
    .v-select__selections { font-size: 1.1rem; }
    .v-input .v-label { line-height: 14px; }
    .v-input__control .v-select__slot label { line-height: 20px !important; height: 24px !important; top: 2px; }
    .v-input__control .v-input__slot .v-text-field__slot label { line-height: 20px !important; top: 2px; }
    .v-text-field input { line-height: 14px; }
    .v-snack__content { padding: 8px 6px 6px 10px; }
    .v-label { font-size: 1.1rem; }
    .v-messages__message { font-size: 0.875rem; line-height: 18px; }
</style>