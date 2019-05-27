import { MatButtonModule, 
        MatCheckboxModule,
        MatIconModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule
        } from '@angular/material';
import { NgModule } from '@angular/core';

//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatIconModule,
            MatMenuModule, MatSidenavModule, MatToolbarModule],
  exports: [MatButtonModule, MatCheckboxModule, MatIconModule,
            MatMenuModule, MatSidenavModule, MatToolbarModule],
})
export class MaterialModule { }