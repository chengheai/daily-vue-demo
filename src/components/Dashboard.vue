<template>
  <div :class="{ js_loading: loading }">
    <my-loading v-if="loading" />
    <div v-else>
      <span class="gree-wrap animated flip slower">
        <h2>{{ greeting }} , 老玻璃！</h2>
      </span>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/element" tag="li">
          <el-button type="primary">element</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/computed" tag="li">
          <el-button type="warning">computed</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/lodash" tag="li">
          <el-button type="info">lodash</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/switch" tag="li">
          <el-button type="success">switch</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/savedPosition" tag="li">
          <el-button type="warning">savedPosition</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/transition" tag="li">
          <el-button type="danger">transition</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/gugong" tag="li">
          <el-button type="primary">故宫地图</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/search" tag="li">
          <el-button type="primary">远程搜索</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/calendar" tag="li">
          <el-button type="primary">calendar</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/calendar1" tag="li">
          <el-button type="primary">Calendar.1</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/emotion" tag="li">
          <el-button type="primary">Emotion</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/lodash1" tag="li">
          <el-button type="primary">lodash强化练习</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/es6" tag="li">
          <el-button type="primary">ES6</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/learning" tag="li">
          <el-button type="primary">Learning</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/timedisable" tag="li">
          <el-button type="primary">Timedisable</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/blur" tag="li">
          <el-button type="primary">Blur(css3)</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/conghu" tag="li">
          <el-button type="danger">Conghu</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/upload-file" tag="li">
          <el-button type="warning">UploadFile</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/input" tag="li">
          <el-button type="danger">Input</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/table" tag="li">
          <el-button type="danger">Table</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/draggable" tag="li">
          <el-button type="danger">Draggable</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/axios" tag="li">
          <el-button type="warning">Axios</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/heart" tag="li">
          <el-button type="danger">Heart</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/fullcalendar" tag="li">
          <el-button type="danger">Fullcalendar</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/next-tick" tag="li">
          <el-button type="danger">nextTick</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/keycode" tag="li">
          <el-button type="danger">KeyCodes</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/pdf" tag="li">
          <el-button type="warning">Pdf</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/note-image" tag="li">
          <el-button type="warning">NoteImage</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/drawer" tag="li">
          <el-button type="warning">drawer</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/copy-board" tag="li">
          <el-button type="warning">CopyBoard</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/drawer1" tag="li">
          <el-button type="danger">drawer1</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/quill-editor" tag="li">
          <el-button type="primary">quill-editor</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/un-watch" tag="li">
          <el-button type="primary">un-$wtach</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/select" tag="li">
          <el-button type="primary">select</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/iframe" tag="li">
          <el-button type="primary">iframe</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/orientation" tag="li">
          <el-button type="primary">orientation</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/watermark" tag="li">
          <el-button type="primary">watermark</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/test-f" tag="li">
          <el-button type="primary">test-f</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/date-picker" tag="li">
          <el-button type="primary">Datepicker</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/checkoutbox" tag="li">
          <el-button type="primary">嵌套checkoutbox</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/form" tag="li">
          <el-button type="primary">form相关</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/canvas" tag="li">
          <el-button type="primary">Canvas</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/socket" tag="li">
          <el-button type="primary">Socket.IO</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/communication" tag="li">
          <el-button type="primary">组件通信</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/bus" tag="li">
          <el-button type="primary">Bus实时监听</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/ding" tag="li">
          <el-button type="danger">钉钉</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/checked" tag="li">
          <el-button type="danger">自定义checked</el-button>
        </router-link>
      </el-col>
      <el-col :xs="12" :sm="6" :md="6" :lg="3" :xl="2">
        <router-link to="/v-model" tag="li">
          <el-button type="danger">自定义v-model</el-button>
        </router-link>
      </el-col>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
var hour = new Date().getHours();
import MyLoading from "./Loading";
export default {
  name: "HelloWorld",
  components: {
    MyLoading
  },
  data() {
    return {
      loading: true,
      timer: null,
      greeting: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    greet() {
      if (hour < 6) {
        this.greeting = "凌晨好";
      } else if (hour < 9) {
        this.greeting = "早上好";
      } else if (hour < 12) {
        this.greeting = "上午好";
      } else if (hour < 14) {
        this.greeting = "中午好";
      } else if (hour < 17) {
        this.greeting = "下午好";
      } else if (hour < 19) {
        this.greeting = "傍晚好";
      } else if (hour < 22) {
        this.greeting = "晚上好";
      } else {
        this.greeting = "夜深了, 早点休息";
      }
    }
  },
  mounted() {
    this.timer = setTimeout(() => {
      this.loading = false;
    }, 6000);
    this.greet();
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.js_loading {
  background: #000;
  display: flex;
  font: 1em/1.5 sans-serif;
  height: 100vh;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 999999;
}
.bb {
  color: red;
}
.gree-wrap {
  display: block;
  width: 100%;
}
.el-col {
  margin-top: 10px;
}
.el-row {
  display: flex;
  justify-content: flex-start;
}
h2 {
  text-align: center;
  font-weight: 800;
  font-size: 42px;
  color: #f35626;
  background-image: -webkit-linear-gradient(92deg, #b83007, #feab3a, #0fb366);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  -webkit-animation: hue 5s infinite linear;
  animation: hue 5s infinite linear;
  position: relative;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
@-webkit-keyframes hue {
  0% {
    opacity: 0.3;
    -webkit-transform: scale(0.75);
    -webkit-filter: hue-rotate(0deg);
  }
  25% {
    opacity: 0.7;
    -webkit-transform: scale(1.2);
    -webkit-filter: hue-rotate(0deg);
  }

  50% {
    opacity: 1;
    -webkit-transform: scale(2);
    -webkit-filter: hue-rotate(-360deg);
  }
  75% {
    opacity: 0.7;
    -webkit-transform: scale(1.2);
    -webkit-filter: hue-rotate(-360deg);
  }
  100% {
    opacity: 0.5;
    -webkit-transform: scale(0.75);
    -webkit-filter: hue-rotate(-360deg);
  }
}
</style>
