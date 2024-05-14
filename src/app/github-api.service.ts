import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceRepository } from './interfaces/repository.model';
import { Observable } from 'rxjs';
import { GithubUserDetails } from './interfaces/repository.model';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  private apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  // Method to get user details
  getUser(username: string): Observable<GithubUserDetails> {
    return this.http.get<GithubUserDetails>(`${this.apiUrl}/users/${username}`);
  }

  getRepositories(username: string): Observable<ServiceRepository[]> {
    return this.http.get<ServiceRepository[]>(`${this.apiUrl}/users/${username}/repos`);
  }
}
