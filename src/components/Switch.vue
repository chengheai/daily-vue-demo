<template>
  <el-container>
    <v-switch
      :value='checked'
      @click.native="changeSwitch()"
     />
  </el-container>
</template>

<script>
import vSwitch from './SwitchC';

export default {
  components: {
    'v-switch': vSwitch
  },
  data() {
    return {
      checked: false
    }
  },
  methods: {
    changeSwitch() {
      this.checked = !this.checked;
      console.log(this.checked);
    }
  }
}
</script>

<style>

</style>
