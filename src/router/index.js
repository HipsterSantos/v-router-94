
import {FormComponent,Profile,Main} from '../import.js';


export const routes  = [
    {
      path:'/',
      component: Main
    },
    {
      path:'/about',
      component: FormComponent
    },
    {
      path:'/profile/user/:id',
      component: Profile
    }
]
