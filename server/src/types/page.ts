export type PageStatus = 'header' | 'menu' | 'footer';

export interface IPage {
  pageId: string;
  name: string;
  content: string;
  status: PageStatus;
}

export type NewPage = Omit<IPage, 'pageId'>;
