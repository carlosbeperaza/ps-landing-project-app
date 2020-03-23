import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PS_ENVIRONMENT } from '../../../environments/environment';
// import { imageBase64 } from './image';
// import { TreeviewItem } from 'ngx-treeview';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private URL_API: string = PS_ENVIRONMENT.LOCAL.URL;

  constructor(private http: HttpClient) {
  }

  getAll = async (resource: string) => await this.http.get(`${this.URL_API}/${resource}`).toPromise();

  getById = async (resource: string, id: any) => await this.http.get(`${this.URL_API}/${resource}/${id}`).toPromise();

  create = async (resource: string, object: any) => await this.http.post(`${this.URL_API}/${resource}/add`, object).toPromise();

  update = async (resource: string, object: any) => await this.http.put(`${this.URL_API}/${resource}/update`, object).toPromise();

  delete = async (resource: string, id: any) => await this.http.delete(`${this.URL_API}/${resource}/${id}`).toPromise();
}
