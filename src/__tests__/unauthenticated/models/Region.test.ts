import { RegionEnum } from '../../../models/Region';
import { Region } from '../../../models/Region';

describe('Region', () => {
  test('Get all regions', () => {
    const regions = Region.getAllRegions();
    expect(regions.length).toBe(6);
  });

  test('Get region by identifier', () => {
    const region = Region.getRegionByIdentifier('europe');
    expect(region).toBe(RegionEnum.EUROPE);
  });
});
