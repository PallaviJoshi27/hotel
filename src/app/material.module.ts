import { NgModule } from '@angular/core';
import {MatBadgeModule} from '@angular/material/badge';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material';
@NgModule({
    imports : [MatBadgeModule , 
                MatButtonModule,
                MatToolbarModule,
                MatIconModule,
                MatSidenavModule,
                MatListModule,
                MatTabsModule],
    exports : [MatBadgeModule, 
                MatButtonModule,
                MatToolbarModule,
                MatIconModule,
                MatSidenavModule,
                MatListModule,
                MatTabsModule]
})

export class MaterialModule{

}