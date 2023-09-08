import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap_model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    faceSnap!: FaceSnap[];

    ngOnInit(): void {
        this.faceSnap = [
            {
                title: 'Archibald',
                description: 'Mon meilleur ami depuis des années',
                createdDate: new Date(),
                snaps: 75,
                imageUrl:
                    'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
                btnText: 'Like it!',
                isClicked: false,
                location: 'La Hestre',
            },
            {
                title: 'Starling bird',
                description: "Une photo d'un étourneau sansonnet",
                createdDate: new Date(),
                snaps: 150,
                imageUrl:
                    'https://cdn.pixabay.com/photo/2023/08/29/19/09/starling-8221990_960_720.jpg',
                btnText: 'Like it!',
                isClicked: false,
            },
            {
                title: 'Lynx',
                description: 'Un Lynx sauvage',
                createdDate: new Date(),
                snaps: 210,
                imageUrl:
                    'https://cdn.pixabay.com/photo/2023/09/02/15/03/lynx-8229077_960_720.png',
                btnText: 'Like it!',
                isClicked: false,
            },
        ];
    }
}
