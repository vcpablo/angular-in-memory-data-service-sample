import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatSort, MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { RemoveDialogComponent } from './remove-dialog/remove-dialog.component';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  
  @Input() data: any = [];
  @Input() options: any = {};
  
  
  dataSource: any;
  columns: Array<String> = [];
  
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private router: Router, private dialog: MatDialog,
              private snackBar: MatSnackBar) { }
  
  ngOnInit() {
    if(this.showOptions) {
      this.options.columns.push({
        title: 'Options',
        field: 'options'
      })
    }
    this.columns = this.options.columns.map(column => column.field);


    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.sort = this.sort;
  }

  get showOptions() {
    return this.options.enableEdit || this.options.enableRemove;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  edit(element: any) {
    this.router.navigate([`${this.options.route}/${element.id}`]);
  }

  removeFromTable(id) {
    let data = this.dataSource.data
    const index = data.find(item => item.id === id)
    if(index) {
      data.splice(index, 1)
      this.dataSource.data = data;
    }
  }

  remove(element: any) {
    const dialogRef = this.dialog.open(RemoveDialogComponent, {
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.options.service.delete(result).subscribe(() => {
          this.snackBar.open('Item successfully removed', 'Ok', {
            duration: 2000,
            verticalPosition: 'top',
            horizontalPosition: 'right'
          });
    
          this.removeFromTable(result);
        });
      }
    });
  }

}
