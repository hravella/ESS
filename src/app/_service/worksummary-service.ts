import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WorkSummary } from '../_model/WorkSummary';

@Injectable()
export class WorkSummaryService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<WorkSummary[]>('/api/worksummary');
    }

    getById(id: number) {
        return this.http.get('/api/worksummary/' + id);
    }

}
