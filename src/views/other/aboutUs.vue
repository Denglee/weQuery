<template>
    <div>
        <h4 class="about-question">xxxx,是一款什么类型平台？</h4>
        <div class="about-answer">xxxx,是深圳市鲸研科技有限公司旗下的一款贷款智能匹配平台。</div>


        <h4 class="about-question">xxxx的产品匹配精准度如何？</h4>
        <div  class="about-answer">xxxx的产品团队、IT团队均来自金融行业领域,行业经验均5年以上,平台与各大银行、消费金融、小额公司等机构有着多年合作经验,使匹配精准度可高达98%。</div>

        <h4 class="about-question">xxxx是如何得到市场的认可?</h4>
        <div  class="about-answer">xxxx平台通过大数据，为用户匹配最合适的贷款产品，产品的利息、还款方式、还款周期、办理流程、所需资料等统统一目了然。
            用户可根据贷款产品的办理教程进行自行办理,而做到无居间/中介、无套路、无高利息。</div>
        <div  class="about-answer">xxxx致力于打造一个有效、全方位、高效率的贷款匹配平台。</div>

    </div>
</template>

<script>
    import {customerVisit} from '@/assets/js/api'   /*引用 首页 接口*/
    export default {
        name: "aboutUs", //关于我们
        data() {
            return {}
        },
        methods: {
            getCustomerVisit(){
                customerVisit().then(res=>{
                    console.log(res);
                }).catch(res=>{
                    console.log(res)
                })
            }
        },
        created() {
            this.getCustomerVisit();
        },
    }
</script>
