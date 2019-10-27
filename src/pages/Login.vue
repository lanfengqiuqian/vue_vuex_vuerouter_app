<template>
    <div class="login">
        <div class="box">
            <form class="content">
                <van-row class="username">
                    <van-cell-group>
                    <van-field v-model="information.username" 
                    left-icon="manager-o"
                    placeholder="请输入用户名" />
                    </van-cell-group>
                </van-row>
                <van-row class="password">
                    <van-cell-group>
                    <van-field v-model="information.password"
                    left-icon="closed-eye"
                    type="password" placeholder="请输入密码"/>
                    </van-cell-group>
                </van-row>
                <van-row>
                    <van-button class="submit" type="primary" size="large" @click.prevent="submitHandler">登陆</van-button>
                </van-row>
                <van-row>
                    <van-button type="primary" size="large" @click.prevent="register">快速注册</van-button>
                </van-row>
            </form>
        </div>
        <!-- 模态框 -->
        <van-dialog
        v-model="show"
        title="快速注册"
        show-cancel-button
        @confirm="success"
        >
            <van-row class="username">
                <van-cell-group>
                <van-field v-model="information.username" 
                left-icon="manager-o"
                placeholder="请输入用户名" />
                </van-cell-group>
            </van-row>
            <van-row class="password">
                <van-cell-group>
                <van-field v-model="information.password"
                left-icon="closed-eye"
                type="password" placeholder="请输入密码"/>
                </van-cell-group>
            </van-row>
        </van-dialog>
        <!-- /模态框 -->
    </div>
</template>
<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
import Vue from 'vue';
import { Dialog } from 'vant';
import { Notify } from 'vant';

Vue.use(Notify);

export default {
    data(){
        return {
            show:false
        }
    },
     components: {
        [Dialog.Component.name]: Dialog.Component
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
            this.$router.push({path:'/home'});
        },
        //快速注册
        register(){
            this.show = true;
        },
        //注册成功
        success(){
            Notify({ type: 'success', message: '恭喜你注册成功,快去登陆吧!' });
            this.show = false;
        },
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
    border-radius: 8px;
}
.password{
    margin-bottom: 3rem;
}
.username,.submit{
    margin-bottom: 1rem;
}
</style>