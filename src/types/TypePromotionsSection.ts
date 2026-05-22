import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeNt_experienceSkeleton } from "./TypeNt_experience";
import type { TypePromotionCardSkeleton } from "./TypePromotionCard";

export interface TypePromotionsSectionFields {
    internalName?: EntryFieldTypes.Symbol;
    cards?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypePromotionCardSkeleton>>;
    nt_experiences?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNt_experienceSkeleton>>;
}

export type TypePromotionsSectionSkeleton = EntrySkeletonType<TypePromotionsSectionFields, "promotionsSection">;
export type TypePromotionsSection<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePromotionsSectionSkeleton, Modifiers, Locales>;
