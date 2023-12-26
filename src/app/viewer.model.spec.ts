import { Viewer } from './viewer.model';

describe('Viewer', () => {
  it('should create an instance', () => {
    expect(new Viewer("a","b","c","d")).toBeTruthy();
  });
});
