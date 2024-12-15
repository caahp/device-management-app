import { Component } from '@angular/core';

@Component({
  selector: 'app-github-project',
  templateUrl: './github-project.component.html',
  styleUrls: ['./github-project.component.css']
})
export class GithubProjectComponent {
  redirectToGitHub(): void {
    window.open('https://github.com/caahp/device-management-app', '_blank');
  }

}
