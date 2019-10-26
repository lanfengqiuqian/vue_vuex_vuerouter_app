<template>
    <div class="user">
        这是用户页面...
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
        ...mapState("user",[]),
        ...mapGetters("user",[]),
    },
    methods:{
        ...mapMutations("user",[]),
        ...mapActions("user",[]),
    },
    created(){
    }
}
</script>
