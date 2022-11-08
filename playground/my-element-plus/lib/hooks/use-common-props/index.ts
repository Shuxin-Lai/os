import { buildProp } from '../../utils';
import { componentSizes } from '../../constant';

export const useSizeProp = buildProp({
  type: String,
  values: componentSizes,
  required: true,
} as const);
