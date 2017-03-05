<template>
    <el-row>
        <el-col :span="20">
            <el-card class="box-card">
                <el-table
                    :data="tableData"
                    v-loading.body="loading"
                    style="width: 100%">
                    <el-table-column
                        label="日期"
                        width="180">
                        <template scope="scope">
                            <el-icon name="time"></el-icon>
                            <span style="margin-left: 10px">{{ scope.row.created_at }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="store_id"
                        label="商店id">
                    </el-table-column>
                    <el-table-column
                        prop="id"
                        label="Id">
                    </el-table-column>
                    <el-table-column label="操作">
                        <template scope="scope">
                            <el-button
                                size="small"
                                @click="handleEdit(scope.$index, scope.row)">编辑
                            </el-button>
                            <el-button
                                size="small"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">删除
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="block">
                    <!--<span class="demonstration">大于 7 页时的效果</span>-->
                    <el-pagination
                        layout="prev, pager, next"
                        @current-change="pageChange"
                        :current-page="cur"
                        ref="page"
                        :page-count="total">
                    </el-pagination>
                </div>
                <el-dialog v-if="visible" title="修改" v-model="visible" size="tiny">
                    <my-form :mode="mode" :selectedRow="selected" @submit="sub"></my-form>
                </el-dialog>
                <el-button type="text" @click="create()">新建</el-button>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
//    import axios from 'axios';
    //    import $ from 'webpack-zepto';
    const myForm = resolve => {
        require.ensure(['./my-form.vue'], () => {
            resolve(require('./my-form.vue'));
        });
    };

    export default {
        data() {
            return {
                total: 0,
                tableData: [],
                listUrl: 'store-collection-apis',
//                page: '',
                cur: 1,
                visible: false,
                selected: {},
                mode: '',
//                curPage: 1,
//                tableData: [{
//                    date: '2016-05-02',
//                    name: '王小虎',
//                    address: '上海市普陀区金沙江路 1518 弄'
//                }, {
//                    date: '2016-05-04',
//                    name: '王小虎',
//                    address: '上海市普陀区金沙江路 1517 弄'
//                }, {
//                    date: '2016-05-01',
//                    name: '王小虎',
//                    address: '上海市普陀区金沙江路 1519 弄'
//                }, {
//                    date: '2016-05-03',
//                    name: '王小虎',
//                    address: '上海市普陀区金沙江路 1516 弄'
//                }],
                loading: false
            };
        },
        mounted: function () {
//            axios.get('http://www.local.jiliha.com/store-collection-apis').then(res => {
//                console.log(res.headers.get('Date'));
//            });
            this.loading = true;
            let page = parseInt(this.$route.params.page);
//            this.cur = (typeof (page) == 'undefined') ? page : 1;
//            if (typeof (page) !== 'undefined') {
            if (page) {
                this.cur = page;
            }
//            this.cur = () ? page : 1;
            this.getList().then((re) => {
                this.loading = false;
            });
        },
        methods: {
            pageChange(currentPage) {
                this.cur = currentPage;
//                console.log(currentPage);
//                let that = this;
                this.loading = true;
                console.log('page have change' + currentPage);
//                this.$router.push({
//                    path: '/test/'
//                });
                this.$router.push({
                    path: '/list/' + currentPage
                });
//                this.getList(currentPage).then((re) => {
//                    this.loading = false;
//                });
//                console.log(this.$refs.page.currentPage);
//                console.log(this.cur);
            },
            getList() {
                let listUrl = this.listUrl + '?page=' + this.cur;
                return new Promise((resolve, reject) => {
                    this.$http.get(listUrl).then(function (response) {
//                        console.log(response.headers.get('X-Pagination-Page-Count'));
//                        console.log(response.headers);
                        this.total = parseInt(response.headers.get('X-Pagination-Page-Count'));
                        console.log(this.total);
                        this.tableData = response.body.data;
//                        this.loading = false;
                        resolve(true);
//                    that.loading = false;
                    }, function (response) {
                        console.log(response);
//                        this.loading = false;
                        reject(false);
//                    that.data = false;
                    });
                });
            },
            handleEdit(index, row) {
//                this.loading = true;
                this.visible = true;
                this.mode = 'edit';
//                console.log(index, row.created_at);
                this.selected = row;
//                this.selected = {
//                    name: row.name,
//                    id: row.id,
//                    store_id: row.store_id,
//                    created_at: row.created_at
//                };
//                this.loading = false;
            },
            handleDelete(index, row) {
//                let re = this.$resource(this.listUrl + '{/id}');
//                console.log(re);
                this.loading = true;
//                $.ajax({
//                    url: 'http://www.local.jiliha.com/' + this.listUrl + '/' + row.id,
//                    url: 'http://www.local.jiliha.com/' + this.listUrl,
//                    url: this.listUrl,
//                    type: 'PUT',
//                    success: function (re) {
//                        console.log(re);
//                        this.getList();
//                    }
//                });
                this.$http.delete(this.listUrl + '/' + row.id, {method: 'DELETE'}).then((response) => {
//                re.delete({id: row.id}).then((response) => {
                    this.getList(this.cur).then((re) => {
                        this.loading = false;
                        this.$message('删除成功');
                    });
                });
//                console.log(index, row);
            },
            sub: function (data) {
                console.log(data);
                this.visible = false;
                if (this.mode === 'create') {
                    this.getList().then(() => {
                        this.loading = false;
                    });
                }
            },
            create: function () {
                console.log('c');
                this.visible = true;
                this.mode = 'create';
            }
        },
        components: {
//            'my-form': () => System.import('./my-form.vue')
            myForm
        },
        watch: {
            // 切换页面
            '$route' (to, from) {
                if (to.params) {
                    this.cur = parseInt(this.$route.params.page);
                    this.getList().then((re) => {
                        this.loading = false;
                    });
                }
            }
        }
//        mounted() {
//            let that = this;
//            console.log(that);
//            this.http.interceptors.push((request, next) => {
//                console.log(that);
//                that.loading = true;
//                next((response) => {
//                    console.log(that);
//                    that.loading = false;
//                });
//            });
//        }
    };
</script>
