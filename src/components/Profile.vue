<template>
    <div class="container">
        <div v-if="profile.user">
            <p>
                Full name: {{ fullName }}
            </p>
            <p>
                Email: {{ email }}
            </p>
        </div>
        <div v-if="profile.error">
            Oops an error occured
        </div>
    </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import {State, Action, Getter} from 'vuex-class';
  import {ProfileState} from '../store/profile/types';
  const namespace: string = 'profile';

  @Component
  export default class HelloWorld extends Vue {

    @Prop() private msg!: string;

    constructor() {
      super();
    }

    @State('profile') profile: ProfileState;
    @Action('fetchData', {namespace}) fetchData: any;
    @Getter('fullName', {namespace}) fullName: string;

    mounted() {
      // fetching data as soon as the component's been mounted
      this.fetchData();
    }

    // computed variable based on user's email
    get email() {
      const user = this.profile && this.profile.user;
      return (user && user.email) || '';
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
