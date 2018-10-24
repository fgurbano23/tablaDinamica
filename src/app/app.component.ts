import { Component } from '@angular/core';
import {CellConfigurationModel} from './cellConfiguration.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
    for (let i = 0; i < this.cntCol.length; i++) {
      let temp = [];
      for (let j = 0; j < this.cntCol[i];j++){
        temp.push(new CellConfigurationModel( '', '',  '', '', '', ''));
      }
      this.matrix.push(temp);
    }
  }

  pushCol(i) {
    if (this.cntCol[i] < 5) {
      this.cntCol[i] = this.cntCol[i] + 1;
      this.matrix[i].push(new CellConfigurationModel( '', '',  '', '', '', ''));
    }
  }
  popCol(i) {
    if (this.cntCol[i] > 1) {
    this.cntCol[i] = this.cntCol[i] - 1;
    this.matrix[i].pop();
    this._row = 0;
    this._col = 0;
    console.log(this.matrix[i]);
    }
  }

  refactorRows() {
    if (this.row > this.oldRow) {
      for (let i = 0; i< this.row -this.oldRow; i++ ){
        this.cntCol.push(3);
        this.matrix.push(
          [
            new CellConfigurationModel( '', '',  '', '', '', ''),
            new CellConfigurationModel( '', '',  '', '', '', ''),
            new CellConfigurationModel( '', '',  '', '', '', '')
          ]
        );
      }
      this.oldRow = this.row;
    }
    if (this.row < this.oldRow) {
      for (let i = 0; i < this.oldRow -this.row; i++ ) {
        this.cntCol.pop();
        this.matrix.pop();
      }
      this.oldRow = this.row;
    }
  }
  getCell(i, j) {
    console.log(i + ' ' + j);
    this._row = i;
    this._col = j;
  }

  size(i) {
    return ( 100 / this.cntCol[i]);
  }

  border(tam) {
    return 'solid #A8A8A8 ' + tam + 'px';
  }
}
