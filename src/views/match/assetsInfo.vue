<template>
	<div>
		
		<!--{id: 1, name: '信用贷款', type: 'tabCredit'},
		{id: 2, name: '房抵贷款', type: 'tabHouse'},
		{id: 3, name: '车抵贷款', type: 'tabCar'},-->
		
		<!--信用贷款-->
		<ul v-show="this.tabBasicIndex == 1 ">
			<!--信用房产 -->
			<li class="info-item">
				<h4 class="info-title">房产信息</h4>
				<van-radio-group v-model="userChecked2.fcxx" class="info-box">
					<van-radio :name="item.name" v-for="(item,index) in userInfo.fcxx" :key="item.id">
						<template #icon="props">
							<div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{ item.value }}</div>
						</template>
					</van-radio>
				</van-radio-group>
			</li>
			
			<li class="info-item" v-show="userChecked2.fcxx != 3 && userChecked2.fcxx != -1">
				<h4 class="info-title">房产类型</h4>
				<van-radio-group v-model="userChecked.fclx" class="info-box">
					<van-radio :name="item.name" v-for="(item,index) in userInfo.fclx" :key="item.id">
						<template #icon="props">
							<div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{ item.value }}</div>
						</template>
					</van-radio>
				</van-radio-group>
			</li>
			
			<li class="info-item" v-show="userChecked.fclx != -1">
				<h4 class="info-title">房产状态</h4>
				<van-radio-group v-model="userChecked2.fczt" class="info-box">
					<van-radio :name="item.name" v-for="(item,index) in userInfo.fczt" :key="item.id">
						<template #icon="props">
							<div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{ item.value }}</div>
						</template>
					</van-radio>
				</van-radio-group>
			</li>
			<li class="info-item" v-show="userChecked2.fczt == 1">
				<h4 class="info-title">月供时间</h4>
				<van-radio-group v-model="userChecked.ajz" class="info-box">
					<van-radio :name="item.name" v-for="(item,index) in userInfo.ajz" :key="item.id">
						<template #icon="props">
							<div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{ item.value }}</div>
						</template>
					</van-radio>
				</van-radio-group>
			</li>
			<li class="info-item" v-show="userChecked2.fczt == 2">
				<h4 class="info-title">按揭结清时间</h4>
				<van-radio-group v-model="userChecked.ajjq" class="info-box">
					<van-radio :name="item.name" v-for="(item,index) in userInfo.ajjq" :key="item.id">
						<template #icon="props">
							<div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{ item.value }}</div>
						</template>
					</van-radio>
				</van-radio-group>
			</li>
			<li class="info-item" v-show="userChecked2.fczt == 3">
				<h4 class="info-title">过户时间</h4>
				<van-radio-group v-model="userChecked.qkf" class="info-box">
					<van-radio :name="item.name" v-for="(item,index) in userInfo.qkf" :key="item.id">
						<template #icon="props">
							<div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{ item.value }}</div>
						</template>
					</van-radio>
				</van-radio-group>
			</li>
			
			<!--信用  车辆-->
			<!--<li class="info-item">-->
			<!--	<h4 class="info-title">车辆状态</h4>-->
			<!--	<van-radio-group v-model="userChecked2.clzt2" class="info-box">-->
			<!--		<van-radio :name="item.name" v-for="(item,index) in userInfo.clzt2" :key="item.id">-->
			<!--			<template #icon="props">-->
			<!--				<div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{ item.value }}</div>-->
			<!--			</template>-->
			<!--		</van-radio>-->
			<!--	</van-radio-group>-->
			<!--</li>-->
			<li class="info-item" v-show="userChecked2.clzt2 == 1">
				<h4 class="info-title">车辆按揭时间</h4>
				<van-radio-group v-model="userChecked.ajc" class="info-box">
					<van-radio :name="item.name" v-for="(item,index) in userInfo.ajc" :key="item.id">
						<template #icon="props">
							<div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{ item.value }}</div>
						</template>
					</van-radio>
				</van-radio-group>
			</li>
			<li class="info-item" v-show="userChecked2.clzt2 == 2">
				<h4 class="info-title">按揭结清或过户时间</h4>
				<van-radio-group v-model="userChecked.qkc" class="info-box">
					<van-radio :name="item.name" v-for="(item,index) in userInfo.qkc" :key="item.id">
						<template #icon="props">
							<div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{ item.value }}</div>
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
							<div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{ item.value }}</div>
						</template>
					</van-radio>
				</van-radio-group>
			</li>
			<li class="info-item" v-show="userChecked2.bxbd ==1">
				<h4 class="info-title">保险机构</h4>
				<van-radio-group v-model="userChecked.bxlx" class="info-box">
					<van-radio :name="item.name" v-for="(item,index) in userInfo.bxlx" :key="item.id">
						<template #icon="props">
							<div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{ item.value }}</div>
						</template>
					</van-radio>
				</van-radio-group>
			</li>
			<li class="info-item" v-show="userChecked.bxlx != -1">
				<h4 class="info-title">保险缴纳方式</h4>
				<van-radio-group v-model="userChecked.bxjnfs" class="info-box">
					<van-radio :name="item.name" v-for="(item,index) in userInfo.bxjnfs" :key="item.id">
						<template #icon="props">
							<div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{ item.value }}</div>
						</template>
					</van-radio>
				</van-radio-group>
			</li>
			<li class="info-item" v-show="userChecked.bxjnfs != -1">
				<h4 class="info-title">保险缴费时间</h4>
				<van-radio-group v-model="userChecked.bxjfsj" class="info-box">
					<van-radio :name="item.name" v-for="(item,index) in userInfo.bxjfsj" :key="item.id">
						<template #icon="props">
							<div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{ item.value }}</div>
						</template>
					</van-radio>
				</van-radio-group>
			</li>
		</ul>
		
		<!--房抵贷款-->
		<ul v-show="this.tabBasicIndex == 2 ">
			<li class="info-item">
				<h4 class="info-title">房产信息</h4>
				<van-radio-group v-model="userChecked2.fcxx" class="info-box">
					<van-radio :name="item.name" v-for="(item,index) in userInfo.fcxx" :key="item.id">
						<template #icon="props">
							<div v-if="item.name == 3"></div>
							<div v-else class="infoRadio" :class="props.checked ? activeRadio : ' ' "
							>{{ item.value }}
							</div>
						</template>
					</van-radio>
				</van-radio-group>
			</li>
			
			<li class="info-item" v-show="userChecked2.fcxx != 3 && userChecked2.fcxx != -1">
				<h4 class="info-title">房产类型</h4>
				<van-radio-group v-model="userChecked.fclx" class="info-box">
					<van-radio :name="item.name" v-for="(item,index) in userInfo.fclx" :key="item.id">
						<template #icon="props">
							<div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{ item.value }}</div>
						</template>
					</van-radio>
				</van-radio-group>
			</li>
			
			<li class="info-item" v-show="userChecked.fclx != -1">
				<h4 class="info-title">房龄</h4>
				<div class="flex-between info-age">
					<div class="match-age">{{ userChecked.fl }}</div>
					<div class="match-ageSlider">
						<van-slider v-model="userChecked.fl" @change="changeFl" min="0" max="70" />
					</div>
				</div>
			</li>
			
            <!--<li class="info-item" v-show="userChecked.fclx != -1">-->
            <!--    <h4 class="info-title">深圳住宅抵押成数</h4>-->
            <!--    <van-radio-group v-model="userChecked.zzdycs" class="info-box">-->
            <!--        <van-radio :name="item.name" v-for="(item,index) in userInfo.zzdycs" :key="item.id">-->
            <!--            <template #icon="props">-->
            <!--                <div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{ item.value }}</div>-->
            <!--            </template>-->
            <!--        </van-radio>-->
            <!--    </van-radio-group>-->
            <!--</li>-->
				
			<li class="info-item">
				<h4 class="info-title">房产状态</h4>
				<van-radio-group v-model="userChecked2.fczt" class="info-box">
					<van-radio :name="item.name" v-for="(item,index) in userInfo.fczt" :key="item.id">
						<template #icon="props">
							<div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{ item.value }}</div>
						</template>
					</van-radio>
				</van-radio-group>
			</li>
			<li class="info-item" v-show="userChecked2.fczt == 1">
				<h4 class="info-title">月供时间</h4>
				<van-radio-group v-model="userChecked.ajz" class="info-box">
					<van-radio :name="item.name" v-for="(item,index) in userInfo.ajz" :key="item.id">
						<template #icon="props">
							<div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{ item.value }}</div>
						</template>
					</van-radio>
				</van-radio-group>
			</li>
			<li class="info-item" v-show="userChecked2.fczt == 2">
				<h4 class="info-title">按揭结清时间</h4>
				<van-radio-group v-model="userChecked.ajjq" class="info-box">
					<van-radio :name="item.name" v-for="(item,index) in userInfo.ajjq" :key="item.id">
						<template #icon="props">
							<div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{ item.value }}</div>
						</template>
					</van-radio>
				</van-radio-group>
			</li>
			<li class="info-item" v-show="userChecked2.fczt == 3">
				<h4 class="info-title">过户时间</h4>
				<van-radio-group v-model="userChecked.qkf" class="info-box">
					<van-radio :name="item.name" v-for="(item,index) in userInfo.qkf" :key="item.id">
						<template #icon="props">
							<div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{ item.value }}</div>
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
							<div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{ item.value }}</div>
						</template>
					</van-radio>
				</van-radio-group>
			</li>
			<li class="info-item">
				<h4 class="info-title">车辆归属地</h4>
				<van-radio-group v-model="userChecked2.clgsdq" class="info-box">
					<van-radio :name="item.name" v-for="(item,index) in userInfo.clgsdq" :key="item.id">
						<template #icon="props">
							<div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{ item.value }}</div>
						</template>
					</van-radio>
				</van-radio-group>
			</li>
			<li class="info-item" v-show="userChecked2.clgsdq == 1">
				<h4 class="info-title">车牌归属城市</h4>
				<van-radio-group v-model="userChecked.clgsd" class="info-box">
					<van-radio :name="item.name" v-for="(item,index) in userInfo.clgsd" :key="item.id">
						<template #icon="props">
							<div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{ item.value }}</div>
						</template>
					</van-radio>
				</van-radio-group>
			</li>
			<li class="info-item">
				<h4 class="info-title">车辆性质</h4>
				<van-radio-group v-model="userChecked.clxz" class="info-box">
					<van-radio :name="item.name" v-for="(item,index) in userInfo.clxz" :key="item.id">
						<template #icon="props">
							<div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{ item.value }}</div>
						</template>
					</van-radio>
				</van-radio-group>
			</li>
			
			<li class="info-item">
				<h4 class="info-title">车辆状态</h4>
				<van-radio-group v-model="userChecked.clzt" class="info-box">
					<van-radio :name="item.name" v-for="(item,index) in userInfo.clzt" :key="item.id">
						<template #icon="props">
							<div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{ item.value }}</div>
						</template>
					</van-radio>
				</van-radio-group>
			</li>
			<li class="info-item" v-show="userChecked.clzt  == 1">
				<h4 class="info-title">车辆按揭时间</h4>
				<van-radio-group v-model="userChecked.ajc" class="info-box">
					<van-radio :name="item.name" v-for="(item,index) in userInfo.ajc" :key="item.id">
						<template #icon="props">
							<div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{ item.value }}</div>
						</template>
					</van-radio>
				</van-radio-group>
			</li>
			<li class="info-item" v-show="userChecked.clzt  == 2">
				<h4 class="info-title">按揭结清或过户时间</h4>
				<van-radio-group v-model="userChecked.qkc" class="info-box">
					<van-radio :name="item.name" v-for="(item,index) in userInfo.qkc" :key="item.id">
						<template #icon="props">
							<div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{ item.value }}</div>
						</template>
					</van-radio>
				</van-radio-group>
			</li>
			<li class="info-item">
				<h4 class="info-title">车辆持证时间</h4>
				<van-radio-group v-model="userChecked.clczsj" class="info-box">
					<van-radio :name="item.name" v-for="(item,index) in userInfo.clczsj" :key="item.id">
						<template #icon="props">
							<div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{ item.value }}</div>
						</template>
					</van-radio>
				</van-radio-group>
			</li>
			<li class="info-item">
				<h4 class="info-title">车龄</h4>
				<van-radio-group v-model="userChecked.cl" class="info-box">
					<van-radio :name="item.name" v-for="(item,index) in userInfo.cl" :key="item.id">
						<template #icon="props">
							<div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{ item.value }}</div>
						</template>
					</van-radio>
				</van-radio-group>
			</li>
			<li class="info-item">
				<h4 class="info-title">行驶公里数</h4>
				<van-radio-group v-model="userChecked.xsgls" class="info-box">
					<van-radio :name="item.name" v-for="(item,index) in userInfo.xsgls" :key="item.id">
						<template #icon="props">
							<div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{ item.value }}</div>
						</template>
					</van-radio>
				</van-radio-group>
			</li>
			<li class="info-item">
				<h4 class="info-title">交强险剩余有效期</h4>
				<van-radio-group v-model="userChecked.jqxsyyxq" class="info-box">
					<van-radio :name="item.name" v-for="(item,index) in userInfo.jqxsyyxq" :key="item.id">
						<template #icon="props">
							<div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{ item.value }}</div>
						</template>
					</van-radio>
				</van-radio-group>
			</li>
			<li class="info-item">
				<h4 class="info-title">商业险剩余有效期</h4>
				<van-radio-group v-model="userChecked.syxsyyxq" class="info-box">
					<van-radio :name="item.name" v-for="(item,index) in userInfo.syxsyyxq" :key="item.id">
						<template #icon="props">
							<div class="infoRadio" :class="props.checked ? activeRadio : ' ' ">{{ item.value }}</div>
						</template>
					</van-radio>
				</van-radio-group>
			</li>
		</ul>
		
		<van-button class="btn-next" @click="sendFa('creditInfo')">下一步</van-button>
	
	</div>
</template>

<script>
import { userInfo } from "@/assets/js/userInfo"; /*引用 用户信息 */
export default {
	name: "assetsInfo",
	props: {
		userChecked: {
			type: Object
		},
		userChecked2: {
			type: Object
		},
		tabBasicIndex: {
			type: Number
		}
	},
	data() {
		return {
			activeRadio: "activeRadio",  //选中的radio样式
			userInfo: userInfo
		};
	},
	methods: {
		sendFa(type) {
			this.$emit("faMethods", this.userChecked, type);
		},
		
		changeAge() {
		
		},
		
		changeFl() {
		
		}
	},
	
	watch: {
		
		userChecked2: {
			handler(newVal, oldVal) {
				console.log(newVal);
				let tabBasicIndex = this.tabBasicIndex;
				
				/*信用贷款*/
				if (tabBasicIndex == 1) {
					/*房产信息判断*/
					if (newVal.fcxx == 3) {
						this.userChecked2.fczt = -1;
						this.userChecked.fclx = -1;
						this.userChecked.ajz = -1;
						this.userChecked.ajjq = -1;
						this.userChecked.qkf = -1;
						this.userChecked.fl = -1;
						this.userChecked.zzdycs = -1;
					}
					
					/*车辆状态判断*/
					if (newVal.clzt2 != 1) {
						this.userChecked.ajc = -1;
					}
					if (newVal.clzt2 != 2) {
						this.userChecked.qkc = -1;
					}
					if (newVal.clzt2 != 3) {
						this.userChecked.qkc = -1;
					}
					
					/*保险保单*/
					if (newVal.bxbd == 2) {
						this.userChecked.bxlx = -1;
						this.userChecked.bxjnfs = -1;
						this.userChecked.bxjfsj = -1;
					}
				}
				
				/*信用贷款  + 房抵贷款*/
				if (tabBasicIndex != 3) {
					/*房产状态*/
					if (newVal.fczt2 != 1) {
						this.userChecked.ajz = -1;
					}
					if (newVal.fczt2 != 2) {
						this.userChecked.ajjq = -1;
					}
					if (newVal.fczt2 != 3) {
						this.userChecked.qkf = -1;
					}
					
				}
				
				/*车抵贷款*/
				if (tabBasicIndex == 3) {
					if (newVal.clgsdq == 2) {
						this.userChecked.clgsd = -1;
					}
				}
				
				
			},
			deep: true  //深度监听，可以监听到对象里面的值的变化
			// immediate: true,   //默认为false，初始化就开始监听
		},
		userChecked: {
			handler(newVal, oldVal) {
				console.log(newVal);
				let tabBasicIndex = this.tabBasicIndex;
				if (tabBasicIndex == 3) {
					/*车辆按揭时间*/
					if (newVal.clzt != 1) {
						this.userChecked.ajc = -1;
					}
					if (newVal.clzt != 2) {
						this.userChecked.qkc = -1;
					}
				}
			},
			deep: true  //深度监听，可以监听到对象里面的值的变化
			// immediate: true,   //默认为false，初始化就开始监听
		}
	},
	
	created() {
	
	}
};
</script>

