import Teams from "../views/teams"
import Content from "../layouts/content"
import ContentItem from "../components/content/contentItem"

import Campaigns from "../views/campaigns"
import Contacts from "../views/contacts"
import Reports from "../views/reports"

import { Navigate } from "react-router-dom"

import { icons } from "../assets/icons/sidenav-icons"

const routes = [
  {
    path: '/',
    element: <Navigate to="/teams" />
  },
  {
    path: 'campaigns',
    icon: icons[0],
    element: <Campaigns />
  },
  {
    path: 'teams',
    icon: icons[1],
    element: <Teams />,
    children: [
      {
        path: '',
        element: <Content />,
      },
      {
        path: ':id',
        element: <ContentItem />,
      }
    ]
  },
  {
    path: 'contacts',
    icon: icons[2],
    element: <Contacts />
  },
  {
    path: 'reports',
    icon: icons[3],
    element: <Reports />
  }
]

export default routes;