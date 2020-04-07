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
            <li class="info-item">
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

        </ul>

    </div>
</template>

<script>
    export default {
        name: "creaditInfo",
        data() {
            return {}
        },
        methods: {},
        created() {

        },
    }
</script>

<style lang="scss">

</style>