<template>
  <div class="container text-center">
    <h1>Edit Student Details</h1>
    <form action="#" @submit.prevent>
      <div class="text-center">
        <label for="projects">Choose a Student:</label>
        <input
          class="col col-form-label"
          list="project"
          name="projects"
          id="projects"
          @select="next"
          @blur="next"
          v-model="selected"
        />

        <datalist id="project">
          <option
            class="col col-form-label"
            v-for="i in students"
            v-bind:key="i.z"
          >{{i['TEMP ID']}}/{{i['NAME']}}</option>
        </datalist>

        <div class="container" v-if="sel">
          <div class="accordion" id="accordionExample">
            <div class="card">
              <div class="card-header" id="headingTwo">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >PROJECT DETAILS</button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  <div class="form-group row">
                    <label for="PROJECTID" class="col-3 col-form-label">PROJECT ID</label>
                    <div class="col-9">
                      <input
                        class="form-control"
                        v-model="studentDetails.pid"
                        type="text"
                        placeholder="PROJECT ID"
                        id="PROJECTID"
                      />
                    </div>
                  </div>

                  <div class="form-group row">
                    <label for="PROJECTS" class="col-3 col-form-label">PROJECTS</label>
                    <div class="col-9">
                      <input
                        class="form-control"
                        v-model="studentDetails.projects"
                        type="text"
                        placeholder="PROJECTS"
                        id="PROJECTS"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="PROJECTCHOSEN" class="col-3 col-form-label">NO. OF PROJECT CHOSEN</label>
                    <div class="col-9">
                      <input
                        class="form-control"
                        v-model="studentDetails.projectsChosen"
                        type="text"
                        placeholder="Number of projects chosen."
                        id="PROJECTCHOSEN"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="PROJECTTEAMID" class="col-3 col-form-label">PROJECT TEAM ID</label>
                    <div class="col-9">
                      <input
                        class="form-control"
                        v-model="studentDetails.projectTeamID"
                        type="text"
                        placeholder="Project Team ID"
                        id="PROJECTTEAMID"
                      />
                    </div>
                  </div>

                  <div class="form-group row">
                    <label for="WAITLIST" class="col-3 col-form-label">WAITLIST</label>
                    <div class="col-9">
                      <input
                        class="form-control"
                        v-model="studentDetails.wl"
                        type="text"
                        placeholder="WAITLIST"
                        id="WAITLIST"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="WAITLISTCHOSEN" class="col-3 col-form-label">NO. OF WL PROJS CHOSEN</label>
                    <div class="col-9">
                      <input
                        class="form-control"
                        v-model="studentDetails.wlChosen"
                        type="number"
                        placeholder="NUMBER OF WL PROJS"
                        id="WAITLISTCHOSEN"
                        min="0"
                        max="2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingThree">
              <h2 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >STUDENT DETAILS</button>
              </h2>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <div class="form-group row">
                  <label for="TOPIC" class="col-3 col-form-label">TOPIC</label>
                  <div class="col-9">
                    <input
                      class="form-control"
                      v-model="studentDetails.topic"
                      type="text"
                      placeholder="TOPIC"
                      id="TOPIC"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="STATUS" class="col-3 col-form-label">STATUS</label>
                  <div class="col-9">
                    <input
                      class="form-control"
                      v-model="studentDetails.status"
                      type="text"
                      placeholder="STATUS"
                      id="STATUS"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="REMARKS" class="col-3 col-form-label">REMARKS</label>
                  <div class="col-9">
                    <input
                      class="form-control"
                      v-model="studentDetails.remarks"
                      type="text"
                      placeholder="REMARKS"
                      id="REMARKS"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="PASSWORD" class="col-3 col-form-label">PASSWORD</label>
                  <div class="col-9">
                    <input
                      class="form-control"
                      v-model="studentDetails.pwd"
                      type="text"
                      placeholder="Password"
                      id="PASSWORD"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            class="btn btn-outline-success"
            data-toggle="modal"
            data-target="#status"
            @click="edit"
          >Edit</button>
        </div>
      </div>
    </form>
    <button
      type="button"
      @click="$router.push({name:'StudentsPanel'})"
      class="btn btn-outline-success my-2"
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
      students: "",
      selected: "",
      sel: null,
      counter: 0,
      studDetail: "",
      status: "",
      studentDetails: {
        pid: "",
        projects: "",
        projectsChosen: "",
        projectTeamID: "",
        remarks: "",
        pwd: "",
        wl: "",
        wlChosen: "",
        topic:'',
        status:''
      },
    };
  },
  methods: {
    next() {
      if (this.selected != null && this.selected != "") {
        var str = this.selected;
        var s = str.split("/");
        var s1 = s[0];
        this.sel = s[0];
        var sel = this.sel;
        //console.log("here", this.sel);
        var students = this.students;
        //console.log(pr[sel]["AVAILABLE POSITIONS"]);
        //this.showNext = true;
        var SD = this.studentDetails;

        //console.log(students[sel]);
        //SD.projectdrivelink = students[sel]["PROJECT DRIVE LINK"];
        SD.pid = students[sel]["PID"];
        SD.projects = students[sel]["PROJECTS"];
        SD.projectsChosen = students[sel]["PROJECTS CHOSEN"];
        SD.projectTeamID = students[sel]["PROJTEAMID"];
        SD.remarks = students[sel]["REMARKS"];
        SD.pwd = students[sel]["TEMP PASSWORD"];
        SD.wl = students[sel]["WL"];
        SD.wlChosen = students[sel]["WL CHOSEN"];
        SD.topic = students[sel]["TOPIC"];
        SD.status = students[sel]["STATUS"];
        
      } else {
        this.sel = null;
      }
    },
    edit() {
      var newData = this.studentDetails;
      var entry = firebase
        .database()
        .ref("/")
        .child("1XrexxXgEP6yVVBp7fq6VMGLkv3EDhEsN17h9SaNfFzo")
        .child("Sheet1");
      var studentID = this.sel;
      if (studentID != null && studentID !="") {
        //if no edit in topic number
        // console.log("Match");
        entry.child(studentID).update(
          {
            ["PID"]: newData.pid,
            ["PROJECTS"]: newData.projects,
            ["PROJECTS CHOSEN"]: newData.projectsChosen,
            ["PROJTEAMID"]: newData.projectTeamID,
            ["WL"]: newData.wl,
            ["WL CHOSEN"]: newData.wlChosen,
            ["TOPIC"]: newData.topic,
            ["STATUS"]: newData.status,
            ["REMARKS"]: newData.remarks,
            ["TEMP PASSWORD"]: newData.pwd
          },
          (err) => {
            if (err) {
              this.status = err;
            } else {
              this.status = "Student Details edited successfuly";
              this.selected = "";
              this.sel = null;
            }
          }
        );
      } 
    },
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
      .child("Sheet1")
      .once("value", (data) => {
        this.students = data.val();
        //console.log(data.val());
      });
  },
  beforeUpdate() {
    var entry = firebase
      .database()
      .ref("/")
      .child("1XrexxXgEP6yVVBp7fq6VMGLkv3EDhEsN17h9SaNfFzo")
      .child("Sheet1")
      .once("value", (data) => {
        this.students = data.val();
        //console.log(data.val());
      });
  },
};
</script>

<style>
</style>
