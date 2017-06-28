import { Injectable } from '@angular/core';

import { User } from '../_models/index';

@Injectable()
export class EncodeImageService {
    changeListener($event: any) : void {
        this.readThis($event.target);
    }

    readThis(inputValue: any): void {
        let file: File = inputValue.files[0],
            myReader: FileReader = new FileReader();

        myReader.onloadend = () => {
            this.value = myReader.result;
        };
        myReader.readAsDataURL(file);
    }
}