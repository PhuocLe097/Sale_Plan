import {
  DeploymentUnitOutlined,
  DollarOutlined,
  GiftOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  ProfileOutlined,
  RadarChartOutlined,
  SettingOutlined,
  TagsOutlined,
  UserOutlined,
  FundProjectionScreenOutlined,
} from '@ant-design/icons';
import LoadableComponent from '../Loadable/index';


export const userRouter: any = [
  {
    path: '/user',
    name: 'user',
    title: 'User',
    component: LoadableComponent(() => import('../Layout/UserLayout')),
    isLayout: true,
    showInMenu: false,
  },
  {
    path: '/user/login',
    name: 'login',
    title: 'LogIn',
    component: LoadableComponent(() => import('../../scenes/Login')),
    showInMenu: false,
  },
];

export const appRouters: any = [
  {
    path: '/',
    exact: true,
    name: 'home',
    permission: '',
    title: 'Home',
    component: LoadableComponent(() => import('../Layout/AppLayout')),
    isLayout: true,
    showInMenu: false,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    permission: '',
    title: 'Dashboard',
    icon: HomeOutlined,
    showInMenu: true,
    component: LoadableComponent(() => import('../../scenes/Dashboard')),
  },
  {
    path: '/original-budget',
    name: 'original-budget',
    permission: '',
    title: 'Original Budget (dự toán)',
    icon: DollarOutlined,
    showInMenu: true,
    component: LoadableComponent(() => import('../../scenes/OriginalBudget')),
  },
  {
    path: '/saleplan',
    name: 'saleplan',
    permission: '',
    title: 'Sale Plan',
    icon: FundProjectionScreenOutlined,
    showInMenu: true,
    component: LoadableComponent(() => import('../../scenes/SalePlan')),
  },
  {
    path: '/original-Budget/detail/:id',
    name: 'OriginalBudgetDetail',
    permission: '',
    title: 'Original Budget Detail',
    showInMenu: false,
    component: LoadableComponent(() => import('../../scenes/OriginalBudget/Detail')),
  },


  {
    path: '/setting',
    name: 'setting',
    permission: '',
    title: 'Setting',
    icon: SettingOutlined,
    showInMenu: false,
    component: LoadableComponent(() => import('../../scenes/Setting')),
  },
  {
    path: '/logout',
    permission: '',
    title: 'Logout',
    name: 'logout',
    showInMenu: false,
    component: LoadableComponent(() => import('../Logout')),
  },
  {
    path: '/exception?:type',
    permission: '',
    title: 'exception',
    name: 'exception',
    showInMenu: false,
    component: LoadableComponent(() => import('../../scenes/Exception')),
  },
  {
    path: '/exception?:type',
    permission: '',
    title: 'exception',
    name: 'exception',
    showInMenu: false,
    component: LoadableComponent(() => import('../../scenes/Exception')),
  },
];

export const routers = [...userRouter, ...appRouters];
