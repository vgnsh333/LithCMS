<template>
  <div class="container text-center">
    <h1 class>About</h1>
    <div class="container table-responsive-sm">
      <table class="table table-borderless">
        <tbody>
          <tr>
            <th scope="row">About</th>
            <td>{{this.$store.state.studentData.name}}</td>
          </tr>
          <tr>
            <th scope="row">Email</th>
            <td>{{this.$store.state.studentData.email}}</td>
          </tr>
          <tr>
            <th scope="row">Stream</th>
            <td>{{this.$store.state.studentData.stream}}</td>
          </tr>
          <tr>
            <th scope="row">Projects Chosen</th>
            <td>{{this.$store.state.studentData.projects}}</td>
          </tr>
          <tr>
            <th scope="row">Topic</th>
            <td>{{this.$store.state.studentData.topic}}</td>
          </tr>
          <tr>
            <th scope="row">Status</th>
            <td>{{this.$store.state.studentData.status}}</td>
          </tr>
          <tr v-if="this.$store.state.studentData.remarks">
            <th scope="row">Remarks</th>
            <td>{{this.$store.state.studentData.remarks}}</td>
          </tr>
          <tr>
            <td
              colspan="2"
              v-if="this.$store.state.studentData.projectsNum < 1 && this.$store.state.studentData.wlnum < 2"
            >
              <button class="btn btn-outline-success col-md-4" @click="project">Choose Project</button>
            </td>
            <td
              colspan="2"
              v-else-if="this.$store.state.studentData.projectsNum == 1  && this.$store.state.studentData.wlnum < 2"
            >
              <button
                class="btn btn-outline-success col-md-4"
                @click="projectDetails"
              >View Project Details</button>
            </td>
            <td colspan="2" v-else>
              <button
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#noProceed"
              >Choose Project</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      class="modal fade"
      id="noProceed"
      tabindex="-1"
      role="dialog"
      aria-labelledby="noProceedTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="noProceedTitle">Confirm Details:</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h3
              v-if="this.$store.state.studentData.projectsNum > 0"
            >You have already chosen a project.</h3>
            <h3
              v-if="this.$store.state.studentData.wlnum < 3 && this.$store.state.studentData.projectsNum < 1"
            >You can only waitlist 2 projects.</h3>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  methods: {
    project() {
      this.$router.push("/projects");
    },
    projectDetails() {
      this.$router.push("/projectstats");
    },
  },
  mounted() {
    if (
      this.$store.state.studentData.name == "" ||
      this.$store.state.studentData.name == null
    ) {
      this.$router.push("/");
    }
    var entry = firebase
      .database()
      .ref("/")
      .child("1XrexxXgEP6yVVBp7fq6VMGLkv3EDhEsN17h9SaNfFzo")
      .child("Sheet1");
    entry.child(this.$store.state.studentData.id).once("value", (data) => {
      var snap = data.val();
      if (snap === null) {
      } else {
        this.$store.state.studentData.projectsNum =
          snap["PROJECTS CHOSEN"] == "" ? 0 : snap["PROJECTS CHOSEN"];
        this.$store.state.studentData.wlnum =
          snap["WL CHOSEN"] == "" ? 0 : snap["WL CHOSEN"];
        this.$store.state.studentData.projects =
          snap["PROJECTS"] == "" ? "None" : snap["PROJECTS"];
        this.$store.state.studentData.projectdrivelink = snap["PROJECT DRIVE LINK"];
        this.$store.state.studentData.status = snap["STATUS"];
        this.$store.state.studentData.topic = snap["TOPIC"];
        this.$store.state.studentData.remarks = snap["REMARKS"];
      }
    });
  },
};
</script>

<style>
</style>