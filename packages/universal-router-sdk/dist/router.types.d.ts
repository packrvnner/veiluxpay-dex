/**
 * CommandTypes
 * @description Flags that modify a command's execution
 * @enum {number}
 */
export declare enum CommandType {
    ALLOW_REVERT_FLAG = 128,
    COMMAND_TYPE_MASK = 63,
    V3_SWAP_EXACT_IN = 0,
    V3_SWAP_EXACT_OUT = 1,
    PERMIT2_TRANSFER_FROM = 2,
    PERMIT2_PERMIT_BATCH = 3,
    SWEEP = 4,
    TRANSFER = 5,
    PAY_PORTION = 6,
    V2_SWAP_EXACT_IN = 8,
    V2_SWAP_EXACT_OUT = 9,
    PERMIT2_PERMIT = 10,
    WRAP_ETH = 11,
    UNWRAP_WETH = 12,
    PERMIT2_TRANSFER_FROM_BATCH = 13,
    BALANCE_CHECK_ERC20 = 14,
    INFI_SWAP = 16,
    V3_POSITION_MANAGER_PERMIT = 17,
    V3_POSITION_MANAGER_CALL = 18,
    INFI_CL_INITIALIZE_POOL = 19,
    INFI_BIN_INITIALIZE_POOL = 20,
    INFI_CL_POSITION_CALL = 21,
    INFI_BIN_POSITION_CALL = 22,
    EXECUTE_SUB_PLAN = 32,
    STABLE_SWAP_EXACT_IN = 34,
    STABLE_SWAP_EXACT_OUT = 35
}
//# sourceMappingURL=router.types.d.ts.map