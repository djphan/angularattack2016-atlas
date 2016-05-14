import {Component} from '@angular/core';
import {MaterializeDirective} from "angular2-materialize";

@Component({
  selector: 'world-data-bank',
  templateUrl: 'app/main/main.component.html',
  directives: [MaterializeDirective]
})
export class MainComponent {
  title = 'MainComponent';
}