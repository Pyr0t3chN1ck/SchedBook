import * as NailServicesActions from './nail-services.actions';

describe('NailServices', () => {
  it('should create an instance', () => {
    expect(new NailServicesActions.LoadNailServicess()).toBeTruthy();
  });
});
