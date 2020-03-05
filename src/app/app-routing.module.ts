import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { ServersComponent } from './servers/servers.component';
import { HomeComponent } from './home/home.component';
import { ServerComponent } from './servers/server/server.component';

const appRoutes: Routes = [
    {path : '',redirectTo : '/home' ,pathMatch : 'full'},
    {path : 'home',component : HomeComponent},
    {path : 'content',component : ContentComponent},
    {path : 'servers',component : ServersComponent},
    {path : 'servers/:id',component : ServerComponent},
]
@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})

export class AppRoutingModule{
    
}