import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as firebase from "firebase";
Vue.config.productionTip = false
const configOptions = {
  apiKey: "AIzaSyDNp1Yz68g0Sx_aRRLCawS2iWacACA7Aog",
  authDomain: "lithoera.firebaseapp.com",
  databaseURL: "https://lithoera.firebaseio.com",
  projectId: "lithoera",
  storageBucket: "lithoera.appspot.com",
  messagingSenderId: "404753745761",
  appId: "1:404753745761:web:b027722c3903bdc0cc6720",
  measurementId: "G-MZ557VYH6N"
};
firebase.initializeApp(configOptions);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.16.1/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyDNp1Yz68g0Sx_aRRLCawS2iWacACA7Aog",
//     authDomain: "lithoera.firebaseapp.com",
//     databaseURL: "https://lithoera.firebaseio.com",
//     projectId: "lithoera",
//     storageBucket: "lithoera.appspot.com",
//     messagingSenderId: "404753745761",
//     appId: "1:404753745761:web:b027722c3903bdc0cc6720",
//     measurementId: "G-MZ557VYH6N"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>