import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeSeoMetadataFields {
    internalName?: EntryFieldTypes.Symbol;
    ogTitle?: EntryFieldTypes.Symbol;
    ogDescription?: EntryFieldTypes.Symbol;
    ogImage?: EntryFieldTypes.AssetLink;
    hidePageFromSitemap?: EntryFieldTypes.Boolean;
}

export type TypeSeoMetadataSkeleton = EntrySkeletonType<TypeSeoMetadataFields, "seoMetadata">;
export type TypeSeoMetadata<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeSeoMetadataSkeleton, Modifiers, Locales>;
