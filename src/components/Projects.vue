<template>
  <div class="container text-center">
    <h1>Project Selection</h1>
    <!-- <p class="text-right">Time left : {{timer/1000}}</p> -->
    <form action="#" @submit.prevent>
      <div class="text-center">
        <label for="projects" class="col-sm-2 col-form-label">Choose a project:</label>
        <select required class="col col-form-label" id="projects" @change="next" v-model="selected">
          <option disabled value>Please select one</option>
          <option v-for="i in proj" v-bind:key="i.z">{{i["TOPIC NO"]}}/{{i.TITLE}}</option>
        </select>
        <!-- <button @click="next">Next</button> -->
        <div class="container" v-if="sel">
          <table class="table table-dark table-bordered table-hover my-2">
            <tbody>
              <tr>
                <th scope="row">TITLE:</th>
                <td>{{ proj[sel]["TITLE"]}}</td>
              </tr>
              <tr>
                <th scope="row">TOPIC NO:</th>
                <td>{{ proj[sel]["TOPIC NO"]}}</td>
              </tr>
              <tr>
                <th scope="row">STREAM</th>
                <td>{{ proj[sel]["STREAM"]}}</td>
              </tr>
              <tr>
                <th scope="row">AVAILABLE POSITIONS</th>
                <td>{{ proj[sel]["AVAILABLE POSITIONS"]}}</td>
              </tr>
              <tr>
                <th scope="row">POSITIONS FILLED:</th>
                <td>{{ proj[sel]["POSITIONS FILLED"]==""? "0": proj[sel]["POSITIONS FILLED"] }}</td>
              </tr>
              <tr>
                <th scope="row">TEAM MEMBER(S):</th>
                <td>{{ proj[sel]["TEAM MEMBER(S)"]==""? "None": proj[sel]["TEAM MEMBER(S)"] }}</td>
              </tr>
              <tr>
                <th scope="row">DEPARTMENT</th>
                <td>{{ proj[sel]["DEPARTMENT"]}}</td>
              </tr>
              <tr>
                <th scope="row">PRJ ID:</th>
                <td>{{ proj[sel]["PRJ ID"]}}</td>
              </tr>
              <tr>
                <th scope="row">TEAM ID:</th>
                <td>{{ proj[sel]["TEAM ID"]}}</td>
              </tr>
              <tr>
                <th scope="row">WAITLIST FILLED:</th>
                <td>{{ proj[sel]["WAITLIST FILLED"]==""? "0": proj[sel]["WAITLIST FILLED"] }}</td>
              </tr>
              <tr>
                <th scope="row">WAITLISTED STUDENTS:</th>
                <td>{{ proj[sel]["WAITLIST"]==""? "None": proj[sel]["WAITLIST"] }}</td>
              </tr>
            </tbody>
          </table>
          <button
            class="btn btn-primary"
            v-if="proj[sel]['WAITLIST FILLED'] < 2 && !studentAlreadyInProject"
            data-toggle="modal"
            data-target="#proceed"
          >Proceed</button>
          <button
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#noProceed"
            v-else
          >Proceed</button>
          <!-- Modal -->
          <div
            class="modal fade"
            id="proceed"
            tabindex="-1"
            role="dialog"
            aria-labelledby="proceedTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="proceedTitle">Confirm Details:</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <h3 v-if="status">{{status}}</h3>
                  <table class="table table-light table-bordered table-hover">
                    <tbody>
                      <tr>
                        <th scope="row">TITLE:</th>
                        <td>{{ proj[sel]["TITLE"]}}</td>
                      </tr>
                      <tr>
                        <th scope="row">TOPIC NO:</th>
                        <td>{{ proj[sel]["TOPIC NO"]}}</td>
                      </tr>
                      <tr v-if="proj[sel]['AVAILABLE POSITIONS'] == 0">
                        <th scope="row">AVAILABLE POSITIONS</th>
                        <td>{{ proj[sel]["AVAILABLE POSITIONS"]}}, You will be waitlisted.</td>
                      </tr>
                      <tr v-else>
                        <th scope="row">AVAILABLE POSITIONS</th>
                        <td>{{ proj[sel]["AVAILABLE POSITIONS"]}}</td>
                      </tr>
                      <tr>
                        <th scope="row">DEPARTMENT</th>
                        <td>{{ proj[sel]["DEPARTMENT"]}}</td>
                      </tr>
                      <tr>
                        <th scope="row">Student Name:</th>
                        <td>{{this.$store.state.studentData.name}}</td>
                      </tr>
                      <tr>
                        <th scope="row">Student ID:</th>
                        <td>{{this.$store.state.studentData.id}}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                  <button
                    type="button"
                    class="btn btn-success"
                    data-dismiss="modal"
                    @click="confirmProject(sel)"
                  >Confirm!</button>
                </div>
              </div>
            </div>
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
                  <h3 v-if="studentAlreadyInProject">You can't choose the same project again.</h3>
                  <h3
                    v-else
                  >All the slots for this project are filled. Please choose another project.</h3>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-success" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <button
      type="button"
      @click="$router.push({name:'About'})"
      class="btn btn-outline-success btn-md my-2"
    >Back</button>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      proj: "",
      selected: "",
      sel: null,
      studDetail: "",
      status: null,
      studentAlreadyInProject: false,
      timer: setInterval(() => {
        var entry = firebase
          .database()
          .ref("/")
          .child("1XrexxXgEP6yVVBp7fq6VMGLkv3EDhEsN17h9SaNfFzo")
          .child("Sheet2")
          .once("value", (data) => {
            this.proj = data.val();
            // console.log("in timer?");
          });
        var sheet1 = firebase
          .database()
          .ref("/")
          .child("1XrexxXgEP6yVVBp7fq6VMGLkv3EDhEsN17h9SaNfFzo")
          .child("Sheet1")
          .child(this.$store.state.studentData.id);
        sheet1.once("value", (data) => {
          this.studDetail = data.val();
          //console.log(this.studDetail["PROJECTS CHOSEN"] == "" ? 0 : this.studDetail["PROJECTS CHOSEN"])
        });
      }, 10000),
    };
  },
  methods: {
    hey() {
      var prev;
      var entry = firebase
        .database()
        .ref("/")
        .child("1XrexxXgEP6yVVBp7fq6VMGLkv3EDhEsN17h9SaNfFzo")
        .child("Sheet2")
        .child("VRIP001");
      entry.child("waitlist").set("1");
    },
    next() {
      var str = this.selected;
      var s = str.split("/");
      var s1 = s[0];
      this.sel = s[0];
      //console.log("here", this.sel);
      var pr = this.proj;
      var teamMember = pr[this.sel]["WAITLIST"];
      var studentId = this.$store.state.studentData.id;
      this.studentAlreadyInProject = false;
      if (teamMember.includes(studentId)) {
        this.studentAlreadyInProject = true;
      }
      //console.log(pr[sel]["AVAILABLE POSITIONS"]);
      //this.showNext = true;
    },
    confirmProject(code) {
      var projectcode = code;
      var project = this.proj;
      var posFilled =
        project[projectcode]["POSITIONS FILLED"] == ""
          ? 0
          : project[projectcode]["POSITIONS FILLED"];
      var posTotal = project[projectcode]["AVAILABLE POSITIONS"];
      var waitlistFilled =
        project[projectcode]["WAITLIST FILLED"] == ""
          ? 0
          : project[projectcode]["WAITLIST FILLED"];
      var entry = firebase
        .database()
        .ref("/")
        .child("1XrexxXgEP6yVVBp7fq6VMGLkv3EDhEsN17h9SaNfFzo")
        .child("Sheet2")
        .child(projectcode);
      var studentId = this.$store.state.studentData.id;
      var teamMember = project[projectcode]["TEAM MEMBER(S)"];
      var topic = project[projectcode]["TITLE"];
      var teamID = project[projectcode]["TEAM ID"];
      var projID = project[projectcode]["PRJ ID"];
      var wlist = project[projectcode]["WAITLIST"];
      var stwlist = this.studDetail["WL"];
      // console.log(
      //   projectcode,
      //   posFilled,
      //   posTotal,
      //   teamMember,
      //   studentId,
      //   wlist
      // );

      var sheet1 = firebase
        .database()
        .ref("/")
        .child("1XrexxXgEP6yVVBp7fq6VMGLkv3EDhEsN17h9SaNfFzo")
        .child("Sheet1")
        .child(studentId);

      var projectsChosen =
        this.studDetail["PROJECTS CHOSEN"] == ""
          ? 0
          : this.studDetail["PROJECTS CHOSEN"];

      var wlChosen =
        this.studDetail["WL CHOSEN"] == "" ? 0 : this.studDetail["WL CHOSEN"];

      var projects = this.studDetail["PROJECTS"];
      var projString = projects;
      var teamMemberString = teamMember;
      var TempID = this.studDetail["TEMP ID"];
      var strOfTID = TempID.split("TID");
      var MemberInternId = strOfTID[0] + "INTERN" + strOfTID[1];
      if (teamMemberString == "") {
        teamMemberString = MemberInternId;
      } else {
        teamMemberString = teamMemberString + "/" + MemberInternId;
      }

      if (projString == "") {
        projString = projectcode;
      } else {
        projString = projString + "/" + projectcode;
      }
      if (posFilled < 3) {
        sheet1.update({
          ["PROJECTS CHOSEN"]: projectsChosen + 1,
          ["PROJECTS"]: projString,
          ["PID"]: projID,
          ["PROJTEAMID"]: teamID,
          ["STATUS"]: "Project chosen.",
          ["TOPIC"]: topic,
        });
        var MemberName = "MEMBER" + (Number(posFilled) + 1) + " NAME";
        var MemberID = "MEMBER" + (Number(posFilled) + 1) + " ID";
        var MemberPhno = "MEMBER" + (Number(posFilled) + 1) + " PHNO";

        entry.update({
          ["TEAM MEMBER(S)"]: teamMemberString,
          ["POSITIONS FILLED"]: posFilled + 1,
          ["TEAM SIZE"]: posFilled + 1,
          ["AVAILABLE POSITIONS"]: posTotal - 1,
          [MemberName]: this.studDetail["NAME"],
          [MemberID]: MemberInternId,
          [MemberPhno]: this.studDetail["PH NO"],
        });

        entry.on("value", (data) => {
          this.proj = data.val();
          // console.log(data.val());
        });
        this.$router.push("/about");
      } else if (waitlistFilled < 2) {
        sheet1.update({
          ["WL CHOSEN"]: wlChosen + 1,
          ["WL"]: stwlist == "" ? projectcode : stwlist + "/" + projectcode,
        });
        entry.update({
          ["WAITLIST FILLED"]: waitlistFilled + 1,
          ["WAITLIST"]: wlist == "" ? MemberInternId : wlist + "/" + MemberInternId,
        });
        this.$router.push("/about");
      } else {
        // console.log("Exceeded");
        this.status = "You have already chosen this project.";
      }
    },
  },
  created() {
    if (
      this.$store.state.studentData.name == "" ||
      this.$store.state.studentData.name == null
    ) {
      this.$router.push("/");
    }
    // setInterval(() => {
    //   this.timer -= 1000;
    //   if (this.timer == 0) {
    //     this.$router.push("/about");
    //   }
    // }, 1000);
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
    var sheet1 = firebase
      .database()
      .ref("/")
      .child("1XrexxXgEP6yVVBp7fq6VMGLkv3EDhEsN17h9SaNfFzo")
      .child("Sheet1")
      .child(this.$store.state.studentData.id);
    sheet1.once("value", (data) => {
      this.studDetail = data.val();
      //console.log(this.studDetail["PROJECTS CHOSEN"] == "" ? 0 : this.studDetail["PROJECTS CHOSEN"])
    });
    this.timer;
  },
  beforeDestroy() {
    // clearInterval(this.timer);
    window.clearInterval(this.timer);
    // console.log("Y?");
  },
};
</script>

<style>
</style>