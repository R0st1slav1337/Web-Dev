import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [ProductCardComponent, NgForOf]
})

export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Samsung Galaxy A55 5G 8 GB/128 GB darkblue',
      description: 'Samsung has unveiled a new mid-budget A–series smartphone, the Galaxy A55, ' +
        'and today it is the top model of the line, which has received significant improvements ' +
        'in both performance and software, including a powerful processor with graphics from AMD. ' +
        'Right now, this is the only Samsung smartphone with seamless upgrade technology – you no ' +
        'longer have to wait for Android to update. The A55 offers an affordable price, an ' +
        'interesting design with a harmony of glass and metal, and almost flagship features, ' +
        'which are more common among Chinese competitors.',
      price: 269999,
      rating: 5.0,
      image: 'assets/images/samsung_a55.png',
      images: [
        'assets/images/samsung_a55_1.jpg',
        'assets/images/samsung_a55_2.jpg',
        'assets/images/samsung_a55_3.png',
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-128-gb-temno-sinii-117420239/?c=750000000',
    },
    {
      id: 2,
      name: 'Apple iPhone 17 Pro Max 256Gb silver',
      description: 'The Apple iPhone 17 Pro Max 256Gb is the epitome of innovation and ' +
        'uncompromising quality in the smartphone world. The powerful A19 Pro processor and ' +
        'advanced camera system open up new horizons for creativity and productivity. ' +
        'This smartphone is ideal for professionals and enthusiasts of mobile photography, ' +
        'as well as for those who appreciate premium design and the highest performance.',
      price: 915990,
      rating: 5.0,
      image: 'assets/images/iphone_17.jpg',
      images: [
        'assets/images/iphone_17_1.jpg',
        'assets/images/iphone_17_2.jpg',
        'assets/images/iphone_17_3.jpg',
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-256gb-serebristyi-145468150/?c=750000000',
    },
    {
      id: 3,
      name: 'Double aerogrill SPRX SPRX-8017D 10L black',
      description: 'The White Wave BW-8017D aerogrill is the perfect solution for healthy and fast food! ' +
        'Tired of greasy food and long cooking? With a 10—liter White Wave air grill, you can cook ' +
        'your favorite dishes without a drop of oil - quickly, tasty and healthy for the whole family! \n' +
        'What this air grill solves: No more frying in the pan — forget about the splattered oil and the ' +
        'smell in the kitchen. Cook in minutes — 2000 watts of power and 6 automatic modes will do the ' +
        'job for you. Eat right — the dish turns out with a crispy crust, but without excess fat. Ideal ' +
        'for a large family — two independent baskets allow you to cook two dishes at the same time. ' +
        'Minimal maintenance — removable non-stick baskets are easy to clean by hand or in the dishwasher.',
      price: 38000,
      rating: 5.0,
      image: 'assets/images/aerogrill.jpg',
      images: [
        'assets/images/aerogrill_1.jpg',
        'assets/images/aerogrill_2.jpeg',
        'assets/images/aerogrill_3.jpeg',
      ],
      link: 'https://kaspi.kz/shop/p/sprx-sprx-8017d-10-l-chernyi-144297982/?c=750000000',
    },
    {
      id: 4,
      name: 'Headphones HyperX Cloud III S black&red',
      description: 'HyperX Cloud III S Wireless Gaming Headphones are the perfect choice for gamers ' +
        'who value quality, comfort and freedom of movement!\n' +
        'Main advantages: Low–latency wireless connection - complete freedom of movement. ' +
        'The comfortable design and soft ear pads are ideal for long gaming sessions. ' +
        'A noise–canceling microphone provides clear communication with the team. Compatible ' +
        'with PCs, consoles, and mobile devices. Long battery life – fewer pauses, more play.',
      price: 86194,
      rating: 4.5,
      image: 'assets/images/hyperx.jpg',
      images: [
        'assets/images/hyperx_1.jpg',
        'assets/images/hyperx_2.jpg',
        'assets/images/hyperx_3.jpg',
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-hyperx-cloud-iii-s-cherno-krasnyi-145496598/?c=750000000',
    },
    {
      id: 5,
      name: 'Computer case be quiet! Silent Base 802 Window black',
      description: 'The classic top panel perfectly complements the design of the Silent Base 802 Window ' +
        'Black and ensures quiet operation of the system. For those who seek maximum performance with ' +
        'water cooling, the high-air permeability top panel is the right choice. The mesh front panel ' +
        'provides maximum cooling performance for powerful configurations. The classic front panel is ' +
        'an ideal choice for silent systems and conventional PC configurations.',
      price: 101390,
      rating: 4.6,
      image: 'assets/images/case.jpg',
      images: [
        'assets/images/case_1.jpeg',
        'assets/images/case_2.jpg',
        'assets/images/case_3.jpg',
      ],
      link: 'https://kaspi.kz/shop/p/be-quiet-silent-base-802-window-chernyi-101718663/?c=750000000',
    },
    {
      id: 6,
      name: 'Laptop Apple MacBook Air 13 2025 / 16 Gb / SSD 256 GB / macOS / MW123RU/A',
      description: 'Introducing the Apple MacBook Air 13 2025, an ultrabook that combines high performance, ' +
        'sleek design, and durability. With an Apple M4 processor and 16 GB of RAM, it\'s perfect for work ' +
        'and entertainment. This laptop is ideal for students, professionals, and anyone who appreciates ' +
        'high technology and comfort in everyday life, whether it\'s working in an office or studying.',
      price: 619000,
      rating: 5.0,
      image: 'assets/images/macbook.jpg',
      images: [
        'assets/images/macbook_1.jpg',
        'assets/images/macbook_2.jpg',
        'assets/images/macbook_3.jpg',
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123ru-a-138153472/?c=750000000',
    },
    {
      id: 7,
      name: 'Office chair 01, black',
      description: 'The Element-5 CHR-01 office chair is a comfortable and stylish solution for your ' +
        'workspace, providing support and ergonomics throughout the working day. Suitable for those who ' +
        'appreciate convenience and style in an office environment — an ideal choice for working at a ' +
        'computer or in an office.',
      price: 10700,
      rating: 4.6,
      image: 'assets/images/chair.jpg',
      images: [
        'assets/images/chair_1.jpg',
        'assets/images/chair_2.jpg',
        'assets/images/chair_3.jpg',
      ],
      link: 'https://kaspi.kz/shop/p/ofisnoe-kreslo-01-chernyi-118725692/?c=750000000',
    },
    {
      id: 8,
      name: 'Yandex Basic TV with Alice YNDX-00076 140 cm black',
      description: 'Introducing the Yandex Basik with Alice YNDX-00076 — your perfect companion for ' +
        'home entertainment! This 140 cm LED TV with 4K UHD resolution provides high-quality images ' +
        'and surround sound with Dolby Audio. Perfect for family nights, movies, and gaming, this TV is ' +
        'the center of your home entertainment.',
      price: 238868,
      rating: 5.0,
      image: 'assets/images/tv.jpeg',
      images: [
        'assets/images/tv_1.jpg',
        'assets/images/tv_2.jpg',
        'assets/images/tv_3.jpg',
      ],
      link: 'https://kaspi.kz/shop/p/jandeks-beisik-s-alisoi-yndx-00076-140-sm-chernyi-133033164/?c=750000000',
    },
    {
      id: 9,
      name: 'Washing machine Indesit IWSB 5105 white',
      description: 'The creators of the washing machine have provided many programs designed for washing ' +
        'things made of wool, cotton, and synthetic fabrics. Special programs for washing jeans, ' +
        'sportswear and shoes should be mentioned separately. This model uses a simple mechanical control ' +
        'system: you can select programs and set important parameters using switches and buttons located on ' +
        'the front panel. Thanks to the indication of the program stages, the owner will always know what ' +
        'operation the washing machine is currently performing.',
      price: 94990,
      rating: 4.6,
      image: 'assets/images/washing_machine.jpg',
      images: [
        'assets/images/washing_machine_1.png',
        'assets/images/washing_machine_2.jpg',
        'assets/images/washing_machine_3.jpg',
      ],
      link: 'https://kaspi.kz/shop/p/indesit-iwsb-5105-belyi-3600163/?c=750000000',
    },
    {
      id: 10,
      name: 'Smart Speaker Yandex Station Mini 3 green',
      description: 'Yandex Station Mini 3 (YNDX-00027TRQ, turquoise) is a compact smart speaker with ' +
        'Alice\'s voice assistant in a stylish turquoise color.\n' +
        'Key Features:\n' +
        'Voice control (Alice) + Manual (via the Yandex app or smart home).\n' +
        'Improved sound – clear treble and rich bass (compared to previous versions).\n' +
        'Wi-Fi and Bluetooth 5.0 – can be used as a wireless Bluetooth speaker.\n' +
        'Smart home – management of compatible devices (lamps, sockets, kettles, etc.).\n' +
        'Music and podcasts – support for Yandex.Music, YouTube Music, Sberbank Sound and other services.\n' +
        'Additional functions – alarm clock, timer, weather, translator, games, etc.\n' +
        'Design – fabric trim, touch buttons, bright turquoise color.',
      price: 51766,
      rating: 5.0,
      image: 'assets/images/speaker.jpg',
      images: [
        'assets/images/speaker_1.jpg',
        'assets/images/speaker_2.jpg',
        'assets/images/speaker_3.jpg',
      ],
      link: 'https://kaspi.kz/shop/p/jandeks-stantsija-mini-3-zelenyi-136436782/?c=750000000',
    },
  ];
  openedSharedId: number | null = null;
}
