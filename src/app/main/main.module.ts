import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {SharedModule} from "../shared/shared.module"
import {LayoutModule} from "../layout/layout.module"
import {AgGridModule} from '@ag-grid-community/angular'
import {ChartsModule} from '../../@youpez'

import {DashboardDefaultComponent} from './dashboard/dashboard-default/dashboard-default.component'
import {UserLayoutComponent} from './user/user-layout/user-layout.component'
import {UserBillingComponent} from './user/user-billing/user-billing.component'
import {UserCreditcardComponent} from './user/user-creditcard/user-creditcard.component'
import {UserTransactionsComponent} from './user/user-transactions/user-transactions.component'
import {Error404Component} from './errors/error404/error404.component'
import {Error500Component} from './errors/error500/error500.component'
import {FaqComponent} from './application/faq/faq.component'
import {ManualComponent} from './application/manual/manual.component'
import {SupportComponent} from './application/support/support.component'
import {ChangelogComponent} from './application/changelog/changelog.component'
import {WelcomeComponent} from './application/welcome/welcome.component'
import {GettingStartedComponent} from './application/getting-started/getting-started.component'
import {ChartsComponent} from './charts/charts.component'
import {MainRoutingModule} from './main-routing.module'
import { HttpClientModule } from '@angular/common/http';
import { ListUtilisateurComponent } from './components/utilisateur/list-utilisateur/list-utilisateur.component';
import { EditUtilisateurComponent } from './components/utilisateur/edit-utilisateur/edit-utilisateur.component';
import { AddUtilisateurComponent } from './components/utilisateur/add-utilisateur/add-utilisateur.component'

@NgModule({
  declarations: [
    DashboardDefaultComponent,
    UserLayoutComponent,
    UserBillingComponent,
    UserCreditcardComponent,
    UserTransactionsComponent,
    Error404Component,
    Error500Component,
    FaqComponent,
    ManualComponent,
    SupportComponent,
    ChangelogComponent,
    WelcomeComponent,
    GettingStartedComponent,
    ChartsComponent,
    ListUtilisateurComponent,
    EditUtilisateurComponent,
    AddUtilisateurComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    LayoutModule,
    SharedModule,
    ChartsModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
  ],

  

})
export class MainModule {
}
