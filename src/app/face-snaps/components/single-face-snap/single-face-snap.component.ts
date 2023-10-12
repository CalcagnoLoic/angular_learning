import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap_model';
import { FaceSnapService } from '../../../core/services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
    selector: 'app-single-face-snap',
    templateUrl: './single-face-snap.component.html',
    styleUrls: ['./single-face-snap.component.css'],
})
export class SingleFaceSnapComponent implements OnInit {
    faceSnap!: FaceSnap;
    faceSnap$!: Observable<FaceSnap>;
    btnText!: string;

    constructor(
        private faceSnapService: FaceSnapService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        const snapshotID = +this.route.snapshot.params['id'];
        this.faceSnap$ = this.faceSnapService.getFaceSnapById(snapshotID);

        this.btnText = 'Oh snap!';
    }

    onSnap(faceSnapId: number) {
        if (this.btnText === 'Oh snap!') {
            this.faceSnap$ = this.faceSnapService
                .snapFaceById(faceSnapId, 'snap')
                .pipe(tap(() => (this.btnText = 'Oops, unsnap!')));
        } else {
            this.faceSnap$ = this.faceSnapService
                .snapFaceById(faceSnapId, 'unsnap')
                .pipe(tap(() => (this.btnText = 'Oh snap!')));
        }
    }

    onBack() {
        this.router.navigateByUrl('/facesnaps');
    }
}
