import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { FaceSnap } from '../../models/face-snap_model';
import { Router } from '@angular/router';
import { FaceSnapService } from '../../services/face-snaps.service';

@Component({
    selector: 'app-new-face-snap',
    templateUrl: './new-face-snap.component.html',
    styleUrls: ['./new-face-snap.component.css'],
})
export class NewFaceSnapComponent implements OnInit {
    snapForm!: FormGroup;
    faceSnapPreview$!: Observable<FaceSnap>;
    urlRegex!: RegExp;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private faceSnapService: FaceSnapService
    ) {}

    ngOnInit(): void {
        this.urlRegex =
            /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;

        this.snapForm = this.formBuilder.group(
            {
                title: [null, [Validators.required]],
                description: [null, [Validators.required]],
                imageUrl: [
                    null,
                    [Validators.required, Validators.pattern(this.urlRegex)],
                ],
                location: [null],
            },
            {
                updateOn: 'blur',
            }
        );

        this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
            map((formValue) => ({
                ...formValue,
                id: 0,
                snaps: 0,
                createdDate: new Date(),
            }))
        );
    }

    onSubmitForm() {
        this.faceSnapService.addNewFaceSnap(this.snapForm.value);
        this.router.navigateByUrl('/facesnaps');
    }
}
