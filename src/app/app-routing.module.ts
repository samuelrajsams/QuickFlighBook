import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { MyAccountComponent } from './my-account/my-account.component'
import { SearchResultsComponent } from './search-results/search-results.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

// "links" delariations
const routes: Routes = [
  {path: 'home', component: AppComponent},
  {path: 'search-results', component: SearchResultsComponent},
  {path: 'content', component: ContentComponent},
  { path: 'account', component: MyAccountComponent },
  {path: 'confirm', component: ConfirmationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
