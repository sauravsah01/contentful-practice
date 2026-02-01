import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeGlobalSettingsFields {
    internalName?: EntryFieldTypes.Symbol;
    gtmId?: EntryFieldTypes.Symbol;
    gaMeasurementId?: EntryFieldTypes.Symbol;
    mapsApiKey?: EntryFieldTypes.Symbol;
    pageTag?: EntryFieldTypes.Symbol;
    pageTagPrefix?: EntryFieldTypes.Boolean;
}

export type TypeGlobalSettingsSkeleton = EntrySkeletonType<TypeGlobalSettingsFields, "globalSettings">;
export type TypeGlobalSettings<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeGlobalSettingsSkeleton, Modifiers, Locales>;
