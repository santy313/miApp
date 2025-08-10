// src/app/app.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MensajeService } from './mensaje.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent implements OnInit {
  mensaje = '';

  constructor(private mensajeService: MensajeService) {}

  ngOnInit() {
    this.mensajeService.getMensaje().subscribe(data => {
      this.mensaje = data?.texto || 'No hay mensaje';
    });
  }
}
