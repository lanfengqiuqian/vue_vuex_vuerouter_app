<template>
    <div class="user">
        <!-- 用户信息部分 -->
        <van-row>
            <van-nav-bar title="用户信息" size="2rem">
                <van-icon @click="editHandler" name="edit" size="1.5em" slot="right" />
            </van-nav-bar>
        </van-row>
        <van-row>
            <van-col :span="6" :offset="9" class="head_img">
                <van-image
                round
                width="5rem"
                height="5rem"
                :src="usersInfo.avatar"
                />
            </van-col>
        </van-row>
        <van-row>
            <van-col class="username" :span="6" :offset="9">{{usersInfo.name}}</van-col>
        </van-row>
        <van-row>
            <van-cell title="用户权限" icon="manager-o" :value="usersInfo.introduction" />
        </van-row>
        <van-row>
            <van-cell title="姓名" icon="friends-o" :value="myInfo.name" />
        </van-row>
        <van-row>
            <van-cell title="性别" icon="star-o" :value="myInfo.gender" />
        </van-row>
        <van-row>
            <van-cell title="地址" icon="location-o" :value="myInfo.address" />
        </van-row>
        <van-row>
            <van-button plain type="danger" size="large" @click="logout">退出登陆</van-button>
        </van-row>
        <!-- /用户信息部分 -->
        <!-- 模态框部分 -->
        <van-dialog
            v-model="show"
            title="修改用户信息"
            show-cancel-button>
            <van-cell-group>
                <van-field v-model="myInfo.name" placeholder="请输入姓名" label="姓名" />
            </van-cell-group>
            <!-- 修改头像 -->
            <van-cell-group>
                <van-field v-model="myInfo.gender" placeholder="请输入性别" label="性别" />
            </van-cell-group>
            <van-cell-group>
                <van-field v-model="myInfo.address" placeholder="请输入地址" label="地址" />
            </van-cell-group>
            <!-- /修改头像 -->
        </van-dialog>
        <!-- /模态框部分 -->
    </div>
</template>
<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
import Vue from 'vue';
import {Dialog} from 'vant'
export default {
    data(){
        return {
            usersInfo:{},
            myInfo:{
                name:"terry",
                gender:"男",
                address:"江西省南昌市"
            },
            show:false,
        }
    },
    //注册对话框组件
    components: {
        [Dialog.Component.name]: Dialog.Component
    },
    computed:{
        //从登陆的状态机中获取用户登陆令牌
        ...mapState("login",["information"]),
        ...mapState("user",[""]),
        ...mapGetters("user",[]),
    },
    methods:{
        ...mapMutations("user",[]),
        ...mapActions("user",["getInfo","logoutHandler"]),
        //普通方法
        logout(){
            //弹出模态框询问
            Dialog.confirm({
                message: '确认退出?'
            }).then(() => {
                // 调用退出方法
                this.logoutHandler()
                .then((response)=>{
                    this.$router.push({path:"/login"})
                })
            }).catch(() => {
                // on cancel
            });
        },
        //修改用户信息
        editHandler(){
            //调出模态框
            this.show = true;
        },
    },
    created(){
        //根据令牌获取基本信息
        this.getInfo(this.information.token)
        .then((response)=>{
            this.usersInfo = response.data;
        })
    }
}
</script>
<style scoped>
.user{
    margin:2rem;
}
.head_img{
    margin-top: .5rem;
}
.username{
    text-align: center
}
</style>
