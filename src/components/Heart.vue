<template>
  <div>
    <toggle-button @change="onChangeEventHandler" />

    <toggle-button v-model="myDataVariable" />
    {{myDataVariable}}
    <toggle-button :value="false" color="#82C7EB" :sync="true" :labels="true" />

    <toggle-button :value="true" :labels="{checked: 'Foo', unchecked: 'Bar'}" />
    <toggle-button color='red' switch-color='yellow' :width='200' :height='20' :value="true" :labels="{checked: 'Foo', unchecked: 'Bar'}" />
    <toggle-button :color="{checked: '#00FF00', unchecked: '#FF0000', disabled: '#CCCCCC'}" :width='100' :height='30' :value="true" :labels="{checked: 'Foo', unchecked: 'Bar'}" />
  </div>
</template>

<script>
import ToggleButton from './../pages/switch.vue';
export default {
  components: {
    'toggle-button': ToggleButton
  },
  data() {
    return {
      myDataVariable: ''
    };
  },
  methods: {
    onChangeEventHandler(val) {
      console.log(val);
    }
  }
};
</script>

<style>
</style>
