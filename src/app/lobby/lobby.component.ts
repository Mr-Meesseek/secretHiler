import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lobby',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent {

  gameDate: string = '';
  teamMode: number = 2;

  startGame() {
    console.log('Game started with:', {
      
      
      teamMode: this.teamMode,
    });
  }
}

