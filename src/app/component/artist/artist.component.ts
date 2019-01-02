import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artistInformation:any = {};
  isLoading:boolean = true;
  artistTopTracks:any[] = [];

  constructor(private route:ActivatedRoute, private spotifyService: SpotifyService) {
    this.route.params.subscribe((parameters:any)=>{
      this.viewArtist(parameters['id']);
      this.viewTopTracks(parameters['id']);
    })
   }

  ngOnInit() {
  }

  viewArtist(id:string){
    this.spotifyService.getArtist(id).subscribe((data:any)=>{
        this.artistInformation = data;
        this.isLoading = false;
    });
  }


  viewTopTracks(id:string){
    this.spotifyService.getTopTracks(id).subscribe((data:any)=>{
      console.log(data);
      this.artistTopTracks = data;
    });
  }
}
