import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../../models/face-snap_model';
import { FaceSnapService } from '../../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-single-face-snap',
    templateUrl: './single-face-snap.component.html',
    styleUrls: ['./single-face-snap.component.css'],
})
export class SingleFaceSnapComponent implements OnInit {
    faceSnap!: FaceSnap;
    faceSnap$!: Observable<FaceSnap>;
    btnText!: string;
    isClicked!: boolean;

    constructor(
        private faceSnapService: FaceSnapService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        const snapshotID = +this.route.snapshot.params['id'];

        this.faceSnap = this.faceSnapService.getFaceSnapById(snapshotID);
    }

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

    onBack() {
        this.router.navigateByUrl('/facesnaps');
    }
}
