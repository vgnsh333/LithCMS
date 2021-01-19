<template>
  <div class="container text-center">
    <h1>Edit Project Details</h1>
    <form action="#" @submit.prevent>
      <div class="text-center">
        <label for="projects">Choose a project:</label>
        <input
          class="col col-form-label"
          list="project"
          name="projects"
          id="projects"
          @select="next"
          @blur="next"
          @change="next"
          v-model="selected"
        />

        <datalist id="project">
          <option
            class="col col-form-label"
            v-for="i in proj"
            v-bind:key="i.z"
          >{{i["TOPIC NO"]}}/{{i["TITLE"]}}</option>
        </datalist>

        <div class="container" v-if="sel">
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
            <label for="REMARKS" class="col-2 col-form-label">STATUS</label>
            <div class="col-10">
              <select
                id="stages"
                class="form-control"
                :value="projectDetails.Status"
                v-model="projectDetails.Status"
              >
                <option value="Stage-0">Stage-0</option>
                <option value="Stage-1">Stage-1</option>
                <option value="Stage-2">Stage-2</option>
                <option value="Stage-3">Stage-3</option>
                <option value="Stage-4">Stage-4</option>
                <option value="Stage-5">Stage-5</option>
                <option value="Stage-6">Stage-6</option>
                <option value="Stage-7">Stage-7</option>
                <option value="Stage-8">Stage-8</option>
              </select>
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
          <div class="form-group row">
            <label for="mem1name" class="col-2 col-form-label">Member 1 Name:</label>
            <div class="col-10">
              <input
                class="form-control"
                v-model="projectDetails.mem1name"
                type="text"
                placeholder="Member 1 Name"
                id="mem1name" 
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="mem1phno" class="col-2 col-form-label">Member 1 Phone No::</label>
            <div class="col-10">
              <input
                class="form-control"
                v-model="projectDetails.mem1phno"
                type="text"
                placeholder="Member 1 Phone Number"
                id="mem1phno"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="mem1id" class="col-2 col-form-label">Member 1 ID:</label>
            <div class="col-10">
              <input
                class="form-control"
                v-model="projectDetails.mem1id"
                type="text"
                placeholder="Member 1 ID"
                id="mem1id"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="mem2name" class="col-2 col-form-label">Member 2 Name:</label>
            <div class="col-10">
              <input
                class="form-control"
                v-model="projectDetails.mem2name"
                type="text"
                placeholder="Member 2 Name"
                id="mem2name"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="mem2phno" class="col-2 col-form-label">Member 2 Phone No:</label>
            <div class="col-10">
              <input
                class="form-control"
                v-model="projectDetails.mem2phno"
                type="text"
                placeholder="Member 2 Phone Number"
                id="mem2phno"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="mem2id" class="col-2 col-form-label">Member 2 ID:</label>
            <div class="col-10">
              <input
                class="form-control"
                v-model="projectDetails.mem2id"
                type="text"
                placeholder="Member 2 ID"
                id="mem2id"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="mem3name" class="col-2 col-form-label">Member 3 Name:</label>
            <div class="col-10">
              <input
                class="form-control"
                v-model="projectDetails.mem3name"
                type="text"
                placeholder="Member 3 Name"
                id="mem3name"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="mem3phno" class="col-2 col-form-label">Member 3 Phone No:</label>
            <div class="col-10">
              <input
                class="form-control"
                v-model="projectDetails.mem3phno"
                type="text"
                placeholder="Member 3 Phone Number"
                id="mem3phno"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="mem3id" class="col-2 col-form-label">Member 3 ID:</label>
            <div class="col-10">
              <input
                class="form-control"
                v-model="projectDetails.mem3id"
                type="text"
                placeholder="Member 3 ID"
                id="mem3id"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="clink" class="col-2 col-form-label">COORDINATION LINK:</label>
            <div class="col-10">
              <input
                class="form-control"
                v-model="projectDetails.clink"
                type="text"
                placeholder="Coordination link"
                id="clink"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="cname" class="col-2 col-form-label">COORDINATOR NAME:</label>
            <div class="col-10">
              <input
                class="form-control"
                v-model="projectDetails.cname"
                type="text"
                placeholder="Coordinator Name"
                id="cname"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="projectdrivelink" class="col-2 col-form-label">Project Drive Link:</label>
            <div class="col-10">
              <input
                class="form-control"
                v-model="projectDetails.projectdrivelink"
                type="text"
                placeholder="Project Drive Link"
                id="projectdrivelink"
              />
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
      @click="$router.push({name:'projectsPanel'})"
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
        AvailablePos: "",
        Status: "",
        mem1id: "",
        mem1phno: "",
        mem1name: "",
        mem2id: "",
        mem2phno: "",
        mem2name: "",
        mem3id: "",
        mem3phno: "",
        mem3name: "",
        projectdrivelink:'',
        clink:'',
        cname:''
      },
    };
  },
  methods: {
    next() {
      var str = this.selected;
      var s = str.split("/");
      var s1 = s[0];
      this.sel = s[0];
      var sel = this.sel;
      //console.log("here", this.sel);
      var pr = this.proj;
      //console.log(pr[sel]["AVAILABLE POSITIONS"]);
      //this.showNext = true;
      var PD = this.projectDetails;
      // console.log(pr[sel]["AVAILABLE POSITIONS"]);
      PD.Department = pr[sel]["DEPARTMENT"];
      PD.Title = pr[sel]["TITLE"];
      PD.Stream = pr[sel]["STREAM"];
      PD.Topicno = pr[sel]["TOPIC NO"];
      PD.Waitlist = pr[sel]["WAITLIST"];
      PD.WaitlistFilled = pr[sel]["WAITLIST FILLED"];
      PD.Teamid = pr[sel]["TEAM ID"];
      PD.TeamMembers = pr[sel]["TEAM MEMBER(S)"];
      PD.TeamSize = pr[sel]["TEAM SIZE"];
      PD.SME = pr[sel]["SME"];
      PD.Remarks = pr[sel]["REMARKS"];
      PD.ProjectID = pr[sel]["PRJ ID"];
      PD.PositionsFilled = pr[sel]["POSITIONS FILLED"];
      PD.AvailablePos = pr[sel]["AVAILABLE POSITIONS"];
      PD.Status = pr[sel]["STATUS"];
      PD.mem1id = pr[sel]["MEMBER1 ID"];
      PD.mem1phno = pr[sel]["MEMBER1 PHNO"];
      PD.mem1name = pr[sel]["MEMBER1 NAME"];
      PD.mem2id = pr[sel]["MEMBER2 ID"];
      PD.mem2phno = pr[sel]["MEMBER2 PHNO"];
      PD.mem2name = pr[sel]["MEMBER2 NAME"];
      PD.mem3id = pr[sel]["MEMBER3 ID"];
      PD.mem3phno = pr[sel]["MEMBER3 PHNO"];
      PD.mem3name = pr[sel]["MEMBER3 NAME"];
      PD.projectdrivelink = pr[sel]["PROJECT DRIVE LINK"];
      PD.clink = pr[sel]["COORDINATOR LINK"];
      PD.cname = pr[sel]["COORDINATOR NAME"];
      //console.log(PD.Status);
      //
    },
    edit() {
      //console.log(this.projectDetails);
      var newData = this.projectDetails;
      var entry = firebase
        .database()
        .ref("/")
        .child("1XrexxXgEP6yVVBp7fq6VMGLkv3EDhEsN17h9SaNfFzo")
        .child("Sheet2");
      var oldTopicNumber = this.sel;
      var topicnNoMatch = false;
      var newTopicNumber = newData.Topicno;
      var x;
      var projects = this.proj;
      for (x in projects) {
        if (newData.Topicno == x) {
          // console.log(newData.Topicno, x);
          topicnNoMatch = true;
        }
      }
      if (oldTopicNumber == newTopicNumber) {
        //if no edit in topic number
        // console.log("Match");
        entry.child(newData.Topicno).update(
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
            ["WAITLIST FILLED"]: newData.WaitlistFilled,
            ["STATUS"]: newData.Status,
            ["MEMBER1 ID"]: newData.mem1id,
            ["MEMBER1 PHNO"]: newData.mem1phno,
            ["MEMBER1 NAME"]: newData.mem1name,
            ["MEMBER2 ID"]: newData.mem2id,
            ["MEMBER2 PHNO"]: newData.mem2phno,
            ["MEMBER2 NAME"]: newData.mem2name,
            ["MEMBER3 ID"]: newData.mem3id,
            ["MEMBER3 PHNO"]: newData.mem3phno,
            ["MEMBER3 NAME"]: newData.mem3name,
            ["PROJECT DRIVE LINK"]: newData.projectdrivelink,
            ["COORDINATOR LINK"]: newData.clink,
            ["COORDINATOR NAME"]: newData.cname,
          },
          (err) => {
            if (err) {
              this.status = err;
            } else {
              this.status = "Project edited successfuly";
              this.selected = "";
              this.sel = null;
            }
          }
        );
      } else {
        // console.log("No match");
        if (topicnNoMatch) {
          this.status = "Topic Number already taken";
        } else {
          // console.log("2");
          entry.child(this.sel).remove();

          entry.child(newData.Topicno).update(
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
              ["WAITLIST FILLED"]: newData.WaitlistFilled,
              ["STATUS"]: newData.Status,
            },
            (err) => {
              if (err) {
                this.status = err;
              } else {
                this.status = "Project edited successfuly";
                this.selected = "";
                this.sel = null;
              }
            }
          );
        }
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
      .child("Sheet2")
      .once("value", (data) => {
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
      .once("value", (data) => {
        this.proj = data.val();
        //console.log(data.val());
      });
  },
};
</script>

<style>
</style>
