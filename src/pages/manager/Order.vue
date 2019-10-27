<template>
    <div class="order">
        这是订单...helloworld
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
        ...mapMutations("order",[]),
        ...mapActions("order",[]),
    },
    created(){
    }
}
</script>
