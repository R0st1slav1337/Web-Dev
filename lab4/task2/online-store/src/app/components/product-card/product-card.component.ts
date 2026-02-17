import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  imports: [CommonModule],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;

  @Input() openedSharedId!: number | null;
  @Output() shareOpened = new EventEmitter<number>();

  toggleShare() {
    if (this.openedSharedId == this.product.id) {
      this.shareOpened.emit(null as any)
    } else {
      this.shareOpened.emit(this.product.id);
    }
  }

  shareWhatsApp() {
    const text = encodeURIComponent(`check out this product: ${this.product.link}`);
    const url = `https://wa.me/?text=${text}`;
    window.open(url, '_blank');
  }

  shareTelegram() {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}` +
      `&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }

  get starStates(): Array<'full' | 'half' | 'empty'> {
    const r = Math.max(0, Math.min(5, this.product.rating));
    const full = Math.floor(r);
    const half = r - full >= 0.5;

    const result: Array<'full' | 'half' | 'empty'> = [];
    for (let i = 0; i < 5; i++) {
      if (i < full) result.push('full');
      else if (i === full && half) result.push('half');
      else result.push('empty');
    }
    return result;
  }

  allImages: string[] = [];
  currentIndex = 0;

  selectedImage!: string;
  ngOnInit() {
    this.allImages = [
      this.product.image,
      ...this.product.images
    ];
    this.selectedImage = this.allImages[0];
  }

  nextImage(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();

    this.currentIndex = (this.currentIndex + 1) % this.allImages.length;
    this.selectedImage = this.allImages[this.currentIndex];
  }

  prevImage(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();

    this.currentIndex = (this.currentIndex - 1 + this.allImages.length) % this.allImages.length;
    this.selectedImage = this.allImages[this.currentIndex];
  }

  setImage(img: string) {
    this.selectedImage = img;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (this.openedSharedId === this.product.id && !target.closest('.share')) {
      this.shareOpened.emit(null as any);
    }
  }

}
