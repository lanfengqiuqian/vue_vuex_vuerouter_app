<template>
    <div class="login">
        <div class="box">
            <form class="content">
                <van-row class="username">
                    <van-cell-group>
                    <van-field v-model="information.username" placeholder="请输入用户名" />
                    </van-cell-group>
                </van-row>
                <van-row class="password">
                    <van-cell-group>
                    <van-field v-model="information.password" type="password" placeholder="请输入密码"/>
                    </van-cell-group>
                </van-row>
                <van-row>
                    <van-button type="primary" size="large" @click.prevent="submitHandler">登陆</van-button>
                </van-row>
            </form>
        </div>
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
        ...mapState("login",["information"]),
        ...mapGetters("login",[]),
    },
    methods:{
        ...mapMutations("login",[]),
        ...mapActions("login",["loginHandler"]),
        //提交表单事件
        submitHandler(){
            this.loginHandler(this.information);
        }
    },
    created(){
    }
}
</script>
<style>
.box{
    position: absolute;
    top:0;left:0;bottom:0;right:0;
    background-image: url('../assets/login.jpg');
    background-size: cover;
}
.content{
    position:absolute;
    top:30%;
    left:10%;
    right: 10%;
    /* bottom:30%; */
    background:rgba(252, 247, 247, 0.3);
    padding:2rem;
}
.username,.password{
    margin-bottom: 1rem;
}
</style>