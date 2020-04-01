<template>
    <div class="match-box">
        <matchGuide v-show="showState.guideShow" @showMatch="showMatch"></matchGuide>

        <div v-show="showState.matchShow">

            <!--顶部三大步骤导航-->
            <van-row class="headerInfo-nav">
                <van-col span="8" v-for="(item,index) in btnCreditArr" :key="item.id">
                    <van-button :disabled="item.disabled" @click="btnShowCredit(item)"
                                :class="item.id == headerInfoIndex ? 'activeInfoNav' : ' ' ">{{item.name}}
                    </van-button>
                </van-col>
            </van-row>

            <!-- 一、 基本信息-->
            <div v-if="showStatePage.basicShow">

                <div class="info-item basic-nav">
                    <van-button @click="btnTabBasic(item)" v-for="(item,index) in BasicTabArr" :key="item.id"
                                :class="item.id == tabBasicIndex ? 'activeTabBasic' : ' ' ">{{item.name}}
                    </van-button>
                </div>

                <!--基本信息 通用部分-->
                <ul>
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
                        <h4 class="info-title">职业类型</h4>
                        <van-radio-group v-model="userChecked2.zylx" class="info-box">
                            <van-radio :name="item.name" v-for="(item,index) in userInfo.zylx" :key="item.id">
                                <template #icon="props">
                                    <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                                </template>
                            </van-radio>
                        </van-radio-group>
                    </li>

                    <!-- 单位性质 选择上班族 只有在信用和房抵 显示 -->
                    <li class="info-item" v-show="userChecked2.zylx ==1 && this.tabBasicIndex != 3">
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
                    <li class="info-item" v-show="userChecked2.zylx ==1 && this.tabBasicIndex == 1">
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
                    <li class="info-item" v-show="userChecked2.zylx ==1 && this.tabBasicIndex != 3">
                        <h4 class="info-title">平均工资{{tabBasicIndex}}</h4>
                        <van-radio-group v-model="userChecked.pjgz" class="info-box">
                            <van-radio :name="item.name" v-for="(item,index) in userInfo.pjgz" :key="item.id">
                                <template #icon="props">
                                    <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                                </template>
                            </van-radio>
                        </van-radio-group>
                    </li>

                    <!-- 本单位工作时长 选择上班族 只有在信用  显示 -->
                    <li class="info-item" v-show="userChecked2.zylx ==1 && this.tabBasicIndex == 1">
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
                    <li class="info-item" v-show="userChecked2.zylx == 2  &&  this.tabBasicIndex != 3">
                        <h4 class="info-title">营业执照年限</h4>
                        <van-radio-group v-model="userChecked.yyzznx" class="info-box">
                            <van-radio :name="item.name" v-for="(item,index) in userInfo.yyzznx" :key="item.id">
                                <template #icon="props">
                                    <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                                </template>
                            </van-radio>
                        </van-radio-group>
                    </li>

                    <!-- 单位/公司是否可考察 除了车贷 -->
                    <li class="info-item" v-show="this.tabBasicIndex !=3 && userChecked2.zylx == 2 && userChecked.yyzznx != 1  && userChecked.yyzznx != -1">
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
                    <li class="info-item" v-show="this.tabBasicIndex !=3 && userChecked2.zylx == 2 && userChecked.yyzznx != 1 && userChecked.yyzznx != -1">
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


                    <!-- 社保   只有在信用 和 房抵  显示 -->
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

                    <!--公积金 只在信用贷款 展示 -->
                    <div v-show="this.tabBasicIndex == 1">
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

                    </div>
                </ul>

                <van-button @click="btnNext('assetsInfo')" v-show="showNextBtn.basicNext">下一步</van-button>
                <van-button @click="btnNext('submit')"  >提交</van-button>
            </div>

            <!--二、 资产信息 -->
            <div v-else-if="showStatePage.assetsShow">
                <!--{id: 1, name: '信用贷款', type: 'tabCredit'},
                {id: 2, name: '房抵贷款', type: 'tabHouse'},
                {id: 3, name: '车抵贷款', type: 'tabCar'},-->

                <!--信用贷款-->
                <ul v-show="this.tabBasicIndex == 1 ">
                    <!--信用房产 + 房抵 -->
                    <li class="info-item">
                        <h4 class="info-title">房产信息1</h4>
                        <van-radio-group v-model="userChecked2.fcxx" class="info-box">
                            <van-radio :name="item.name" v-for="(item,index) in userInfo.fcxx" :key="item.id">
                                <template #icon="props">
                                    <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                                </template>
                            </van-radio>
                        </van-radio-group>
                    </li>

                    <li class="info-item" v-show="userChecked2.fcxx != 3 && userChecked2.fcxx != -1">
                        <h4 class="info-title">房产类型</h4>
                        <van-radio-group v-model="userChecked.fclx" class="info-box">
                            <van-radio :name="item.name" v-for="(item,index) in userInfo.fclx" :key="item.id">
                                <template #icon="props">
                                    <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                                </template>
                            </van-radio>
                        </van-radio-group>
                    </li>

                    <li class="info-item" v-show="userChecked2.fcxx != 3 && userChecked2.fcxx != -1">
                        <h4 class="info-title">房龄</h4>
                        <div class="flex-between info-age">
                            <div class="match-age">{{userChecked.fl}}</div>
                            <div class="match-ageSlider" >
                                <van-slider  v-model="userChecked.fl" @change="changeAge" min="18" max="75"/>
                            </div>
                        </div>
                    </li>

                    <li class="info-item" v-show="userChecked.fclx != -1">
                        <h4 class="info-title">房产状态</h4>
                        <van-radio-group v-model="userChecked2.fczt" class="info-box">
                            <van-radio :name="item.name" v-for="(item,index) in userInfo.fczt" :key="item.id">
                                <template #icon="props">
                                    <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                                </template>
                            </van-radio>
                        </van-radio-group>
                    </li>
                    <li class="info-item" v-show="userChecked2.fczt == 1">
                        <h4 class="info-title">月供时间</h4>
                        <van-radio-group v-model="userChecked.ajz" class="info-box">
                            <van-radio :name="item.name" v-for="(item,index) in userInfo.ajz" :key="item.id">
                                <template #icon="props">
                                    <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                                </template>
                            </van-radio>
                        </van-radio-group>
                    </li>
                    <li class="info-item" v-show="userChecked2.fczt == 2">
                        <h4 class="info-title">按揭结清时间</h4>
                        <van-radio-group v-model="userChecked.ajjq" class="info-box">
                            <van-radio :name="item.name" v-for="(item,index) in userInfo.ajjq" :key="item.id">
                                <template #icon="props">
                                    <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                                </template>
                            </van-radio>
                        </van-radio-group>
                    </li>
                    <li class="info-item" v-show="userChecked2.fczt == 3">
                        <h4 class="info-title">过户时间</h4>
                        <van-radio-group v-model="userChecked.qkf" class="info-box">
                            <van-radio :name="item.name" v-for="(item,index) in userInfo.qkf" :key="item.id">
                                <template #icon="props">
                                    <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                                </template>
                            </van-radio>
                        </van-radio-group>
                    </li>
                </ul>


                <ul v-show="this.tabBasicIndex == 1">
                    <!--信用  车辆-->
                    <li class="info-item">
                        <h4 class="info-title">车辆状态</h4>
                        <van-radio-group v-model="userChecked2.clzt2" class="info-box">
                            <van-radio :name="item.name" v-for="(item,index) in userInfo.clzt2" :key="item.id">
                                <template #icon="props">
                                    <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                                </template>
                            </van-radio>
                        </van-radio-group>
                    </li>
                 <!--   <li class="info-item" v-show="userChecked2.clzt2 == 1">
                        <h4 class="info-title">车辆状态</h4>
                        <van-radio-group v-model="userChecked2.clzt2" class="info-box">
                            <van-radio :name="item.name" v-for="(item,index) in userInfo.clzt2" :key="item.id">
                                <template #icon="props">
                                    <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                                </template>
                            </van-radio>
                        </van-radio-group>
                    </li>-->
                    <li class="info-item" v-show="userChecked2.clzt2 == 1">
                        <h4 class="info-title">车辆按揭时间</h4>
                        <van-radio-group v-model="userChecked.ajc" class="info-box">
                            <van-radio :name="item.name" v-for="(item,index) in userInfo.ajc" :key="item.id">
                                <template #icon="props">
                                    <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                                </template>
                            </van-radio>
                        </van-radio-group>
                    </li>
                    <li class="info-item" v-show="userChecked2.clzt2 == 2">
                        <h4 class="info-title">按揭结清或过户时间</h4>
                        <van-radio-group v-model="userChecked.qkc" class="info-box">
                            <van-radio :name="item.name" v-for="(item,index) in userInfo.qkc" :key="item.id">
                                <template #icon="props">
                                    <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                                </template>
                            </van-radio>
                        </van-radio-group>
                    </li>

                    <!--信用 保险-->
                    <li class="info-item">
                        <h4 class="info-title">保险保单</h4>
                        <van-radio-group v-model="userChecked2.bxbd" class="info-box">
                            <van-radio :name="item.name" v-for="(item,index) in userInfo.bxbd" :key="item.id">
                                <template #icon="props">
                                    <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                                </template>
                            </van-radio>
                        </van-radio-group>
                    </li>
                    <li class="info-item" v-show="userChecked2.bxbd ==1">
                        <h4 class="info-title">保险机构</h4>
                        <van-radio-group v-model="userChecked.bxlx" class="info-box">
                            <van-radio :name="item.name" v-for="(item,index) in userInfo.bxlx" :key="item.id">
                                <template #icon="props">
                                    <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                                </template>
                            </van-radio>
                        </van-radio-group>
                    </li>
                    <li class="info-item" v-show="userChecked.bxlx != -1">
                        <h4 class="info-title">保险缴纳方式</h4>
                        <van-radio-group v-model="userChecked.bxjnfs" class="info-box">
                            <van-radio :name="item.name" v-for="(item,index) in userInfo.bxjnfs" :key="item.id">
                                <template #icon="props">
                                    <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                                </template>
                            </van-radio>
                        </van-radio-group>
                    </li>
                    <li class="info-item" v-show="userChecked.bxjnfs != -1">
                        <h4 class="info-title">保险缴费时间</h4>
                        <van-radio-group v-model="userChecked.bxjfsj" class="info-box">
                            <van-radio :name="item.name" v-for="(item,index) in userInfo.bxjfsj" :key="item.id">
                                <template #icon="props">
                                    <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                                </template>
                            </van-radio>
                        </van-radio-group>
                    </li>
                </ul>

                <!--车抵贷款-->
                <ul v-show="this.tabBasicIndex == 3">
                    <li class="info-item">
                        <h4 class="info-title">车辆所有权</h4>
                        <van-radio-group v-model="userChecked.clsyc" class="info-box">
                            <van-radio :name="item.name" v-for="(item,index) in userInfo.clsyc" :key="item.id">
                                <template #icon="props">
                                    <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                                </template>
                            </van-radio>
                        </van-radio-group>
                    </li>
                    <li class="info-item">
                        <h4 class="info-title">车辆归属地</h4>
                        <van-radio-group v-model="userChecked2.clgsdq" class="info-box">
                            <van-radio :name="item.name" v-for="(item,index) in userInfo.clgsdq" :key="item.id">
                                <template #icon="props">
                                    <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                                </template>
                            </van-radio>
                        </van-radio-group>
                    </li>
                    <li class="info-item" v-show="userChecked2.clgsdq == 1">
                        <h4 class="info-title">车牌归属城市</h4>
                        <van-radio-group v-model="userChecked.clgsd" class="info-box">
                            <van-radio :name="item.name" v-for="(item,index) in userInfo.clgsd" :key="item.id">
                                <template #icon="props">
                                    <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                                </template>
                            </van-radio>
                        </van-radio-group>
                    </li>
                    <li class="info-item">
                        <h4 class="info-title">车辆性质</h4>
                        <van-radio-group v-model="userChecked.clxz" class="info-box">
                            <van-radio :name="item.name" v-for="(item,index) in userInfo.clxz" :key="item.id">
                                <template #icon="props">
                                    <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                                </template>
                            </van-radio>
                        </van-radio-group>
                    </li>

                    <li class="info-item">
                        <h4 class="info-title">车辆状态</h4>
                        <van-radio-group v-model="userChecked.clzt" class="info-box">
                            <van-radio :name="item.name" v-for="(item,index) in userInfo.clzt" :key="item.id">
                                <template #icon="props">
                                    <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                                </template>
                            </van-radio>
                        </van-radio-group>
                    </li>
                    <li class="info-item">
                        <h4 class="info-title">车辆持证时间</h4>
                        <van-radio-group v-model="userChecked.clczsj" class="info-box">
                            <van-radio :name="item.name" v-for="(item,index) in userInfo.clczsj" :key="item.id">
                                <template #icon="props">
                                    <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                                </template>
                            </van-radio>
                        </van-radio-group>
                    </li>
                </ul>

                <van-button @click="btnNext('creditInfo')" v-show="showNextBtn.assetsNext">下一步</van-button>

            </div>

            <!--三、征信信息-->
            <div v-else>
                <ul>
                    <li class="info-item">
                        <h4 class="info-title">当前小额贷款笔数</h4>
                        <van-radio-group v-model="userChecked.sb_xdwjnsc" class="info-box">
                            <van-radio :name="item.name" v-for="(item,index) in userInfo.sb_xdwjnsc" :key="item.id">
                                <template #icon="props">
                                    <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{item.value}}</div>
                                </template>
                            </van-radio>
                        </van-radio-group>
                    </li>
                </ul>

                <van-button @click="btnNext('submit')" v-show="showNextBtn.creditNext">提交</van-button>
            </div>


        </div>
    </div>
</template>

<script>
    import {userInfo} from '@/assets/js/userInfo' /*引用 用户信息 */

    import matchGuide from '@/components/matchGuide/matchGuide'
    export default {
        name: "match",
        data() {
            return {
                showState:{    //显影状态
                    guideShow:false,   //引导页
                    matchShow:true,  //筛选页
                },

                loadingShow:false,
                headerInfoIndex: 2,  //头部 当前
                // basicTabActive: 0, //第一部分 tab显隐
                tabBasicIndex: 1, //基本信息 三大导航  tab显隐
                activeRadio: 'activeRadio',  //选中的radio样式

                /*三大步骤导航 按钮*/
                btnCreditArr: [
                    {id: 1, name: '基本信息', disabled: true, type: 'basicInfo'},
                    {id: 2, name: '资产信息', disabled: true, type: 'assetsInfo'},
                    {id: 3, name: '征信信息', disabled: true, type: 'creditInfo'},
                ],

                /*三大步骤导航页面 对应显隐*/
                showStatePage: {
                    basicShow: false,
                    assetsShow: true,
                    creditShow: false,
                },

                /*基本信息 tab*/
                BasicTabArr:[
                    {id: 1, name: '信用贷款', type: 'tabCredit'},
                    {id: 2, name: '房抵贷款', type: 'tabHouse'},
                    {id: 3, name: '车抵贷款', type: 'tabCar'},
                ],

                /*三大 next 导航 按钮 对应显影*/
                showNextBtn: {
                    basicNext: false,
                    assetsNext: false,
                    creditNext: false,
                },

                userChecked2:{
                    zylx:-1,  //职业类型
                    sb:-1,  //有无社保
                    gjj:-1,  //有无公积金
                    clgsdq:-1,  //车辆归属地区
                    fcxx:-1,  //房产信息
                    fczt:-1,  //房产状态
                    clzt:-1,  //车辆状态
                    bxbd:-1,  //保险保单
                },

                /*用户选中*/
                userChecked: {
                    age: 0,          // 1、年龄
                    hyzk: -1,         // 3、婚姻状况
                    hj: -1,           // 4、户籍
                    dwxz: -1,         // 5、单位性质
                    gzffxs: -1,       // 6、工资发放形式
                    pjgz: -1,         // 7、平均工资
                    bdwgzsc: -1,      // 8、本单位工作时长
                    sbjs: -1,         // 9、社保基数
                    sb_jnsc: -1,      // 10、社保缴纳时长
                    sb_xdwjnsc: -1,   // 11、社保现单位缴纳时长
                    gjjjs: -1,        // 12、公积金基数
                    gjj_jnsc: -1,     // 13、公积金缴纳时长
                    gjj_xdwjnsc: -1,  // 14、公积金现单位缴纳时长
                    yyzznx: -1,       // 15、营业执照年限
                    dwsfkc: -1,       // 16、单位是否考察
                    dgls: -1,         // 17、对公流水
                    gskpje: -1,       // 18、公司开票金额
                    gsnsje: -1,       // 19、公司纳税金额
                    fclx: -1,         // 20、房产类型
                    ajz: -1,          // 21、按揭中（月供时间）
                    ajjq: -1,         // 22、按揭结清（结清时间）
                    qkf: -1,          // 23、全款房（过户时间）
                    fl: -1,           // 24、房龄
                    ajc: -1,          // 25、按揭车（按揭时间）
                    qkc: -1,          // 26、全款车（按揭结清或过户时间）
                    clsyc: -1,        // 27、车辆所有权
                    clxz: -1,         // 28、车辆性质
                    clczsj: -1,       // 29、车辆持证时间
                    clgsd: -1,        // 30、车辆归属地
                    cl: -1,           // 31、车龄
                    jqxsyyxq: -1,     // 32、交强险剩余有效期
                    xsgls: -1,        // 33、行驶公里数
                    syxsyyxq: -1,     // 34、商业险剩余有效期
                    bxlx: -1,         // 35、保险类型
                    bxjnfs: -1,       // 36、保险缴纳方式
                    bxjfsj: -1,       // 37、保险缴费时间
                    ygyncxcs: '0',     // 38、一个月内查询次数
                    lgyncxcs: '0',     // 39、两个月内查询次数
                    sgyncxcs: -1,     // 40、三个月内查询次数
                    liugyncxcs: -1,   // 41、六个月内查询次数
                    segyncxcs: -1,    // 42、十二个月内查询次数
                    dqxebs: -1,       // 43、当前小额笔数
                    dqxfjrbs: -1,     // 44、当前消费金融笔数
                    sfczyc: -1,       // 45、贷款/信用卡是否存在止付；呆账；关注等异常
                    dqyqed: -1,       // 46、当前逾期额度
                    bnn_wyq: -1,      // 47、近半年内有无逾期
                    bnn_yqygycs: -1,  // 48、近半年内逾期一个月次数
                    bnn_yqlgycs: -1,  // 49、近半年内逾期两个月次数
                    bnn_yqsgycs: -1,  // 50、近半年内逾期三个月次数
                    bnn_yqsigycs: -1, // 51、近半年内逾期四个月次数
                    ynn_wyq: -1,      // 52、近一年内有无逾期
                    ynn_yqygycs: -1,  // 53、近一年内逾期一个月次数
                    ynn_yqlgycs: -1,  // 54、近一年内逾期二个月次数
                    ynn_yqsgycs: -1,  // 55、近一年内逾期三个月次数
                    ynn_yqsigycs: -1, // 56、近一年内逾期四个月次数
                    lnn_wyq: -1,      // 57、近两年内有无逾期
                    lnn_yqygycs: -1,  // 58、近两年内逾期一个月次数
                    lnn_yqlgycs: -1,  // 59、近两年内逾期二个月次数
                    lnn_yqsgycs: -1,  // 60、近两年内逾期三个月次数
                    lnn_yqsigycs: -1, // 61、近两年内逾期四个月次数
                    sfsygwld: -1,     // 62、是否使用过微粒贷
                },

                /*所有单选 数组*/
                userInfo:userInfo,

            }
        },
        methods: {
            /*显影*/
            showMatch(){
                this.showState = {    //显影状态
                    guideShow:false,   //引导页
                    matchShow:true,  //帅选页
                }
            },

            changeAge(){

            },


            /*三大信用状态 点击显隐*/
            btnShowCredit(val) {
                console.log(val);
                this.headerInfoIndex = val.id;

                this.changeShowState(val.type);
            },

            /* 基本信息 三大导航 tab */
            btnTabBasic(val){
                console.log(val);
                this.tabBasicIndex = val.id;
            },

            /*下一步*/
            btnNext(type) {
                console.log(type);

                this.changeShowState(type);
            },

            /*显隐状态*/
            changeShowState(type) {
                // basicInfo,assetsInfo,creditInfo
                if (type == 'basicInfo') {
                    this.showStatePage = {
                        basicShow: true,
                        assetsShow: false,
                        creditShow: false,
                    };
                    this.headerInfoIndex = 1;
                    this.btnCreditArr[0].disabled = true;

                }

                if (type == 'assetsInfo') {
                    this.showStatePage = {
                        basicShow: false,
                        assetsShow: true,
                        creditShow: false,
                    };
                    this.headerInfoIndex = 2;
                    this.showStatePage.assetsShow = true;
                    this.btnCreditArr[0].disabled = false;
                    this.btnCreditArr[1].disabled = true;

                }

                if (type == 'creditInfo') {
                    this.showStatePage = {
                        basicShow: false,
                        assetsShow: false,
                        creditShow: true,
                    };
                    this.headerInfoIndex = 3;
                    this.showStatePage.assetsShow = false;
                    this.showStatePage.creditShow = true;
                    this.btnCreditArr[0].disabled = false;
                    this.btnCreditArr[1].disabled = false;
                    this.btnCreditArr[2].disabled = true;
                }

                if (type == 'submit') {
                    console.log('提交ing');

                    console.log(this.userChecked);
                }

            },

        },

        watch: {
            userChecked: {
                handler(newVal, oldVal) {
                    console.log(newVal);

                    /*第一部分 基本信息 是否显示 下一步按钮*/
                    if (newVal.hyzk) {
                        this.showNextBtn = {
                            basicNext: true,
                            assetsNext: false,
                            creditNext: false,
                        };
                    }

                    /*第二部分 资产信息 是否显示 下一步按钮*/
                    if (newVal.hyzk2) {
                        this.showNextBtn = {
                            basicNext: true,
                            assetsNext: true,
                            creditNext: false,
                        };
                    }

                    /*第三部分 征信信息 是否显示 提交按钮*/
                    if (newVal.hyzk3) {
                        this.showNextBtn = {
                            basicNext: true,
                            assetsNext: true,
                            creditNext: true,
                        };
                    }
                },
                deep: true,  //深度监听，可以监听到对象里面的值的变化
                // immediate: true,   //默认为false，初始化就开始监听
            }
        },

        created() {
            console.log(this.userInfo);
        },
        components:{
            matchGuide,
        }
    }
</script>

<style lang="scss">
    @import "@/assets/css/match.scss";
</style>