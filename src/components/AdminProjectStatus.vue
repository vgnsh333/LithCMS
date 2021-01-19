<template>
  <div class="container text-center">
    <h1>Project Status:</h1>
        <button
      type="button"
      @click="$router.push({name:'projectsPanel'})"
      class="btn btn-outline-success my-2"
    >Back</button>
    <!-- <p v-for="(data,index) in ProjectDetails" v-bind:key="index">{{data}}/{{index}}</p> -->
    <div class="container">
      <table class="table table-sm table-dark table-striped table-bordered table-hover my-2">
        <thead>
          <tr>
            <th scope="col">Project Code</th>
            <th scope="col">Project Title</th>
            <th scope="col">Project Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data,index) in ProjectDetails" v-bind:key="index">
            <td>{{data['TOPIC NO']}}</td>
            <td>{{data["TITLE"]}}</td>
            <td class="w-50">
              <div class="progress mx-4 text-center" style="height:25px">
                <div
                  v-bind:class="getColor(data['STATUS'])"
                  role="progressbar"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  v-bind:style="{width: calculatePercentage(data['STATUS']) + '%'}"
                ></div>
              </div>
              <h6>{{data['STATUS']}}</h6>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
export default {
  data() {
    return {
      ProjectDetails: "",
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
    var entry = firebase
      .database()
      .ref("/")
      .child("1XrexxXgEP6yVVBp7fq6VMGLkv3EDhEsN17h9SaNfFzo")
      .child("Sheet2")
      .once("value", (data) => {
        this.ProjectDetails = data.val();
        //console.log(data.val());
      });
  },
};
</script>

<style>
</style>