<template>
  <div class="date">
    <el-row>
      <el-col :span="24">
        <div class="weeks">
          <!-- 日期 -->
          <ul class="days">
            <li @click="weekPre" class="prev-btn">
              <i class="fa fa-angle-left fa-icon" aria-hidden="true"></i>
              <span class="hidden-sm-and-down" style="margin-left: 5px;">上一周</span>
            </li>
            <li
              class="date-item"
              @click="pick(day, index)"
              v-for="(day, index) in days"
              :key="index"
              :class="{selected: index == tabIndex}"
            >
              <!--本月-->
              <span v-if="day.getMonth()+1 != currentMonth" class="other-month item-wrapper">
                <p>{{day | getWeekFormat}}</p>
                <span class="hidden-sm-and-down">{{ day | dateFormat }}</span>
              </span>
              <span v-else>
                <!--今天-->
                <span
                  v-if="day.getFullYear() == new Date().getFullYear() && day.getMonth() == new Date().getMonth() && day.getDate() == new Date().getDate()"
                  class="today-item"
                >今天</span>
                <span class="item-wrapper" v-else>
                  <p>{{day | getWeekFormat}}</p>
                  <span class="hidden-sm-and-down">{{ day | dateFormat }}</span>
                </span>
              </span>
            </li>
            <li @click="weekNext" class="next-btn">
              <span class="hidden-sm-and-down" style="margin-right: 5px;">下一周</span>
              <i class="fa fa-angle-right fa-icon" aria-hidden="true"></i>
            </li>
            <li>
              <span>
                <el-date-picker
                  class="right-pick-btn"
                  style="width: 100%"
                  @change="pickDate"
                  v-model="newDate"
                  type="date"
                  placeholder="按日期查询"
                ></el-date-picker>
              </span>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="20" :offset="2" class="time-range">
        <span
          @click="pickTime(time, index)"
          v-for="(time, index) in times"
          :key="index"
          :class="{active:index == tabTimeIndex}"
        >{{time.label}}</span>
      </el-col>
    </el-row>
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
      newDate: '',
      tabTimeIndex: 4,
      times: [
        {'time':'00:00:00~06:00:00', 'label': '00:00~06:00'},
        {'time':'06:00:00~12:00:00', 'label': '06:00~12:00'},
        {'time':'12:00:00~18:00:00', 'label': '12:00~18:00'},
        {'time':'18:00:00~24:00:00', 'label': '18:00~24:00'},
        {'time':'00:00:00~24:00:00', 'label': '今日节目'}
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
      this.newDate = moment(date).format("YYYY-MM-DD");
      this.$emit("dateValue", this.newDate);
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
      this.newDate = moment(date).format("YYYY-MM-DD");
      this.$emit("dateValue", this.newDate);
      // console.log("index: ", index);
      this.tabIndex = index;
      // alert(
      //   this.formatDate(date.getFullYear(), date.getMonth() + 1, date.getDate())
      // );
    },
    pickTime(time, index) {
      // console.log('time: ', time);
      let timeArr = [];
      timeArr.push((_.split(time.time, "~")));
      // console.log("timeArr: ", timeArr);
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
@media screen and (max-width:1300px){
 .days{
   li{
     padding: 5px 0!important;
   }
 }
}
.today-item {
  cursor: pointer;
  line-height: 45px;
}
.selected {
  height: 57px !important;
  box-sizing: border-box;
  color: #fff!important;
  background: #409EFF!important;
}
.item-wrapper {
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
  // padding: 5px 10px;
  // border: 1px solid #ccc;
  .fa-icon {
    font-size: 18px;
  }
}
.right-pick-btn {
  // height: 55px;
  // .el-input--small .el-input__inner{
  //   height: 100%;
  // }
}

.date {
  font-size: 14px;
  margin-top: 15px;
  .time-range {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    span {
      cursor: pointer;
      padding-bottom: 5px;
      border-bottom: 3px solid #fff;
      &:hover{
        border-bottom: 3px solid rgb(151, 198, 245);
      }
      &:active{
        border-bottom: 3px solid rgb(151, 198, 245);
      }
    }
    .active {
      border-bottom: 3px solid #409EFF;
    }
  }
  .days {
    display: flex;
    li {
      cursor: pointer;
      padding: 5px 10px;
      border: 1px solid #ccc;
      border-right: none;
      list-style: none;
      flex: 1;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      .other-month {
        // color: #c0c4cc;
      }
    }
    .date-item{
      &:hover{
        background: #DFF0D8;
      }
      &:active{
        background: #DFF0D8;
      }
    }
    li:nth-last-child(1) {
      border-right: 1px solid #ccc;
    }
  }
}
</style>
