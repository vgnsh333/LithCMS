<template>
  <div class="container text-center">
      <h1>Student Panel</h1>
    <div class="h-100 d-flex justify-content-center align-items-center">
      <div class="rows">
        <div class="row">
          <div class="col-md-12">
            <button type="button" @click="$router.push({name:'ViewStudents'})" class="btn btn-outline-primary btn-lg my-4">View Students</button>
          </div>
        </div>
        <div class="row">
          <div class="col col-md-12">
            <button type="button" @click="$router.push({name:'editStudent'})"  class="btn btn-outline-warning btn-lg my-4">Edit Student Details</button>
          </div>
        </div>
        <div class="row">
          <div class="col col-md-12">
            <button type="button" @click="$router.push({name:'AdminPanel'})" class="btn btn-outline-success btn-lg my-4">Back</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created(){
    if (!this.$store.state.isLoggedIn) {
      this.$router.push({ name: "Admin" });
    }
  }
};
</script>

<style>
</style>