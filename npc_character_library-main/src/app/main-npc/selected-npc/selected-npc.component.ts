import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { npc } from 'src/app/shared/models/npc.model';
import { NPCService } from 'src/app/shared/services/npc.service';

interface EditingState {
  field: string;
  value: string;
}

@Component({
  selector: 'app-selected-npc',
  templateUrl: './selected-npc.component.html',
  styleUrls: ['./selected-npc.component.css'],
})

export class SelectedNpcComponent implements OnInit, OnDestroy {
  npc: npc;
  editingState: EditingState | null = null;
  isEditMode: boolean = false;

  editingField: string | null = null;
  temporaryValue = '';

  npcFields = [
    { label: 'Name', property: 'npcName'},
    { label: 'Role', property: 'role' },
    { label: 'Race', property: 'npcRace' },
    { label: 'Class', property: 'npcClass' },
    { label: 'Age', property: 'npcAge' },
    { label: 'Gender', property: 'npcGender' },
  ];

  // Declare a subscription property
  private npcSelectedSubscription: Subscription;

  constructor(private npcService: NPCService) {}

  ngOnInit() {
    // Subscribe to the observable and store the subscription
    this.npcSelectedSubscription = this.npcService.npcSelected.subscribe((npc: npc) => {
      this.npc = npc;
    });
  }

  ngOnDestroy() {
    // Check if the subscription exists and if so, unsubscribe
    if (this.npcSelectedSubscription) {
      this.npcSelectedSubscription.unsubscribe();
    }
  }

  editField(field: string, value: string): void {
    this.editingState = { field, value };
  }

  saveNpc(): void {
    if (this.npc) {
      // Call hte npc service to update the npc on firebase
      this.npcService.updateNpcOnFirebase(this.npc);

      // Turn off edit mode
      this.isEditMode = false;
    }
  }

  onDeleteNpc(event: Event, npc: npc) {
    event.stopPropagation();
    this.npcService.deleteNpcOnFirebase(npc.id);
    this.npcService.npcSelected.next(null);
}

  cancelEdit(): void {
    this.editingState = null;
  }

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
    if (!this.isEditMode) {
      this.editingState = null;
    }
  }
}
