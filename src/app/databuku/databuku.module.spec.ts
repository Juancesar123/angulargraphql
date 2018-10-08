import { DatabukuModule } from './databuku.module';

describe('DatabukuModule', () => {
  let databukuModule: DatabukuModule;

  beforeEach(() => {
    databukuModule = new DatabukuModule();
  });

  it('should create an instance', () => {
    expect(databukuModule).toBeTruthy();
  });
});
