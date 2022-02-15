<template>
  <el-dialog
    width="600px"
    title="edit"
    :visible.sync="dialogVisible"
    @close="closed"
  >
    <el-form ref="form" :model="form" :rules="rules" label-width="120px">
      <el-form-item label="姓名:" prop="name">
        <el-input v-model="form.name"> </el-input>
      </el-form-item>
      <el-form-item label="省市:" prop="province">
        <el-input v-model="form.province"> </el-input>
      </el-form-item>
      <el-form-item label="地址:" prop="address">
        <el-input v-model="form.address"> </el-input>
      </el-form-item>
    </el-form>

    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="handleSubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: "DialogUpdate",
  props: {
    visible: {
      type: Boolean,
      default: false
    },

    payload: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      dialogVisible: false,
      rules: {
        name: [{ required: true, message: "请输入", trigger: "change" }],
        address: [{ required: true, message: "请输入", trigger: "change" }],
        province: [{ required: true, message: "请输入", trigger: "change" }]
      },
      form: {}
    };
  },
  computed: {},
  watch: {
    visible(value) {
      this.dialogVisible = value;
      if (value) {
        this.form = {
          ...this.form,
          ...this.payload
        };
      }
    },
    dialogVisible(value) {
      !value && this.$emit("update:visible", false);
    }
  },
  methods: {
    /**
     *  提交
     */
    async handleSubmit() {
      const valid = await new Promise(resolve => {
        this.$refs["form"].validate(valid => {
          if (!valid) console.error("error submit!!");
          resolve(valid);
        });
      });
      if (!valid) return;
      console.log("this.form: ", this.form);
      this.$emit("submit", this.form);
    },

    /**
     *  关闭后回调
     */
    closed() {
      this.$emit("closed");
    }
  }
};
</script>
