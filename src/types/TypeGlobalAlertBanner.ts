import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeNt_experienceSkeleton } from "./TypeNt_experience";

export interface TypeGlobalAlertBannerFields {
    internalName: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Symbol;
    nt_experiences?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNt_experienceSkeleton>>;
}

export type TypeGlobalAlertBannerSkeleton = EntrySkeletonType<TypeGlobalAlertBannerFields, "globalAlertBanner">;
export type TypeGlobalAlertBanner<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeGlobalAlertBannerSkeleton, Modifiers, Locales>;
