<template>
  <div>
    <InputEvent/>
  </div>
</template>
<script>
import InputEvent from "../components/InputEvent.vue";

export default {
  name:"AddEvent",
  data: () => ({
    drawer: true
  }),
  components: {
    InputEvent
  },

};
</script>