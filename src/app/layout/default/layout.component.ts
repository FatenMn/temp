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
      groupName: 'APPLICATIONS',
      opened: true,
      children: [
        {
          name: 'Scrum board',

          prefix: {
            type: 'ibm-icon',
            name: 'dashboardReference',
          },
          url: '/app/scrum-board',
        }
      ]
    },
    {
      groupName: 'PAGES',
      opened: true,
      children: [
       
        {
          name: 'Search result',
          prefix: {
            type: 'ibm-icon',
            name: 'imageSearch',
          },
          url: '/app/search-result',
        },
        {
          name: 'Coming soon',
          prefix: {
            type: 'ibm-icon',
            name: 'inProgress',

          },
          children: [
            {
              name: 'Style #1',
              url: '/auth/coming-soon/modern'
            },
            {
              name: 'Style #2',
              url: '/auth/coming-soon/full'
            },
            {
              name: 'Style #3',
              url: '/auth/coming-soon/full-middle'
            },
            {
              name: 'Style #4',
              url: '/auth/coming-soon/basic'
            }
          ]
        },
        {
          name: 'Maintenance',
          prefix: {
            type: 'ibm-icon',
            name: 'hourglass',
          },
          url: '/app/maintenance',
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
        }
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
