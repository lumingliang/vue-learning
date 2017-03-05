<template>
    <!--<div>-->
    <!--<section class="page-body">-->
    <!--<div class="label">-->
    <!--<input class="txt" type="text" placeholder="Access Token"  maxlength="36">-->
    <!--</div>-->
    <!--<div class="label">-->
    <!--<a class="button">登录</a>-->
    <!--</div>-->
    <!--<mdl-checkbox :checked.sync="checked">Checkbox</mdl-checkbox>-->
    <!--<mdl-button>Button</mdl-button>-->
    <!--<mdl-dialog ref="infoMessage" title="Hi there">-->
    <!--<p>Hello. This is an information message. You can click outside or in the close button to close it.</p>-->
    <!--</mdl-dialog>-->
    <!--</section>-->
    <!--</div>-->
    <div class="panel">
        <el-card class="box-card">
            <rd-button :loading="true">保存</rd-button>
            <rd-datepicker :date="datePicker"></rd-datepicker>
            <rd-checkbox :checkbox="checkbox"></rd-checkbox>
            <el-button @click="visible = true">按钮</el-button>
            <el-dialog v-model="visible" title="Hello world">
                <p>欢迎使用 Element</p>
            </el-dialog>
        </el-card>
        <!--<el-row>-->
            <!--<el-col :span="24">-->
                <!--<div class="grid-content bg-purple-dark"></div>-->
            <!--</el-col>-->
        <!--</el-row>-->
        <!--<el-row>-->
            <!--<el-col :span="12">-->
                <!--<div class="grid-content bg-purple"></div>-->
            <!--</el-col>-->
            <!--<el-col :span="12">-->
                <!--<div class="grid-content bg-purple-light"></div>-->
            <!--</el-col>-->
        <!--</el-row>-->
        <!--<el-row>-->
            <!--<el-col :span="8">-->
                <!--<div class="grid-content bg-purple"></div>-->
            <!--</el-col>-->
            <!--<el-col :span="8">-->
                <!--<div class="grid-content bg-purple-light"></div>-->
            <!--</el-col>-->
            <!--<el-col :span="8">-->
                <!--<div class="grid-content bg-purple"></div>-->
            <!--</el-col>-->
        <!--</el-row>-->
        <!--<el-row>-->
            <!--<el-col :span="6">-->
                <!--<div class="grid-content bg-purple"></div>-->
            <!--</el-col>-->
            <!--<el-col :span="6">-->
                <!--<div class="grid-content bg-purple-light"></div>-->
            <!--</el-col>-->
            <!--<el-col :span="6">-->
                <!--<div class="grid-content bg-purple"></div>-->
            <!--</el-col>-->
            <!--<el-col :span="6">-->
                <!--<div class="grid-content bg-purple-light"></div>-->
            <!--</el-col>-->
        <!--</el-row>-->
        <!--<el-row>-->
            <!--<el-col :span="4">-->
                <!--<div class="grid-content bg-purple"></div>-->
            <!--</el-col>-->
            <!--<el-col :span="4">-->
                <!--<div class="grid-content bg-purple-light"></div>-->
            <!--</el-col>-->
            <!--<el-col :span="4">-->
                <!--<div class="grid-content bg-purple"></div>-->
            <!--</el-col>-->
            <!--<el-col :span="4">-->
                <!--<div class="grid-content bg-purple-light"></div>-->
            <!--</el-col>-->
            <!--<el-col :span="4">-->
                <!--<div class="grid-content bg-purple"></div>-->
            <!--</el-col>-->
            <!--<el-col :span="4">-->
                <!--<div class="grid-content bg-purple-light"></div>-->
            <!--</el-col>-->
        <!--</el-row>-->
        <!--<el-button>默认按钮</el-button>-->
        <!--<el-button type="primary">主要按钮</el-button>-->
        <!--<el-button type="text">文字按钮</el-button>-->
        <!--<el-checkbox v-model="checked" checked>备选项</el-checkbox>-->


        <!--<mdl-button id="menu-example" icon>-->
        <!--<i class="material-icons">more_vert</i>-->
        <!--</mdl-button>-->
        <!--<mdl-checkbox :checked.sync="checked">Checkbox</mdl-checkbox>-->
        <!--<mdl-menu for="menu-example">-->
        <!--<mdl-menu-item>Option 1</mdl-menu-item>-->
        <!--<mdl-menu-item disabled="disabled">Disabled Action</mdl-menu-item>-->
        <!--<mdl-menu-item>Other Action</mdl-menu-item>-->
        <!--</mdl-menu>-->
    </div>
</template>

<script>
    //    import {MdlCheckbox, MdlButton} from 'vue-mdl';
    import {rdDatepicker, rdButton, rdCheckbox} from 'radon-ui';

    export default {
//        data: {
//            checked: false
//        },
//        data() {
//            return {
//                checked: true
//            };
//        },
        data () {
            return {
                datePicker: {
                    value: '',
                    options: {
                        quickClose: true,
                        format: 'YYYY/MM/DD'
                    }
                },
                checkbox: {
                    checked: false,
                    text: '我已阅读用户协议'
                },
                checked: true,
                visible: false
            };
        },
        components: {
            rdDatepicker,
            rdButton,
            rdCheckbox
        },
        mounted() {
            this.$Notification.success('编辑成功', '', 5000);
            this.$Loading.start();
//            this.$Modal.create(
//                '这里是标题',
//                '这里应该说点什么',
//                () => {
//                    console.log('cancel');
//                    // confirm callback
//                },
//                () => {
//                    console.log('cancel');
//                    // cancel callback
//                }
//            );
//            this.$refs.infoMessage.open();
//            this.$refs.infoMessage.close();
        }
//        components: {
//            MdlCheckbox,
//            MdlButton
//        }
    };
</script>

<style>
    .el-row {
        margin-bottom: 20px;

    &
    :last-child {
        margin-bottom: 0;
    }

    }
    .el-col {
        border-radius: 4px;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }

    .bg-purple {
        background: #d3dce6;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }

    .box-card {
        /*width: 480px;*/
        margin: 10px 0px 10px 0px;
    }
</style>
