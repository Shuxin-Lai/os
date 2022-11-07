import type { Recordable } from '../../types';
import type { App } from 'vue';
import { values, forEach, entries } from '../../shared';

export const withInstall = <T>(main: T, extra?: Recordable): T => {
  const _extra = extra || {};

  // @ts-ignore
  main.install = (app: App) => {
    const cmps = [main, ...values(_extra)];

    forEach(cmps, (cmp) => {
      app.component(cmp.name, cmp);
    });
  };

  for (const [key, value] of entries(_extra)) {
    // @ts-ignore
    main[key] = value;
  }

  return main;
};
