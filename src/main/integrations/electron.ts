import { getCurrentHub } from '@sentry/node';
import { Integration, SentryEvent } from '@sentry/types';
import { addEventDefaults } from '../context';
import { normalizeEvent } from '../normalize';

/** Electron integration that cleans up the event. */
export class Electron implements Integration {
  /**
   * @inheritDoc
   */
  public name: string = 'Electron';

  /**
   * @inheritDoc
   */
  public install(): void {
    getCurrentHub().configureScope(scope => {
      scope.addEventProcessor(async (event: SentryEvent) => normalizeEvent(await addEventDefaults(event)));
    });
  }
}
