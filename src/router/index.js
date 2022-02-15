import Vue from "vue";
import NProgress from "nprogress";
import Router from "vue-router";
import Dashboard from "@/components/Dashboard";
import Element from "@/components/Element";
import Computed from "@/components/Computed";
import Lodash from "@/components/Lodash";
import Lodash1 from "@/components/Lodash1";
import Switch from "@/components/Switch";
import savedPosition from "@/components/savedPosition";
import Transition from "@/components/Transition";
import Gugong from "@/components/Gugong";
import Search from "@/components/Search";
import Calendar from "@/components/Calendar";
import Calendar1 from "@/components/Calendar.1";
import Emotion from "@/components/Emotion";
import Es6 from "@/components/Es6";
import TimeDisable from "@/components/TimeDisable";
import Learning from "@/components/Learning";
import Blur from "@/components/Blur";
import Conghu from "@/components/Conghu";
import UploadFile from "@/components/UploadFile";
import Draggable from "@/components/Draggable";
import Table from "@/components/Table";
import Input from "@/components/Input";
import Axios from "@/components/Axios";
import Heart from "@/components/Heart";
import Fullcalendar from "@/components/Fullcalendar";
import KeyCodes from "@/components/KeyCodes";
import Pdf from "@/components/Pdf";
import NoteImage from "@/components/NoteImage";
import nextTick from "@/components/nextTick";
import Drawer from "@/components/Drawer";
import CopyBoard from "@/components/CopyBoard";
import drawer1 from "@/components/drawer1";
import quillEditor from "@/components/quillEditor";

import MouseView from "@/components/MouseView";
import UnWatch from "@/components/UnWatch";
import Reduce from "@/components/Reduce";

import Select from "@/components/Select";
import Iframe from "@/components/Iframe";
import Orientation from "@/components/Orientation";
import Watermark from "@/components/Watermark";
import TestF from "@/components/TestF";
import Datepicker from "@/components/Datepicker";
import Checkoutbox from "@/components/Checkoutbox";
import Form from "@/components/Form";
import Canvas from "@/components/Canvas";
import socketio from "@/components/socketio";
import communication from "@/pages/communication";
import Ding from "@/components/Ding";
import Checked from "@/components/Checked";
import Bus from "@/components/Bus";
import vModel from "@/components/v-model";
import Model from "@/components/model";
import Pagination from "@/components/Pagination";
import Update from "@/components/Update";
import selectLabel from "@/components/selectLabel";
import Target from "@/components/Target";
import GroupSelect from "@/components/GroupSelect";
import Qq from "@/components/Qq";
import Flex from "@/components/flex";
import Throttle from "@/components/throttle";
import Debounce from "@/components/debounce";
import Promise from "@/components/promise";
import Ceiling from "@/components/Ceiling";
import Ceiling1 from "@/components/Ceiling1";
import Slot from "@/components/Slot";
import RegExp from "@/components/RegExp";
import getBoundingClientRect from "@/components/getBoundingClientRect";
import Mi from "@/components/Mi";
import Provide from "@/components/Provide";
import AutoLogout from "@/components/AutoLogout";
import CopyImage from "@/components/CopyImage";
import Tree1 from "@/components/Tree1";
import spanTable from "@/components/spanTable";

// 配置NProgress进度条选项  —— 动画效果
NProgress.configure({ ease: "ease", speed: 500 });
/* eslint-disable */
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      redirect: "/dashboard"
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
      meta: {
        title: "首页"
      }
    },
    {
      path: "/element",
      name: "Element",
      component: Element,
      meta: {
        title: "饿了吗"
      }
    },
    {
      path: "/upload-file",
      name: "UploadFile",
      component: UploadFile,
      meta: {
        title: "文件上传"
      }
    },
    {
      path: "/computed",
      name: "Computed",
      component: Computed,
      meta: {
        title: "计算属性"
      }
    },
    {
      path: "/draggable",
      name: "Draggable",
      component: Draggable,
      meta: {
        title: "拖拽"
      }
    },
    {
      path: "/lodash",
      name: "Lodash",
      component: Lodash,
      meta: {
        title: "鲁大师"
      }
    },
    {
      path: "/switch",
      name: "Switch",
      component: Switch,
      meta: {
        title: "切换自定义"
      }
    },
    {
      path: "/savedPosition",
      name: "savedPosition",
      component: savedPosition,
      meta: {
        title: "位置记忆"
      }
    },
    {
      path: "/transition",
      name: "Transition",
      component: Transition,
      meta: {
        title: "CSS3转换"
      }
    },
    {
      path: "/gugong",
      name: "Gugong",
      component: Gugong,
      meta: {
        title: "故宫地图"
      }
    },
    {
      path: "/search",
      name: "Search",
      component: Search,
      meta: {
        title: "查询"
      }
    },
    {
      path: "/calendar",
      name: "Calendar",
      component: Calendar,
      meta: {
        title: "日历"
      }
    },
    {
      path: "/calendar1",
      name: "Calendar1",
      component: Calendar1,
      meta: {
        title: "日历器"
      }
    },
    {
      path: "/lodash1",
      name: "lodash1",
      component: Lodash1,
      meta: {
        title: "鲁大师之路"
      }
    },
    {
      path: "/es6",
      name: "es6",
      component: Es6,
      meta: {
        title: "ES6强化"
      }
    },
    {
      path: "/learning",
      name: "learning",
      component: Learning,
      meta: {
        title: "晋级之路"
      }
    },
    {
      path: "/timedisable",
      name: "timedisable",
      component: TimeDisable,
      meta: {
        title: "定制时间选择"
      }
    },
    {
      path: "/blur",
      name: "blur",
      component: Blur,
      meta: {
        title: "聚焦失焦"
      }
    },
    {
      path: "/conghu",
      name: "conghu",
      component: Conghu,
      meta: {
        title: "这是谁🐸"
      }
    },
    {
      path: "/input",
      name: "input",
      component: Input,
      meta: {
        title: "输入检查"
      }
    },
    {
      path: "/table",
      name: "table",
      component: Table,
      meta: {
        title: "表格操作"
      }
    },
    {
      path: "/axios",
      name: "axios",
      component: Axios,
      meta: {
        title: "阿贾克斯"
      }
    },
    {
      path: "/heart",
      name: "heart",
      component: Heart,
      meta: {
        title: "心跳👅"
      }
    },
    {
      path: "/emotion",
      name: "Emotion",
      component: Emotion,
      meta: {
        title: "表情标签"
      }
    },
    {
      path: "/fullcalendar",
      name: "Fullcalendar",
      component: Fullcalendar,
      meta: {
        title: "全日历？"
      }
    },
    {
      path: "/next-tick",
      name: "nextTick",
      component: nextTick,
      meta: {
        title: "写一步操作"
      }
    },
    {
      path: "/keycode",
      name: "keycode",
      component: KeyCodes,
      meta: {
        title: "电脑键盘侠"
      }
    },
    {
      path: "/pdf",
      name: "pdf",
      component: Pdf,
      meta: {
        title: "PDF=PDF"
      }
    },
    {
      path: "/note-image",
      name: "note-image",
      component: NoteImage,
      meta: {
        title: "美图美女"
      }
    },
    {
      path: "/drawer",
      name: "drawer",
      component: Drawer,
      meta: {
        title: "抽屉效果"
      }
    },
    {
      path: "/copy-board",
      name: "CopyBoard",
      component: CopyBoard,
      meta: {
        title: "复制木板"
      }
    },
    {
      path: "/quill-editor",
      name: "quillEditor",
      component: quillEditor,
      meta: {
        title: "富文本编辑器"
      }
    },
    {
      path: "/drawer1",
      name: "drawer1",
      component: drawer1,
      meta: {
        title: "自定义抽屉"
      }
    },
    {
      path: "/mouse-view",
      name: "MouseView",
      component: MouseView,
      meta: {
        title: "鼠标视图"
      }
    },
    {
      path: "/un-watch",
      name: "UnWatch",
      component: UnWatch,
      meta: {
        title: "不监听"
      }
    },
    {
      path: "/select",
      name: "select",
      component: Select,
      meta: {
        title: "下拉选择"
      }
    },
    {
      path: "/reduce",
      name: "reduce",
      component: Reduce,
      meta: {
        title: "排序"
      }
    },
    {
      path: "/iframe",
      name: "iframe",
      component: Iframe,
      meta: {
        title: "夜中夜"
      }
    },
    {
      path: "/orientation",
      name: "orientation",
      component: Orientation,
      meta: {
        title: "横竖屏幕"
      }
    },
    {
      path: "/watermark",
      name: "watermark",
      component: Watermark,
      meta: {
        title: "水印睡衣"
      }
    },
    {
      path: "/test-f",
      name: "test-f",
      component: TestF,
      meta: {
        title: "测试雷区"
      }
    },
    {
      path: "/date-picker",
      name: "date-picker",
      component: Datepicker,
      meta: {
        title: "自定义时间限制"
      }
    },
    {
      path: "/checkoutbox",
      name: "checkoutbox",
      component: Checkoutbox,
      meta: {
        title: "嵌套el-checkout"
      }
    },
    {
      path: "/form",
      name: "form",
      component: Form,
      meta: {
        title: "Form相关"
      }
    },
    {
      path: "/canvas",
      name: "canvas",
      component: Canvas,
      meta: {
        title: "Canvas"
      }
    },
    {
      path: "/socket",
      name: "socket",
      component: socketio,
      meta: {
        title: "socket"
      }
    },
    {
      path: "/communication",
      name: "communication",
      component: communication,
      meta: {
        title: "组件通信"
      }
    },
    {
      path: "/bus",
      name: "bus",
      component: Bus,
      meta: {
        title: "bus实时监听"
      }
    },
    {
      path: "/ding",
      name: "Ding",
      component: Ding,
      meta: {
        title: "钉钉"
      }
    },
    {
      path: "/Checked",
      name: "Checked",
      component: Checked,
      meta: {
        title: "自定义checked"
      }
    },
    {
      path: "/v-model",
      name: "vModel",
      component: vModel,
      meta: {
        title: "自定义v-model"
      }
    },
    {
      path: "/model",
      name: "model",
      component: Model,
      meta: {
        title: "自定义v-model"
      }
    },
    {
      path: "/pagination",
      name: "Pagination",
      component: Pagination,
      meta: {
        title: "自定义分页"
      }
    },
    {
      path: "/update",
      name: "Update",
      component: Update,
      meta: {
        title: "$emit('update:xx', xxx)"
      }
    },
    {
      path: "/select-label",
      name: "selectLabel",
      component: selectLabel,
      meta: {
        title: "自定义label"
      }
    },
    {
      path: "/target",
      name: "Target",
      component: Target,
      meta: {
        title: "锚点"
      }
    },
    {
      path: "/group-select",
      name: "GroupSelect",
      component: GroupSelect,
      meta: {
        title: "el-select点组实现全选"
      }
    },
    {
      path: "/qq",
      name: "Qq",
      component: Qq,
      meta: {
        title: "在线"
      }
    },
    {
      path: "/flex",
      name: "Flex",
      component: Flex,
      meta: {
        title: "flex"
      }
    },
    {
      path: "/throttle",
      name: "Throttle",
      component: Throttle,
      meta: {
        title: "截流"
      }
    },
    {
      path: "/debounce",
      name: "Debounce",
      component: Debounce,
      meta: {
        title: "防抖"
      }
    },
    {
      path: "/promise",
      name: "promise",
      component: Promise,
      meta: {
        title: "promise相关"
      }
    },
    {
      path: "/ceiling",
      name: "Ceiling",
      component: Ceiling,
      meta: {
        title: "标题吸顶"
      }
    },
    {
      path: "/ceiling1",
      name: "Ceiling1",
      component: Ceiling1,
      meta: {
        title: "标题吸顶sticky"
      }
    },
    {
      path: "/slot",
      name: "Slot",
      component: Slot,
      meta: {
        title: "插槽"
      }
    },
    {
      path: "/RegExp",
      name: "RegExp",
      component: RegExp,
      meta: {
        title: "正则"
      }
    },
    {
      path: "/getBoundingClientRect",
      name: "getBoundingClientRect",
      component: getBoundingClientRect,
      meta: {
        title: "getBoundingClientRect"
      }
    },
    {
      path: "/mi",
      name: "Mi",
      component: Mi,
      meta: {
        title: "mi"
      }
    },
    {
      path: "/provide",
      name: "Provide",
      component: Provide,
      meta: {
        title: "Provide"
      }
    },
    {
      path: "/auto-logout",
      name: "AutoLogout",
      component: AutoLogout,
      meta: {
        title: "AutoLogout"
      }
    },
    {
      path: "/copy-image",
      name: "CopyImage",
      component: CopyImage,
      meta: {
        title: "CopyImage"
      }
    },
    {
      path: "/tree1",
      name: "Tree1",
      component: Tree1,
      meta: {
        title: "Tree1"
      }
    },
    {
      path: "/span-table",
      name: "spanTable",
      component: spanTable,
      meta: {
        title: "spanTable"
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

// 全局路由拦截-进入页面前执行
router.beforeEach((to, from, next) => {
  // NProgress开始进度条
  NProgress.start();
  next();
});

// 全局后置钩子-常用于结束动画等
router.afterEach(transition => {
  // NProgress结束进度条
  NProgress.done();
  // console.log(transition)
});

export default router;
