<template>
  <div style="padding:0 20px">
    <el-form
      :inline="true"
      :model="formInline"
      :rules="rules"
      class="demo-form-inline"
    >
      <el-form-item label="广告数" prop="ad">
        <el-input v-model="formInline.ad" placeholder="广告数"></el-input>
      </el-form-item>
      <el-form-item label="广告组内广告数" prop="each">
        <el-input v-model="formInline.each" placeholder="广告组数"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">生成数据</el-button>
      </el-form-item>
    </el-form>
    <el-divider></el-divider>
    <el-table
      :data="tableData"
      :span-method="objectSpanMethod"
      border
      style="width: 100%"
      :max-height="650"
    >
      <el-table-column prop="group" label="组id"> </el-table-column>
      <el-table-column prop="id" label="计划id"> </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="province" label="省市"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button
            @click="handleUpdate(scope.row, 'edit')"
            size="small"
            type="primary"
            >编辑</el-button
          >
          <el-button
            @click="handleUpdate(scope.row, 'del')"
            type="danger"
            size="small"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <DialogUpdate
      :payload="payload"
      :visible.sync="dialogVisible"
      @submit="handleSubmit"
    />
  </div>
</template>
<script>
import DialogUpdate from "./DialogUpdate";
const obj = {
  name: "王小虎",
  province: "上海",
  city: "普陀区",
  address: "上海市普陀区金沙江路 1518 弄",
  zip: 200333
};
export default {
  components: { DialogUpdate },
  data() {
    const validatePass = (rule, value, callback) => {
      console.log("this.formInline: ", this.formInline);
      const { ad, each } = this.formInline;
      if (+ad < +each) {
        callback(new Error("每组内数小于计划数"));
      } else {
        callback();
      }
    };
    return {
      payload: {},
      dialogVisible: false,

      formInline: {
        ad: 20,
        each: 2
      },
      table: [],
      rules: {
        ad: [
          { required: true, message: "广告数", trigger: "change" },
          {
            pattern: /^(\d+)(\d+)?$/,
            message: "请输入数字",
            trigger: "change"
          },
          { validator: validatePass, trigger: "change" }
        ],
        each: [
          { required: true, message: "广告组数", trigger: "change" },
          {
            pattern: /^(\d+)(\d+)?$/,
            message: "请输入数字",
            trigger: "change"
          },
          { validator: validatePass, trigger: "change" }
        ]
      }
    };
  },
  computed: {
    tableData: {
      get() {
        let count = 0;
        return this.table.map((row, index) => {
          if (index === count) {
            const len = this.table.filter(item => item.group === row.group)
              .length;
            count += len;
            return {
              ...row,
              rowspan: len,
              colspan: 1
            };
          }
          return {
            ...row,
            colspan: 0,
            rowspan: 0
          };
        });
      }
    }
  },
  mounted() {
    this.onSubmit();
  },
  methods: {
    handleUpdate(row, action) {
      if (action === "del") {
        this.table = this.table.filter(item => {
          return ![row.id].includes(item.id);
        });
      } else {
        this.payload = { ...row };
        this.dialogVisible = true;
      }
    },
    handleSubmit(p) {
      console.log("p: ", p);
      this.table = this.table.map(item => {
        return [p].find(i => i.id === item.id) || item;
      });
      console.log("this.table: ", this.table);

      this.dialogVisible = false;
    },
    objectSpanMethod({ row, columnIndex }) {
      if (columnIndex === 0) {
        return {
          rowspan: row.rowspan,
          colspan: row.colspan
        };
      }
    },
    onSubmit() {
      let group = 0;
      this.table = [...Array(+this.formInline.ad).fill(obj)].map(
        (item, index) => {
          group = Math.floor(index / +this.formInline.each) + 1;
          return {
            ...item,
            id: `id_${index}`,
            group: `group_${group}`
          };
        }
      );
      console.log("submit!");
    }
  }
};
</script>
