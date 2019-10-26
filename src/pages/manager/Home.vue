<template>
    <div class="login">
        这是首页...
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
        ...mapState("home",[]),
        ...mapGetters("home",[]),
    },
    methods:{
        ...mapMutations("home",["testHandler"]),
        ...mapActions("home",[]),
    },
    created(){
        this.testHandler("this is a test");
    }
}
</script>
