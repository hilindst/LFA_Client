import { Component } from '@angular/core';
import { AdventureService } from '../../../shared/services/adventure.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Adventure } from '../../../shared/models/adventure';

@Component({
  selector: 'app-adventure-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './adventure-create.component.html',
  styleUrl: './adventure-create.component.css'
})
export class AdventureCreateComponent {
  adventureForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    ruleset: new FormControl('', [Validators.required]),
    adventure_type: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    setting: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  });

  constructor(private adventureService: AdventureService, private router: Router) {}

  onSubmit() {
    const adventure = new Adventure(this.adventureForm.value)
    // call create character service
    this.adventureService.createAdventure(adventure).subscribe({
      next: (adventure: Adventure) => {
        console.log('Adventure created', adventure);
        this.router.navigate(['/']);
      },
      error: (error: any) => {
        console.error('Error creating adventure', error);
      },
    });
  }
}

