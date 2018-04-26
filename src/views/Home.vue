<template>
  <div class="home">
    <img src="../assets/logo.png">
    <Profile msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Profile from '@/components/Profile.vue'; // @ is an alias to /src

@Component({
  components: {
    Profile,
  },
})
export default class Home extends Vue {}
</script>
