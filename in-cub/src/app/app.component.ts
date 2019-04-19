import { Component } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'in-cub';
  exists: boolean = true;

  constructor(private route: ActivatedRoute, private router: Router){}

  ngOnInit() {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized && data.state.root.firstChild != null) {
        this.exists = !data.state.root.firstChild.data['404'];
        console.log(this.exists);
      }
    });
  }

}
