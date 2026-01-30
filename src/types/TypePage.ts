import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeSeoMetadataSkeleton } from "./TypeSeoMetadata";

export interface TypePageFields {
    internalName: EntryFieldTypes.Symbol;
    pageName?: EntryFieldTypes.Symbol;
    url: EntryFieldTypes.Symbol;
    pageText?: EntryFieldTypes.RichText;
    seoMetadata?: EntryFieldTypes.EntryLink<TypeSeoMetadataSkeleton>;
}

export type TypePageSkeleton = EntrySkeletonType<TypePageFields, "page">;
export type TypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePageSkeleton, Modifiers, Locales>;
