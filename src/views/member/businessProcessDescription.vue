<template>
    <div class="img-box">
        <!--<div v-if="myBusinessProcess">-->
        <!--    {{ myBusinessProcess }}-->
        <!--</div>-->
        <!--<div v-else class="no-data">暂无业务流程说明</div>-->
	    
	    <!--<van-image-->
		 <!--   src="@/assets/img/img_diyay8.png"-->
	    <!--/>-->
	    
	    <van-image
		    :src="imgUrl1"
		    class="img-diya"
	    />
	    
	    <van-image
		    :src="imgUrl2"
		    class="img-diya"
	    />
	    
    </div>
</template>
<script>

export default {
    name: "myBusinessProcess",
    data() {
        return {
            myBusinessProcess:{},
	        imgUrl1:require("../../assets/img/img_diya8.png"),
	        imgUrl2:require("../../assets/img/img_diya10.png"),
        }
    },
    methods: {},
    created() {
        const myBusinessProcess = localStorage.getItem("businessProcessDescription");
        console.log(myBusinessProcess);
        this.myBusinessProcess = myBusinessProcess;
    },
}
</script>
<style lang="scss" scoped>
.img-box{
	padding-top: 20px;
}
.img-diya{
	width: 92%;
	display: block;
	margin: 0 auto 20px;
	/deep/ .van-image__img{
		border-radius: 4px;
	}

}
</style>