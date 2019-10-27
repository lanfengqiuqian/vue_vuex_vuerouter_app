<template>
    <div class="home">
        <van-row>
            <van-nav-bar title="首页" size="2rem">
                <van-icon name="home-o" size="1.5em" slot="left" />
            </van-nav-bar>
        </van-row>
        <van-row>
            <img src="../../assets/images/home_02.png" width="100%" alt="">
        </van-row>
        <van-row>
            <van-grid icon-size="5rem" :column-num="3">
            <van-grid-item
                v-for="c in categories"
                :key="c.id"
                :icon="c.icon"
                :text="c.name"
            />
            </van-grid>
        </van-row>
    </div>
</template>
<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
    data(){
        return {
            icon:"",
        }
    },
    computed:{
        ...mapState("home",["categories"]),
        ...mapGetters("home",[]),
    },
    methods:{
        ...mapMutations("home",[]),
        ...mapActions("home",["findAllCategories"]),
        findAllCategory(){
            this.findAllCategories();
        }
    },
    created(){
        this.findAllCategory();
    }
}
</script>
<style scoped>
    .home{
        margin:2rem;
    }
</style>