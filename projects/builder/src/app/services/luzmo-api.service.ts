import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthService } from '@builder/services/auth.service';
import type {
  ItemData,
  ItemQuery,
  RowsData,
  Securable
} from '../helpers/types';

@Injectable({
  providedIn: 'root'
})
export class LuzmoApiService {
  private authService = inject(AuthService);
  private httpClient = inject(HttpClient);

  loadAllDatasets() {
    return this.httpClient.post<
      RowsData<Pick<Securable, 'id' | 'name' | 'created_at' | 'subtype'>>
    >(
      `${this.authService.getApiUrl()}/0.1.0/securable`,
      {
        action: 'get',
        version: '0.1.0',
        key: this.authService.getLoginCookies().key,
        token: this.authService.getLoginCookies().token,
        find: {
          attributes: ['id', 'updated_at', 'created_at', 'name', 'subtype'],
          where: { type: 'dataset', is_variant: false },
          order: [['created_at', 'desc']],
          options: { public: false }
        }
      },
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    );
  }

  // TODO: fix columns type
  loadDatasetWithColumns(datasetId: string) {
    return this.httpClient.post<
      RowsData<
        Pick<Securable, 'id' | 'name' | 'created_at' | 'subtype'> & {
          columns: any[];
        }
      >
    >(
      `${this.authService.getApiUrl()}/0.1.0/securable`,
      {
        action: 'get',
        version: '0.1.0',
        key: this.authService.getLoginCookies().key,
        token: this.authService.getLoginCookies().token,
        find: {
          attributes: ['id', 'name'],
          where: { id: datasetId },
          include: [
            {
              model: 'Column',
              attributes: [
                'id',
                'name',
                'description',
                'type',
                'subtype',
                'format',
                'highestLevel',
                'lowestLevel',
                'duration_levels',
                'duration_format'
              ],
              separate: true,
              order: [['order', 'asc']],
              include: [
                {
                  model: 'HierarchyLevel',
                  attributes: ['id', 'color', 'level', 'name'],
                  separate: true,
                  order: [['level', 'asc']]
                },
                { model: 'Currency', attributes: ['id', 'name', 'symbol'] }
              ]
            }
          ]
        }
      },
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    );
  }

  queryLuzmoDataset(queries: ItemQuery[]) {
    return this.httpClient.post<ItemData>(
      `${this.authService.getApiUrl()}/0.1.0/data`,
      {
        action: 'get',
        version: '0.1.0',
        key: this.authService.getLoginCookies().key,
        token: this.authService.getLoginCookies().token,
        find: { queries }
      },
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    );
  }
}
