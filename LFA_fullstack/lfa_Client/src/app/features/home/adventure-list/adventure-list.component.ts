import { Component, OnDestroy, OnInit } from '@angular/core';
import { Character } from '../../../shared/models/character';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adventure-list',
  standalone: true,
  imports: [],
  templateUrl: './adventure-list.component.html',
  styleUrl: './adventure-list.component.css'
})

export class AdventureListComponent {
    /* searchTerm: string = '';

    currentPage: number = 1;
    itemsPerPage: number = 5;
    totalItems: number = 0;
    confirmDelete: character;
    confirmEvent: Event;


    filteredCharacters: character[] = [];
    characters: character[] = [];

    sortDirections: { [key: string]: 'asc' | 'desc' } = {
      name: 'asc',
      role: 'asc'
    };

    constructor(private npcService: NPCService, private searchService: SearchService, private router: Router, private randomNpcService: RandomNpcService) { }

    ngOnInit(): void {
      // Subscription to get the search term and filter the NPCs
      this.searchSubscription = this.searchService.getSearchTerm().subscribe(term => {
        this.searchTerm = term;
        this.applyFilter();
      });

      // Subscription to get the list of NPCs from a service
      this.npcsSubscription = this.npcService.npcChange$.subscribe((npcsList) => {
        this.npcs = npcsList;
        this.applyFilter();
      });
    }

    // Method to filter NPCs based on the search term
    applyFilter(): void {
      if (!this.searchTerm) {
        this.filteredNPCs = this.npcs; // Display all NPCs if the search term is empty
      } else {
        this.filteredNPCs = this.npcs.filter(npc =>
          npc.npcName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          npc.role.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      }

      this.totalItems = this.filteredNPCs.length;
      this.paginate();
    }

    onAddNpc(): void {
      // Add NPC button click event
      console.log('Add NPC button clicked');
      this.router.navigate(['new']);
    }

    confirmNPC($event: Event, npc: npc) {
      this.confirmDelete = npc;
      this.confirmEvent = $event;
    }

    onDeleteNpc() {
      this.npcService.deleteNpcOnFirebase(this.confirmDelete.id);
      this.npcService.npcSelected.next(null);

      // update total items for pagination
      this.totalItems--;

      // update current page if the last item was deleted
      if (this.totalItems <= (this.currentPage - 1) * this.itemsPerPage && this.currentPage > 1) {
        this.currentPage--;
      }
    }

    createRandomNpc(): void {
      const randomNpc = this.randomNpcService.createRandomNpc();
      this.npcService.addNpcToFirebase(randomNpc);
    }


    paginate(): void {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = this.currentPage * this.itemsPerPage;
      this.filteredNPCs = this.filteredNPCs.slice(startIndex, endIndex);
    }

    selectedNpc: npc | null = null;

    // Method to display selected npc
    onSelected(npc: npc): void {
      this.selectedNpc = npc; // Track the selected NPC in the component
      this.npcService.npcSelected.next(npc); // Notify the npcService about the selected NPC
    }


    // Sorting methods
    sortByName(direction: 'asc' | 'desc'): void {
      this.npcs.sort((a, b) => direction === 'asc' ? a.npcName.localeCompare(b.npcName) : b.npcName.localeCompare(a.npcName));
    }

    sortByRole(direction: 'asc' | 'desc'): void {
      this.npcs.sort((a, b) => direction === 'asc' ? a.role.localeCompare(b.role) : b.role.localeCompare(a.role));
    }

    handleNpcSort(property: string): void {
      const direction = this.sortDirections[property] || 'asc';
      if (property === 'name') {
        this.sortByName(direction);
      } else if (property === 'role') {
        this.sortByRole(direction);
      }
      this.sortDirections[property] = direction === 'asc' ? 'desc' : 'asc';

      // Apply pagination after sorting
      this.applyFilter();
    }

    ngOnDestroy(): void {
      // Unsubscribe to avoid memory leaks
      if (this.searchSubscription) {
        this.searchSubscription.unsubscribe();
      }
      if (this.npcsSubscription) {
        this.npcsSubscription.unsubscribe();
      }
    }

    onSearchTermChange(newTerm: string): void {
      this.searchService.setSearchTerm(newTerm);
    }

    onPageChange(page: number): void {
      this.currentPage = page;
      this.applyFilter();
    }
  }
 */
}
