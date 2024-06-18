import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'kategori',
    loadChildren: () => import('./kategori/kategori.module').then(m => m.KategoriPageModule)
  },
  {
    path: 'buku',
    loadChildren: () => import('./buku/buku.module').then(m => m.BukuPageModule)
  },
  {
    path: 'majalah',
    loadChildren: () => import('./majalah/majalah.module').then(m => m.MajalahPageModule)
  },
  {
    path: 'koran',
    loadChildren: () => import('./koran/koran.module').then(m => m.KoranPageModule)
  },
  {
    path: 'jurnal',
    loadChildren: () => import('./jurnal/jurnal.module').then(m => m.JurnalPageModule)
  },
  {
    path: 'novel',
    loadChildren: () => import('./novel/novel.module').then(m => m.NovelPageModule)
  },
  {
    path: 'perpustakaan',
    loadChildren: () => import('./perpustakaan/perpustakaan.module').then(m => m.PerpustakaanPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then(m => m.ProfilPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then(m => m.DetailPageModule)
  },
  {
    path: 'edit-profil',
    loadChildren: () => import('./edit-profil/edit-profil.module').then(m => m.EditProfilPageModule)
  },
  {
    path: 'keamanan-akun',
    loadChildren: () => import('./keamanan-akun/keamanan-akun.module').then(m => m.KeamananAkunPageModule)
  },
  {
    path: 'pengaturan',
    loadChildren: () => import('./pengaturan/pengaturan.module').then( m => m.PengaturanPageModule)
  },
  {
    path: 'bagikan',
    loadChildren: () => import('./bagikan/bagikan.module').then( m => m.BagikanPageModule)
  },
  // Tambahkan rute lainnya di sini
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
