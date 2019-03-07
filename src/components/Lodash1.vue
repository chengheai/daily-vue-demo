<template>
  <h3>输出结果： {{result}} ==> {{obj}}</h3>
</template>

<script>
/* eslint-disable */
import _ from "lodash";
export default {
  data() {
    return {
      result: null,
      obj: {}
    };
  },
  mounted() {
    this.fun();
  },
  methods: {
    fun() {
      let that = this;
      that.result = _.add(4, 6);
      that.result = _.ceil(1.2345, 3);
      let b = _.assign(that.obj, { a: 1 }, { a: 2, b: 3 });
      console.log("b: ", b);
      var users = [
        { user: "barney", age: 36 },
        { user: "fred", age: 40 },
        { user: "pebbles", age: 1 }
      ];
      that.result = _.chain(users)
        .sortBy("age")
        .map(function(o) {
          return o.user + " is " + o.age;
        })
        .head()
        .value();
      var objects = [{ 'a': 1 }, { 'b': 2 }];
      var shallow = _.clone(objects);
      console.log('shallow: ', shallow);
      console.log(shallow[0] === objects[0]);
      var deep = _.cloneDeep(objects);
      console.log(deep[0] === objects[0]);
      that.result = _.compact([0, 1, false, 2, '', 3]);
      that.result = _.countBy([{a:1, b:2}, {a: 2, b: 3}], function(o){
        return o.a === 1;
      })
      // c开头的已结束

    }
  }
};
</script>

<style>
</style>
