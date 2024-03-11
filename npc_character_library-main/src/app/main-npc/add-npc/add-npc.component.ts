import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  npc,
  role,
  npcClass,
  npcAge,
  gender,
  npcRace,
  alignment,
} from 'src/app/shared/models/npc.model';
import { NPCService } from 'src/app/shared/services/npc.service';
import { NpcImgSelectService } from './npc-img-select/npc-img-select.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-npc',
  templateUrl: './add-npc.component.html',
  styleUrls: ['./add-npc.component.css'],
})
export class AddNpcComponent {
  npcForm!: NgForm;
  npcImgs: any[] = [];
  npcImgId: string | null = null;
  displayNpcImgs = false;

  npc: npc = {
    npcName: '',
    imgUrl: '',
    role: undefined,
    npcClass: undefined,
    npcAge: undefined,
    gender: undefined,
    npcRace: undefined,
    alignment: undefined,
    location: '',
    description: '',
  };

  roles = Object.values(role);
  classes = Object.values(npcClass);
  ages = Object.values(npcAge);
  genders = Object.values(gender);
  races = Object.values(npcRace);
  alignments = Object.values(alignment);

  constructor(
    private NPCService: NPCService,
    private NpcImgSelectService: NpcImgSelectService,
    private router: Router
    ) { this.npcImgs = this.NpcImgSelectService.getNpcImg();
    }


    selectNpcImg(imgId: string): void {
      console.log('selectNpcImg called with imgId:', imgId);
      this.npcImgId = imgId;
      const selectedImg = this.npcImgs.find(img => img.id === imgId);
      if (selectedImg) {
        this.npc.imgUrl = selectedImg.url;
      }
    }

    onSubmit(form: NgForm): void {
      if (form.valid) {
        const newNpc: npc = form.value;
        this.NPCService.addNpcToFirebase(newNpc);
        // Reset
        form.resetForm();
      }
    }

  closeForm(): void {
    //this.npcForm.resetForm();
    this.router.navigate(['main']);
  }



  confirmModal() {

  }
}
