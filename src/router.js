import Vue from 'vue';
import Router from 'vue-router';
import Person from './components/Person.vue';
import Ping from './components/Ping.vue';
import HelloWorld from './components/HelloWorld.vue'
import PersonForm from './components/PersonForm.vue';
import Login from './components/Login.vue';
import Logout from './components/Logout.vue';
import Rol from './components/Rol.vue';
import RolForm from './components/RolForm.vue';
import Sesion from './components/Sesion.vue';
import SesionForm from './components/SesionForm.vue';
import Tarea from './components/Tarea.vue';
import TareaForm from './components/TareaForm.vue';
import Nivel from './components/Nivel.vue';
import NivelForm from './components/NivelForm.vue';
import Alumno from './components/Alumno.vue';
import AlumnoForm from './components/AlumnoForm.vue';
import Docente from './components/Docente.vue';
import DocenteForm from './components/DocenteForm.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/ping',
      name: 'Ping',
      component: Ping,
    },
    {
      path: '/persons',
      name: 'Person',
      component: Person,
    },
    {
      path: '/persons/form',
      name: 'PersonForm',
      component: PersonForm,

    },
    {
      path: '/persons/form/:id',
      name: 'PersonForme',
      component: PersonForm
    },
    {
      path: '/rol',
      name: 'Rol',
      component: Rol,
    },
    {
      path: '/rol/form',
      name: 'RolForm',
      component: RolForm,

    },
    {
      path: '/rol/form/:id',
      name: 'RolForme',
      component: RolForm
    },
    {
      path: '/sesiones',
      name: 'Sesion',
      component: Sesion,
    },
    {
      path: '/sesiones/form',
      name: 'SesionForm',
      component: SesionForm,

    },
    {
      path: '/sesiones/form/:id',
      name: 'SesionForme',
      component: SesionForm
    },
    {
      path: '/tareas',
      name: 'Tarea',
      component: Tarea,
    },
    {
      path: '/tareas/form',
      name: 'TareaForm',
      component: TareaForm,

    },
    {
      path: '/tareas/form/:id',
      name: 'TareaForme',
      component: TareaForm
    },
    {
      path: '/niveles',
      name: 'Nivel',
      component: Nivel,
    },
    {
      path: '/niveles/form',
      name: 'NivelForm',
      component: NivelForm,

    },
    {
      path: '/niveles/form/:id',
      name: 'NivelForme',
      component: NivelForm
    },
    {
      path: '/alumnos',
      name: 'Alumno',
      component: Alumno,
    },
    {
      path: '/alumnos/form',
      name: 'AlumnoForm',
      component: AlumnoForm,

    },
    {
      path: '/alumnos/form/:id',
      name: 'AlumnoForme',
      component: AlumnoForm
    },
    {
      path: '/docentes',
      name: 'Docente',
      component: Docente,
    },
    {
      path: '/docentes/form',
      name: 'DocenteForm',
      component: DocenteForm,

    },
    {
      path: '/docentes/form/:id',
      name: 'DocenteForme',
      component: DocenteForm
    },
    {
      path: '/login',
      name: 'LoginForm',
      component: Login
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },

  ],
});

let whiteRoutes = [
  "LoginForm",
  "HelloWorld",
  "Ping"
]

router.beforeEach((to, from, next) => {
  console.log(`${from.path} to ${to.path}`);
  let isAuthenticated = false;
  if (localStorage.getItem('user') != null) {
    isAuthenticated = true;
  }
  // if (to.name !== 'LoginForm' && to.name !== 'HelloWorld' && to.name !== 'Ping' && !isAuthenticated) {
  if (!whiteRoutes.includes(to.name) && !isAuthenticated) {
    next({ name: 'LoginForm' });
  } else {
    next();
  }
});
//https://www.digitalocean.com/community/tutorials/vuejs-advanced-vue-routing
export default router
