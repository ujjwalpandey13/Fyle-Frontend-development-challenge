import { Component } from '@angular/core';
import { ServiceRepository, GithubUserDetails } from './interfaces/repository.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';
  // loader =true;
  onSearch(username: string) {
    console.log('Search text received:', username);
    // You can perform further actions here, such as calling an API with the username
  }


  loadedRepositories: ServiceRepository[] = [];
  UserData: GithubUserDetails | null = null;
  pagination: any |null = null;

   // Method to handle the repositories loaded event emitted by SearchBarComponent
   onRepositoriesLoaded(repositories: ServiceRepository[]) {
    console.log('Repositories loaded:', repositories);
    
    // Assign the loaded repositories to the variable
    this.loadedRepositories = repositories;
  }

  // to send repository to html of app.component.html
  onRepositoryLoaded(repository: GithubUserDetails){
    console.log("User Details: ", repository);

    this.UserData = repository;
  }


}
