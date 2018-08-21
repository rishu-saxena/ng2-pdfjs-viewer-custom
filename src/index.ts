import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfJsViewerComponent } from './ng2-pdfjs-viewer.component';

export * from './ng2-pdfjs-viewer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PdfJsViewerComponent
  ],
  exports: [
    PdfJsViewerComponent
  ]
})
export class PdfJsViewerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PdfJsViewerModule
    };
  }
}
