import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeNt_audienceFields {
    nt_name: EntryFieldTypes.Symbol;
    nt_description?: EntryFieldTypes.Text;
    nt_rules: EntryFieldTypes.Object;
    nt_audience_id: EntryFieldTypes.Symbol;
    nt_metadata?: EntryFieldTypes.Object;
}

export type TypeNt_audienceSkeleton = EntrySkeletonType<TypeNt_audienceFields, "nt_audience">;
export type TypeNt_audience<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeNt_audienceSkeleton, Modifiers, Locales>;
