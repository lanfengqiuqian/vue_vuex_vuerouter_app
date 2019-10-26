<template>
    <div class="order">
        这是订单...
    </div>
</template>
<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
    data(){
        return {
            
        }
    },
    computed:{
        ...mapState("order",[]),
        ...mapGetters("order",[]),
    },
    methods:{
        ...mapMutations("order",["testHandler"]),
        ...mapActions("order",[]),
    },
    created(){
        this.testHandler();
    }
}
</script>
