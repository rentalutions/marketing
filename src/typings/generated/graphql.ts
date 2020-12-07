/* eslint-disable */
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** DateTime */
  DateTime: any;
  /** Raw JSON value */
  Json: any;
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
};


export type Info = _Document & _Linkable & {
  __typename?: 'Info';
  name?: Maybe<Scalars['Json']>;
  sticky_nav_bar?: Maybe<Scalars['Json']>;
  nav_bar?: Maybe<Array<InfoNav_Bar>>;
  body?: Maybe<Array<InfoBody>>;
  meta_title?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  meta_keywords?: Maybe<Scalars['String']>;
  _meta: Meta;
  _linkType?: Maybe<Scalars['String']>;
};

export type InfoBody = InfoBodyHero_Unit | InfoBodyPitch_Cards | InfoBodyHow_It_Works | InfoBodyShow_Case | InfoBodyEmail_Capture;

export type InfoBodyEmail_Capture = {
  __typename?: 'InfoBodyEmail_capture';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<InfoBodyEmail_CapturePrimary>;
};

export type InfoBodyEmail_CapturePrimary = {
  __typename?: 'InfoBodyEmail_capturePrimary';
  hash?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['Json']>;
  label?: Maybe<Scalars['String']>;
};

export type InfoBodyHero_Unit = {
  __typename?: 'InfoBodyHero_unit';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<InfoBodyHero_UnitPrimary>;
};

export type InfoBodyHero_UnitPrimary = {
  __typename?: 'InfoBodyHero_unitPrimary';
  title?: Maybe<Scalars['Json']>;
  description?: Maybe<Scalars['Json']>;
  background?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  skew?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['Json']>;
};

export type InfoBodyHow_It_Works = {
  __typename?: 'InfoBodyHow_it_works';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<InfoBodyHow_It_WorksPrimary>;
  fields?: Maybe<Array<InfoBodyHow_It_WorksFields>>;
};

export type InfoBodyHow_It_WorksFields = {
  __typename?: 'InfoBodyHow_it_worksFields';
  title?: Maybe<Scalars['Json']>;
  description?: Maybe<Scalars['Json']>;
  image?: Maybe<Scalars['Json']>;
};

export type InfoBodyHow_It_WorksPrimary = {
  __typename?: 'InfoBodyHow_it_worksPrimary';
  hash?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['Json']>;
  background?: Maybe<Scalars['String']>;
  flip?: Maybe<Scalars['Json']>;
};

export type InfoBodyPitch_Cards = {
  __typename?: 'InfoBodyPitch_cards';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<InfoBodyPitch_CardsPrimary>;
  fields?: Maybe<Array<InfoBodyPitch_CardsFields>>;
};

export type InfoBodyPitch_CardsFields = {
  __typename?: 'InfoBodyPitch_cardsFields';
  title?: Maybe<Scalars['Json']>;
  description?: Maybe<Scalars['Json']>;
  icon?: Maybe<Scalars['Json']>;
};

export type InfoBodyPitch_CardsPrimary = {
  __typename?: 'InfoBodyPitch_cardsPrimary';
  hash?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['Json']>;
  description?: Maybe<Scalars['Json']>;
};

export type InfoBodyShow_Case = {
  __typename?: 'InfoBodyShow_case';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<InfoBodyShow_CasePrimary>;
  fields?: Maybe<Array<InfoBodyShow_CaseFields>>;
};

export type InfoBodyShow_CaseFields = {
  __typename?: 'InfoBodyShow_caseFields';
  icon?: Maybe<Scalars['String']>;
  copy?: Maybe<Scalars['Json']>;
};

export type InfoBodyShow_CasePrimary = {
  __typename?: 'InfoBodyShow_casePrimary';
  hash?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['Json']>;
  description?: Maybe<Scalars['Json']>;
  image?: Maybe<Scalars['Json']>;
  flip?: Maybe<Scalars['Json']>;
};

/** A connection to a list of items. */
export type InfoConnectionConnection = {
  __typename?: 'InfoConnectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<InfoConnectionEdge>>>;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type InfoConnectionEdge = {
  __typename?: 'InfoConnectionEdge';
  /** The item at the end of the edge. */
  node: Info;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type InfoNav_Bar = {
  __typename?: 'InfoNav_bar';
  primary?: Maybe<Scalars['Json']>;
  push?: Maybe<Scalars['Json']>;
  breakpoint?: Maybe<Scalars['String']>;
};


export type Meta = {
  __typename?: 'Meta';
  /** The id of the document. */
  id: Scalars['String'];
  /** The uid of the document. */
  uid?: Maybe<Scalars['String']>;
  /** The type of the document. */
  type: Scalars['String'];
  /** The tags of the document. */
  tags: Array<Scalars['String']>;
  /** The language of the document. */
  lang: Scalars['String'];
  /** Alternate languages the document. */
  alternateLanguages: Array<RelatedDocument>;
  /** The first publication date of the document. */
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  /** The last publication date of the document. */
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  _allDocuments: _DocumentConnection;
  info?: Maybe<Info>;
  allInfos: InfoConnectionConnection;
};


export type Query_AllDocumentsArgs = {
  sortBy?: Maybe<SortDocumentsBy>;
  id?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Scalars['String']>>;
  uid?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Scalars['String']>>;
  lang?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  tags_in?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Scalars['String']>>;
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_after?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_before?: Maybe<Scalars['DateTime']>;
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_after?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_before?: Maybe<Scalars['DateTime']>;
  fulltext?: Maybe<Scalars['String']>;
  similar?: Maybe<Similar>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryInfoArgs = {
  uid: Scalars['String'];
  lang: Scalars['String'];
};


export type QueryAllInfosArgs = {
  sortBy?: Maybe<SortInfoy>;
  id?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Scalars['String']>>;
  uid?: Maybe<Scalars['String']>;
  uid_in?: Maybe<Array<Scalars['String']>>;
  lang?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  tags_in?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Scalars['String']>>;
  firstPublicationDate?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_after?: Maybe<Scalars['DateTime']>;
  firstPublicationDate_before?: Maybe<Scalars['DateTime']>;
  lastPublicationDate?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_after?: Maybe<Scalars['DateTime']>;
  lastPublicationDate_before?: Maybe<Scalars['DateTime']>;
  fulltext?: Maybe<Scalars['String']>;
  similar?: Maybe<Similar>;
  where?: Maybe<WhereInfo>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type RelatedDocument = {
  __typename?: 'RelatedDocument';
  /** The id of the document. */
  id: Scalars['String'];
  /** The uid of the document. */
  uid?: Maybe<Scalars['String']>;
  /** The type of the document. */
  type: Scalars['String'];
  /** The language of the document. */
  lang: Scalars['String'];
};

export enum SortDocumentsBy {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC'
}

export enum SortInfoy {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  MetaTitleAsc = 'meta_title_ASC',
  MetaTitleDesc = 'meta_title_DESC',
  MetaDescriptionAsc = 'meta_description_ASC',
  MetaDescriptionDesc = 'meta_description_DESC',
  MetaKeywordsAsc = 'meta_keywords_ASC',
  MetaKeywordsDesc = 'meta_keywords_DESC'
}

export type WhereInfo = {
  /** name */
  name_fulltext?: Maybe<Scalars['String']>;
  sticky_nav_bar?: Maybe<Scalars['Boolean']>;
  meta_title?: Maybe<Scalars['String']>;
  meta_title_fulltext?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  meta_description_fulltext?: Maybe<Scalars['String']>;
  meta_keywords?: Maybe<Scalars['String']>;
  meta_keywords_fulltext?: Maybe<Scalars['String']>;
};

/** A prismic document */
export type _Document = {
  _meta: Meta;
};

/** A connection to a list of items. */
export type _DocumentConnection = {
  __typename?: '_DocumentConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<_DocumentEdge>>>;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type _DocumentEdge = {
  __typename?: '_DocumentEdge';
  /** The item at the end of the edge. */
  node: _Document;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

/** An external link */
export type _ExternalLink = _Linkable & {
  __typename?: '_ExternalLink';
  url: Scalars['String'];
  target?: Maybe<Scalars['String']>;
  _linkType?: Maybe<Scalars['String']>;
};

/** A linked file */
export type _FileLink = _Linkable & {
  __typename?: '_FileLink';
  name: Scalars['String'];
  url: Scalars['String'];
  size: Scalars['Long'];
  _linkType?: Maybe<Scalars['String']>;
};

/** A linked image */
export type _ImageLink = _Linkable & {
  __typename?: '_ImageLink';
  name: Scalars['String'];
  url: Scalars['String'];
  size: Scalars['Long'];
  height: Scalars['Int'];
  width: Scalars['Int'];
  _linkType?: Maybe<Scalars['String']>;
};

/** A prismic link */
export type _Linkable = {
  _linkType?: Maybe<Scalars['String']>;
};

export type Similar = {
  documentId: Scalars['String'];
  max: Scalars['Int'];
};


export type GetInfoPageQueryVariables = Exact<{
  uid: Scalars['String'];
  lang?: Maybe<Scalars['String']>;
}>;


export type GetInfoPageQuery = (
  { __typename?: 'Query' }
  & { info?: Maybe<(
    { __typename?: 'Info' }
    & Pick<Info, 'name' | 'meta_title' | 'meta_description' | 'meta_keywords' | 'sticky_nav_bar'>
    & { _meta: (
      { __typename?: 'Meta' }
      & Pick<Meta, 'uid' | 'type'>
    ), nav_bar?: Maybe<Array<(
      { __typename?: 'InfoNav_bar' }
      & Pick<InfoNav_Bar, 'primary' | 'push' | 'breakpoint'>
    )>> }
  )> }
);
