import {AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {style} from '@angular/animations';

@Component({
  selector: 'app-output-console',
  templateUrl: './output-console.component.html',
  styleUrls: ['./output-console.component.scss']
})
export class OutputConsoleComponent implements OnInit, AfterViewInit, DoCheck {

  loading = true;
  shellBodyHeight = 0;
  @ViewChild('ShellBody') shellBody: ElementRef;

  @Input() data: string[] = [];
  @Input() events: Observable<string>;

  ngOnInit() {
    this.loading = false;
    this.events.subscribe((item: string) => {
      if(this.shellBody) {
        this.shellBody.nativeElement.innerHTML = this.shellBody.nativeElement.innerHTML + '<li>$ ' + item + '</li>';
        this.setUpScroll();
      }
    });

  }

  ngAfterViewInit() {
    this.setUpScroll();
  }

  setUpScroll() {
    let objDiv = document.getElementById('shell-body');
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  showShellBody() {
    this.shellBodyHeight = this.shellBodyHeight === 0 ? 110 : 0;
  }

}
