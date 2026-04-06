import * as _reduxjs_toolkit from '@reduxjs/toolkit';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { a as TokenList, V as Version, T as TokenInfo } from './types-92a8b029.js';
import * as jotai_vanilla_utils_atomFamily from 'jotai/vanilla/utils/atomFamily';
import * as jotai from 'jotai';
import * as _reduxjs_toolkit_dist_createReducer from '@reduxjs/toolkit/dist/createReducer';

declare const fetchTokenList: Readonly<{
    pending: ActionCreatorWithPayload<{
        url: string;
        requestId: string;
    }>;
    fulfilled: ActionCreatorWithPayload<{
        url: string;
        tokenList: TokenList;
        requestId: string;
    }>;
    rejected: ActionCreatorWithPayload<{
        url: string;
        errorMessage: string;
        requestId: string;
    }>;
}>;
declare const addList: ActionCreatorWithPayload<string, string>;
declare const removeList: ActionCreatorWithPayload<string, string>;
declare const enableList: ActionCreatorWithPayload<string, string>;
declare const disableList: ActionCreatorWithPayload<string, string>;
declare const acceptListUpdate: ActionCreatorWithPayload<string, string>;
declare const rejectVersionUpdate: ActionCreatorWithPayload<Version, string>;
declare const updateListVersion: _reduxjs_toolkit.ActionCreatorWithoutPayload<"lists/updateListVersion">;
declare const batchFetchTokenListPending: ActionCreatorWithPayload<{
    urls: string[];
    requestId: string;
}, string>;
declare const batchFetchTokenListFulfilled: ActionCreatorWithPayload<{
    results: Array<{
        url: string;
        tokenList: TokenList;
        requestId: string;
    }>;
}, string>;
declare const batchFetchTokenListRejected: ActionCreatorWithPayload<{
    errors: Array<{
        url: string;
        errorMessage: string;
        requestId: string;
    }>;
}, string>;

/**
 * Contains the logic for resolving a list URL to a validated token list
 * @param listUrl list url
 */
declare function getTokenList(listUrl: string): Promise<TokenList | undefined>;

interface ListsState {
    readonly byUrl: {
        readonly [url: string]: {
            readonly current: TokenList | null;
            readonly pendingUpdate: TokenList | null;
            readonly loadingRequestId: string | null;
            readonly error: string | null;
        };
    };
    readonly lastInitializedDefaultListOfLists?: string[];
    readonly activeListUrls: string[] | undefined;
}
type ListByUrlState = ListsState['byUrl'][string];
declare const NEW_LIST_STATE: ListByUrlState;
declare const createTokenListReducer: (initialState: ListsState, DEFAULT_LIST_OF_LISTS: string[], DEFAULT_ACTIVE_LIST_URLS: string[]) => _reduxjs_toolkit_dist_createReducer.ReducerWithInitialState<ListsState>;

declare function findTokenByAddress(state: ListsState, chainId: number, address: string): TokenInfo | undefined;
declare function findTokenBySymbol(state: ListsState, chainId: number, symbol: string): TokenInfo | undefined;
declare const createListsAtom: (storeName: string, reducer: any, initialState: any) => {
    listsAtom: jotai.Atom<ListsState>;
    updateListStateAtom: jotai.WritableAtom<null, any, void> & {
        init: null;
    };
    tokenAtom: jotai_vanilla_utils_atomFamily.AtomFamily<{
        chainId: number;
        address: string;
    }, jotai.Atom<TokenInfo | undefined>>;
    tokenBySymbolAtom: jotai_vanilla_utils_atomFamily.AtomFamily<{
        chainId: number;
        symbol: string;
    }, jotai.Atom<TokenInfo | undefined>>;
    fetchListAtom: jotai.WritableAtom<null, [string], Promise<void>> & {
        init: null;
    };
    fetchListBatchAtom: jotai.WritableAtom<null, [string[]], Promise<void>> & {
        init: null;
    };
    useListStateReady: () => boolean;
    useListState: () => [ListsState, never];
};

declare function useFetchListCallback(dispatch: (action?: unknown) => void): (listUrl: string, sendDispatch?: boolean) => Promise<TokenList>;

export { ListByUrlState, ListsState, NEW_LIST_STATE, acceptListUpdate, addList, batchFetchTokenListFulfilled, batchFetchTokenListPending, batchFetchTokenListRejected, createListsAtom, createTokenListReducer, disableList, enableList, fetchTokenList, findTokenByAddress, findTokenBySymbol, getTokenList, rejectVersionUpdate, removeList, updateListVersion, useFetchListCallback };
