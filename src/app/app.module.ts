import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CompComponent } from './comp/comp.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RepositoryListComponent } from './repository-list/repository-list.component';
import { PaginationComponent } from './pagination/pagination.component';

import { GithubApiService } from './github-api.service'; // Import GithubApiService
import { SkltloaderComponent } from './skltloader/skltloader.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    AppComponent,
    CompComponent,
    SearchBarComponent,
    RepositoryListComponent,
    PaginationComponent,
    SkltloaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule to imports
    HttpClientModule,
    NgxSkeletonLoaderModule
  ],
  providers: [GithubApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
