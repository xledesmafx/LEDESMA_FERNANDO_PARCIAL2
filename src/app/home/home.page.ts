import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../services/categorias.service';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  categorias: any[] = [];
  productos: any[] = [];
  categoriaSeleccionada: number | undefined;

  constructor(
    private categoriasService: CategoriasService,
    private productosService: ProductosService
  ) {}

  ngOnInit() {
    this.obtenerCategorias();
  }

  obtenerCategorias() {
    this.categoriasService.obtenerCategorias().subscribe(
      response => {
        this.categorias = response;
      },
      error => {
        console.error('Error al obtener categorías:', error);     }
    );
  }

  cargarProductosPorCategoria() {
    if (this.categoriaSeleccionada) {
      this.productosService.obtenerProductosPorCategoria(this.categoriaSeleccionada).subscribe(
        response => {
          this.productos = response;
        },
        error => {
          console.error('Error al obtener productos por categoría:', error);
        }
      );
    } else {
      this.productos = []; 
    }
  }

  seleccionarCategoria() {
    this.cargarProductosPorCategoria();
  }
}