import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-npc-img-select',
  template: `
  <div class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">Select Their Image</h3>
          <button type="button" class="close" (click)="closeImgModal()">
            <span>&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="d-flex flex-wrap">
            <img *ngFor="let img of imgs" [src]="getImgPath(img)" (click)="selectImg(img)"
            class="img-thumbnail">
          </div>
        </div>
      </div>
    </div>
  </div>`,
  styleUrls: ['./npc-img-select.component.css']
})

export class NpcImgSelectComponent {
  imgs: string[];

  @Output() imgSelected: EventEmitter<string> = new EventEmitter<string>();

  selectImg(img: string) {
    this.imgSelected.emit(this.getImgPath(img));
    this.closeImgModal();
  }
  closeImgModal(): void {

  }

  getImgPath(img: string): string {
    return `assets/img/npc_imgFiles/${img}`;
  }

}
