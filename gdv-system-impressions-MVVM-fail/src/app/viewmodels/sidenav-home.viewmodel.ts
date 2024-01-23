import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-sidenav-home',
  templateUrl: '../views/sidenav-home/sidenav-home.view.html',
  styleUrls: ['../views/sidenav-home/sidenav-home.view.scss'],
})

export class SideNavHomeViewModel {

  @Input() title: string = 'Sidenav';
  @Input() content: string = 'Este é o conteúdo da sidenav.';
  isOpen: boolean = false;

  constructor() {}

  ngOnInit() {}

}
