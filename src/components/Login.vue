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
                    placeholder="Enter your temporary ID (LTPL-TID-XXXX)."
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
              <div class="form-group text-center">
                <!-- <p>Enter your temporary ID (LTPL-TID-XXXX).</p> -->
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
        .child("Sheet1");
      entry.child(this.id).once("value", data => {
        var snap = data.val();
        if (snap === null) {
          this.error = "Invalid ID or Password";
        } else {
          this.error = null;
          this.$store.state.studentData.email = snap["EMAIL ID"];
          this.$store.state.studentData.name = snap.NAME;
          this.$store.state.user = snap.NAME;
          this.$store.state.studentData.stream = snap.STREAM;
          this.$store.state.studentData.id = snap["TEMP ID"];
          this.$store.state.studentData.tmpPwd = snap["TEMP PASSWORD"];
          this.$store.state.studentData.projectsNum =
            snap["PROJECTS CHOSEN"] == "" ? 0 : snap["PROJECTS CHOSEN"];
          this.$store.state.studentData.wlnum =
            snap["WL CHOSEN"] == "" ? 0 : snap["WL CHOSEN"];
          this.$store.state.studentData.projects =
            snap["PROJECTS"] == "" ? "None" : snap["PROJECTS"];

          if (this.pass == this.$store.state.studentData.tmpPwd) {
            this.$router.push("/about");
            this.$store.state.isLoggedIn = true;
            this.$store.state.isAdmin = false;
            // console.log("ye");
          } else {
            this.error = "Invalid ID or Password";
          }
        }
      });
    }
  }
};
</script>