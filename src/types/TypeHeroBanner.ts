import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeNt_experienceSkeleton } from "./TypeNt_experience";

export interface TypeHeroBannerFields {
    internalName: EntryFieldTypes.Symbol;
    header?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Symbol;
    image?: EntryFieldTypes.AssetLink;
    nt_experiences?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNt_experienceSkeleton>>;
}

export type TypeHeroBannerSkeleton = EntrySkeletonType<TypeHeroBannerFields, "heroBanner">;
export type TypeHeroBanner<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeHeroBannerSkeleton, Modifiers, Locales>;
