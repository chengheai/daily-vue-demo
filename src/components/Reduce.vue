<template>
  <div>
    <div><pre>{{list}}</pre></div>
    <div><pre>{{list2}}</pre></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          type: 2,
          amount: 333,
          price: 333
        },
        {
          type: 1,
          amount: 11,
          price: 111
        },
        {
          type: 1,
          amount: 22,
          price: 222
        }
      ],
      list2: [
        {
          type: 1,
          arrList: [
            {
              type: 1,
              amount: 11,
              price: 111
            },
            {
              type: 1,
              amount: 22,
              price: 222
            }
          ]
        },
        {
          type: 2,
          arrList: [
            {
              type: 2,
              amount: 333,
              price: 333
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>

</style>
