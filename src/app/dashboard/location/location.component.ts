import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-amaterial/material/material.module';
import { LocationService } from './location.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})

export class LocationComponent {
  planets:any[] = [];
  constructor(private locationService: LocationService){}

 ngOnInit(): void {
   this.locationService.getPlanet().subscribe(data =>{
     this.planets = data.results
   });
 }
}