import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeNt_mergetagFields {
    nt_name: EntryFieldTypes.Symbol;
    nt_fallback?: EntryFieldTypes.Symbol;
    nt_mergetag_id: EntryFieldTypes.Symbol;
}

export type TypeNt_mergetagSkeleton = EntrySkeletonType<TypeNt_mergetagFields, "nt_mergetag">;
export type TypeNt_mergetag<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeNt_mergetagSkeleton, Modifiers, Locales>;
