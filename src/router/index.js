import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('@/views/Index.vue'),
    },
    {
      path: '/typography',
      name: 'Typography',
      component: () => import('@/views/Typography.vue'),
    },
    {
      path: '/button',
      name: 'Button',
      component: () => import('@/views/Button.vue'),
    },
    {
      path: '/checkbox',
      name: 'Checkbox',
      component: () => import('@/views/Checkbox.vue'),
    },
    {
      path: '/radiobutton',
      name: 'Radiobutton',
      component: () => import('@/views/Radiobutton.vue'),
    },
    {
      path: '/progress',
      name: 'Progress',
      component: () => import('@/views/Progress.vue'),
    },
    {
      path: '/input',
      name: 'Input',
      component: () => import('@/views/Tabs.vue'),
    },
    {
      path: '/tabs',
      name: 'Tabs',
      component: () => import('@/views/Tabs.vue'),
    },
    {
      path: '/table',
      name: 'Table',
      component: () => import('@/views/Table.vue'),
    },
  ],
});

export default router;
