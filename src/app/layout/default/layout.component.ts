import {Component, OnDestroy, OnInit} from '@angular/core'
import {takeUntil} from 'rxjs/operators'
import {Subject} from "rxjs"
import {defaultRouterTransition, MenuType} from "../../../@youpez"
import {SettingsService} from "../../../@youpez"
import {AppMenuService} from "../../../@youpez"

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [
    defaultRouterTransition,
  ],
})
export class LayoutComponent implements OnInit, OnDestroy {
  private readonly onDestroy = new Subject<void>()

  public mainSidebarOpts = {
    breakpoint: 'md',
    opened: true,
    hoverAble: true,
    mode: 'side',
    toggleableBtn: false,
    size: 'sideBar1',
  }
  public miniSidebarOpts = {}
  public settingsVisible: boolean = false
  public searchVisible: boolean = false
  public lockScreenVisible: boolean = false

  public menu: Array<MenuType> = [
    {
      groupName: 'DASHBOARDS',
      opened: true,
      children: [
        {
          name: 'Dashboard',
          url: '/app/dashboard/default',
          prefix: {
            type: 'ibm-icon',
            name: 'home',
          },
        },
      
      ],
    },
    
    {
      groupName: 'PAGES',
      opened: true,
      children: [
        {
          name: 'User',
          parentUrl: '/app/user',
          prefix: {
            type: 'ibm-icon',
            name: 'userAvatar',
          },
          children: [
            {
              name: 'Gestion de profil',
              url: '/app/user/settings',
            },
           
           
            
          ]
        },
      
        {
          name: 'Auth',
          prefix: {
            type: 'ibm-icon',
            name: 'userAdmin',
          },
          children: [
            {
              name: 'Connecter',
              children: [
                {
                  name: 'Style #4',
                  url: '/auth/basic/signin'
                }
              ]
            },
            {
              name: 'Ajout compte',
              children: [
               
              
              
                {
                  name: 'Style #4',
                  url: '/auth/basic/signup'
                }
              ]
            },
           
            {
              name: 'Confirmation',
              url: '/auth/confirmation',
              children: [
                
                {
                  name: 'Style #4',
                  url: '/auth/basic/confirmation'
                }
              ]
            },

            {
              name: 'Mot passe oublie',
              children: [
                
                {
                  name: 'Style #4',
                  url: '/auth/basic/forgot-password'
                }
              ]
            },
            {
              name: 'Reset password',
              children: [
               
                {
                  name: 'Style #4',
                  url: '/auth/basic/reset-password'
                }
              ]
            },
            {
              name: 'Lock screen',
              callback: 'lock',
            },
          ]
          
        },
      
        {
          name: 'Errors',
          prefix: {
            type: 'ibm-icon',
            name: 'error',
          },
          suffix: {
            type: 'badge',
            level: 'danger',
            text: 2,
          },
          children: [
            {
              name: '404',
              url: '/app/errors/404',
            },
            {
              name: '500',
              url: '/app/errors/500',
            },
          ]
        },
        {
          name: 'Tables',
          parentUrl: '/app/tables',
          prefix: {
            type: 'ibm-icon',
            name: 'tableSplit',
          },
          children: [
            {
              name: 'Basic',
              url: '/app/tables/basic',
            },
           
          ]
        },
       


        //
        {
          name: 'Gestion Utilisateur',
          parentUrl: '/app/main/composants/utilisateur',
          prefix: {
            type: 'ibm-icon',
            name: 'tableSplit',
          },
          children: [
            {
              name: 'ajouter user',
              url: '/app/main/composants.utilisateur/addutilisateur',
            },


            {
              name: 'liste des utilisateurs',
              url: '/app/main/composants.utilisateur/listutilisateur',
            },
           
          ]
        },



        //

      ]
    },
   
  ]

  constructor(private settingsService: SettingsService,
              private appMenuService: AppMenuService) {
  }

  ngOnInit(): void {
    this.appMenuService
      .$callbackClick
      .pipe(takeUntil(this.onDestroy))
      .subscribe((params) => {
        if (params === 'lock') {
          this.lockScreenVisible = true
        }
      })
  }

  ngOnDestroy(): void {
    this.onDestroy.next()
  }

  onMiniSidebarItemClick(event) {
    if (event.key === 'theme') {
      this.settingsVisible = !this.settingsVisible
    }
    if (event.key === 'search') {
      this.searchVisible = true
    }
  }

  onToggleThemeSettings() {
    this.settingsVisible = true
  }

  onSideBarOpen(event) {
    this.mainSidebarOpts.opened = true
  }

  onSideBarToggle(event) {
    this.mainSidebarOpts.opened = !this.mainSidebarOpts.opened
  }

  onCloseSettings(event) {
    this.settingsVisible = false
  }

  onSearchClose(event) {
    this.searchVisible = false
  }

  onLockClose(event) {
    this.lockScreenVisible = false
  }

  onCloseSidebar() {
    this.mainSidebarOpts.opened = false
  }

  onVisibilityChange(event){
    this.mainSidebarOpts.opened=event
  }
}
