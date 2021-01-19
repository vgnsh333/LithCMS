<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container">
      <div to="/" class="navbar-brand">
        <img
          alt="logo"
          src="../assets/logo.png"
          class="d-inline-block align-middle mr-1"
          style=" border-radius: 50px;
          background: white;"
          width="75vh"
          height="75vh"
        />
      </div>
      <span class="navbar-brand">Virtual Research Internship Program</span>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse navbar-right" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto"></ul>
        <ul class="navbar-nav ml-auto">
          <template v-if="$store.state.isLoggedIn && !$store.state.isAdmin">
            <!-- <div class="nav-link text-center" style="color:white">{{user.data.displayName}}</div> -->
           
            <li class="nav-item text-center">
              <router-link class="nav-link" to="/about" @click.prevent>About</router-link>
            </li>
            <li class="nav-item text-center">
              <router-link class="nav-link" to="/changepass" @click.prevent>Change Password</router-link>
            </li>
            <li class="nav-item text-center">
              <a class="nav-link" @click.prevent="signOut">Sign out</a>
            </li>
          </template>
          <template v-if="$store.state.isLoggedIn && $store.state.isAdmin">
            <!-- <div class="nav-link text-center" style="color:white">{{user.data.displayName}}</div> -->
            <li class="nav-item text-center">
              <router-link class="nav-link" :to="{name:'projectsPanel'}" @click.prevent>Projects</router-link>
            </li>
            <li class="nav-item text-center">
              <router-link class="nav-link" :to="{name:'StudentsPanel'}" @click.prevent>Students</router-link>
            </li>
            <li class="nav-item text-center">
              <a class="nav-link" @click.prevent="signOut">Sign out</a>
            </li>
          </template>
          <template v-if="!$store.state.isLoggedIn">
            <li class="nav-item">
              <router-link to="/" class="nav-link text-center">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="register" class="nav-link text-center">Register</router-link>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  computed: {},
  methods: {
    signOut() {
      this.$router.push("/");
      this.$store.state.isLoggedIn = false;
    }
  }
};
</script>