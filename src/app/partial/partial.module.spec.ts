import { PartialModule } from './partial.module';

describe('PartialModule', () => {
  let partialModule: PartialModule;

  beforeEach(() => {
    partialModule = new PartialModule();
  });

  it('should create an instance', () => {
    expect(partialModule).toBeTruthy();
  });
});
