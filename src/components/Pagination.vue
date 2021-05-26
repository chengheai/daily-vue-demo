<template>
  <div>
    <el-table :data="tableData" max-height="600px" stripe style="width: 100%">
      <el-table-column prop="id" label="ID" width="60"> </el-table-column>
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
    <el-pagination
      style="margin-top:15px"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page_info.page"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="page_info.size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="items.length"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {
        id: 1,
        date: "2016-05-02",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      },
      page_info: {
        page: 1,
        size: 10
      },
      tableData: [],
      items: []
    };
  },
  mounted() {
    this.items = new Array(100).fill(this.obj).map((item, index) => {
      return {
        ...item,
        id: index + 1
      };
    });
    this.handleQuery();
  },
  methods: {
    handleQuery() {
      const { page, size } = this.page_info;

      const offset = (page - 1) * size;
      this.tableData = this.items.slice(offset, offset + size);
    },
    handleSizeChange(val) {
      this.page_info.size = val;
      this.handleQuery();
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.page_info.page = val;
      this.handleQuery();
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style lang="less" scoped></style>
