import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  beers: any = [
    {name: 'Ipa', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aliquid. Ea quisquam, facere corporis maxime quo aliquid quos doloremque, recusandae enim, exercitationem non labore velit perferendis quod deleniti eius qui?'},
    {name: 'Red', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aliquid. Ea quisquam, facere corporis maxime quo aliquid quos doloremque, recusandae enim, exercitationem non labore velit perferendis quod deleniti eius qui?'},
    {name: 'Pilsen', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aliquid. Ea quisquam, facere corporis maxime quo aliquid quos doloremque, recusandae enim, exercitationem non labore velit perferendis quod deleniti eius qui?'},
    {name: 'Stout', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aliquid. Ea quisquam, facere corporis maxime quo aliquid quos doloremque, recusandae enim, exercitationem non labore velit perferendis quod deleniti eius qui?'},
  ]

  selectedBeer: any

  ngOnInit(): void {
    this.selectedBeer = this.beers[1]
  }

  clickBeer(beer: any){
    this.selectedBeer = beer
  }

}
