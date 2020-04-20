import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home/Home.vue";
import SignIn from "@/views/home/SignIn";
import SignUp from "@/views/home/SignUp";
import HomeNavigation from "@/views/home/HomeNavigation";
import Profile from "@/views/Profile";
import Personagens from "@/views/personagens/Personagens";
import PersonagemForm from "@/views/personagens/PersonagemForm";
import PersonagensList from "@/views/personagens/PersonagensList";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: { name: "HomeNavigation" },
    children: [
      {
        path: "nav",
        name: "HomeNavigation",
        component: HomeNavigation
      },
      {
        path: "signin",
        name: "SignIn",
        component: SignIn
      },
      {
        path: "signup",
        name: "SignUp",
        component: SignUp
      }
    ]
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    redirect: { name: "Personagens" },
    children: [
      {
        path: "personagens",
        name: "Personagens",
        redirect: { name: "ListaPersonagens" },
        component: Personagens,
        children: [
          {
            path: "lista",
            name: "ListaPersonagens",
            component: PersonagensList
          },
          {
            path: "novo",
            name: "NovoPersonagem",
            component: PersonagemForm
          },
          {
            path: "editar/:id",
            name: "EditarPersonagem",
            component: PersonagemForm,
            props: true
          }
        ]
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
