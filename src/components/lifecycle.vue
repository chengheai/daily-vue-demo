<template>
  <div>
    async created()?? async mounted()??
    <ul>
      <li>load 2 => arr</li>
      <li v-for="(item, d) in arr" :key="d">
        <img :src="item" alt="" />
      </li>
    </ul>
    <br />
    <ul>
      <li>load 1 => arr1</li>
      <li v-for="(item, d) in arr1" :key="d">
        <img :src="item" alt="" />
      </li>
    </ul>
    <ul>
      <li>load 3 => arr2</li>
      <li v-for="(item, d) in arr2" :key="d">
        <img :src="item" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      arr: [],
      arr1: [],
      arr2: []
    };
  },
  methods: {
    async getData(type, arr) {
      const data = await axios.get(
        `https://dog.ceo/api/breeds/image/random/${type}`
      );
      console.log("arr: ", arr);
      this[arr] = data.data.message;
    },
    p1() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("ok");
          console.log("ok");
        }, 1000);
      });
    }
  },
  async created() {
    await this.p1();
    await this.getData(2, "arr");
  },
  async mounted() {
    await this.getData(1, "arr1");
    setTimeout(async () => {
      await this.getData(3, "arr2");
    }, 3000);
  }
};
</script>

<style lang="less" scoped>
img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
</style>
