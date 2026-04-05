import { Hex } from 'viem';
import { ABIParametersType, CommandUsed } from './createCommand';
export declare class RoutePlanner {
    commands: Hex;
    inputs: Hex[];
    constructor();
    addCommand<TCommandType extends CommandUsed>(type: TCommandType, parameters: ABIParametersType<TCommandType>, allowRevert?: boolean): void;
    size(): number;
}
//# sourceMappingURL=RoutePlanner.d.ts.map