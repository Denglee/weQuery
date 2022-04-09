<template>
    <div class="history-box">
        <div v-if="myHistoryOrder">
            {{ myHistoryOrder }}
        </div>
        <div v-else class="no-data">暂无历史订单</div>
    </div>
</template>

<script>
export default {
    name: "myHistoryOrder",
    data() {
        return {
            myHistoryOrder: {},
        }
    },
    methods: {},
    created() {
        const myHistoryOrder = localStorage.getItem('historicalOrder');
        console.log(myHistoryOrder);
        this.myHistoryOrder = myHistoryOrder;
    },
}
</script>