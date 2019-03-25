<template>
  <h3>
    <div class="block">
      <span class="demonstration">开始日期：</span>
      <el-date-picker
        v-model="startDate"
        type="date"
        :picker-options="pickerOptionsStart"
        @change="changeEnd"
        placeholder="选择日期"
      ></el-date-picker>
    </div>
    <div class="block" style="margin-right: 50px;">
      <span class="demonstration">结束日期：</span>
      <el-date-picker
        v-model="endDate"
        type="date"
        :picker-options="pickerOptionsEnd"
        @change="changeStart"
        placeholder="选择日期时间"
      ></el-date-picker>
    </div>

    <div class="block">
      <span class="demonstration">开始时间：</span>
      <el-date-picker
        v-model="startTime"
        type="datetime"
        value-format="yyyy-MM-dd HH:mm:ss"
        placeholder="选择时间"
      ></el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">结束时间：</span>
      <el-date-picker
        v-model="endTime"
        type="datetime"
        value-format="yyyy-MM-dd HH:mm:ss"
        @change="change"
        placeholder="选择时间"
      ></el-date-picker>
    </div>
  </h3>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      pickerOptionsStart: {},
      pickerOptionsEnd: {},
      pickerOptionsStartTime: {},
      pickerOptionsEndTime: {},
      startDate: "",
      endDate: "",
      startTime: "",
      endTime: ""
    };
  },
  mounted() {
    console.log(this);
    this.fun();
  },
  methods: {
    fun() {
      console.log(1);
      for (var i = 0; i < 4; i++) {
        console.log(i);
      }
    },
    change(val) {
      console.log(val);
      this.comptime(this.startTime, val)
        .then(res => {
          this.endTime = res;
          console.log("res: ", res);
        })
        .catch(err => {
          this.endTime = err;
          console.log("err: ", err);
        });
    },
    async comptime(beginTime, endTime) {
      if (beginTime) {
        var str = endTime;
        var beginTimes = beginTime.substring(0, 10).split("-");
        var endTimes = endTime.substring(0, 10).split("-");

        beginTime =
          beginTimes[1] +
          "-" +
          beginTimes[2] +
          "-" +
          beginTimes[0] +
          " " +
          beginTime.substring(10, 19);
        endTime =
          endTimes[1] +
          "-" +
          endTimes[2] +
          "-" +
          endTimes[0] +
          " " +
          endTime.substring(10, 19);
        var a = (Date.parse(endTime) - Date.parse(beginTime)) / 3600 / 1000;
        if (a <= 0) {
          this.$message({
            message: "结束时间必须大于开始时间",
            type: "warning"
          });
          return "";
        } else {
          return str;
        }
      } else {
        this.$message({
          message: "请选择开始时间",
          type: "warning"
        });
      }
    },
    changeStart() {
      this.pickerOptionsStart = Object.assign({}, this.pickerOptionsStart, {
        disabledDate: time => {
          return time.getTime() > this.endDate;
        }
      });
    },
    changeEnd() {
      this.pickerOptionsEnd = Object.assign({}, this.pickerOptionsEnd, {
        disabledDate: time => {
          return time.getTime() < this.startDate;
        }
      });
    },

    changeStartTime() {
      this.pickerOptionsStartTime = Object.assign(
        {},
        this.pickerOptionsStartTime,
        {
          disabledDate: time => {
            return time.getTime() > this.endTime;
          }
        }
      );
    },
    changeEndTime() {
      this.pickerOptionsEndTime = Object.assign({}, this.pickerOptionsEndTime, {
        disabledDate: time => {
          return time.getTime() < this.startTime;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.block {
  float: left;
  margin-right: 5px;
}
</style>
