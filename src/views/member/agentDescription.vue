<template>
    <div class="history-box">
        <div v-if="myAgentDescription">
            {{ myAgentDescription }}
        </div>
        <div v-else class="no-data">暂无代理人说明</div>
    </div>
</template>

<script>
export default {
    name: "myAgentDescription",
    data() {
        return {
            myAgentDescription:{},
        }
    },
    methods: {},
    created() {
        const myAgentDescription =localStorage.getItem("agentDescription");
        console.log(myAgentDescription);
        this.myAgentDescription = myAgentDescription;
    },
}
</script>
