import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Import HttpClientModule from @angular/common/http
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './students/student/student.component';

@NgModule({
    declarations: [
        AppComponent,
        StudentsComponent,
        StudentComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule

    ],
    providers: [HttpClientModule],
    bootstrap: [AppComponent]
})
export class AppModule { }
