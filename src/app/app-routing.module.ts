import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from "./backend/product-list/product-list.component";
import { HomeComponent } from "./frontend/home/home.component";
import { ProductDetailComponent } from "./frontend/product-detail/product-detail.component";
import { HeaderComponent } from "./frontend/header/header.component";
import { FooterComponent } from "./frontend/footer/footer.component";
import { ManageComponent } from "./backend/manage/manage.component";
import { ProductAddComponent } from "./backend/product-add/product-add.component";
import { ManageAsideComponent } from "./backend/manage-aside/manage-aside.component";
import { ProductEditComponent } from "./backend/product-edit/product-edit.component";
import { ManageDashbroadComponent } from "./backend/manage-dashbroad/manage-dashbroad.component";
import { ManageProductComponent } from "./backend/manage-product/manage-product.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'list-product',component: ProductListComponent},
  {path: 'product/:productID',component: ProductDetailComponent},
  {path: 'manage', component: ManageComponent,
  children: [
    {path: '' , redirectTo: 'dashbroad-manage' , pathMatch: 'full'},
    {path: 'dashbroad-manage', component: ManageDashbroadComponent},
    {path: 'product-manage', component: ManageProductComponent},
    {path: 'add-product', component: ProductAddComponent}
  ]
  },
  {path: 'aside-manage', component: ManageAsideComponent},
  {path: 'product/edit/:productID',component: ProductEditComponent}
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }