<template>
    <div class="history-box">
        <div v-if="myOrderObj">
            {{ myOrderObj }}
        </div>
        <div v-else class="no-data">暂无订单</div>
    </div>
</template>

<script>
export default {
    name: "myHistoryOrder",
    data() {
        return {
            myOrderObj:{},
        }
    },
    methods: {},
    created() {
        const myOrder = localStorage.getItem('myOrder');
        console.log(myOrder);
        this.myOrderObj = myOrder;
    },
}
</script>
