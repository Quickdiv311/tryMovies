import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.css']
})
export class CinemasComponent {

public movieName: any;
public cinemas: any =  [
  {
    movie: "Game of Thrones",
    theatres: [
      {
        name: "Fun cinemas",
        timings: [
          "10 am","4 pm","9 pm"
        ]
      },
      {
        name: "Cinepolis",
        timings: [
          "11 am","2 pm","7 pm"
        ]
      },
      {
        name: "Palassio",
        timings: [
          "9 am","12 pm","5 pm"
        ]
      }
    ]
  },
  {
    movie: "House of the Dragon",
    theatres: [
      {
        name: "Inox",
        timings: [
          "10 am","4 pm","9 pm"
        ]
      },
      {
        name: "Wave",
        timings: [
          "11 am","2 pm","7 pm"
        ]
      },
      {
        name: "Palassio",
        timings: [
          "9 am","12 pm","5 pm"
        ]
      }
    ]
  },
]

constructor(private route: ActivatedRoute){
  this.movieName = this.route.snapshot.params['name'];
}
   
}
