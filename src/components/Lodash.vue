<template>
  <div style="background: #333; color: #fff;">
    <el-row>
      <h3>_.flow {{addSquare(1,2)}}</h3>
      <el-col :span="11">{{results}}</el-col>
      <el-col class="heals" :span="2"></el-col>
      <el-col :span="11">
        <el-col :span="24">
          <h3>
            <el-row>_.take(results, 3)</el-row>
          </h3>
          <el-row>{{result1}}</el-row>
          <h3>
            <el-row>_.each(results, function(values, key, items){})</el-row>
          </h3>
          <el-row>{{result2}}</el-row>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
/* eslint-disable */
import { results } from "./../mock/mock.js";
import _ from "lodash";

export default {
  data() {
    return {
      results: [],
      result1: [],
      addSquare: null,
      result2: []
    };
  },
  mounted() {
    this.init();
    console.log(_.chunk([1, 2, 3, 4], 3));
    console.log(_.difference([1, 2, 3], [1]));
    let a = _.drop([1, 2, 3], 3);
    console.log("a: ", a);
    console.log(_.drop([1, 2, 3], 3));
    console.log(_.fill([1, 2, 3, 4], "a"));
    let users = [
      { user: "barney", active: false },
      { user: "fred", active: false },
      { user: "pebbles", active: true }
    ];
    console.log(
      _.findIndex(users, function(o) {
        return o.user == "barney";
      })
    );
    // => 0
    console.log(_.flatten([1, [2, [3, [4]], 5]]));
    console.log(_.intersection([1, 2], [2, 3])); // 2
    console.log(_.join([1, 2, 3], "="));
    console.log(_.last([1, 2]));
    console.log(_.lastIndexOf([1, 2, 3, 2, 2], 2));
    console.log(_.indexOf([1, 2, 3, 2, 2], 2));
    console.log(_.reverse([1, 2, 3]));
    console.log(_.pull([1, 2, 3, 4], 2, 3)); // 1 4
    console.log(_.pullAll([1, 2, 3, 4], [2, 3]));
    console.log(
      _.pullAllBy([{ x: 1 }, { x: 2 }, { x: 3 }], [{ x: 1 }, { x: 3 }], "x")
    );
    console.log(_.pullAt([1, 2, 3, 4], 0, 1)); // 12
    // let arr = [1, 2, 3, 4];
    // console.log(_.remove(arr, function(n){
    //   return n % 2 == 0
    // }));
    console.log(_.slice([1, 2, 3], 0, 1));
    console.log(_.tail([1, 2, 3])); //  除了第一个元素以外的数组
    console.log(_.take([1, 2, 3], 2));
    console.log(_.uniq([1, 2, 2])); //去重复
    console.log(_.without([1, 2, 3], 1, 2));
    console.log(_.xor([1, 2], [2, 4]));
    console.log(_.zip(["a", "b"], [1, 2], [true, false]));
    console.log(_.zipObject(["a", "b"], [1, 2])); // 只接收两个数组
    // TODO: Array END

    console.log(_.countBy(["one", "two", "three"], "length")); // key是经过 iteratee 处理的集合的结果，value 是处理结果的次数
    console.log(_.every([true, 1, null], Boolean));
    // const users = [
    //   {'user': 'alex', 'age': 12, 'active': true },
    //   {'user': 'dog', 'age': 32, 'active': false }
    // ];
    // console.log(resolve(_.filter(users, function(o){
    //   return !o.active;
    // })))
    function duplicate(n) {
      return [n, n];
    }
    console.log(_.flatMap([1, 2], duplicate)); // 平铺
    _([1, 2, 3]).each(function(value) {
      console.log("value: ", value);
    });
    _([1, 2, 3]).eachRight(function(value) {
      console.log("value: ", value);
    });
    console.log(_.groupBy([{ x: "one" }, { x: "two" }, { x: "three" }], "x"));
    console.log(_.includes([1, 2, 3], 2, 1));
    const arr2 = [{ dir: "left", code: 97 }, { dir: "right", code: 100 }];
    console.log(_.keyBy(arr2, "dir"));
    function square(n) {
      return n * n;
    }
    console.log(_.map({ a: 4, b: 9 }, square));
    console.log(_.map([{ id: 1 }, { id: 2 }], "id"));
    const users1 = [
      { user: "fred", age: 48, 'active': false },
      { user: "barney", age: 34, 'active': true  },
      { user: "fred", age: 42, 'active': false  },
      { user: "barney", age: 36, 'active': true  }
    ];
    console.log(_.orderBy(users1, ["age"], "desc"));
    console.log(_.partition(users1, ['active', true])) // 分成两个数组
    console.log(_.reduce([1, 2, 3], {})); // 不理解
    console.log(_.reject(users1, 'active'));
  },
  methods: {
    square(n) {
      return n * n
    },
    init() {
      this.addSquare = _.flow([_.add, this.square])
      this.results = results;
      this.result1 = _.take(results, 3);
      this.result2 = _.each(this.result1, function(values, key, items) {
        // console.log(values)
        // console.log(key)
        // console.log(items)
        if (values.id === "1205") {
          values.value = false;
        } else if (values.id === "sss") {
          values.value = true;
        } else {
          values.value = values.value;
        }
      });
      // return (this.results = results);
    }
  }
};
</script>

<style scoped>
.heals {
  margin: 0 5px;
  width: 10px;
  height: 3600px;
  border: 1px solid #ffc0cb;
  /* border-radius: 5px; */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  background-image: linear-gradient(#ffc0cb, #ff69b4);
  animation: breath 2500ms infinite ease-in-out alternate;
}
@keyframes breath {
  0% {
    opacity: 0.2;
    box-shadow: 0 1px 2px rgba(255, 255, 255, 0.1);
  }
  100% {
    opacity: 1;
    border: 1px solid rgba(255, 192, 203, 1);
    box-shadow: 0 1px 30px rgba(255, 192, 203, 1);
  }
}
</style>
