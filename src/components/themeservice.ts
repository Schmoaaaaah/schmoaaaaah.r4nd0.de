import { createTheme } from '@paljs/theme';

export function themeService(theme: string, dir: any) {
    switch (theme) {
        case 'corporate':
            return createTheme('corporate', { dir });
        case 'dark':
            // this will take all default theme variables and over it with your custom variables
            // if you want to inherit from another theme you can pass cosmic or corporate in first args
            return createTheme('dark', { dir });
        case 'cosmic':
        default:
            return createTheme('default', { dir });
    }
}