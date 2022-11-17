<template>
  <div class="reset-password">
    <Modal v-show="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal" />
    <Loading v-show="loading" />
    <div class="form-wrap">
      <form class="reset">
        <h2>Reset Password</h2>
        <p>Forgot your password ? Enter your email to reset it</p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email" />
            <i class="icon fa-regular fa-envelope"></i>
          </div>
        </div>
        <button @click.prevent="resetPassword">Reset</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue"
import Loading from "@/components/Loading.vue"
import firebase from "@firebase/app"
import "firebase/auth"
export default {
  name: "forgotPasswordPage",
  components: { Modal, Loading },
  data() {
    return {
      email: "",
      modalMessage: "",
      modalActive: false,
      loading: null,
    }
  },
  methods: {
    resetPassword() {
      this.loading = true
      firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(() => {
          this.modalMessage = "If your account exists, you will receive a email"
          this.loading = false
          this.modalActive = true
          this.$router.push({ name: "login" })
        })
        .catch((err) => {
          this.modalMessage = err.message
          this.loading = false
          this.modalActive = true
        })
    },
    closeModal() {
      this.modalActive = !this.modalActive
      this.email = ""
    },
  },
}
</script>

<style lang="scss" scoped>
.reset-password {
  position: relative;
  .form-wrap {
    .reset {
      h2 {
        margin-bottom: 8px;
      }
      p {
        text-align: center;
        margin-bottom: 32px;
      }
    }
  }
}
</style>
