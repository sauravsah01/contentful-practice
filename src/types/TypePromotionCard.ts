import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypePromotionCardFields {
    internalName?: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Symbol;
    ctaLabel?: EntryFieldTypes.Symbol;
    ctaLink?: EntryFieldTypes.Symbol;
    image?: EntryFieldTypes.AssetLink;
}

export type TypePromotionCardSkeleton = EntrySkeletonType<TypePromotionCardFields, "promotionCard">;
export type TypePromotionCard<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePromotionCardSkeleton, Modifiers, Locales>;
