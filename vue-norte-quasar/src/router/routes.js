
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/comunidade', component: () => import('pages/Comunidade.vue') },
      { path: '/utilidades', component: () => import('pages/Utilidades.vue') },
      { path: '/links', component: () => import('pages/Links.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
