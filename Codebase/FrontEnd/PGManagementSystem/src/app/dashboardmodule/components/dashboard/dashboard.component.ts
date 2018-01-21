import { Component, OnInit, Inject } from '@angular/core';
import { AuthenticationService } from '../../../share/service/authentication.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { DashBoardOverViewData } from '../../models/dash-board-over-view-data';
import { DashboardService } from '../../services/dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  overview: DashBoardOverViewData[] = [];

  constructor(
    @Inject(AuthenticationService) private auth: AuthenticationService,
    @Inject(Router) private router: Router,
    @Inject(DashboardService) private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['login']);
    }
    else {
      this.fetchDashBoardData();
    }
  }

  displayedColumns = ['position', 'name', 'age', 'address', 'phoneno', 'office', 'email'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;

  }

  fetchDashBoardData() {
    this.overviewData();
  }

  /**
   * Get Overview data of dashboard from server
   */
  overviewData() {
    this.dashboardService.getOnlyDashBoardOvData().subscribe((data) => {
      data.forEach((elem) => {
        this.overview.push(elem);
      });
    });
  }

}

export interface Element {
  position: number;
  name: string;
  age: number;
  address: string;
  phoneno: number;
  office: string;
  email: string;
}

const ELEMENT_DATA: Element[] = [
  { position: 1, name: 'Aloke Tewary', age: 27, address: 'Asansole', phoneno: 99999999, office: 'InterraIT Noida', email: 'aloketewary@gmail.com' },
  { position: 2, name: 'Aloke Tewary', age: 27, address: 'Asansole', phoneno: 99999999, office: 'InterraIT Noida', email: 'aloketewary@gmail.com' },
  { position: 3, name: 'Aloke Tewary', age: 27, address: 'Asansole', phoneno: 99999999, office: 'InterraIT Noida', email: 'aloketewary@gmail.com' }

];
