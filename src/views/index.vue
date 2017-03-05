<template>
    <!--<div>-->
    <!--<nv-head-->
    <!--:fix-head="true"-->
    <!--:need-add="true">-->
    <!--</nv-head>-->
    <!--<nv-menu :show-menu="show"-->
    <!--&gt;</nv-menu>-->

    <div>
        <!--<div class="line"></div>-->
        <el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
        <el-row :gutter="20" class="tac">
            <el-col :span="4">
                <my-nav></my-nav>
            </el-col>
            <el-col :span="20">
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
    <!--<img class="index" src="../assets/images/index.png">-->
    <!--<div style="position: fixed; left: 200px; top: 0; bottom: 0px">-->
    <!--</div>-->
    <!--</div>-->
</template>
<script>
    require('../assets/scss/CV.scss');
    require('../assets/scss/iconfont/iconfont.css');
    require('../assets/scss/github-markdown.css');
    //    import nvHead from '../components/header.vue';
    import nvMenu from '../components/menu.vue';
    import myNav from '../components/myNav.vue';

    export default {
        mounted() {
            console.log('ff');
        },
        data: function () {
            return {
                show: true
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },
//            setTimeout(() => {
//                this.$router.push({
//                    name: 'list'
//                });
//            }, 2000);
//        },
        components: {
            nvMenu,
            myNav
        }
    };
</script>
<style lang="scss">
    .index {
        width: 100%;
        background-color: #fff;
        margin-top: 40%;
    }
</style>
