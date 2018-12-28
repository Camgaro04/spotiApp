import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistResults : any[] = [];
  isLoading:boolean;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  searchArtist(searchTerm:string ){
    
    if(searchTerm.length>0){
      this.isLoading = true;
      this.spotifyService.getArtists(searchTerm).subscribe((data:any)=>{
        this.artistResults = data;
        this.isLoading = false;
      });
    }
  }
}
