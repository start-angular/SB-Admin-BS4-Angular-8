import {Component, ViewEncapsulation} from 'angular2/core';
import {
    RouteConfig,
    ROUTER_DIRECTIVES
} from 'angular2/router';

import {HomeCmp} from '../../pages/home/components/home';
import {GridCmp} from '../../pages/grid/components/grid';
import {FormCmp} from '../../pages/forms/components/forms';
import {TableCmp} from '../../pages/tables/components/tables';
/*import {DateTimeCmp} from '../../pages/date-time/components/date_time';
import {RtlDashboardCmp} from '../../pages/rtl-dashboard/components/rtl_dashboard';*/


import {BSCmp} from '../../pages/bootstrap-element/components/bs_element';

import {BlankPageCmp} from '../../pages/blank-page/components/blank_page';
import {ComponentCmp} from '../../pages/component/components/component';
import {TopNavCmp} from '../../widgets/topnav/components/topnav';
import {SidebarCmp} from '../../widgets/sidebar/components/sidebar';
/*import {AboutCmp} from '../../about/components/about';
import {NameList} from '../../shared/services/name_list';*/


@Component({
  selector: 'app',
  templateUrl: './layout/components/app.html',
  styleUrls: ['./layout/components/app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES, TopNavCmp, SidebarCmp]
})
@RouteConfig([
  { path: '/', component: HomeCmp, as: 'Home' },
  { path: '/grid', component: GridCmp, as: 'Grid' },
  { path: '/tables', component: TableCmp, as: 'Tables' },
  { path: '/forms', component: FormCmp, as: 'Forms' },
  { path: '/bootstrap-element', component: BSCmp, as: 'BSElement' },
  { path: '/component', component: ComponentCmp, as: 'Component' },
  { path: '/blank-page', component: BlankPageCmp, as: 'BlankPage' },
  /*{ path: '/charts', component: DateTimeCmp, as: 'DateTime' },
  { path: '/about', component: AboutCmp, as: 'About' },
  { path: '/rtl-dashboard', component: RtlDashboardCmp, as: 'RTL-Dashboard' }*/
])
export class AppCmp { }
