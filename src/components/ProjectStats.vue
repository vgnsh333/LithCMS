<template>
  <div class="container text-center">
    <h1>Project Details:</h1>
    <div class="container" v-if="this.$store.state.studentData.projects">
      <table class="table table-sm table-dark table-striped table-bordered table-hover my-2">
        <tbody>
          <!-- <tr v-for="(data,index) in projects" v-bind:key="data.z">
                <th scope="row">{{ index}}</th>
                <td>{{data}}</td>
          </tr>-->
          <tr>
            <th>TEAM ID</th>
            <td>{{projects["TEAM ID"]}}</td>
          </tr>
          <tr>
            <th>PRJ ID</th>
            <td>{{projects["PRJ ID"]}}</td>
          </tr>
          <tr>
            <th>TITLE</th>
            <td>{{projects["TITLE"]}}</td>
          </tr>
          <tr>
            <th>STATUS</th>
            <td>
              <div class="progress mx-4 text-center" style="height:25px">
                <div
                  v-bind:class="getColor(projects['STATUS'])"
                  role="progressbar"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  v-bind:style="{width: calculatePercentage(projects['STATUS']) + '%'}"
                ></div>
              </div>
              <h6 class>{{projects["STATUS"]}}</h6>
            </td>
          </tr>
          <!-- <tr>
            <th>DEPARTMENT</th>
            <td>{{projects["DEPARTMENT"]}}</td>
          </tr>-->
          <tr>
            <th>MEMBER1 ID</th>
            <td>{{projects["MEMBER1 ID"]}}</td>
          </tr>
          <tr>
            <th>MEMBER1 NAME</th>
            <td>{{projects["MEMBER1 NAME"]}}</td>
          </tr>
          <tr>
            <th>MEMBER1 PHNO</th>
            <td>{{projects["MEMBER1 PHNO"]}}</td>
          </tr>
          <tr>
            <th>MEMBER2 ID</th>
            <td>{{projects["MEMBER2 ID"]}}</td>
          </tr>
          <tr>
            <th>MEMBER2 NAME</th>
            <td>{{projects["MEMBER2 NAME"]}}</td>
          </tr>
          <tr>
            <th>MEMBER2 PHNO</th>
            <td>{{projects["MEMBER2 PHNO"]}}</td>
          </tr>
          <tr>
            <th>MEMBER3 ID</th>
            <td>{{projects["MEMBER3 ID"]}}</td>
          </tr>
          <tr>
            <th>MEMBER3 NAME</th>
            <td>{{projects["MEMBER3 NAME"]}}</td>
          </tr>
          <tr>
            <th>MEMBER3 PHNO</th>
            <td>{{projects["MEMBER3 PHNO"]}}</td>
          </tr>
          <tr>
            <th>COORDINATOR NAME</th>
            <td>{{projects["COORDINATOR NAME"]}}</td>
          </tr>
          <tr>
            <th>COORDINATION LINK</th>
            <td>{{projects["COORDINATOR LINK"]}}</td>
          </tr>
          <tr>
            <th>PROJECT DRIVE LINK</th>
            <td>{{projects["PROJECT DRIVE LINK"]}}</td>
          </tr>
        </tbody>
      </table>
      <button
        type="button"
        @click="$router.push({name:'About'})"
        class="btn btn-outline-success btn-lg my-2"
      >Back</button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
export default {
  data() {
    return {
      projects: "",
    };
  },
  methods: {
    calculatePercentage(option) {
      // console.log(option);
      switch (option) {
        case "Stage-0":
          return "0";
        case "Stage-1":
          return "12.5";
        case "Stage-2":
          return "25";
        case "Stage-3":
          return "37.5";
        case "Stage-4":
          return "50";
        case "Stage-5":
          return "62.5";
        case "Stage-6":
          return "75";
        case "Stage-7":
          return "87.5";
        case "Stage-8":
          return "100";
        default:
          return "";
      }
    },
    getColor(option) {
      var base = "progress-bar progress-bar-striped progress-bar-animated ";
      var yellow = "bg-warning";
      var green = "bg-success";
      var blue = "bg-info";
      var red = "bg-danger";
      switch (option) {
        case "Stage-0":
          return base + blue;
        case "Stage-1":
        case "Stage-2":
          return base + red;
        case "Stage-3":
        case "Stage-4":
          return base + yellow;
        case "Stage-5":
        case "Stage-6":
          return base + blue;
        case "Stage-7":
        case "Stage-8":
          return base + green;
        default:
          return "";
      }
    },
  },
  beforeMount() {
    var Sheet2 = firebase
      .database()
      .ref("/")
      .child("1XrexxXgEP6yVVBp7fq6VMGLkv3EDhEsN17h9SaNfFzo")
      .child("Sheet2")
      .once("value", (data) => {
        this.projects = data.val()[this.$store.state.studentData.projects];
        // console.log(data.val()[this.$store.state.studentData.projects]);
      });
  },
};
</script>

<style>
</style>