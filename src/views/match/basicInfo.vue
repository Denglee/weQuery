<template>
    <div>
        <!--基本信息 通用部分-->
        <ul>
            <li class="info-item" style="padding-bottom: 10px;">
                <h4 class="info-title">贷款总额</h4>
                <div class="flex-between inp-info">
                   <van-field
                            v-model="userChecked.total_financing"
                            name="total_financing"
                            type="number"
                            placeholder="总额（万元）"/>
                </div>
            </li>
            <li class="info-item">
                <h4 class="info-title">年纪-周岁</h4>
                <div class="flex-between info-age">
                    <div class="match-age">{{userChecked.age}}</div>
                    <div class="match-ageSlider" >
                        <van-slider  v-model="userChecked.age" @change="changeAge" min="18" max="75"/>
                    </div>
                </div>
            </li>
            <li class="info-item">
                <h4 class="info-title">婚姻状况</h4>
                <van-radio-group v-model="userChecked.hyzk" class="info-box">
                    <van-radio :name="item.name" v-for="(item,index) in userInfo.hyzk" :key="item.id">
                        <template #icon="props">
                            <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                        </template>
                    </van-radio>
                </van-radio-group>
            </li>
            <li class="info-item">
                <h4 class="info-title">户籍</h4>
                <van-radio-group v-model="userChecked.hj" class="info-box">
                    <van-radio :name="item.name" v-for="(item,index) in userInfo.hj" :key="item.id">
                        <template #icon="props">
                            <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                        </template>
                    </van-radio>
                </van-radio-group>
            </li>
            <li class="info-item">
                <h4 class="info-title"><span style="color:red;">*</span>职业类型</h4>
                <van-radio-group v-model="userChecked.zylx" class="info-box">
                    <van-radio :name="item.name" v-for="(item,index) in userInfo.zylx" :key="item.id">
                        <template #icon="props">
                            <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                        </template>
                    </van-radio>
                </van-radio-group>
            </li>

            <!-- 单位性质 选择上班族 只有在信用和房抵 显示 -->
            <li class="info-item" v-show="userChecked.zylx ==1 && this.tabBasicIndex != 3">
                <h4 class="info-title">单位性质</h4>
                <van-radio-group v-model="userChecked.dwxz" class="info-box">
                    <van-radio :name="item.name" v-for="(item,index) in userInfo.dwxz" :key="item.id">
                        <template #icon="props">
                            <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                        </template>
                    </van-radio>
                </van-radio-group>
            </li>

            <!-- 工资发放形式 选择上班族 只有在信用 显示 -->
            <li class="info-item" v-show="userChecked.zylx ==1 && this.tabBasicIndex == 1">
                <h4 class="info-title">工资发放形式</h4>
                <van-radio-group v-model="userChecked.gzffxs" class="info-box">
                    <van-radio :name="item.name" v-for="(item,index) in userInfo.gzffxs" :key="item.id">
                        <template #icon="props">
                            <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                        </template>
                    </van-radio>
                </van-radio-group>
            </li>

            <!-- 平均工资 选择上班族 只有在信用和房抵 显示 -->
            <li class="info-item" v-show="userChecked.zylx ==1 && this.tabBasicIndex != 3">
                <h4 class="info-title">平均工资</h4>
                <van-radio-group v-model="userChecked.pjgz" class="info-box">
                    <van-radio :name="item.name" v-for="(item,index) in userInfo.pjgz" :key="item.id">
                        <template #icon="props">
                            <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                        </template>
                    </van-radio>
                </van-radio-group>
            </li>

            <!-- 本单位工作时长 选择上班族 只有在信用  显示 -->
            <li class="info-item" v-show="userChecked.zylx ==1 && this.tabBasicIndex == 1">
                <h4 class="info-title">本单位工作时长</h4>
                <van-radio-group v-model="userChecked.bdwgzsc" class="info-box">
                    <van-radio :name="item.name" v-for="(item,index) in userInfo.bdwgzsc" :key="item.id">
                        <template #icon="props">
                            <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                        </template>
                    </van-radio>
                </van-radio-group>
            </li>

            <!-- 营业执照年限 选择 自雇(股东/其它) 后  只有在信用 和 房抵  显示 -->
            <li class="info-item" v-show="userChecked.zylx == 2  &&  this.tabBasicIndex != 3">
                <h4 class="info-title">营业执照年限</h4>
                <van-radio-group v-model="userChecked.yyzznx" class="info-box">
                    <van-radio :name="item.name" v-for="(item,index) in userInfo.yyzznx" :key="item.id">
                        <template #icon="props">
                            <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                        </template>
                    </van-radio>
                </van-radio-group>
            </li>

            <div v-if="userChecked.zonge > 300 && userChecked.yyzznx  == 6">
                <li class="info-item">
                    <h4 class="info-title">是否有上市企业订单</h4>
                    <van-radio-group v-model="userChecked.sfyssqydd" class="info-box">
                        <van-radio :name="item.name" v-for="(item,index) in userInfo.sfyssqydd" :key="item.id">
                            <template #icon="props">
                                <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                            </template>
                        </van-radio>
                    </van-radio-group>
                </li>
                <li class="info-item">
                    <h4 class="info-title">是否高新技术企业</h4>
                    <van-radio-group v-model="userChecked.sfgxjsqy" class="info-box">
                        <van-radio :name="item.name" v-for="(item,index) in userInfo.sfgxjsqy" :key="item.id">
                            <template #icon="props">
                                <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                            </template>
                        </van-radio>
                    </van-radio-group>
                </li>
            </div>

            <!-- 单位/公司是否可考察 除了车贷 -->
            <li class="info-item" v-show="this.tabBasicIndex !=3 && userChecked.zylx == 2 && userChecked.yyzznx != 1  && userChecked.yyzznx != -1">
                <h4 class="info-title">单位/公司是否可考察</h4>
                <van-radio-group v-model="userChecked.dwsfkc" class="info-box">
                    <van-radio :name="item.name" v-for="(item,index) in userInfo.dwsfkc" :key="item.id">
                        <template #icon="props">
                            <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                        </template>
                    </van-radio>
                </van-radio-group>
            </li>

            <!-- 对公流水 -->
            <li class="info-item" v-show="this.tabBasicIndex !=3 && userChecked.zylx == 2 && userChecked.yyzznx != 1 && userChecked.yyzznx != -1">
                <h4 class="info-title">对公流水</h4>
                <van-radio-group v-model="userChecked.dgls" class="info-box">
                    <van-radio :name="item.name" v-for="(item,index) in userInfo.dgls" :key="item.id">
                        <template #icon="props">
                            <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                        </template>
                    </van-radio>
                </van-radio-group>
            </li>

            <!-- 公司开票金额 只在 信用贷款 并且 注册年限 在一年以上才显示 -->
            <li class="info-item" v-show="this.tabBasicIndex ==1 && userChecked.yyzznx > 4  && userChecked.yyzznx != -1">
                <h4 class="info-title">公司开票金额</h4>
                <van-radio-group v-model="userChecked.gskpje" class="info-box">
                    <van-radio :name="item.name" v-for="(item,index) in userInfo.gskpje" :key="item.id">
                        <template #icon="props">
                            <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                        </template>
                    </van-radio>
                </van-radio-group>
            </li>

            <!-- 公司纳税金额 只在 信用贷款 并且 注册年限 在一年以上才显示 -->
            <li class="info-item" v-show="this.tabBasicIndex == 1 && userChecked.yyzznx >4 && userChecked.yyzznx != -1">
                <h4 class="info-title">公司纳税金额</h4>
                <van-radio-group v-model="userChecked.gsnsje" class="info-box">
                    <van-radio :name="item.name" v-for="(item,index) in userInfo.gsnsje" :key="item.id">
                        <template #icon="props">
                            <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                        </template>
                    </van-radio>
                </van-radio-group>
            </li>


            <!--自顾 不显示 社保 + 公积金-->
            <div  v-show="userChecked.zylx != 2">

                <!-- 社保   只有在信用 和 房抵  显示 -->
                <section>
                    <li class="info-item" v-show="this.tabBasicIndex != 3">
                        <h4 class="info-title">社保信息</h4>
                        <van-radio-group v-model="userChecked2.sb" class="info-box">
                            <van-radio :name="item.name" v-for="(item,index) in userInfo.sb" :key="item.id">
                                <template #icon="props">
                                    <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                                </template>
                            </van-radio>
                        </van-radio-group>
                    </li>

                    <!-- 社保基数 选择有社保 只有在信用  显示 -->
                    <li class="info-item" v-show="this.tabBasicIndex == 1  && userChecked2.sb == 1">
                        <h4 class="info-title">社保基数</h4>
                        <van-radio-group v-model="userChecked.sbjs" class="info-box">
                            <van-radio :name="item.name" v-for="(item,index) in userInfo.sbjs" :key="item.id">
                                <template #icon="props">
                                    <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                                </template>
                            </van-radio>
                        </van-radio-group>
                    </li>

                    <!-- 社保缴纳时长 选择有社保后 只在 信用贷款  显示 -->
                    <li class="info-item" v-show="this.tabBasicIndex == 1  && userChecked2.sb == 1">
                        <h4 class="info-title">社保缴纳时长</h4>
                        <van-radio-group v-model="userChecked.sb_jnsc" class="info-box">
                            <van-radio :name="item.name" v-for="(item,index) in userInfo.sb_jnsc" :key="item.id">
                                <template #icon="props">
                                    <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                                </template>
                            </van-radio>
                        </van-radio-group>
                    </li>
                    <li class="info-item" v-show="this.tabBasicIndex != 3  && userChecked2.sb == 1">
                        <h4 class="info-title">社保现单位缴纳时长</h4>
                        <van-radio-group v-model="userChecked.sb_xdwjnsc" class="info-box">
                            <van-radio :name="item.name" v-for="(item,index) in userInfo.sb_xdwjnsc" :key="item.id">
                                <template #icon="props">
                                    <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                                </template>
                            </van-radio>
                        </van-radio-group>
                    </li>
                </section>

                <!--公积金 只在信用贷款 展示 -->
                <section v-show="this.tabBasicIndex == 1">
                    <li class="info-item">
                        <h4 class="info-title">公积金信息</h4>
                        <van-radio-group v-model="userChecked2.gjj" class="info-box">
                            <van-radio :name="item.name" v-for="(item,index) in userInfo.gjj" :key="item.id">
                                <template #icon="props">
                                    <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                                </template>
                            </van-radio>
                        </van-radio-group>
                    </li>
                    <div v-show=" userChecked2.gjj ==1">
                        <li class="info-item">
                            <h4 class="info-title">公积金基数</h4>
                            <van-radio-group v-model="userChecked.gjjjs" class="info-box">
                                <van-radio :name="item.name" v-for="(item,index) in userInfo.gjjjs" :key="item.id">
                                    <template #icon="props">
                                        <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                                    </template>
                                </van-radio>
                            </van-radio-group>
                        </li>
                        <li class="info-item">
                            <h4 class="info-title">公积金缴纳时长</h4>
                            <van-radio-group v-model="userChecked.gjj_jnsc" class="info-box">
                                <van-radio :name="item.name" v-for="(item,index) in userInfo.gjj_jnsc" :key="item.id">
                                    <template #icon="props">
                                        <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                                    </template>
                                </van-radio>
                            </van-radio-group>
                        </li>
                        <li class="info-item">
                            <h4 class="info-title">公积金现单位缴纳时长</h4>
                            <van-radio-group v-model="userChecked.gjj_xdwjnsc" class="info-box">
                                <van-radio :name="item.name" v-for="(item,index) in userInfo.gjj_xdwjnsc" :key="item.id">
                                    <template #icon="props">
                                        <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                                    </template>
                                </van-radio>
                            </van-radio-group>
                        </li>
                    </div>
                </section>

            </div>
        </ul>

        <van-button class='btn-next' @click="sendFa('assetsInfo')">下一步</van-button>

    </div>
</template>

<script>

    import {userInfo} from '@/assets/js/userInfo' /*引用 用户信息 */

    export default {
        name: "basicInfo",
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

            changeAge(){

            },

            changeFl(){

            },
        },
        watch: {
            userChecked2: {
                handler(newVal, oldVal) {
                    console.log(newVal);
                    console.log(newVal.yyzznx);
                    if(newVal.yyzznx == 6){
                        console.log(newVal.yyzznx);
                        console.log(newVal.sfyssqydd);
                        this.userChecked.sfyssqydd = -1;
                        this.userChecked.sfgxjsqy = -1;
                    }

                    /*社保判断*/
                    // if(newVal.sb ==1){   //职业类型 上班族
                    //     this.userChecked.yyzznx = -1;
                    // }
                    if(newVal.sb == 2){   //职业类型  自选股东
                        this.userChecked.sbjs = -1;
                        this.userChecked.sb_jnsc = -1;
                        this.userChecked.sb_xdwjnsc = -1;
                    }

                    /*公积金判断*/
                    if(newVal.gjj == 2){   //职业类型  自选股东
                        this.userChecked.gjjjs = -1;
                        this.userChecked.gjj_jnsc = -1;
                        this.userChecked.gjj_xdwjnsc = -1;
                    }

                },
                deep: true,  //深度监听，可以监听到对象里面的值的变化
                // immediate: true,   //默认为false，初始化就开始监听

            },
            userChecked: {
                handler(newVal, oldVal) {
                    console.log(newVal);
                    if(newVal.zylx ==1){   //职业类型 上班族
                        this.userChecked.yyzznx = -1;
                        this.userChecked.dwsfkc = -1;
                        this.userChecked.dgls = -1;
                        this.userChecked.gskpje = -1;
                        this.userChecked.gsnsje = -1;
                    }
                    if(newVal.zylx == 2){   //职业类型  自选股东
                        this.userChecked.dwxz = -1;
                        this.userChecked.gzffxs = -1;
                        this.userChecked.pjgz = -1;
                        this.userChecked.bdwgzsc = -1;
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

