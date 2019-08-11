<template lang="pug">
  .home
      .wrapper
        p Нажмите на название ресурса сверху или введите название ресурса в адресную строку
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'home',
  components: {

  },
});
</script>
<style lang="stylus">
    .wrapper
        max-width 500px
</style>
