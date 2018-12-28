import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private httpClient:HttpClient) { 

  }

  getQuery(query:string){
    const BASEQUERY =`https://api.spotify.com/v1/${ query }`;
    const headers =  new HttpHeaders({
      'Authorization':'Bearer BQBEdn2GPLRRGWt922W9-pjBSOpPw5V466JKTfRNmUL5rloOu0HICNBH3W-pmgC6W6UqVG8ljNcHeJi-_OI'
    });

    return this.httpClient.get(BASEQUERY,{ headers });
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases').pipe(map((data:any)=>{
      return data.albums.items;
    }));
  }

  getArtists(searchTerm:string){
    return this.getQuery(`search?q=${searchTerm}&type=artist`).pipe( map((data:any)=>{
              return  data.artists.items;
             }));
  }

}
