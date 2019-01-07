<template>
  <div class="date">
    <!-- 年份 月份 -->
    <div class="my-wrapper">
      <span class="prev-btn" @click="weekPre">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>上一周
      </span>
      <!-- 星期 -->
      <div class="weeks">
        <!-- 日期 -->
        <ul class="days">
          <li
            @click="pick(day, index)"
            v-for="(day, index) in days"
            :key="index"
            :class="{selected:index == tabIndex}"
          >
            <!--本月-->
            <span v-if="day.getMonth()+1 != currentMonth" class="other-month item-wrapper">
              <span>{{day | getWeekFormat}}</span>
              <span>{{ day | dateFormat }}</span>
            </span>
            <span v-else>
              <!--今天-->
              <span
                v-if="day.getFullYear() == new Date().getFullYear() && day.getMonth() == new Date().getMonth() && day.getDate() == new Date().getDate()"
                class="today-item"
              >今天</span>
              <span class="item-wrapper" v-else>
                <span>{{day | getWeekFormat}}</span>
                <span>{{ day | dateFormat }}</span>
              </span>
            </span>
          </li>
        </ul>
      </div>
      <span>
      <span class="next-btn" @click="weekNext">
        下一周
        <i class="fa fa-chevron-right" aria-hidden="true"></i>
      </span>
      <span>
      <el-date-picker
        class="right-pick-btn"
        style="width: 80px"
        @change="pickDate"
        v-model="value1"
        type="date"
        placeholder="选择日期"
      ></el-date-picker>
      </span>
      </span>
    </div>
    <div class="time-clock">
      <span
        @click="pickTime(time, index)"
        v-for="(time, index) in times"
        :key="index"
        :class="{active:index == tabTimeIndex}"
      >{{time}}</span>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import moment from "moment";
export default {
  props: {
    dateValue: {
      type: String,
      default: moment(new Date()).format("YYYY-MM-DD")
    },
    timeValue: {
      type: String,
      default: "00:00"
    }
  },
  data() {
    return {
      currentYear: 1970, // 年份
      currentMonth: 1, // 月份
      currentDay: 1, // 日期
      currentWeek: 1, // 星期
      days: [],
      value1: "",
      tabIndex: null,
      tabTimeIndex: 0,
      times: [
        "00:00~06:00",
        "06:00~12:00",
        "12:00~18:00",
        "18:00~24:00",
        "今日节目"
      ]
    };
  },
  filters: {
    dateFormat(date) {
      return moment(date).format("YYYY-MM-DD");
    },
    getWeekFormat(date) {
      const weeksObj = {
        1: "周一",
        2: "周二",
        3: "周三",
        4: "周四",
        5: "周五",
        6: "周六",
        7: "周日"
      };
      let weekNumber = moment(date).isoWeekday();
      return weeksObj[weekNumber];
    }
  },

  mounted() {
    const index = _.findIndex(this.days, function(o) {
      // console.log('o: ', o.getDate());
      // console.log('new Date().getDate(): ', new Date().getDate());
      return o.getDate() === new Date().getDate();
    });
    console.log("index: ", index);
    this.tabIndex = index;
  },

  created() {
    this.initData(null);
  },

  methods: {
    formatDate(year, month, day) {
      const y = year;
      let m = month;
      if (m < 10) m = `0${m}`;
      let d = day;
      if (d < 10) d = `0${d}`;
      return `${y}-${m}-${d}`;
    },
    pickDate(date) {
      let newDate = moment(date).format("YYYY-MM-DD");
      this.$emit("dateValue", newDate);
    },
    initData(cur) {
      let date = "";
      if (cur) {
        date = new Date(cur);
      } else {
        date = new Date();
      }
      this.currentDay = date.getDate(); // 今日日期 几号
      this.currentYear = date.getFullYear(); // 当前年份
      this.currentMonth = date.getMonth() + 1; // 当前月份
      this.currentWeek = date.getDay(); // 1...6,0  // 星期几
      if (this.currentWeek === 0) {
        this.currentWeek = 7;
      }
      const str = this.formatDate(
        this.currentYear,
        this.currentMonth,
        this.currentDay
      ); // 今日日期 年-月-日
      this.days.length = 0;
      // 今天是周日，放在第一行第7个位置，前面6个 这里默认显示一周，如果需要显示一个月，则第二个循环为 i<= 35- this.currentWeek
      /* eslint-disabled */
      for (let i = this.currentWeek - 1; i >= 0; i -= 1) {
        const d = new Date(str);
        d.setDate(d.getDate() - i);
        // console.log(y:" + d.getDate())
        this.days.push(d);
      }
      for (let i = 1; i <= 7 - this.currentWeek; i += 1) {
        const d = new Date(str);
        d.setDate(d.getDate() + i);
        this.days.push(d);
      }
    },

    // 上个星期
    weekPre() {
      const d = this.days[0]; // 如果当期日期是7号或者小于7号
      d.setDate(d.getDate() - 7);
      this.initData(d);
    },

    // 下个星期
    weekNext() {
      const d = this.days[6]; // 如果当期日期是7号或者小于7号
      d.setDate(d.getDate() + 7);
      this.initData(d);
    },

    // 上一個月  传入当前年份和月份
    pickPre(year, month) {
      const d = new Date(this.formatDate(year, month, 1));
      d.setDate(0);
      this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
    },

    // 下一個月  传入当前年份和月份
    pickNext(year, month) {
      const d = new Date(this.formatDate(year, month, 1));
      d.setDate(35);
      this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
    },

    // 当前选择日期
    pick(date, index) {
      let newDate = moment(date).format("YYYY-MM-DD");
      this.$emit("dateValue", newDate);
      // console.log("index: ", index);
      this.tabIndex = index;
      // alert(
      //   this.formatDate(date.getFullYear(), date.getMonth() + 1, date.getDate())
      // );
    },
    pickTime(time, index) {
      // console.log('time: ', time);
      let timeArr = [];
      timeArr.push(_.head(_.split(time, "~")));
      console.log("timeArr: ", timeArr);
      this.$emit("timeValue", _.join(timeArr), "");
      // console.log("index: ", index);
      this.tabTimeIndex = index;
      // alert(
      //   this.formatDate(date.getFullYear(), date.getMonth() + 1, date.getDate())
      // );
    }
  }
};
</script>

<style lang="less" scoped>
.time-clock {
  width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  padding: 10px 0;
  span {
    cursor: pointer;
    padding-bottom: 5px;
    border-bottom: 3px solid #ccc;
  }
  .active {
    border-bottom: 3px solid red;
  }
}
.my-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  .today-item {
    cursor: pointer;
    line-height: 45px;
  }
  .selected {
    height: 57px !important;
    box-sizing: border-box;
    border: 1px solid red !important;
  }
  .item-wrapper {
    color: #606266;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .prev-btn,
  .next-btn {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    width: 100px;
    padding: 5px 10px;
    border: 1px solid #ccc;
  }
  .right-pick-btn{
    // height: 55px;
    // .el-input--small .el-input__inner{
    //   height: 100%;
    // }
  }
}
.date {
  font-size: 14px;
  .days {
    display: flex;

    li {
      height: 45px;
      cursor: pointer;
      width: 100px;
      padding: 5px 10px;
      border: 1px solid #ccc;
      border-right: none;
      list-style: none;
      flex: 1;
      text-align: center;
      .active {
        display: inline-block;
        color: #fff;
        border-radius: 50%;
        border: 1px solid red;
      }

      .other-month {
        color: #c0c4cc;
      }
    }
    li:nth-child(1) {
      border-left: none;
    }
  }
}
</style>
