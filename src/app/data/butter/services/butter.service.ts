import { HttpClient, HttpParams } from '@angular/common/http';
import { inject } from '@angular/core';
import { Butter } from '@data/butter/types/butter';
import { environment } from '@env';
import { map } from 'rxjs';

export class ButterService<T> {
  private http = inject(HttpClient);

  constructor(private slug: string) {}

  get(params: { [key: string]: string | number | boolean } = {}) {
    return this.butterContent(this.slug, params);
  }

  private butterContent(key: string, params: { [key: string]: string | number | boolean }) {
    let httpParams = new HttpParams().set('auth_token', environment.token);
    Object.entries(params).forEach(([key, value]) => (httpParams = httpParams.set(key, value)));

    return this.http
      .get<Butter<T>>(`${environment.apiUrl}${key}`, {
        params: httpParams,
      })
      .pipe(map(response => response.data[this.slug]));
  }
}
