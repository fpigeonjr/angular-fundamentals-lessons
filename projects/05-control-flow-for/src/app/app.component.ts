import { Component } from "@angular/core";

type Transmission = "Automatic" | "Manual";
interface Car {
  make: string;
  model: string;
  miles: number;
  price: number;
  year: number;
  transmission: Transmission;
}

@Component({
  selector: "app-root",
  standalone: true,
  template: `
    <section class="container">
      @for (car of carList; track car.make) {
        <!-- This article element represents and entire listing -->
        <article class="listing">
          <div class="image-parent">
            @if (car.miles > 50000) {
              <img class="product-image" src="/assets/red-car.jpeg" />
            } @else {
              <img class="product-image" src="/assets/blue-car.jpeg" />
            }
          </div>
          <section class="details">
            <p class="title"><!-- car make and model-->{{ car.make }} {{ car.model }}</p>
            <hr />
            <p class="detail">
              <span>Year</span>
              <span><!-- year -->{{ car.year }}</span>
            </p>
            <div class="detail">
              <span>Transmission</span>
              <span><!-- transmission -->{{ car.transmission }}</span>
            </div>
            <p class="detail">
              <span>Mileage</span>
              <span><!-- miles -->{{ car.miles.toLocaleString() }}</span>
            </p>
            <p class="detail">
              <span>Price</span>
              <span><!-- price -->$ {{ car.price.toFixed(2) }}</span>
            </p>
          </section>
        </article>
      } @empty {
        <article>
          <p class="detail">No cars</p>
        </article>
      }
    </section>
  `,
  styleUrl: "app.component.css",
})
export class AppComponent {
  carList: Car[] = [
    {
      make: "Foyoda",
      model: "Famery",
      miles: 54354,
      price: 10_000,
      year: 2022,
      transmission: "Automatic",
    },
    {
      make: "Ronda",
      model: "Disaccord",
      miles: 19_000,
      price: 23_000,
      year: 1991,
      transmission: "Automatic",
    },
    {
      make: "Specific Motors",
      model: "Spoke",
      miles: 100_000,
      price: 8_900,
      year: 1991,
      transmission: "Automatic",
    },
    {
      make: "Fjord",
      model: "Pocus",
      miles: 1_000,
      price: 22_330,
      year: 2023,
      transmission: "Automatic",
    },
  ];
}
