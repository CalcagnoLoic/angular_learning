import {Component} from '@angular/core';

@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent {
  title!: string
  description!: string
  createdAd!: Date
  snaps!: number
  imageUrl!: string

  ngOnInit(): void {
    this.title = "Pokémon Jaune"
    this.description = "Jeu de la 1ère génération datant de 2000"
    this.createdAd = new Date()
    this.snaps = 5
    this.imageUrl = "assets/img/jaune.png"
  }
}

