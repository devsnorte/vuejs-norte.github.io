const routes = [
  {
    path: '/',
    component: () => import('layouts/SidebarLayout.vue'),
    children: [
      { path: '/', redirect: '/inicio' },
      {
        label: 'Início',
        path: 'inicio',
        component: () => import('pages/Index.vue')
      },
      {
        label: 'Comunidade',
        path: 'comunidade',
        component: () => import('pages/Comunidade.vue')
      },
      {
        label: 'Links',
        path: 'links',
        component: () => import('pages/Links.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export const menus = routes
  .filter(route => !!route.children && Array.isArray(route.children))
  .reduce((acc, route) => [...acc, ...route.children], [])
  .filter(route => !!route.label)
  .map(({ label, path: route }) => ({ label, route }))

export default routes
