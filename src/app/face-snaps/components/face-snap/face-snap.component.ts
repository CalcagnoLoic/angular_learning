import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap_model';
import { FaceSnapService } from '../../../core/services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-face-snap',
    templateUrl: './face-snap.component.html',
    styleUrls: ['./face-snap.component.css'],
})
export class FaceSnapComponent implements OnInit {
    @Input() faceSnap!: FaceSnap;
    btnText!: string;
    isClicked!: boolean;

    constructor(
        private faceSnapService: FaceSnapService,
        private router: Router
    ) {}

    ngOnInit(): void {}

    onSnap() {
        if (this.faceSnap.isClicked !== true) {
            this.faceSnapService.snapFaceById(this.faceSnap.id, 'snap');
            this.faceSnap.btnText = 'Already liked';
            this.faceSnap.isClicked = true;
        } else {
            this.faceSnapService.snapFaceById(this.faceSnap.id, 'unsnap');
            this.faceSnap.btnText = 'Like it!';
            this.faceSnap.isClicked = false;
        }
    }

    onRedirectById() {
        this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
    }
}
