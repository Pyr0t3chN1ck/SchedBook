import * as fromMessages from './messages.actions';

describe('loadMessagess', () => {
  it('should return an action', () => {
    expect(fromMessages.loadMessagess().type).toBe('[Messages] Load Messagess');
  });
});
