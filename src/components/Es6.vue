<template>
  <div>
    <h3>带参数函数es6写法</h3>
    <strong>
      const single = a => a
      single('hello, world') // 'hello, world'
    </strong>
    <h3>没有参数的需要用在箭头前加上小括号</h3>
    <strong>
      cosnt single = () => {
        console.log('no params')
      }
    </strong>
    <h3>多个参数</h3>
    <strong>
      const add = (a, b) => a + b
      add(1, 2) // 3
    </strong>
    <h3>函数体多条语句需要用到大括号</h3>
    <strong>
      const add = (a, b) => {
        if(typeof a == 'number' && typeof b == 'number') {
          return a + b
        } else {
          return 0
        }
      }
    </strong>
    <h3>返回对象时需要用小括号包起来，因为大括号被占用解释为代码块了</h3>
    <strong>
      const getHash = arr => {
        // ...
        return ({
          name: 'Alex',
          age: 12
        })
      }
    </strong>
    <h3>直接作为事件handler</h3>
    <strong>
      document.addEventListener('click', ev => {
        console.log(ev)
      })
    </strong>
    <h3>作为数组排序回调</h3>
    <strong>
      var arr = [1, 9 , 2, 4, 3, 8].sort((a, b) => {
        if (a - b > 0 ) {
            return 1
        } else {
            return -1
        }
      })
      arr // [1, 2, 3, 4, 8, 9]
    </strong>
    <h3>typeof运算符和普通的function一样</h3>
    <strong>
      var func = a => a
      console.log(typeof func); // "function"
    </strong>
    <h3>instanceof也返回true，表明也是Function的实例</h3>
    <strong>
      console.log(func instanceof Function); // true
    </strong>
    <h3>this固定，不再善变</h3>
    <strong>
      obj = {
        data: ['John Backus', 'John Hopcroft'],
        init: function() {
          document.onclick = ev => {
              alert(this.data) // ['John Backus', 'John Hopcroft']
          }
          // 非箭头函数
          // document.onclick = function(ev) {
          //     alert(this.data) // undefined
          // }
        }
      }
    obj.init()
    </strong>
    <h3>箭头函数不能用new</h3>
    <strong>
      var Person = (name, age) => {
        this.name = name
        this.age = age
      }
      var p = new Func('John', 33) // error
    </strong>
    <h3>不能使用argument</h3>
    <strong>
      var func = () => {
        console.log(arguments)
      }
      func(55) //
    </strong>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
h3{
  margin-bottom: 10px;
}
strong{
  margin-bottom: 15px;
  display: inline-block;
  width: 550px;
  background: rgb(56, 52, 52);
  color: #fff;
  padding: 10px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>

