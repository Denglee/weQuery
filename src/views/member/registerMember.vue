<template>
	<div style="padding-top: 10px;">
		<div class="register-box">
			<van-form ref="formRegister">
				<van-field name="radio" label="类型" >
					<template #input>
						<van-radio-group v-model="registerForm.memberType" direction="horizontal"
						                 @change="fnChangeMemberType">
							<van-radio name="2">会员</van-radio>
							<van-radio name="1">代理人</van-radio>
						</van-radio-group>
					</template>
				</van-field>
				
				<van-field
					v-model="registerForm.phone"
					name="手机号码"
					label="手机号码"
					placeholder="手机号码"
					type="tel"
					:rules="[
						{ required: true, message: '请填写手机号码' },
						
						{validator: checkPhone,message: '请正确填写手机号码' }]"
				/>
				<van-field
					readonly
					clickable
					name="calendar"
					:value="registerForm.birthday"
					label="生日"
					placeholder="点击选择日期"
					@click="showDayCalendar = true"
					:rules="[{ required: true, message: '请选择日期' }]" />
				<van-popup v-model="showDayCalendar" position="bottom">
					<van-datetime-picker
						v-model="birthdayPicker"
						type="date"
						title="选择年月日"
						:min-date="minDate"
						:max-date="maxDate"
						@confirm="fnConfirmDay"
						@cancel = "showDayCalendar = false"
						/>
				</van-popup>

				<!--<van-calendar v-model="showDayCalendar" @confirm="fnConfirmDay" />-->
				
				<div v-if="registerForm.memberType == 1">
					<van-field name="radio" label="银行方" >
						<template #input>
							<van-radio-group v-model="registerForm.isBank"
							                 direction="horizontal" @change="fnChangeBank">
								<van-radio name="0">不是</van-radio>
								<van-radio name="1">是</van-radio>
							</van-radio-group>
						</template>
					</van-field>
					
					<van-field
						v-model="registerForm.bankName"
						name="银行名称"
						label="银行名称"
						v-if="registerForm.isBank == 1"
						placeholder="银行名称"
						:rules="[{ required: true, message: '请输入银行名称' }]"/>
					
					<van-field
						v-model="registerForm.bankRegion"
						v-if="registerForm.isBank == 1"
						name="银行区域"
						label="银行区域"
						placeholder="银行区域"
						:rules="[{ required: true, message: '请输入银行区域' }]"/>
				
				</div>
				
				<van-button round block type="info" native-type="submit" size = 'small'
				class="btn-register" @click="fnRegisterMember">提交</van-button>
			
			</van-form>
		</div>
	</div>

</template>

<script>
import {
	registerMemberApi,
    getMemberDetailApi,
} from "@/assets/js/api"; /*引用 接口*/
export default {
	name: "registerMember",
	data() {
		return {
			showDayCalendar: false,
			minDate: new Date(1918, 1, 1),
			formatter:"YYYY-MM-DD",
			
			birthdayPicker: new Date(1990, 1, 1),
			maxDate: new Date(),
			registerForm: {
				openid: "",  //openid(用户微信的openid)
				memberType: "",  //（代理人 或者 会员  ）
				phone: "",  //(手机号码)；
				birthday:"" , //(生日)；
		
				proxy: "0" , //代理人
				business_attendant_id:"", //绑定的跑腿服务人员编号），
				isBank: "0" , //银行方
				bankName:"", //（银行名称）
				bankRegion:"",//（银行区域））
			}
		};
	},
	methods: {
        /*获取会员信息*/
        fnGetMemberDetailApi() {
            getMemberDetailApi({ openid: this.registerForm.openid }).then(res => {
                if(res.status == 'success'){
                    console.log(res.data.phone);
                    if(res.data.phone){
                        this.$router.push({
                            path:"/memberInfo",
                            // query:{
                            //     proxyOpenid:  localStorage.getItem('proxyOpenid'),
                            // }
                        })
                    }
                }
            });
        },

		checkPhone(val) {
			return /^1\d{10}$/.test(val) // 返回true或false
		},
		// asyncValidator(val){
		// 	console.log(val);
		// 	if(val){
		// 		return '不能为空'
		// 	}
		// },
		
		
		fnChangeMemberType(val){
		// 	console.log(val);
		// 	this.registerForm.isBank = "0";
		},

		/*银行方选择*/
		fnChangeBank(val){
			console.log(val);
			// if(val  === 1){
				this.registerForm.bankName = '';
				this.registerForm.bankRegion = '';
			// }
		},
		
		/*日期选择*/
		fnConfirmDay(date) {
			console.log(date);
			const day = this.$moment(date).format("yyyy-MM-DD");
			console.log(day);
			this.registerForm.birthday = day;
			this.birthdayPicker = date;
			this.showDayCalendar = false;
		},
		/*注册会员*/
		fnRegisterMember() {
			this.$refs.formRegister.validate().then(()=>{
				// 验证通过

				const filterForm = {...this.registerForm};
				console.log(filterForm);
				if(filterForm.memberType == 2){  /*会员*/
					filterForm.proxy = 0;
				}
				if(filterForm.memberType == 1){  /*dailiren*/
					filterForm.proxy = 1;
				}
				console.log(filterForm);
				// return
				registerMemberApi(this.registerForm).then(res => {
					console.log(res);
					if (res.status === "success") {
						this.$toast(res.data || "注册成功！");
						
						setTimeout(()=>{
							this.$router.push({
								path:"/memberInfo",
								query:{
									proxyOpenid:  localStorage.getItem('proxyOpenid'),
								}
							})
						},1500)
						
					} else {
                        this.$toast(res.data.errMsg || "注册失败！");
                    }
				});
			}).catch(()=>{
				//验证失败
			})
		
		},
		
	},
	created() {
		const ls = new this.GLOBAL.FnStorage();
		const openid = ls.getItem("openid2");
		this.registerForm.openid = openid || "oLbgO1cUc4sK6gFB_r3TzziPRXig";

        this.fnGetMemberDetailApi();
	}
};
</script>
<style lang="scss" scoped>
.register-box {
	width: 92%;
	background-color: #fff;
	border-radius: 4px;
	margin: 4% auto ;
	position: relative;
	-webkit-box-shadow: -1px 2px 8px 0 rgba(12, 22, 36, 0.1);
	box-shadow: -1px 2px 8px 0 rgba(12, 22, 36, 0.1);
	//.vant-
	padding: .1rem 0;
	.radio-member-type {
		//margin-top: .1rem;
		.van-radio{
			margin-top: 6px;
		}
	}
	
	.btn-register{
		width: 60%;
		margin: .1rem auto 0;
        background-color: #ffa300;
        border: solid 1px #ffa300;
	}

}
</style>