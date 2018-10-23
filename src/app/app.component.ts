import { Component } from '@angular/core';
import {CellConfigurationModel} from './cellConfiguration.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  x =[[1,2],[3,4]];
  row = 3;
  oldRow = this.row;
  cntCol = [];
  matrix = [];
  _row = 0;
  _col = 0;
  constructor() {
    for (let i = 0 ; i < this.row; i++) {
      this.cntCol.push(3);
    }
    this.refactorColumns();
  }
  refactorColumns() {
    this.matrix = [];
    for (let i = 0; i < this.cntCol.length; i++) {
      // this.matrix.push(Array(this.cntCol[i]).fill(this.cntCol[i]));
      this.matrix.push(new Array(this.cntCol[i]).fill(new CellConfigurationModel( '', '',  '', '', '', '')));
    }
  }
  refactorRows() {
    // console.log(this.row + '-' + this.oldRow);
    if (this.row > this.oldRow) {
      for (let it = 0; it < this.row - this.oldRow; it++) {
        this.cntCol.push(3);
        this.matrix.push([new CellConfigurationModel( '', '',  '', '', '', '')]);
      }
      // console.log('matrix:' + this.matrix.length);
      this.oldRow = this.row;
      this.refactorColumns();
    }
    if (this.row < this.oldRow) {
      for (let it = 0; it < this.oldRow - this.row; it++) {
        this.cntCol.pop();
        this.matrix.pop();
      }
      // console.log('matrix:' + this.matrix.length);
      this.oldRow = this.row;
      this.refactorColumns();

    }
  }
  getCell(i, j) {
    console.log(i + ' ' + j);
    this._row = i;
    this._col = j;
  }
  show() {
    console.log(this.x);
    this.x[0][0] = 4;
    console.log(this.x);
  }
  size(i) {
    return ( 100 / this.cntCol[i]);
  }
}
