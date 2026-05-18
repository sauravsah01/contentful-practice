import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeNt_experienceSkeleton } from "./TypeNt_experience";

export interface TypeRteBlockFields {
    internalName?: EntryFieldTypes.Symbol;
    content?: EntryFieldTypes.RichText;
    nt_experiences?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNt_experienceSkeleton>>;
}

export type TypeRteBlockSkeleton = EntrySkeletonType<TypeRteBlockFields, "rteBlock">;
export type TypeRteBlock<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeRteBlockSkeleton, Modifiers, Locales>;
