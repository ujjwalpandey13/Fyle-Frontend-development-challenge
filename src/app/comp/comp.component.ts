import { Component, Input } from '@angular/core';
import { GithubUserDetails } from '../interfaces/repository.model';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrl: './comp.component.css'
})
export class CompComponent {
  @Input() userData: GithubUserDetails | null = null;
}
