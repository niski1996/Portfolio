// i18n.d.ts
import 'react-i18next';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: {
      projects: Record<string, {
        name: string;
        description: string;
      }>;
    } 
  }
}