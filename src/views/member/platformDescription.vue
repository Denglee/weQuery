<template>
	<div class="note-box">
		<!--平台说明-->
		<h4 class="note-title">节融平台申明</h4>
		<div class="note-item">* 节融平台内银行信息来源于合作银行渠道，如有信息偏差或侵权行为。请联系平台方及时更正。</div>
		<div  class="note-item">* 节融作为软件平台方不收取平台用户任何费用。线下服务由合作融资专家提供，融资专家允许收取相对应服务费，若涉及纠纷请投诉平台方。</div>
		<div class="note-tel">平台方投诉电话15014031191</div>
	</div>
</template>

<script>
export default {
	name: "platformDescription",
	data() {
		return {};
	},
	methods: {},
	created() {
	
	}
};
</script>
<style lang="scss" scoped>
.note-box{
	padding: 20px;
	//font-size: 12px;
}
.note-title{
	text-align: center;
	font-size: 16px;
}
.note-item{
	margin-top: 10px;
}
.note-tel{
	text-align: center;
	margin-top: 10px;
}
</style>