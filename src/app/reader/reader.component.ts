import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.scss']
})
export class ReaderComponent implements OnInit {

  constructor() { }

  scanSuccessHandler(ev){
    console.log({ev})
  };

  scanErrorHandler(ev){};

  scanFailureHandler(ev){};

  scanCompleteHandler(ev){};

  ngOnInit() {
  }

}
