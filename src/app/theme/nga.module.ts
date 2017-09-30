import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AppTranslationModule} from '../app.translation.module';

import {
  BaThemeConfig,
} from './theme.config';

import {
  BaThemeConfigProvider,
} from './theme.configProvider';

import {
  BaAmChart,
  BaBackTop,
  BaCard,
  BaCheckbox,
  BaContentTop,
  BaMenuItem,
  BaMenu,
  BaMultiCheckbox,
  BaPageTop,
  BaSidebar,
} from './components';

import {BaCardBlur} from './components/baCard/baCardBlur.directive';

import {
  BaScrollPosition,
  BaSlimScroll,
  BaThemeRun,
} from './directives';

import {
  BaAppPicturePipe,
  BaKameleonPicturePipe,
  BaProfilePicturePipe,
} from './pipes';

import {
  BaImageLoaderService,
  BaMenuService,
  BaThemePreloader,
  BaThemeSpinner,
} from './services';

import {Ng2CompleterModule} from 'ng2-completer';

const NGA_COMPONENTS = [
  BaAmChart,
  BaBackTop,
  BaCard,
  BaCheckbox,
  BaContentTop,
  BaMenuItem,
  BaMenu,
  BaMultiCheckbox,
  BaPageTop,
  BaSidebar,
];

const NGA_DIRECTIVES = [
  BaScrollPosition,
  BaSlimScroll,
  BaThemeRun,
  BaCardBlur,
];

const NGA_PIPES = [
  BaAppPicturePipe,
  BaKameleonPicturePipe,
  BaProfilePicturePipe,
];

const NGA_SERVICES = [
  BaImageLoaderService,
  BaThemePreloader,
  BaThemeSpinner,
  BaMenuService,
];

@NgModule({
  declarations: [
    ...NGA_PIPES,
    ...NGA_DIRECTIVES,
    ...NGA_COMPONENTS,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppTranslationModule,
    Ng2CompleterModule,
  ],
  exports: [
    ...NGA_PIPES,
    ...NGA_DIRECTIVES,
    ...NGA_COMPONENTS,
  ],
})
export class NgaModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: NgaModule,
      providers: [
        BaThemeConfigProvider,
        BaThemeConfig,
        ...NGA_SERVICES,
      ],
    };
  }
}
