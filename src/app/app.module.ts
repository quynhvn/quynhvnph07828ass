import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductComponent } from './frontend/product/product.component';
import { ProductListComponent } from './backend/product-list/product-list.component';
import { HomeComponent } from './frontend/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './frontend/product-detail/product-detail.component';
import { ProductService } from './product.service';
import { HeaderComponent } from './frontend/header/header.component';
import { FooterComponent } from './frontend/footer/footer.component';
import { ManageComponent } from './backend/manage/manage.component';
import { ProductAddComponent } from './backend/product-add/product-add.component';
import { ManageAsideComponent } from './backend/manage-aside/manage-aside.component';
import { ProductEditComponent } from './backend/product-edit/product-edit.component';
import { ManageDashbroadComponent } from './backend/manage-dashbroad/manage-dashbroad.component';
import { ManageProductComponent } from './backend/manage-product/manage-product.component';

@NgModule({
  imports:      
  [ BrowserModule,
   AppRoutingModule,
   FormsModule,
   HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, ProductComponent, ProductListComponent, HomeComponent, ProductDetailComponent, HeaderComponent, FooterComponent, ManageComponent, ProductAddComponent, ManageAsideComponent, ManageDashbroadComponent, ProductEditComponent, ManageProductComponent, ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
