<template>
  <div>
    <navbar></navbar>
    <div class="container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <transition name="slide-fade">
        <router-view></router-view>
      </transition>
    </div>
    <div class="card-body footer">
    <blockquote class="blockquote mb-0">
      <p style="font-size: 10px;">© 2020 by LITHOERA</p>
     </blockquote>
  </div>
  </div>
</template>
<script>
import navbar from "./components/Navbar";
export default {
  components: {
    navbar
  }
};
</script>
<style>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}


*{
    padding: 0;
    margin: 0;
}

html {
  position: relative;
  min-height: 100%;
}
body {
  /* Margin bottom by footer height */
  margin-bottom: 100px;
}
.footer {
  position: absolute;
  text-align: center;
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */
}
</style>
