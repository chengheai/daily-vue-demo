<template>
  <div>
    <el-button @click="handleAdd">添加</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="six" label="姓别" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column prop="handle" label="操作">
        <template slot-scope="scope">
          <el-button type="text" @click="handleEdit(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form" label-suffix=":" ref="form" :rules="rules">
        <el-form-item label="姓名" prop="name" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="日期" prop="date" :label-width="formLabelWidth">
          <el-date-picker
            v-model="form.date"
            value-format="yyyy-MM-dd"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>

        <el-form-item label="性别" prop="six" :label-width="formLabelWidth">
          <el-select v-model="form.six" placeholder="请选择活动区域">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="地址" prop="address" :label-width="formLabelWidth">
          <el-input
            v-model="form.address"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4 }"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="resetForm('form')">取 消</el-button>
        <el-button type="primary" @click="submitForm('form')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: "",
        date: "",
        six: "",
        address: ""
      },
      formLabelWidth: "120px",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          six: "1",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          six: 0,
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          six: "1",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          six: "1",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      rules: {
        name: [{ required: true, message: "请输入名字", trigger: "blur" }],
        six: [{ required: true, message: "请选择性别", trigger: "change" }],
        date: [
          {
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        address: [{ required: true, message: "请填写地址", trigger: "blur" }]
      }
    };
  },
  methods: {
    handleEdit(row) {
      this.form = Object.assign({}, row);
      // setTimeout(() => {
      //   this.dialogFormVisible = true;
      // }, 500);
      this.dialogFormVisible = true;
      console.log(row);
    },
    handleAdd() {
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.resetForm("form");
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="less" scoped></style>
