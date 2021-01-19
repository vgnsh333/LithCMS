<template>
  <div class="container text-center">
    <h1>Project Panel</h1>
    <div class="h-100 d-flex justify-content-center align-items-center">
      <div class="rows">
        <div class="row">
          <div class="col-md-12">
            <button
              type="button"
              @click="$router.push({name:'internshipProjects'})"
              class="btn btn-outline-primary btn-lg my-4"
            >View Projects</button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <button
              type="button"
              @click="$router.push({name:'AdminProjectStatus'})"
              class="btn btn-outline-primary btn-lg my-4"
            >View Projects Status</button>
          </div>
        </div>
        <div class="row">
          <div class="col col-md-12">
            <button
              type="button"
              @click="$router.push({name:'editProject'})"
              class="btn btn-outline-warning btn-lg my-4"
            >Edit a project</button>
          </div>
        </div>
        <div class="row">
          <div class="col col-md-12">
            <button
              type="button"
              @click="$router.push({name:'addProject'})"
              class="btn btn-outline-success btn-lg my-4"
            >Add a project</button>
          </div>
        </div>
        <div class="row">
          <div class="col col-md-12">
            <button
              type="button"
              @click="$router.push({name:'AdminPanel'})"
              class="btn btn-outline-success btn-lg my-4"
            >Back</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  create() {
    if (!this.$store.state.isLoggedIn) {
      this.$router.push({ name: "Admin" });
    }
  },
};
</script>

<style>
</style>