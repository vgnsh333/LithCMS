<template>
  <div class="container text-center">
    <h1>Project Details</h1>
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
          <table class="table table-sm table-dark table-striped table-bordered table-hover my-2">
            <tbody>
              <tr v-for="(data,index) in proj[sel]" v-bind:key="data.z">
                <th scope="row">{{ index}}</th>
                <td>{{data}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </form>
    <button
      type="button"
      @click="$router.push({name:'projectsPanel'})"
      class="btn btn-outline-success my-2"
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
    };
  },
  methods: {
    next() {
      var str = this.selected;
      var s = str.split("/");
      var s1 = s[0];
      this.sel = s[0];
      //console.log("here", this.sel);
      var pr = this.proj;
      //console.log(pr[sel]["AVAILABLE POSITIONS"]);
      //this.showNext = true;
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
};
</script>

<style>
</style>