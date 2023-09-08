import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap_model';

@Component({
    selector: 'app-face-snap',
    templateUrl: './face-snap.component.html',
    styleUrls: ['./face-snap.component.css'],
})
export class FaceSnapComponent implements OnInit {
    @Input() faceSnap!: FaceSnap;

    title!: string;
    description!: string;
    createdDate!: Date;
    snaps!: number;
    imageUrl!: string;
    btnText!: string;
    isClicked!: boolean;

    ngOnInit(): void {}

    onSnap() {
        if (this.faceSnap.isClicked !== true) {
            this.faceSnap.snaps++;
            this.faceSnap.btnText = 'Already liked';
            this.faceSnap.isClicked = true;
        } else {
            this.faceSnap.snaps--;
            this.faceSnap.btnText = 'Like it!';
            this.faceSnap.isClicked = false;
        }
    }
}
