import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeHeroBannerSkeleton } from "./TypeHeroBanner";
import type { TypePromotionsSectionSkeleton } from "./TypePromotionsSection";
import type { TypeRteBlockSkeleton } from "./TypeRteBlock";
import type { TypeSeoMetadataSkeleton } from "./TypeSeoMetadata";

export interface TypePageFields {
    internalName: EntryFieldTypes.Symbol;
    pageName?: EntryFieldTypes.Symbol;
    url: EntryFieldTypes.Symbol;
    pageComponents?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeHeroBannerSkeleton | TypePromotionsSectionSkeleton | TypeRteBlockSkeleton>>;
    seoMetadata?: EntryFieldTypes.EntryLink<TypeSeoMetadataSkeleton>;
}

export type TypePageSkeleton = EntrySkeletonType<TypePageFields, "page">;
export type TypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePageSkeleton, Modifiers, Locales>;
