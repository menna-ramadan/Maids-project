export class Paging {
  MaxPageSize: number = 50;

  PageNumber: number = 1;

  PageSize: number = 10;
}

export class BaseFilter {
  keyword: string | null = '';
  paging: Paging = new Paging();
}
