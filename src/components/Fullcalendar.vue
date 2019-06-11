<template>
  <full-calendar :events="fcEvents" lang="en"></full-calendar>
</template>

<script>
/* eslint-disable */
var demoEvents = [
  {
    title: "event1",
    start: "2019-05-26",
    cssClass: "family",
    YOUR_DATA: {}
  },
  {
    title: "event2",
    start: "2019-05-28",
    end: "2019-05-28",
    cssClass: "career",
    YOUR_DATA: {}
  }
];
export default {
  data() {
    return {
      fcEvents: demoEvents
    };
  },
  components: {
    "full-calendar": require("vue-fullcalendar")
  }
};
</script>

<style lang='less' scoped>
/deep/ .career{
  color: red !important;
}
.family{
  color: blue;
}
</style>
