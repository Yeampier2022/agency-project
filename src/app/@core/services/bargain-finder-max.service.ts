import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BargainFinderMaxService {
  constructor() {}

  offersSearch() {
    return fetch(environment.apiUrl + 'v5/offers/shop', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + 'T1RLAQJS9ND+dJ3+6WXfNZwhNf9tEYgnzZkCOwuTp6TTUyIDHRC5abpwIqYWgCFIKc2QEVwrAADgf6JGefUa0pwq0SScflJTs+xoMIt+V9Rcxly2V42W5UiFMCct1sumN0ewZvHZWr1v21mo1LPjg4izERyAWeK30vVMEj0AuH2KXenPIw+rTcqBJxtcr1ISiNa40tzqAVFwG1TeRqvQO1J9P0vibPt0lUXFgC+L2qtuzGiOfL36dO/gIsF2Z2NMSecNzhrmtV5Si4KhFF3hmTsciWeyJ9C4y7LKfYj51QcR5gT3SYYYQ+t3OarlGVIXfFo8HWD4NNBo/vzuamKQEVTjstLQlKaEQZq+R209Mm9MHqaymgycnHE*',
      },

    }).then((response) => response.json());
  }
}
