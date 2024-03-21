import Landing from './pages/landing.vue'
import Events from './pages/events.vue'
import Event from './/pages/event.vue'
import Profile from './pages/profile.vue'

export default [
  {
    path: '/',
    component: Landing
  },
  {
    path: '/events',
    component: Events
  },
  {
    path: '/events/:id',
    component: Event,
    props: true
  },
  {
    path: '/profile',
    component: Profile
  }
]
