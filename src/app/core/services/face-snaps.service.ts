import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap_model';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class FaceSnapService {
    constructor(private http: HttpClient) {}

    faceSnaps: FaceSnap[] = [];

    getAllFaceSnaps(): Observable<FaceSnap[]> {
        return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
    }

    getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
        return this.http.get<FaceSnap>(
            `http://localhost:3000/facesnaps/${faceSnapId}`
        );
    }

    snapFaceById(
        faceSnapId: number,
        snapType: 'snap' | 'unsnap'
    ): Observable<FaceSnap> {
        return this.getFaceSnapById(faceSnapId).pipe(
            map((faceSnap) => ({
                ...faceSnap,
                snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1),
            })),
            switchMap((faceSnapUpdated) =>
                this.http.put<FaceSnap>(
                    `http://localhost:3000/facesnaps/${faceSnapId}`,
                    faceSnapUpdated
                )
            )
        );
    }

    addNewFaceSnap(formValue: {
        title: string;
        description: string;
        imageUrl: string;
        location?: string;
    }): Observable<FaceSnap> {
        return this.getAllFaceSnaps().pipe(
            map((facesnaps) =>
                [...facesnaps].sort((a: FaceSnap, b: FaceSnap) => a.id - b.id)
            ),
            map((sortedFacesnap) => sortedFacesnap[sortedFacesnap.length - 1] ),
            map((previousFaceSnap) => ({
                ...formValue,
                snaps: 0,
                createdDate: new Date(),
                id: previousFaceSnap.id + 1,
            })),
            switchMap((newFaceSnap) =>
                this.http.post<FaceSnap>(
                    'http://localhost:3000/facesnaps',
                    newFaceSnap
                )
            )
        );
    }
}
