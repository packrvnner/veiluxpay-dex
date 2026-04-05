import { GetInfinityCandidatePoolsParams } from '../types';
import { InfinityStablePool } from '../../v3-router/types';
export declare function getInfinityStableCandidatePools({ currencyA, currencyB, clientProvider, }: Omit<GetInfinityCandidatePoolsParams, 'gasLimit'>): Promise<InfinityStablePool[]>;
//# sourceMappingURL=getInfinityStablePools.d.ts.map