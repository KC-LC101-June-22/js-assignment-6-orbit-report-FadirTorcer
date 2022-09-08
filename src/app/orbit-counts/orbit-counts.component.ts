import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

	@Input() satellites: Satellite[];

	// make an array to store satellite types
	satTypeArray: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  listSatTypes(): string[] {
	for (let i = 0; i < this.satellites.length; i++) {
		if (!this.satTypeArray.includes(this.satellites[i].type)) {
			this.satTypeArray.push(this.satellites[i].type);
			//then iterate over typeArray in ngFor
  		}
	}
	return this.satTypeArray;
  }
  
  countByType(type: string): number {
	let count = 0;
	if (this.satellites) {
	  for (let i = 0; i < this.satellites.length; i++) {
		 if (this.satellites[i].type === type) {
			count++;
		 }
	  }
	}
	return count;
 }


}