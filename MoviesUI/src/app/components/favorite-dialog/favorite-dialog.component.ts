import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Movie } from '../../services/movie.service';

@Component({
  selector: 'app-favorite-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule], 
  templateUrl: './favorite-dialog.component.html',
  styleUrls: ['./favorite-dialog.component.scss']
})
export class FavoriteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<FavoriteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public favoriteMovies: Movie[]
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
