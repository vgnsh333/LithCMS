<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header text-center">Change Password</div>
          <div class="card-body">
            <form action="#" @submit.prevent>
              <div class="form-group row">
                <label for="id" class="col-md-4 col-form-label text-md-right">New Password</label>
                <div class="col-md-6">
                  <input
                    id="id"
                    :type="pwdType"
                    class="form-control"
                    name="ID"
                    value
                    required
                    autofocus
                    minlength="8"
                    placeholder="Password"
                    v-model="pass1"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label
                  for="inputPassword"
                  class="col-md-4 col-form-label text-md-right"
                >Confirm New Password</label>
                <div class="col-md-6">
                  <input
                    :type="pwdType"
                    class="form-control"
                    id="inputPassword"
                    placeholder="Password"
                    required
                    minlength="8"
                    v-model="pass2"
                  />
                </div>
              </div>
              <div class="form-group text-center">
                <div>
                  <label for="changePwdType" class="col-form-label text-md-right mx-2">Show Password</label>
                  <input
                    type="checkbox"
                    id="changePwdType"
                    placeholder="Password"
                    @click="changePwdType"
                  />
                </div>
              </div>
              <div class="form-group row mb-0 text-center">
                <div class="col">
                  <button
                    type="submit"
                    data-toggle="modal"
                    data-target="#passChanged"
                    class="btn btn-primary"
                    @click="updatePass"
                  >Change Passsword</button>
                </div>
              </div>
            </form>
            
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="passChanged"
      tabindex="-1"
      role="dialog"
      aria-labelledby="passChangedTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Password Changed</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" >{{error}}</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              v-if="suc"
              @click="redirectAbout"
            >Close</button>
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              v-else
            >Close</button>
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
      pass1: '',
      pass2: '',
      error: null,
      pwdType: "password",
      suc:false
    };
  },
  methods: {
    changePwdType() {
      this.pwdType = this.pwdType === "password" ? "text" : "password";
    },
    updatePass() {
      var fpwd = this.pass1;
      var spwd = this.pass2;
      var entry = firebase
        .database()
        .ref("/")
        .child("1XrexxXgEP6yVVBp7fq6VMGLkv3EDhEsN17h9SaNfFzo")
        .child("Sheet1")
        .child(this.$store.state.studentData.id);
      if (fpwd == spwd) {
        // console.log("E");
        var len = fpwd.length;
        if (len > 7) {
          entry.update({
            ["TEMP PASSWORD"]: fpwd,
          });
          this.suc = true;
          this.error = "Password Changed Successfully.";
        }
        else{
          this.error = "Password should have minimum 8 characters."
        }
      } else {
        this.error = "Entered passwords do not match.";
      }
    },
    redirectAbout() {
      this.$router.push("/about");
    },
  },
  created() {
    if (
      this.$store.state.studentData.name == "" ||
      this.$store.state.studentData.name == null
    ) {
      this.$router.push("/");
    }
  },
};
</script>

<style>
</style>