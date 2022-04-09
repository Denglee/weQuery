<template>
    <div>

    </div>
</template>

<script>
import {getAttendantDetailApi} from "../../assets/js/api";

export default {
    name: "myAttendant",
    data() {
        return {
            businessAttendantId: '',
        }
    },
    methods: {
        /*获取专员信息*/
        fnGetAttendant(){
            getAttendantDetailApi({
                id: this.businessAttendantId,
            }).then(res => {
                console.log(res)
            })
        },

    },
    created() {
        const businessAttendantId = this.$route.query.businessAttendantId;
        console.log(businessAttendantId);
        this.businessAttendantId = businessAttendantId || 10;
        this.fnGetAttendant();
    },
}
</script>
