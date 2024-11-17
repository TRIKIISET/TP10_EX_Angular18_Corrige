import { Routes } from '@angular/router';
import { PublicDashComponent } from './components/public/public-dash/public-dash.component';
import { LoginComponent } from './components/login/login.component';
import { StudentDashComponent } from './components/students/student-dash/student-dash.component';
import { TeachersDashComponent } from './components/teachers/teachers-dash/teachers-dash.component';
import { ErrorComponent } from './components/error/error.component';
import { NewsComponent } from './components/public/news/news.component';
import { EducationComponent } from './components/public/education/education.component';
import { InstituteComponent } from './components/public/institute/institute.component';
import { DepListComponent } from './components/public/deps/dep-list/dep-list.component';
import { TiComponent } from './components/public/deps/ti/ti.component';
import { SegComponent } from './components/public/deps/seg/seg.component';
import { TeachersCoursesComponent } from './components/teachers/teachers-courses/teachers-courses.component';
import { TeachersMessagesComponent } from './components/teachers/teachers-messages/teachers-messages.component';
import { InfosComponent } from './components/students/infos/infos.component';
import { ScheduleComponent } from './components/students/schedule/schedule.component';
import { studentGuard } from './guards/student.guard';
import { teacherGuard } from './guards/teacher.guard';

export const routes: Routes = [
    { path:'', title:'', component: PublicDashComponent,
        children:[
            { path:'news', title:'Nouveautés', component: NewsComponent},
            { path:'institute', title:'Institut', component: InstituteComponent},
            { path:'deps', title:'Départements', component: DepListComponent,
                children:[
                    { path:'ti', title:'TI', component: TiComponent},         
                    { path:'seg', title:'SEG', component: SegComponent} ,
                    { path:'', redirectTo:'ti', pathMatch:'full'} 
                ]
            },
            { path:'education', title:'Formation', component: EducationComponent},
            { path:'', redirectTo:'news', pathMatch:'full'},
        ]
    },
    { path:'extranet', title:'Extranet', component: LoginComponent},
    { path:'student', title:'', component: StudentDashComponent,
        canActivate:[studentGuard],
        children:[
            { path:'infos', title:'Infos', component: InfosComponent},
            { path:'schedule', title:'Planning', component: ScheduleComponent},
            { path:'', redirectTo:'infos', pathMatch:'full'},
        ]
    },
    { path:'teacher', title:'', component: TeachersDashComponent,
        canActivate:[teacherGuard],
        children:[
            { path:'courses', title:'Cours', component: TeachersCoursesComponent},
            { path:'messages', title:'Messages', component: TeachersMessagesComponent},
            { path:'', redirectTo:'courses', pathMatch:'full'},
        ]
    },
    { path:'**', title:'Erreur', component: ErrorComponent},

];
