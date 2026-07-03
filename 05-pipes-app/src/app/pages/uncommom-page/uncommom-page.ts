import { Component, signal } from '@angular/core';
import { Card } from '../../components/card/card';
import {
  AsyncPipe,
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  KeyValuePipe,
  SlicePipe,
  TitleCasePipe,
} from '@angular/common';
import { Title } from '@angular/platform-browser';
import { interval, map, tap } from 'rxjs';

const client1 = {
  name: 'Maria',
  gender: 'femenino',
  age: 35,
  address: 'Calle 123, Ciudad',
};

const client2 = {
  name: 'Andres',
  gender: 'masculino',
  age: 40,
  address: 'Calle 456, Ciudad',
};

@Component({
  selector: 'app-uncommom-page',
  imports: [
    AsyncPipe,
    Card,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    KeyValuePipe,
    TitleCasePipe,
  ],
  templateUrl: './uncommom-page.html',
})
export default class UncommomPage {
  //i18nSelectPipe

  client = signal(client1);

  invitationMap = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
    otros: 'invitade',
  };

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }
    this.client.set(client1);
  }

  //i18nPluralPipe
  clients = signal(['Maria', 'Andres', 'Pedro', 'Juana', 'Luis']);

  clientsMap = signal({
    '=0': 'no tenemos clientes esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    other: 'tenemos # clientes esperando.',
  });

  deleteClient() {
    this.clients.update((prev) => prev.slice(1));
  }

  profile = {
    name: 'Maria',
    age: 35,
    address: 'Calle 123, Ciudad',
  };

  promiseValue: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });

  myObservableInternal = interval(2000).pipe(
    map((value) => value + 1),
    tap((value) => console.log('Valor emitido por el observable:', value)),
  );
}
