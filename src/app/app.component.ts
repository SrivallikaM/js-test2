import { Component, OnInit } from '@angular/core';

import { newReleases, movieLists, boxarts, movieListsSmall } from '../data/sampledata';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
secondArray =[]
  ngOnInit() {
     // retrive movie title and boxart with rating 5.0 from newReleases

    // Retrieve id, title, and a 150x200 box art url for every video from movieLists array
var videolists = movieLists.reduce((total,index)=>
{
total.push({"videos":index['videos']});
return total
},[]);
console.log(videolists)
var acc =[];
 videolists.forEach((item,index) =>
{
 this.secondArray =  item["videos"].reduce((acc,index) =>
  {
    acc.push({"id":index['id'],"title":index['title'],"boxarts":index['boxarts'].filter((item,index)=>{if(item['width']== 150 && item['height'] == 200) return true;})});
    return acc;
  },acc)
}
)
console.log( this.secondArray)
    // Retrieve url of the largest boxart from boxarts array 

    // Retrieve the id, title, and smallest box art url for every video from movieListsSmall array
  }
}
