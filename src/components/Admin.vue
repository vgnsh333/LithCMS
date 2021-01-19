<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header text-center">Login</div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form action="#" @submit.prevent="submit">
              <div class="form-group row">
                <label for="id" class="col-md-4 col-form-label text-md-right">ID</label>
                <div class="col-md-6">
                  <input
                    id="id"
                    type="text"
                    class="form-control"
                    name="ID"
                    value
                    required
                    autofocus
                    placeholder="Enter Admin ID."
                    v-model="id"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPassword" class="col-md-4 col-form-label text-md-right">Password</label>
                <div class="col-md-6">
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword"
                    placeholder="Password"
                    v-model="pass"
                  />
                </div>
              </div>
              <div class="form-group row mb-0 text-center">
                <div class="col">
                  <button type="submit" class="btn btn-primary">Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      id: "",
      error: null,
      pass: ""
    };
  },
  created() {
    this.$store.state.user = null;
  },
  methods: {
    submit() {
      var entry = firebase
        .database()
        .ref("/")
        .child("1XrexxXgEP6yVVBp7fq6VMGLkv3EDhEsN17h9SaNfFzo")
        .child("Admins");
      entry.once("value", data => {
          //console.log(data.val().Username)
          var cred = data.val();
          if(this.id == cred["Username"] && this.pass == cred["Password"]){
              // console.log("Hello Admin");
              this.$router.push("/adminpanel");
              this.$store.state.isAdmin = true;
              this.$store.state.isLoggedIn = true;
              this.$store.state.user = "Admin";
          }
          else{
              this.error = "Invalid Admin ID or Password."
          }
      });
    }
  }
};
</script>