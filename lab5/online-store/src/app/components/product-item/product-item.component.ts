import { Component, EventEmitter, Input, Output, HostListener} from '@angular/core';
import { CommonModule} from '@angular/common';
import { Product } from '../../models/product.model';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  standalone: true,
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  imports: [CommonModule],
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();
  @Input() openedShareId: number | null = null;
  @Output() shareOpened = new EventEmitter<number | null>();

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
    this.currentIndex = this.allImages.indexOf(img);
  }

  animateLike = false;
  like() {
    this.product.likes += 1;

    this.animateLike = true;
    setTimeout(() => {
      this.animateLike = false;
    }, 300);
  }

  requestDelete() {
    if (!confirm("Are you sure you want to delete this product?")) return;
    this.delete.emit(this.product.id);
  }

  toggleShare() {
    if (this.openedShareId === this.product.id) {
      this.shareOpened.emit(null);
    } else {
      this.shareOpened.emit(this.product.id);
    }
  }

  shareWhatsApp() {
    const text = encodeURIComponent(`check out this product: ${this.product.link}`);
    const url = `https://wa.me/?text=${text}`;
    window.open(url, '_blank');
    this.shareOpened.emit(null);
  }

  shareTelegram() {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}` +
      `&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
    this.shareOpened.emit(null);
  }

  @HostListener('document:click', ['$event'])
  onDocClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (this.openedShareId === this.product.id && !target.closest('.share')) {
      this.shareOpened.emit(null);
    }
  }



}
