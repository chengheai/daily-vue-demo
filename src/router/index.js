import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Element from '@/components/Element'
import Computed from '@/components/Computed'
import Lodash from '@/components/Lodash'
import Lodash1 from '@/components/Lodash1'
import Switch from '@/components/Switch'
import savedPosition from '@/components/savedPosition'
import Transition from '@/components/Transition'
import Gugong from '@/components/Gugong'
import Search from '@/components/Search'
import Calendar from '@/components/Calendar'
import Calendar1 from '@/components/Calendar.1'
import Emotion from '@/components/Emotion'
import Es6 from '@/components/Es6'
import TimeDisable from '@/components/TimeDisable'
import Learning from '@/components/Learning'
import Blur from '@/components/Blur'
import Conghu from '@/components/Conghu'
import UploadFile from '@/components/UploadFile'
import Draggable from '@/components/Draggable'
import Table from '@/components/Table'
import Input from '@/components/Input'
import Axios from '@/components/Axios'
import Heart from '@/components/Heart'
import Fullcalendar from '@/components/Fullcalendar';
import KeyCodes from '@/components/KeyCodes';
import Pdf from '@/components/Pdf';
import NoteImage from '@/components/NoteImage';
import nextTick from '@/components/nextTick';
/* eslint-disable */
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/element',
      name: 'Element',
      component: Element,
    },
    {
      path: '/upload-file',
      name: 'UploadFile',
      component: UploadFile,
    },
    {
      path: '/computed',
      name: 'Computed',
      component: Computed,
    },
    {
      path: '/draggable',
      name: 'Draggable',
      component: Draggable,
    },
    {
      path: '/lodash',
      name: 'Lodash',
      component: Lodash,
    },
    {
      path: '/switch',
      name: 'Switch',
      component: Switch,
    },
    {
      path: '/savedPosition',
      name: 'savedPosition',
      component: savedPosition,
    },
    {
      path: '/transition',
      name: 'Transition',
      component: Transition,
    },
    {
      path: '/gugong',
      name: 'Gugong',
      component: Gugong,
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar,
    },
    {
      path: '/calendar1',
      name: 'Calendar1',
      component: Calendar1,
    },
    {
      path: '/lodash1',
      name: 'lodash1',
      component: Lodash1,
    },
    {
      path: '/es6',
      name: 'es6',
      component: Es6,
    },
    {
      path: '/learning',
      name: 'learning',
      component: Learning,
    },
    {
      path: '/timedisable',
      name: 'timedisable',
      component: TimeDisable,
    },
    {
      path: '/blur',
      name: 'blur',
      component: Blur,
    },
    {
      path: '/conghu',
      name: 'conghu',
      component: Conghu,
    },
    {
      path: '/input',
      name: 'input',
      component: Input,
    },
    {
      path: '/table',
      name: 'table',
      component: Table,
    },
    {
      path: '/axios',
      name: 'axios',
      component: Axios,
    },
    {
      path: '/heart',
      name: 'heart',
      component: Heart,
    },
    {
      path: '/emotion',
      name: 'Emotion',
      component: Emotion,
    },
    {
      path: '/fullcalendar',
      name: 'Fullcalendar',
      component: Fullcalendar,
    },
    {
      path: '/next-tick',
      name: 'nextTick',
      component: nextTick,
    },
    {
      path: '/keycode',
      name: 'keycode',
      component: KeyCodes,
    },
    {
      path: '/pdf',
      name: 'pdf',
      component: Pdf,
    },
    {
      path: '/note-image',
      name: 'note-image',
      component: NoteImage,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    console.log(savedPosition);
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
