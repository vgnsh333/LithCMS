import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Projects from '../components/Projects'
import AdminProjectStatus from '../components/AdminProjectStatus'
import ProjectStats from '../components/ProjectStats'
import projectsPanel from '../components/projectsPanel'
import StudentsPanel from '../components/StudentsPanel'
import addProject from '../components/addProject'
import AdminPanel from '../components/AdminPanel'
import internshipProjects from '../components/internshipProjects'
import ChangePass from '../components/ChangePass'
import ChangeAdminPass from '../components/ChangeAdminPass'
import Admin from '../components/Admin'
import ViewStudents from '../components/ViewStudents'
import editProject from '../components/editProject'
import editStudent from '../components/editStudent'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/projectStatus',
    name: 'AdminProjectStatus',
    component: AdminProjectStatus
  },
  {
    path: '/projectstats',
    name: 'ProjectStats',
    component: ProjectStats
  },
  {
    path: '/viewstudents',
    name: 'ViewStudents',
    component: ViewStudents
  },
  {
    path: '/projectspanel',
    name: 'projectsPanel',
    component: projectsPanel
  },
  {
    path: '/studentsPanel',
    name: 'StudentsPanel',
    component: StudentsPanel
  },
  {
    path: '/viewprojects',
    name: 'internshipProjects',
    component: internshipProjects
  },
  {
    path: '/editproject',
    name: 'editProject',
    component: editProject
  },
  {
    path: '/editstudent',
    name: 'editStudent',
    component: editStudent
  },
  {
    path: '/addproject',
    name: 'addProject',
    component: addProject
  },
  {
    path: '/changepass',
    name: 'ChangePassword',
    component: ChangePass
  },
  {
    path: '/changeadminpass',
    name: 'ChangeAdminPass',
    component: ChangeAdminPass
  },
  {
    path: '/adminbase',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/adminpanel',
    name: 'AdminPanel',
    component: AdminPanel
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
