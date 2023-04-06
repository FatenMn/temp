import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'

import {LayoutComponent} from '../layout/default/layout.component'

import {DashboardDefaultComponent} from "./dashboard/dashboard-default/dashboard-default.component"
import {DashboardCryptoComponent} from "./dashboard/dashboard-crypto/dashboard-crypto.component"
import {UserSettingsComponent} from "./user/user-settings/user-settings.component"
import {UserLayoutComponent} from "./user/user-layout/user-layout.component"
import {UserBillingComponent} from "./user/user-billing/user-billing.component"
import {UserCreditcardComponent} from "./user/user-creditcard/user-creditcard.component"
import {UserTransactionsComponent} from "./user/user-transactions/user-transactions.component"
import {Error404Component} from "./errors/error404/error404.component"
import {Error500Component} from "./errors/error500/error500.component"
import {FaqComponent} from "./application/faq/faq.component"
import {ManualComponent} from "./application/manual/manual.component"
import {SupportComponent} from "./application/support/support.component"
import {ChangelogComponent} from "./application/changelog/changelog.component"
import {WelcomeComponent} from "./application/welcome/welcome.component"
import {GettingStartedComponent} from "./application/getting-started/getting-started.component"
import {ChartsComponent} from "./charts/charts.component"

const starterPages = [
  {
    path: 'full-width',
    children: [
      /*{
        path: 'basic',
        component: StarterFullWidthBasicComponent,
      },
      {
        path: 'header',
        component: StarterFullWidthHeaderComponent,
      },
      {
        path: 'tabs',
        component: StarterFullWidthTabsComponent,
      }*/
    ]
  },
]

const routeForPages = [
  {
    path: 'dashboard',
    data: {
      breadcrumb: 'Dashboard'
    },
    children: [
      {
        path: 'default',
        component: DashboardDefaultComponent,
        data: {
          breadcrumb: 'Default'
        },
      },
     
      {
        path: 'crypto',
        component: DashboardCryptoComponent,
        data: {
          breadcrumb: 'Stocks / Crypto'
        },
      },
    ],
  },
  
  {
    path: 'errors',
    children: [
      {
        path: '404',
        component: Error404Component,
      },
      {
        path: '500',
        component: Error500Component,
      }
    ],
  },
  {
    path: 'user',
    component: UserLayoutComponent,
    data: {
      breadcrumb: 'User'
    },
    children: [
      {
        path: 'settings',
        component: UserSettingsComponent,
        data: {
          breadcrumb: 'Settings'
        },
      },
      {
        path: 'billing',
        component: UserBillingComponent,
        data: {
          breadcrumb: 'Billing'
        },
      },
      {
        path: 'creditcard',
        component: UserCreditcardComponent,
        data: {
          breadcrumb: 'Creditcard'
        },
      },
      {
        path: 'transactions',
        component: UserTransactionsComponent,
        data: {
          breadcrumb: 'Transactions'
        },
      },
    ]
  },
  {
    path: 'application',
    data: {
      breadcrumb: 'Application'
    },
    children: [
      {
        path: 'welcome',
        component: WelcomeComponent,
        data: {
          breadcrumb: 'Welcome'
        },
      },
      {
        path: 'getting-started',
        component: GettingStartedComponent,
        data: {
          breadcrumb: 'Getting started'
        },
      },
      {
        path: 'faq',
        component: FaqComponent,
        data: {
          breadcrumb: 'FAQ'
        },
      },
      {
        path: 'manual',
        component: ManualComponent,
        data: {
          breadcrumb: 'Manual'
        },
      },
      {
        path: 'support',
        component: SupportComponent,
        data: {
          breadcrumb: 'Support'
        },
      },
      {
        path: 'changelog',
        component: ChangelogComponent,
        data: {
          breadcrumb: 'Changelog'
        },
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/app/dashboard/default',
    pathMatch: 'full',
  },
]

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: routeForPages,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
