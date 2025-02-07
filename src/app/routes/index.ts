import { Router } from "express"



const router = Router()

const moduleRoutes = [
  {
    path: '/',
    // route: UserRoutes,
  },
  {
    path: '/auth',
    // route: AuthRoutes,
  },
  {
    path: '/post',
    // route: PostRoutes,
  }
]

// moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router