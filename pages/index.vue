<template>
  <div class="container">
    <h3>sign in</h3>
    <div class="mail_address">
      <h4>Mail Address</h4>
      <input type="text" id="mail_address" v-model="mail_address">
    </div>
    <div class="password">
      <h4>Password</h4>
      <input type="text" id="password" v-model="password">
    </div>
    <p class="error_message"></p>
    <button @click="login">sign in</button>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase.js'

export default {
  data() {
    return {
      mail_address: '',
      password: '',
      valid: false,
      valid_error: 'UserIDまたはPasswordが間違っています'
    }
  },
  methods: {
    login() {
      firebase.auth().signInWithEmailAndPassword(this.mail_address, this.password)
        .then(user => {
          this.$store.commit('login_state', this.mail_address, this.password)
          this.$router.push('top')
        }).catch((error) => {
          this.valid = true;
        })
    }
  },
  mounted() {
    alert(process.env.VUE_APP_apiKey)
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
