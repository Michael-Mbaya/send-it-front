import { Deliveries } from './deliveries';

describe('Deliveries', () => {
  it('should create an instance', () => {
    expect(new Deliveries(0,"n",0,0,"n",new Date(2020,09,30),new Date(2020,09,30))).toBeTruthy();
  });
});
