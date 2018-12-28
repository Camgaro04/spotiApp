import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newSongs:any[] = [];
  isLoading: boolean;

  constructor(private sportifyService: SpotifyService) { 
    this.isLoading = true;

      this.sportifyService.getNewReleases().subscribe((data:any)=>{
        this.newSongs = data;
        this.isLoading = false;
      });
  }

  ngOnInit() {
  
  }

}
