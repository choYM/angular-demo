import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: '../view/app.html',
  styleUrls: ['../css/app.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
    // 導到登入頁面
    this.router.navigate(['/login']);
  }
}
