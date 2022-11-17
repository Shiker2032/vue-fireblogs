<template>
  <div class="reset-password">
    <div class="form-wrap">
      <form class="register">
        <p class="login-register">
          Already have an account
          <router-link class="router-link" :to="{ name: 'login' }">Login</router-link>
        </p>
        <h2>Create your account</h2>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="First Name" v-model="firstName" />
            <i class="icon fa-regular fa-envelope"></i>
          </div>
          <div class="input">
            <input type="text" placeholder="Last Name" v-model="lastName" />
            <i class="icon fa-solid fa-lock"></i>
          </div>
          <div class="input">
            <input type="text" placeholder="UserName" v-model="username" />
            <i class="icon fa-solid fa-lock"></i>
          </div>
          <div class="input">
            <input type="text" placeholder="Email" v-model="email" />
            <i class="icon fa-solid fa-lock"></i>
          </div>
          <div class="input">
            <input type="password" placeholder="Password" v-model="password" />
            <i class="icon fa-solid fa-lock"></i>
          </div>
        </div>
        <div v-show="error" class="error">{{ this.errorMessage }}</div>
        <button @click.prevent="register">Sign Up</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app"
import "firebase/auth"
import db from "../firebase/firebaseInit"
export default {
  name: "registerPage",
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      error: "",
      errorMessage: "",
    }
  },
  methods: {
    async register() {
      if (
        this.email === "" ||
        this.password === " " ||
        this.firstName === " " ||
        this.lastName === " " ||
        this.username === ""
      ) {
        this.error = true
        this.errorMessage = "Please fill out all the fields"
      } else {
        this.error = false
        this.errorMessage = ""
        const firebaseAuth = await firebase.auth()
        const createUser = await firebaseAuth.createUserWithEmailAndPassword(
          this.email,
          this.password
        )
        const res = await createUser
        const dataBase = db.collection("users").doc(res.user.uid)
        await dataBase.set({
          email: this.email,
          username: this.username,
          firestName: this.firstName,
          lastName: this.lastName,
        })
        this.$router.push({ name: "home" })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.register {
  h2 {
    max-width: 350px;
  }
}
</style>
