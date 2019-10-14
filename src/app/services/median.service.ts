import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MedianService {
  constructor(private http: HttpClient) {}

  public calculateIncrementalMedian(numbers: number[]): Observable<number[]> {
    const localHost: string = `http://localhost:8080`;         
    const url: string = localHost + '/median/incremental';
    const contentType = {
      headers: new HttpHeaders().set("Content-Type", "application/json")
    };    
    return this.http.post<number[]>(url, "["+numbers+"]" , contentType);
  }
}
