<template>
    <div>
        {{userChecked.hyzk}}

        <van-radio-group v-model="userChecked.hyzk" class="info-box">
            <van-radio :name="item.name" v-for="(item,index) in userInfo.hyzk" :key="item.id">
                <template #icon="props">
                    <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                </template>
            </van-radio>
        </van-radio-group>

        <button @click="sendFa()">提交</button>
    </div>
</template>

<script>
    import {userInfo} from '@/assets/js/userInfo' /*引用 用户信息 */

    export default {
        name: "matchSon",
        props:{
          userChecked:{
              type:Object,
          }
        },
        data() {
            return {
                activeRadio: 'activeRadio',  //选中的radio样式
                userInfo:userInfo,

            }
        },
        methods: {
            sendFa(){
                this.$emit('faMethods',this.userChecked)

            }
        },

        created() {

        },
    }
</script>

<style lang="scss">

</style>