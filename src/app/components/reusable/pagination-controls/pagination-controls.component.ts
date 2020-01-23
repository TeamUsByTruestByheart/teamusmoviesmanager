import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'Pagination-controls',
  templateUrl: './pagination-controls.component.html',
  styleUrls: ['./pagination-controls.component.scss']
})
export class PaginationControlsComponent implements OnInit {
  public currentPage = 1;
  public previousPage: number;
  public pageNumber = ['<', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, '>'];
  public lastPageNumber: any;
  public firstPageNumber: any = 1;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();


  constructor() { }

  ngOnInit() {
  }

  moveToPage(page: any) {
    switch (page) {
      case '<':
        this.moveToPreviousPage(this.currentPage);
        break;
      case '>':
        this.moveToNextPage(this.currentPage);
        break;
      default:
        this.goToPage(page);
    }
  }

  moveToPreviousPage(index: number) {
    let page: any;
    page = Number(this.pageNumber[index]) - 1;
    const moveToPrev = index - 1;
    this.firstPageNumber = Number(this.pageNumber[1]) - 14;
    if (moveToPrev > 0) {
      this.currentPage = moveToPrev;
      this.pageChange.emit(page);
    } else {
      this.pageNumber = this.generateThirteenPages(this.firstPageNumber);
      this.currentPage = 13;
      page = this.pageNumber[this.currentPage];
      this.pageChange.emit(page);
    }
  }

  moveToNextPage(index: number) {
    let page: any;
    page = Number(this.pageNumber[index]) + 1;
    const moveToNext = index + 1;
    this.lastPageNumber = this.pageNumber[13];
    if (moveToNext <= 13) {
      this.currentPage = moveToNext;
      this.pageChange.emit(page);
    } else {
      this.pageNumber = this.generateThirteenPages(this.lastPageNumber);
      this.currentPage = 1;
      page = this.pageNumber[this.currentPage];
      this.pageChange.emit(page);
    }
  }

  generateThirteenPages(lastNumber: number): Array<number> {
    let newPageArraySet = [];
    let items = 0;
    const beginAt = lastNumber + 1;
    for (let i = beginAt; items < 13; i++) {
      newPageArraySet = [...newPageArraySet, i];
      items++;
    }
    newPageArraySet = ['<', ...newPageArraySet, '>'];
    return newPageArraySet;
  }

  goToPage(page) {
    this.currentPage = this.pageNumber.indexOf(page);
    this.pageChange.emit(page);
  }
}
