<template>
  <div class="container text-center">
    <h1>New Project Details</h1>
    <form action="#" @submit.prevent>
      <div class="text-center">
        <div class="container">
          <div class="form-group row pt-4">
            <label for="DEPARTMENT" class="col-2 col-form-label">DEPARTMENT</label>
            <div class="col-10">
              <input
                class="form-control"
                v-model="projectDetails.Department"
                type="text"
                placeholder="Department"
                id="DEPARTMENT"
              />
            </div>
          </div>

          <div class="form-group row">
            <label for="TITLE" class="col-2 col-form-label">TITLE</label>
            <div class="col-10">
              <input
                class="form-control"
                v-model="projectDetails.Title"
                type="text"
                placeholder="Title"
                id="TITLE"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="STREAM" class="col-2 col-form-label">STREAM</label>
            <div class="col-10">
              <input
                class="form-control"
                v-model="projectDetails.Stream"
                type="text"
                placeholder="Stream"
                id="STREAM"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="TOPICNO" class="col-2 col-form-label">TOPIC NO</label>
            <div class="col-10">
              <input
                class="form-control"
                v-model="projectDetails.Topicno"
                type="text"
                placeholder="Topic No"
                id="TOPICNO"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="WAITLIST" class="col-2 col-form-label">WAITLIST</label>
            <div class="col-10">
              <input
                class="form-control"
                v-model="projectDetails.Waitlist"
                type="text"
                placeholder="Waitlist"
                id="WAITLIST"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="WAITLISTFILLED" class="col-2 col-form-label">WAITLIST FILLED</label>
            <div class="col-10">
              <input
                class="form-control"
                v-model="projectDetails.WaitlistFilled"
                type="number"
                placeholder="Waitlist filled"
                id="WAITLISTFILLED"
                min="0"
                max="2"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="TEAMID" class="col-2 col-form-label">TEAM ID</label>
            <div class="col-10">
              <input
                class="form-control"
                v-model="projectDetails.Teamid"
                type="text"
                placeholder="Team ID"
                id="TEAMID"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="TEAMMEMBERS" class="col-2 col-form-label">TEAM MEMBER(S)</label>
            <div class="col-10">
              <input
                class="form-control"
                v-model="projectDetails.TeamMembers"
                type="text"
                placeholder="Team Members"
                id="TEAMMEMBERS"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="TEAMSIZE" class="col-2 col-form-label">TEAM SIZE</label>
            <div class="col-10">
              <input
                class="form-control"
                v-model="projectDetails.TeamSize"
                type="text"
                placeholder="Team Size"
                id="TEAMSIZE"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="SME" class="col-2 col-form-label">SME</label>
            <div class="col-10">
              <input
                class="form-control"
                v-model="projectDetails.SME"
                type="text"
                placeholder="SME"
                id="SME"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="REMARKS" class="col-2 col-form-label">REMARKS</label>
            <div class="col-10">
              <input
                class="form-control"
                v-model="projectDetails.Remarks"
                type="text"
                placeholder="Remarks"
                id="REMARKS"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="PRJID" class="col-2 col-form-label">PRJ ID</label>
            <div class="col-10">
              <input
                class="form-control"
                v-model="projectDetails.ProjectID"
                type="text"
                placeholder="Project ID"
                id="PRJID"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="POSITIONSFILLED" class="col-2 col-form-label">POSITIONS FILLED</label>
            <div class="col-10">
              <input
                class="form-control"
                v-model="projectDetails.PositionsFilled"
                type="number"
                placeholder="Positions filled"
                id="POSITIONSFILLED"
                min="0"
                max="3"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="AVAILABLEPOSITIONS" class="col-2 col-form-label">AVAILABLE POSITIONS</label>
            <div class="col-10">
              <input
                class="form-control"
                type="number"
                placeholder="Available positions"
                id="AVAILABLEPOSITIONS"
                min="0"
                max="3"
                v-model="projectDetails.AvailablePos"
              />
            </div>
          </div>
          <button
            type="button"
            class="btn btn-outline-success"
            data-toggle="modal"
            data-target="#status"
            @click="addProject"
          >Add Project</button>
        </div>
      </div>
    </form>
    <button
      type="button"
      @click="$router.push({name:'projectsPanel'})"
      class="btn btn-outline-primary my-2"
    >Back</button>
    <!-- Modal -->
    <div
      class="modal fade"
      id="status"
      tabindex="-1"
      role="dialog"
      aria-labelledby="statusTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="statusTitle">Status</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p style="display:none">{{counter}}</p>
            {{status}}
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              @click="counter++"
            >Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase, { database } from "firebase";
export default {
  data() {
    return {
      proj: "",
      selected: "",
      sel: null,
      counter: 0,
      studDetail: "",
      status: "",
      projectDetails: {
        Department: "",
        Title: "",
        Stream: "",
        Topicno: "",
        Waitlist: "",
        WaitlistFilled: "",
        Teamid: "",
        TeamMembers: "",
        TeamSize: "",
        SME: "",
        Remarks: "",
        ProjectID: "",
        PositionsFilled: "",
        AvailablePos: ""
      }
    };
  },
  methods: {
    addProject() {
      //console.log(this.projectDetails);
      var newData = this.projectDetails;
      var entry = firebase
        .database()
        .ref("/")
        .child("1XrexxXgEP6yVVBp7fq6VMGLkv3EDhEsN17h9SaNfFzo")
        .child("Sheet2");
      var topicNoMatch = false;
      var newTopicNumber = newData.Topicno;
      var x;
      var projects = this.proj;
      for (x in projects) {
        if (newData.Topicno == x) {
          //   console.log(newData.Topicno, x);
          topicNoMatch = true;
          break;
        }
      }
      if (topicNoMatch) {
        //if no edit in topic number
        //console.log("Match");
        this.status =
          "Project with topic number already exists, please choose another number.";
      } else {
        entry.child(newData.Topicno).set(
          {
            ["AVAILABLE POSITIONS"]: newData.AvailablePos,
            ["DEPARTMENT"]: newData.Department,
            ["POSITIONS FILLED"]: newData.PositionsFilled,
            ["PRJ ID"]: newData.ProjectID,
            ["REMARKS"]: newData.Remarks,
            ["SME"]: newData.SME,
            ["STREAM"]: newData.Stream,
            ["TEAM ID"]: newData.Teamid,
            ["TEAM MEMBER(S)"]: newData.TeamMembers,
            ["TEAM SIZE"]: newData.TeamSize,
            ["TITLE"]: newData.Title,
            ["TOPIC NO"]: newData.Topicno,
            ["WAITLIST"]: newData.Waitlist,
            ["WAITLIST FILLED"]: newData.WaitlistFilled
          },
          err => {
            if (err) {
              this.status = err;
            } else {
              this.status = "Project added successfuly";
            }
          }
        );
      }
    }
  },
  created() {
    if (
      this.$store.state.isAdmin == false &&
      this.$store.state.isLoggedIn == false
    ) {
      this.$router.push("/adminbase");
    }
  },
  beforeMount() {
    var entry = firebase
      .database()
      .ref("/")
      .child("1XrexxXgEP6yVVBp7fq6VMGLkv3EDhEsN17h9SaNfFzo")
      .child("Sheet2")
      .once("value", data => {
        this.proj = data.val();
        //console.log(data.val());
      });
  },
  beforeUpdate() {
    var entry = firebase
      .database()
      .ref("/")
      .child("1XrexxXgEP6yVVBp7fq6VMGLkv3EDhEsN17h9SaNfFzo")
      .child("Sheet2")
      .once("value", data => {
        this.proj = data.val();
        //console.log(data.val());
      });
  }
};
</script>

<style>
</style>