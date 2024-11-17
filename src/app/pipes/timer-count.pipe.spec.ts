import { TimerCountPipe } from './timer-count.pipe';

describe('TimerCountPipe', () => {
  it('create an instance', () => {
    const pipe = new TimerCountPipe();
    expect(pipe).toBeTruthy();
  });
});
