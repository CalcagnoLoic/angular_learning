import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap_model';
import { FaceSnapService } from '../../../core/services/face-snaps.service';
import { take, interval, tap, Subject, takeUntil, Observable } from 'rxjs';

@Component({
    selector: 'app-face-snap-list',
    templateUrl: './face-snap-list.component.html',
    styleUrls: ['./face-snap-list.component.css'],
})
export class FaceSnapListComponent implements OnInit {
    faceSnaps!: FaceSnap[];
    private destroy$!: Subject<boolean>;
    faceSnaps$!: Observable<FaceSnap[]>;

    constructor(private faceSnapService: FaceSnapService) {}

    ngOnInit(): void {
        this.faceSnaps$ = this.faceSnapService.getAllFaceSnaps();
    }
}
