/* eslint-disable */
const list = {
  data() {
    return {
      loading: false,
      pageParam: {
        pageNum: 1, // 页码
        pageSize: 10, // 每页显示条数
      },
      total: 0, // 总数
      pageSizes: [10, 20, 30, 50], // 每页条数
      pageLayout: 'total, sizes, prev, pager, next, jumper', // 分页布局
      pagerCount: 5, // 大于等于 5 且小于等于 21 的奇数
      list: [],
    };
  },
  methods: {
    // 分页回掉事件
    handleSizeChange(val) {
      this.pageParam.pageSize = val;
      this.getList();
    },
    handleCurrentChange(val) {
      this.pageParam.pageNum = val;
      this.getList();
    },
    /**
     * 请求返回的回调
     * @param {*} apiResult
     * @returns {*} promise
     */
    listSuccessCb(apiResult = {}) {
      return new Promise((resolve, reject) => {
        let tempList = []; // resolve return出的list
        try {
          this.loading = false;
          tempList = apiResult.data.data.list;
          this.total = apiResult.data.totalCount;
          // 直接抛出
          resolve(tempList);
        } catch (error) {
          reject(error);
        }
      });
    },
    /**
     * 处理异常情况
     * 错误时将loading置为 false
     */
    listExceptionCb(error) {
      this.loading = false;
      console.error(error);
    },
  },
  created() {
    this.$nextTick().then(() => {
      console.log('我是table mixin')
    });
  },
};
export default list;
