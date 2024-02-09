import { Component, Input, OnInit } from '@angular/core';
import {HomeComponent} from '../home/home.component'
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake'
import { retry } from 'rxjs';
@Component({
  selector: 'app-content',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{
  photoCover:string = '';
  contentTitle:string = ''
  contentDescription:string = ''
  private id:string | null = "0"
  constructor(private route:ActivatedRoute){

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id"))
      this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]
    if(result){
      this.contentTitle = result.title
      this.contentDescription = result.description
      this.photoCover = result.photo
    }
  }
}
