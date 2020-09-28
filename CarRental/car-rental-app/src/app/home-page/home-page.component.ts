import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        let selectedComponent = document.querySelector(params['selectedComponent']);
        if(selectedComponent != null)
        {
          selectedComponent.scrollIntoView();
        }
        else
        {
          document.querySelector('app-home-page-header').scrollIntoView();
        }
      }
    );

    
  }

}
