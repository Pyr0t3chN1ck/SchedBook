import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NailService } from '../../../shared/models';
import { MatSelectionList } from '@angular/material/list';
import { Observable, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState, selectAllCurrentNailServices } from 'src/app/state/reducers';
import { createNailService, markNailServiceDeleted, updateNailService } from 'src/app/state/actions/nail-services.actions';

@Component({
  selector: 'app-nail-services-configuration',
  templateUrl: './nail-services-configuration.component.html',
  styleUrls: ['./nail-services-configuration.component.css']
})
export class NailServicesConfigurationComponent implements OnInit, OnDestroy {
  subscriptions = new Subscription();
  nailServices$: Observable<NailService[]>;
  @ViewChild('nailServicesListEl') nailServiceListEl: MatSelectionList;
  selectedNailService: NailService = null;
  showAddServiceForm = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.nailServices$ = this.store.pipe(select(selectAllCurrentNailServices));
  }

  selectNailService(): void {
    this.subscriptions.add(
      this.nailServices$.subscribe(services => {
        this.selectedNailService = services.find(ns => ns.id === this.nailServiceListEl.selectedOptions.selected[0]?.value);
      })
    );
  }

  deleteNailService(deletedNailService: NailService): void {
    this.selectedNailService = null;
    this.nailServiceListEl.selectedOptions.clear();
    this.store.dispatch(markNailServiceDeleted({ id: deletedNailService.id }));
  }

  saveNailServiceEdit(editedNailService: NailService): void {
    editedNailService.id = this.selectedNailService.id;
    const payload = {
      ...editedNailService,
      oldValues: { name: this.selectedNailService.name, price: this.selectedNailService.price }
    };
    this.selectedNailService = null;
    this.nailServiceListEl.selectedOptions.clear();
    this.store.dispatch(updateNailService({ payload }));
  }

  openAddServiceForm(): void {
    this.showAddServiceForm = true;
    this.selectedNailService = null;
    this.nailServiceListEl.selectedOptions.clear();
  }

  addService(newNailService: NailService): void {
    this.showAddServiceForm = false;
    this.store.dispatch(createNailService({ name: newNailService.name, price: newNailService.price }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
