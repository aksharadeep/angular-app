import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor(private http: HttpClient) { }
  getArtist(name) {
    // tslint:disable-next-line: max-line-length
        return this.http.get('http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=' + name + '&api_key=111edc448ad06c494b92516945c0fe00&format=json');
  }


}
