import { SharedModule } from './shared.module';

describe('SharedModule', () => {
  let bootstrapModule: SharedModule;

  beforeEach(() => {
    bootstrapModule = new SharedModule();
  });

  it('should create an instance', () => {
    expect(bootstrapModule).toBeTruthy();
  });
});
