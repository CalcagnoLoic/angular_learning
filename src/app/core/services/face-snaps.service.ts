import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap_model';

@Injectable({
    providedIn: 'root',
})
export class FaceSnapService {
    faceSnaps: FaceSnap[] = [
        {
            id: 1,
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
            id: 2,
            title: 'Starling bird',
            description: "Une photo d'un étourneau sansonnet",
            createdDate: new Date('2023-08-17T13:54:00'),
            snaps: 150,
            imageUrl:
                'https://cdn.pixabay.com/photo/2023/08/29/19/09/starling-8221990_960_720.jpg',
            btnText: 'Like it!',
            isClicked: false,
        },
        {
            id: 3,
            title: 'Lynx',
            description: 'Un Lynx sauvage',
            createdDate: new Date('2023-05-18T03:24:00'),
            snaps: 210,
            imageUrl:
                'https://cdn.pixabay.com/photo/2023/09/02/15/03/lynx-8229077_960_720.png',
            btnText: 'Like it!',
            isClicked: false,
        },
    ];

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(
            (faceSnap) => faceSnap.id === faceSnapId
        );

        if (!faceSnap) {
            throw new Error('Snap not found');
        } else {
            return faceSnap;
        }
    }

    snapFaceById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }

    addNewFaceSnap(formValue: {
        title: string;
        description: string;
        imageUrl: string;
        location?: string;
    }) {
        const faceSnap: FaceSnap = {
            ...formValue,
            snaps: 0,
            createdDate: new Date(),
            id: this.faceSnaps[this.faceSnaps.length - 1].id + 1,
            btnText: 'Like',
            isClicked: false,
        };

        this.faceSnaps.push(faceSnap);
    }
}
