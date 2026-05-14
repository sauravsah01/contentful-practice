import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from 'contentful'

export interface TypeRteBlockFields {
  internalName?: EntryFieldTypes.Symbol
  content?: EntryFieldTypes.RichText
}

export type TypeRteBlockSkeleton = EntrySkeletonType<TypeRteBlockFields, 'rteBlock'>
export type TypeRteBlock<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeRteBlockSkeleton,
  Modifiers,
  Locales
>
