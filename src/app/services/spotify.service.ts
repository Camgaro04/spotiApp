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
      'Authorization':'Bearer BQAR78qrH0Xp7tdx9__qQT14HnxfMZ9NPJ5Aqw9gApgS3QAwKdFLnbalQM0-VEtIldbmbywniqrFJV5KtiA'
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

  getArtist(id:string){
    return this.getQuery(`artists/${id}`).pipe( map((data:any)=>{
      return data;
     }));
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe( map((data:any)=>{
      return data.tracks;
     }));
  }

}
