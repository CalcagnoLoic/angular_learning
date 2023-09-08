import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap_model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    mySnap!: FaceSnap;
    mySecondSnap!: FaceSnap;
    myOtherSnap! : FaceSnap

    ngOnInit(): void {
        this.mySnap = new FaceSnap(
            'Archibald',
            'Mon meilleur ami depuis des années',
            new Date(),
            6,
            'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            'Like it!',
            false
        );
        this.mySecondSnap = new FaceSnap(
            'Starling bird',
            'Une photo d\'un étourneau sansonnet',
            new Date(),
            2,
            'https://cdn.pixabay.com/photo/2023/08/29/19/09/starling-8221990_960_720.jpg',
            'Like it!',
            false
        );
        this.myOtherSnap = new FaceSnap(
            'Lynx',
            'Un Lynx sauvage',
            new Date(),
            15,
            'https://cdn.pixabay.com/photo/2023/09/02/15/03/lynx-8229077_960_720.png',
            'Like it!',
            false
        );
    }
}
