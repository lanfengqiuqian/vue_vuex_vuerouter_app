<template>
    <div class="login">
        这是登陆页面...
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
        ...mapState("login",[]),
        ...mapGetters("login",[]),
    },
    methods:{
        ...mapMutations("login",[]),
        ...mapActions("login",[]),
    },
    created(){
    }
}
</script>
