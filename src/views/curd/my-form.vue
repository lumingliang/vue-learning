<template>
    <el-form ref="forms" :model="form" :rules="rules">
        <el-form-item label="storeId" prop="store_id">
            <el-input v-model="form.store_id"></el-input>
        </el-form-item>
        <el-form-item label="id" prop="id">
            <el-input v-model="form.id"></el-input>
        </el-form-item>
        <el-form-item label="活动时间" prop="created_at">
            <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.created_at"
                                @change="ch"
                                style="width: 100%;"></el-date-picker>
            </el-col>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('fomrs')">立即创建</el-button>
            <el-button @click="resetForm('forms')">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        props: ['selectedRow', 'mode'],
//        props: ['form'],
        data() {
            var asy = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('年龄不能为空'));
                }
                setTimeout(() => {
                    console.log('2');
                    callback();
//                    callback(new Error('异步'));
                }, 2000);
            };
            var asy2 = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('年龄不能为空'));
                }
                setTimeout(() => {
                    console.log('4');
                    callback();
//                    callback(new Error('异步'));
                }, 4000);
            };
            return {
                form: {
                    name: '',
                    id: '',
                    store_id: '',
                    created_at: ''
                },
//                form: Object.assign({}, this.selectedRow),
//                form: (function () {
//                    return Object.assign({}, this.selectedRow);
//                })(),
//                form: {
//                    name: this.selectedRow.name,
//                    id: this.selectedRow.id,
//                    store_id: this.selectedRow.store_id,
//                    created_at: this.selectedRow.created_at
//                    name: 'goo',
//                    store_id: 3,
//                    created_at: '2017-01-24 12:11:08',
//                    id: ''
//                },
//                pickerOptions: {
//                    onClick
//                }
//                form: {},
                rules: {
                    store_id: [
                        {required: true, message: 'qing', trigger: 'blur'},
                        {min: 3, message: '长度3到5', trigger: 'blur'},
                        {validator: asy2, trigger: 'blur'}
                    ],
                    created_at: [
//                        {required: true, message: 'qin'},
                        {validator: asy, trigger: 'blur'}
                    ]
                }
            };
        },
        computed: {
//            form: function () {
//                if (this.mode === 'create') {
//                    return {
//                        name: '',
//                        id: '',
//                        store_id: '',
//                        created_at: ''
//                    };
//                } else {
//                    let r = Object.assign({}, this.selectedRow);
//                    return r;
//                }
//                console.log(this.selectedRow);
//                let r = Object.assign({}, this.selectedRow);
//                console.log(r);
//                console.log(this.form);
//                return r;
//                return {
//                    name: this.selectedRow.name,
//                    id: this.selectedRow.id,
//                    store_id: this.selectedRow.store_id,
//                    created_at: ''
//                    created_at: this.selectedRow.created_at
//                };
//            }
//            normalizedSize: function () {
//                return this.size.trim().toLowerCase()
//            }
        },
        mounted: function () {
            if (this.mode !== 'create') {
                this.form = Object.assign({}, this.selectedRow);
            }
//            console.log(this.form);
        },
        watch: {
            selectedRow: function (data) {
//                this.form = {
//                    name: this.selectedRow.name,
//                    id: this.selectedRow.id,
//                    store_id: this.selectedRow.store_id,
//                    created_at: this.selectedRow.created_at
//                };
//                console.log(data);
//                console.log(this.form);
                this.form = Object.assign(this.form, data);
//                console.log(this.form);
//                console.log(data.created_at);
//                data.created_at = '2017';
//                data.store_id = 10;
//                this.form = data;
            },
            mode: function () {
                if (this.mode === 'create') {
                    this.form.resetForm;
                }
            }
//            form: function (data) {
//                console.log(data.created_at);
//            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            ch(d) {
                if (this.form.created_at !== '') {
                    this.form.created_at = d.toString();
                }
//                console.log(d.toString());
            },
            submitForm(formName) {
//                this.form.created_at = '20188';
//                this.selectedRow.created_at = '2012';
//                console.log(this.form);
                this.$refs['forms'].validate((valid) => {
                    if (valid) {
                        if (this.mode === 'create') {
                            this.$http.post('store-collection-apis', this.form).then((res) => {
                                this.$emit('submit', true);
                                this.$message('新建成功');
                            });
                        } else {
                            this.$http.put('store-collection-apis/' + this.form.id, this.form).then((response) => {
                                console.log(response);
//                    this.visible = false;
                                this.$emit('submit', true);
                                this.$message('修改成功');
//                        this.$refs['forms'].resetFields();
                                this.selectedRow = Object.assign(this.selectedRow, this.form);
                            });
                        }
//                        alert('验证成功!');
                        return false;
                    } else {
                        console.log('失败!!');
                        return false;
                    }
                });
                console.log('here');
//                return;
//                console.log(this.form);
//                console.log(this.form.created_at);
//                this.selectedRow.created_at = '2014';
//                this.selectedRow.id = 20;
//                this.$refs[formName].validate((valid) => {
//                    if (valid) {
//                        alert('submit!');
//                    } else {
//                        console.log('error submit!!');
//                        return false;
//                    }
//                });
            },
            resetForm(formName) {
//                console.log(this.form);
//                this.form = {};
                this.$refs[formName].resetFields();
//                this.form.created = '';
                console.log(this.form);
            }
        }
    };
</script>
