import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { UserComponent } from "./user.component";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard.component";
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [AppComponent, UserComponent, DashboardComponent, CartComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
