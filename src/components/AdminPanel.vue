<template>
  <div class="container text-center">
    <h1>Admin Panel</h1>
    <div class="h-100 d-flex justify-content-center align-items-center">
      <div class="rows">
        <div class="row">
          <div class="col col-md-12">
            <button type="button" @click="$router.push({name:'projectsPanel'})"  class="btn btn-outline-warning btn-lg my-5">Project Panel</button>
          </div>
        </div>
        <div class="row">
          <div class="col col-md-12">
            <button type="button" @click="$router.push({name:'StudentsPanel'})" class="btn btn-outline-success btn-lg my-2">Student Panel</button>
          </div>
        </div>
        <div class="row">
          <div class="col col-md-12">
            <button type="button" @click="$router.push({name:'ChangeAdminPass'})" class="btn btn-outline-info btn-lg my-5">Change Password</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created(){
    if(!this.$store.state.isLoggedIn){
      this.$router.push({name:'Admin'})
    }
  }
};
</script>

<style>
</style>