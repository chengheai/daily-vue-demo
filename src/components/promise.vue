<template>
  <div>
    promise相关
    <p>
      执行顺序：
      <span v-for="item in list" :key="item">{{ item }}</span>
    </p>
    <p>
      执行结果：
      <span v-for="item in result" :key="item">{{ item }}</span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      result: []
    };
  },
  mounted() {
    this.all();
  },
  methods: {
    PromiseAll2(args) {
      var count = 0;
      var len = args.length;
      let results = [];
      return new Promise((resolve, reject) => {
        for (let i = 0; i < len; i++) {
          Promise.resolve(args[i])
            .then(r => {
              count++;
              results[i] = r;
              if (count === len) {
                resolve(results);
              }
            })
            .catch(e => {
              reject(e);
            });
        }
      });
    },
    promiseAll1(promises) {
      return new Promise(function(resolve, reject) {
        if (!Array.isArray(promises)) {
          return reject(new TypeError("arguments must be an array"));
        }
        var resolvedCounter = 0;
        var promiseNum = promises.length;
        var resolvedValues = new Array(promiseNum);
        for (var i = 0; i < promiseNum; i++) {
          (function(i) {
            Promise.resolve(promises[i]).then(
              function(value) {
                resolvedCounter++;
                resolvedValues[i] = value;
                if (resolvedCounter === promiseNum) {
                  return resolve(resolvedValues);
                }
              },
              function(reason) {
                return reject(reason);
              }
            );
          })(i);
        }
      });
    },
    // 手写Promise.all()
    promiseAll(iterators) {
      const promises = Array.from(iterators);
      const len = promises.length;
      let count = 0;
      let resultList = [];
      return new Promise((resolve, reject) => {
        promises.forEach((p, index) => {
          Promise.resolve(p)
            .then(result => {
              count++;
              resultList[index] = result;
              if (count === len) {
                resolve(resultList);
              }
            })
            .catch(e => {
              reject(e);
            });
        });
      });
    },
    // 方法promiseA，返回一个Promise对象
    promiseA() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("A");
          this.list.push("A执行完成");
        }, 3000);
      });
    },
    // 方法promiseB，返回一个Promise对象
    promiseB() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("B");
          this.list.push("B执行完成");
        }, 1000);
      });
    },
    promiseC() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("C");
          this.list.push("C执行完成");
        }, 2000);
      });
    },
    all() {
      // 按照A, B的顺序添加到promise数组中
      Promise.all([this.promiseA(), this.promiseB(), this.promiseC()]).then(
        resolve => {
          this.result = resolve;
          console.log(resolve);
        }
      );
    }
  }
};
</script>

<style lang="less" scoped></style>
