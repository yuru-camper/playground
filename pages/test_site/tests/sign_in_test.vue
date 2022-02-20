<template>
  <div class="sign_in_test">
    <div class="sign_in --with_mail">
      <h3>sign in</h3>
      <div class="mail_address">
        <h4>Mail Address</h4>
        <input type="text" id="mail_address" v-model="mail_address">
      </div>
      <div class="password">
        <h4>Password</h4>
        <input type="text" id="password" v-model="password">
      </div>
      <p class="error_message" v-show="valid">
        {{ valid_error }}
      </p>
      <button data-sitekey="6LdahKoZAAAAAKTZES6Pvb_rHibLkwp8o0tvupNu" @click="recaptcha">recaptcha</button>
      {{ recap_judge }}
      <button @click="login">sign in</button>
    </div>
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
      valid_error: 'UserIDまたはPasswordが間違っています',
      recap_judge: ''
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
    },
    recaptcha(e) {
      e.preventDefault()
      grecaptcha.ready(function() {
        grecaptcha.execute('6LdahKoZAAAAAKTZES6Pvb_rHibLkwp8o0tvupNu', {action: 'submit'}).then(token => {
            this.recap_judge = token
            console.log('in: ' + this.recap_judge)
        })
        console.log('out: ' + this.recap_judge)
      })
    }
  }
}
</script>

<style lang="scss">
.sign_in_test {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
