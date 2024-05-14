import { Component, EventEmitter, Output, Input } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { GithubApiService } from '../github-api.service';
import { ServiceRepository, GithubUserDetails } from '../interfaces/repository.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent {
  username: string = '';
  currentPage: any = 1;

  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(private githubApiService: GithubApiService) { }
  @Output() repositoriesLoaded: EventEmitter<ServiceRepository[]> = new EventEmitter<ServiceRepository[]>();
  @Output() repositoryLoaded: EventEmitter<GithubUserDetails> = new EventEmitter<GithubUserDetails>();
  @Output() paginationEvent: EventEmitter<any> = new EventEmitter<any>();

  searchUser() {
    this.searchEvent.emit(this.username);

    this.githubApiService.getRepositories(this.username)
      .subscribe((repositories: ServiceRepository[]) => {
        this.repositoriesLoaded.emit(repositories);
    });

    // this.githubApiService.getRepositories(this.username, this.currentPage)
    //   .subscribe((repositories: ServiceRepository[]) => {
    //     this.repositoriesLoaded.emit(repositories);
    // }); 


    this.githubApiService.getUser(this.username)
      .subscribe((repository: GithubUserDetails) => {
        this.repositoryLoaded.emit(repository);
    });
      
    this.username = ''; 

  }
}
