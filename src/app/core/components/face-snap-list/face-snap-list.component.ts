import { Component, OnInit, OnDestroy } from '@angular/core';
import { FaceSnap } from '../../models/face-snap_model';
import { FaceSnapService } from '../../services/face-snaps.service';
import { take, interval, tap, Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-face-snap-list',
    templateUrl: './face-snap-list.component.html',
    styleUrls: ['./face-snap-list.component.css'],
})
export class FaceSnapListComponent implements OnInit, OnDestroy {
    faceSnaps!: FaceSnap[];
    private destroy$!: Subject<boolean>;

    constructor(private faceSnapService: FaceSnapService) {}

    ngOnInit(): void {
        this.destroy$ = new Subject<boolean>();
        this.faceSnaps = this.faceSnapService.faceSnaps;

        interval(1000)
            .pipe(takeUntil(this.destroy$), tap(console.log))
            .subscribe();
    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
    }
}
