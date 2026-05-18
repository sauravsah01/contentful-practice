import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeNt_audienceSkeleton } from "./TypeNt_audience";

export interface TypeNt_experienceFields {
    nt_name: EntryFieldTypes.Symbol;
    nt_description?: EntryFieldTypes.Text;
    nt_type: EntryFieldTypes.Symbol<"nt_experiment" | "nt_personalization">;
    nt_config: EntryFieldTypes.Object;
    nt_audience?: EntryFieldTypes.EntryLink<TypeNt_audienceSkeleton>;
    nt_variants?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
    nt_experience_id?: EntryFieldTypes.Symbol;
    nt_metadata?: EntryFieldTypes.Object;
}

export type TypeNt_experienceSkeleton = EntrySkeletonType<TypeNt_experienceFields, "nt_experience">;
export type TypeNt_experience<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeNt_experienceSkeleton, Modifiers, Locales>;
