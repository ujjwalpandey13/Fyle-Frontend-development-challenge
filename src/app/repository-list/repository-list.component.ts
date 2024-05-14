import { Component, Input } from '@angular/core';
import { ServiceRepository } from '../interfaces/repository.model';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrl: './repository-list.component.css'
})
export class RepositoryListComponent {

 @Input() repositories: ServiceRepository[] | null = null;

}
