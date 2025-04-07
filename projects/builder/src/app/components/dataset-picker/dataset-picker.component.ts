import {
  CdkVirtualScrollViewport,
  ScrollingModule
} from '@angular/cdk/scrolling';
import type { OnDestroy, OnInit } from '@angular/core';
import type { ElementRef } from '@angular/core';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import type { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-dataset-picker',
  standalone: true,
  imports: [NgbDropdownModule, FormsModule, ScrollingModule],
  templateUrl: './dataset-picker.component.html',
  styleUrls: ['./dataset-picker.component.scss']
})
export class DatasetPickerComponent implements OnInit, OnDestroy {
  @Input() datasets$!: Observable<any[]>;
  @Input() loadingDatasets$!: Observable<boolean>;
  @Output() datasetSelected = new EventEmitter<string>();

  @ViewChild('datasetDropdown') datasetDropdown!: NgbDropdown;
  @ViewChild(CdkVirtualScrollViewport) viewport!: CdkVirtualScrollViewport;
  @ViewChild('searchInput') searchInput!: ElementRef;

  searchQuery = '';
  sortOption: 'name' | 'date' = 'date';
  selectedDatasetId: string | null = null;
  selectedDatasetName: string | null = null;

  datasets: any[] = [];
  filteredDatasets: any[] = [];
  isLoadingDatasets = false;

  private datasetsSubscription: Subscription | null = null;
  private loadingSubscription: Subscription | null = null;

  ngOnInit(): void {
    this.datasetsSubscription = this.datasets$.subscribe((datasets) => {
      this.datasets = datasets || [];
      this.filterDatasets();
    });

    this.loadingSubscription = this.loadingDatasets$.subscribe((isLoading) => {
      this.isLoadingDatasets = isLoading;
    });
  }

  ngOnDestroy(): void {
    if (this.datasetsSubscription) {
      this.datasetsSubscription.unsubscribe();
    }

    if (this.loadingSubscription) {
      this.loadingSubscription.unsubscribe();
    }
  }

  onDropdownOpened(): void {
    // Wait for the DOM to be ready
    setTimeout(() => {
      this.searchInput.nativeElement.focus();
      if (this.viewport) {
        // If we have a selected item, scroll to it
        if (this.selectedDatasetId) {
          const index = this.filteredDatasets.findIndex(
            (d) => d.id === this.selectedDatasetId
          );
          if (index >= 0) {
            this.viewport.scrollToIndex(index, 'smooth');
          }
        }
      }
    });
  }

  // Method to track datasets by ID (for ngFor optimization)
  trackById(index: number, item: any): string {
    return item.id;
  }

  filterDatasets(): void {
    let filtered = [...this.datasets];

    // Apply search filter if query exists
    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter((dataset) =>
        dataset.localizedName.toLowerCase().includes(query)
      );
    }

    // Sort the datasets
    filtered.sort((a, b) => {
      if (this.sortOption === 'name') {
        return a.localizedName.localeCompare(b.localizedName);
      } else {
        // Sort by date (most recent first)
        return (
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      }
    });

    this.filteredDatasets = filtered;
  }

  selectDataset(dataset: any): void {
    this.selectedDatasetId = dataset.id;
    this.selectedDatasetName = dataset.localizedName;
    this.datasetSelected.emit(dataset.id);

    // Close the dropdown after selection
    if (this.datasetDropdown) {
      this.datasetDropdown.close();
    }
  }

  setSortOption(option: 'name' | 'date'): void {
    this.sortOption = option;
    this.filterDatasets();
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };
    return date.toLocaleDateString(undefined, options);
  }
}
