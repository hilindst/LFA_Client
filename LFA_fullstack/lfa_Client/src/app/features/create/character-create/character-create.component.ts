import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CharacterService } from '../../../shared/services/character.service';
import { Character } from '../../../shared/models/character';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './character-create.component.html',
  styleUrl: './character-create.component.css'
})
export class CharacterCreateComponent {
  characterForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    race: new FormControl('', [Validators.required]),
    char_class: new FormControl('', [Validators.required]),
    alignment: new FormControl('', [Validators.required]),
    level: new FormControl<number>( 1, [Validators.required]),
    background: new FormControl(''),
    gender: new FormControl(''),
    bio: new FormControl(''),
  });

  constructor(private characterService: CharacterService, private router: Router) {}

  onSubmit() {
    const character = new Character(this.characterForm.value)
    // call create character service
    this.characterService.createCharacter(character).subscribe({
      next: (character: Character) => {
        console.log('Character created', character);
        this.router.navigate(['/']);
      },
      error: (error: any) => {
        console.error('Error creating character', error);
      },
    });
  }
}
