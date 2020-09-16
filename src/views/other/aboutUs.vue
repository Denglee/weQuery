<template>
    <div style="padding-top: .1rem;">
<!--        <h4 class="about-question">xxxx,是一款什么类型平台？</h4>-->
<!--        <div class="about-answer">xxxx,是深圳市鲸研科技有限公司旗下的一款贷款智能匹配平台。</div>-->


<!--        <h4 class="about-question">xxxx的产品匹配精准度如何？</h4>-->
<!--        <div  class="about-answer">xxxx的产品团队、IT团队均来自金融行业领域,行业经验均5年以上,平台与各大银行、消费金融、小额公司等机构有着多年合作经验,使匹配精准度可高达98%。</div>-->

<!--        <h4 class="about-question">xxxx是如何得到市场的认可?</h4>-->
<!--        <div  class="about-answer">xxxx平台通过大数据，为用户匹配最合适的贷款产品，产品的利息、还款方式、还款周期、办理流程、所需资料等统统一目了然。-->
<!--            用户可根据贷款产品的办理教程进行自行办理,而做到无居间/中介、无套路、无高利息。</div>-->
<!--        <div  class="about-answer">xxxx致力于打造一个有效、全方位、高效率的贷款匹配平台。</div>-->
        


        <div class="about-ul">
            <h4>节融，是一款什么类型平台？</h4>
            <div>节融,是锦桥科技（深圳）有限公司旗下的一款融资匹配算法平台，为企业打造一个节约时间；节约精力；节约成本的融资匹配算法，拉近企业与银行等资方的距离，致力于解决融资企业难的问题的信息平台。</div>
             
            <h4>节融的融资匹配算法如何？</h4>
            <div>节融的产品团队、IT团队均来自金融行业领域,与各大银行、消费金融、小额公司等机构有着多年合作经验,使匹配精准度可高达98%。</div>
            <h4>节融是如何得到市场的认可?</h4>
            <div>节融算法通过大数据，为用户推荐最合适的贷款产品，并且让产品的利息、还款方式、还款周期、办理流程、所需资料等统统一目了然。用户可根据贷款产品的办理教程进行自行办理,而做到无居间/中介、无套路、无高利息。</div>
             
            <h4>打造顶级融资算法，助力企业解决融资难题。</h4>
        </div>

        <div class="mycode">
            <img :src="imgCode" alt="">
            <a href="tel:15014031191" class="btn-tel">
                <van-icon name="phone-o" class="icon-tel"/>：15014031191
            </a>

        </div>

    </div>
</template>

<script>
    import {customerVisit} from '@/assets/js/api'   /*引用 首页 接口*/
    export default {
        name: "aboutUs", //关于我们
        data() {
            return {
                imgCode:require('@/assets/img/myCode.png'),
            }
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
<style lang="scss">
    .icon-tel{
        font-size: 20px!important;
        vertical-align: middle;
    }
    .mycode {
        padding-top: .4rem;
        text-align: center;
        img{
            width: 40%;
            margin: .1rem auto 0;
        }
    }
    .about-ul{
        padding:0 .2rem .2rem;
        background: #fff;
        width: 94%;
        margin: 0 auto;
        border-radius: 6px;
        h4{
            padding-top: .2rem;
        }
        div {
            font-size: 12px;
            margin-top: 2px;
            /*text-indent: .2rem;*/
        };
    }

    .btn-tel{
        display: block;
        width: 100%;
        position: fixed;
        background: #ffa300;
        padding: 7px 0;
        color: #fff;
        /* left: 4%; */
        bottom: 0;
        font-size: 20px;
    }
</style>