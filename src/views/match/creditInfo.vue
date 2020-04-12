<template>
    <div>
        <ul>
            <li class="info-item">
                <h4 class="info-title">当前小额贷款笔数</h4>
                <van-radio-group v-model="userChecked.dqxebs" class="info-box">
                    <van-radio :name="item.name" v-for="(item,index) in userInfo.dqxebs" :key="item.id">
                        <template #icon="props">
                            <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                        </template>
                    </van-radio>
                </van-radio-group>
            </li>
            <li class="info-item">
                <h4 class="info-title">当前消费金融笔数</h4>
                <van-radio-group v-model="userChecked.dqxfjrbs" class="info-box">
                    <van-radio :name="item.name" v-for="(item,index) in userInfo.dqxfjrbs" :key="item.id">
                        <template #icon="props">
                            <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                        </template>
                    </van-radio>
                </van-radio-group>
            </li>
            <li class="info-item">
                <h4 class="info-title">贷款/信用卡是否存在止付</h4>
                <van-radio-group v-model="userChecked.sfczyc" class="info-box">
                    <van-radio :name="item.name" v-for="(item,index) in userInfo.sfczyc" :key="item.id">
                        <template #icon="props">
                            <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                        </template>
                    </van-radio>
                </van-radio-group>
            </li>
            <li class="info-item">
                <h4 class="info-title">当前逾期额度</h4>
                <van-radio-group v-model="userChecked.dqyqed" class="info-box">
                    <van-radio :name="item.name" v-for="(item,index) in userInfo.dqyqed" :key="item.id">
                        <template #icon="props">
                            <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                        </template>
                    </van-radio>
                </van-radio-group>
            </li>


            <!--半年-->
            <li class="info-item">
                <h4 class="info-title">近半年内有无逾期</h4>
                <van-radio-group v-model="userChecked.bnn_wyq" class="info-box">
                    <van-radio :name="item.name" v-for="(item,index) in userInfo.bnn_wyq" :key="item.id">
                        <template #icon="props">
                            <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                        </template>
                    </van-radio>
                </van-radio-group>
            </li>
            <li class="info-item" v-show="userChecked.bnn_wyq == 1">
                <h4 class="info-title">近半年逾期次数</h4>
                <div class="flex-between">
                    <h4>近半年内逾期1个月次数 {{userChecked.bnn_yqygycs}}</h4>
                    <div>
                        <van-stepper v-model="userChecked.bnn_yqygycs" step="1" min="0" disable-input />
                    </div>
                </div>
                <div class="flex-between">
                    <h4>近半年内逾期2个月次数 {{userChecked.bnn_yqlgycs}}</h4>
                    <div>
                        <van-stepper v-model="userChecked.bnn_yqlgycs" step="1" min="0" disable-input />
                    </div>
                </div>
                <div class="flex-between">
                    <h4>近半年内逾期3个月次数 {{userChecked.bnn_yqsgycs}}</h4>
                    <div>
                        <van-stepper v-model="userChecked.bnn_yqsgycs" step="1" min="0" disable-input />
                    </div>
                </div>
                <div class="flex-between">
                    <h4>近半年内逾期4个月次数 {{userChecked.bnn_yqsigycs}}</h4>
                    <div>
                        <van-stepper v-model="userChecked.bnn_yqsigycs" step="1" min="0" disable-input />
                    </div>
                </div>
            </li>

            <!--一年-->
            <li class="info-item">
                <h4 class="info-title">近一年内有无逾期</h4>
                <van-radio-group v-model="userChecked.ynn_wyq" class="info-box">
                    <van-radio :name="item.name" v-for="(item,index) in userInfo.ynn_wyq" :key="item.id">
                        <template #icon="props">
                            <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                        </template>
                    </van-radio>
                </van-radio-group>
            </li>
            <li class="info-item" v-show="userChecked.ynn_wyq == 1">
                <h4 class="info-title">近一年逾期次数</h4>
                <div class="flex-between">
                    <h4>近一年内逾期1个月次数 {{userChecked.ynn_yqygycs}}</h4>
                    <div>
                        <van-stepper v-model="userChecked.ynn_yqygycs" step="1" min="0" disable-input />
                    </div>
                </div>
                <div class="flex-between">
                    <h4>近一年内逾期2个月次数 {{userChecked.ynn_yqlgycs}}</h4>
                    <div>
                        <van-stepper v-model="userChecked.ynn_yqlgycs" step="1" min="0" disable-input />
                    </div>
                </div>
                <div class="flex-between">
                    <h4>近一年内逾期3个月次数 {{userChecked.ynn_yqsgycs}}</h4>
                    <div>
                        <van-stepper v-model="userChecked.ynn_yqsgycs" step="1" min="0" disable-input />
                    </div>
                </div>
                <div class="flex-between">
                    <h4>近一年内逾期4个月次数 {{userChecked.ynn_yqsigycs}}</h4>
                    <div>
                        <van-stepper v-model="userChecked.ynn_yqsigycs" step="1" min="0" disable-input />
                    </div>
                </div>
            </li>

            <!--两年-->
            <li class="info-item">
                <h4 class="info-title">近两年内有无逾期</h4>
                <van-radio-group v-model="userChecked.lnn_wyq" class="info-box">
                    <van-radio :name="item.name" v-for="(item,index) in userInfo.lnn_wyq" :key="item.id">
                        <template #icon="props">
                            <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                        </template>
                    </van-radio>
                </van-radio-group>
            </li>
            <li class="info-item" v-show="userChecked.lnn_wyq == 1">
                <h4 class="info-title">近两年逾期次数</h4>
                <div class="flex-between">
                    <h4>近两年内逾期1个月次数 {{userChecked.lnn_yqygycs}}</h4>
                    <div>
                        <van-stepper v-model="userChecked.lnn_yqygycs" step="1" min="0" disable-input />
                    </div>
                </div>
                <div class="flex-between">
                    <h4>近两年内逾期2个月次数 {{userChecked.lnn_yqlgycs}}</h4>
                    <div>
                        <van-stepper v-model="userChecked.lnn_yqlgycs" step="1" min="0" disable-input />
                    </div>
                </div>
                <div class="flex-between">
                    <h4>近两年内逾期3个月次数 {{userChecked.lnn_yqsgycs}}</h4>
                    <div>
                        <van-stepper v-model="userChecked.lnn_yqsgycs" step="1" min="0" disable-input />
                    </div>
                </div>
                <div class="flex-between">
                    <h4>近两年内逾期4个月次数 {{userChecked.lnn_yqsigycs}}</h4>
                    <div>
                        <van-stepper v-model="userChecked.lnn_yqsigycs" step="1" min="0" disable-input />
                    </div>
                </div>
            </li>

            <!--征信次数-->
            <li class="info-item">
                <h4 class="info-title">征信查询次数</h4>
                <div class="flex-between">
                    <h4>一个月内查询次数 {{userChecked.lgyncxcs}}</h4>
                    <div>
                        <van-stepper v-model="userChecked.lgyncxcs" step="1" min="0" disable-input />
                    </div>
                </div>
                <div class="flex-between">
                    <h4>两个月内查询次数 {{userChecked.lgyncxcs}}</h4>
                    <div>
                        <van-stepper v-model="userChecked.lgyncxcs" step="1" min="0" disable-input />
                    </div>
                </div>
                <div class="flex-between">
                    <h4>三个月内查询次数 {{userChecked.sgyncxcs}}</h4>
                    <div>
                        <van-stepper v-model="userChecked.sgyncxcs" step="1" min="0" disable-input />
                    </div>
                </div>
                <div class="flex-between">
                    <h4>六个月内查询次数 {{userChecked.liugyncxcs}}</h4>
                    <div>
                        <van-stepper v-model="userChecked.liugyncxcs" step="1" min="0" disable-input />
                    </div>
                </div>
                <div class="flex-between">
                    <h4>十二个月内查询次数 {{userChecked.segyncxcs}}</h4>
                    <div>
                        <van-stepper v-model="userChecked.segyncxcs" step="1" min="0" disable-input />
                    </div>
                </div>
            </li>

            <li class="info-item" v-show="tabBasicIndex == 1">
                <h4 class="info-title">是否使用过微粒贷</h4>
                <van-radio-group v-model="userChecked.sfsygwld" class="info-box">
                    <van-radio :name="item.name" v-for="(item,index) in userInfo.sfsygwld" :key="item.id">
                        <template #icon="props">
                            <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                        </template>
                    </van-radio>
                </van-radio-group>
            </li>

        </ul>
        <van-button class='btn-next'  @click="sendFa('submit')">提交</van-button>

    </div>
</template>

<script>
    import {userInfo} from '@/assets/js/userInfo' /*引用 用户信息 */
    export default {
        name: "creaditInfo",
        props:{
            userChecked:{
                type:Object,
            },
            userChecked2:{
                type:Object,
            },
            tabBasicIndex:{
                type:Number,
            },
        },
        data() {
            return {
                activeRadio: 'activeRadio',  //选中的radio样式
                userInfo:userInfo,

            }
        },
        methods: {
            sendFa(type){
                this.$emit('faMethods',this.userChecked,type)
            },
        },
        watch: {

            userChecked2: {
                handler(newVal, oldVal) {
                    console.log(newVal);
                    let tabBasicIndex = this.tabBasicIndex;

                    /*信用贷款*/
                    if(tabBasicIndex ==1){
                        /*房产信息判断*/
                        if(newVal.fcxx == 3){
                            this.userChecked2.fczt = -1;
                            this.userChecked.fclx = -1;
                            this.userChecked.ajz = -1;
                            this.userChecked.ajjq = -1;
                            this.userChecked.qkf = -1;
                            this.userChecked.fl = -1;
                        }

                        /*车辆状态判断*/
                        if(newVal.clzt2 != 1){
                            this.userChecked.ajc = -1;
                        }
                        if(newVal.clzt2 != 2){
                            this.userChecked.qkc = -1;
                        }
                        if(newVal.clzt2 != 3){
                            this.userChecked.qkc = -1;
                        }

                        /*保险保单*/
                        if(newVal.bxbd == 2){
                            this.userChecked.bxlx = -1;
                            this.userChecked.bxjnfs = -1;
                            this.userChecked.bxjfsj = -1;
                        }
                    }

                    /*信用贷款  + 房抵贷款*/
                    if(tabBasicIndex != 3){
                        /*房产状态*/
                        if(newVal.fczt2 != 1){
                            this.userChecked.ajz = -1;
                        }
                        if(newVal.fczt2 != 2){
                            this.userChecked.ajjq = -1;
                        }
                        if(newVal.fczt2 != 3){
                            this.userChecked.qkf = -1;
                        }

                    }

                    /*车抵贷款*/
                    if(tabBasicIndex == 3){
                        if(newVal.clgsdq == 2){
                            this.userChecked.clgsd = -1;
                        }
                    }


                },
                deep: true,  //深度监听，可以监听到对象里面的值的变化
                // immediate: true,   //默认为false，初始化就开始监听
            },
            userChecked: {
                handler(newVal, oldVal) {
                    console.log(newVal);
                    let tabBasicIndex = this.tabBasicIndex;
                    if(tabBasicIndex == 3){
                        /*车辆按揭时间*/
                        if(newVal.clzt != 1){
                            this.userChecked.ajc = -1;
                        }
                        if(newVal.clzt != 2){
                            this.userChecked.qkc = -1;
                        }
                    }
                },
                deep: true,  //深度监听，可以监听到对象里面的值的变化
                // immediate: true,   //默认为false，初始化就开始监听
            }
        },
        created() {

        },
    }
</script>

<style lang="scss">

</style>