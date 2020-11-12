/* eslint-disable */
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
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


export type Homepage = _Document & _Linkable & {
  __typename?: 'Homepage';
  title?: Maybe<Scalars['String']>;
  tagline?: Maybe<Scalars['String']>;
  button_link?: Maybe<_Linkable>;
  button_text?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['Json']>;
  body?: Maybe<Array<HomepageBody>>;
  _meta: Meta;
  _linkType?: Maybe<Scalars['String']>;
};

export type HomepageBody = HomepageBodyPitch_Cards | HomepageBodyText | HomepageBodySlice;

export type HomepageBodyPitch_Cards = {
  __typename?: 'HomepageBodyPitch_cards';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<HomepageBodyPitch_CardsPrimary>;
  fields?: Maybe<Array<HomepageBodyPitch_CardsFields>>;
};

export type HomepageBodyPitch_CardsFields = {
  __typename?: 'HomepageBodyPitch_cardsFields';
  card_title?: Maybe<Scalars['String']>;
  card_text?: Maybe<Scalars['Json']>;
  card_icon?: Maybe<_Linkable>;
};

export type HomepageBodyPitch_CardsPrimary = {
  __typename?: 'HomepageBodyPitch_cardsPrimary';
  pitch_title?: Maybe<Scalars['String']>;
  pitch_text?: Maybe<Scalars['Json']>;
  pitch_eyebrow?: Maybe<Scalars['String']>;
};

export type HomepageBodySlice = {
  __typename?: 'HomepageBodySlice';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type HomepageBodyText = {
  __typename?: 'HomepageBodyText';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<HomepageBodyTextPrimary>;
};

export type HomepageBodyTextPrimary = {
  __typename?: 'HomepageBodyTextPrimary';
  text?: Maybe<Scalars['Json']>;
};

/** A connection to a list of items. */
export type HomepageConnectionConnection = {
  __typename?: 'HomepageConnectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<HomepageConnectionEdge>>>;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type HomepageConnectionEdge = {
  __typename?: 'HomepageConnectionEdge';
  /** The item at the end of the edge. */
  node: Homepage;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};


export type Menu = _Document & _Linkable & {
  __typename?: 'Menu';
  title?: Maybe<Scalars['Json']>;
  _meta: Meta;
  _linkType?: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type MenuConnectionConnection = {
  __typename?: 'MenuConnectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<MenuConnectionEdge>>>;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type MenuConnectionEdge = {
  __typename?: 'MenuConnectionEdge';
  /** The item at the end of the edge. */
  node: Menu;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
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

export type Page = _Document & _Linkable & {
  __typename?: 'Page';
  hero_text?: Maybe<Scalars['Json']>;
  body?: Maybe<Array<PageBody>>;
  _meta: Meta;
  _linkType?: Maybe<Scalars['String']>;
};

export type PageBody = PageBodyHighlight_Section | PageBodyBanner | PageBodyBanner_Look | PageBodyEditorial_Look | PageBodyText_Section | PageBodyImage_Slider | PageBodyGallery | PageBodyVideo;

export type PageBodyBanner = {
  __typename?: 'PageBodyBanner';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<PageBodyBannerPrimary>;
};

export type PageBodyBannerPrimary = {
  __typename?: 'PageBodyBannerPrimary';
  title?: Maybe<Scalars['Json']>;
  link?: Maybe<_Linkable>;
  image?: Maybe<Scalars['Json']>;
};

export type PageBodyBanner_Look = {
  __typename?: 'PageBodyBanner_look';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<PageBodyBanner_LookPrimary>;
};

export type PageBodyBanner_LookPrimary = {
  __typename?: 'PageBodyBanner_lookPrimary';
  background_image?: Maybe<Scalars['Json']>;
  quote?: Maybe<Scalars['Json']>;
  quote_author?: Maybe<Scalars['Json']>;
  quote_position?: Maybe<Scalars['String']>;
  quote_style?: Maybe<Scalars['String']>;
};

export type PageBodyEditorial_Look = {
  __typename?: 'PageBodyEditorial_look';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<PageBodyEditorial_LookPrimary>;
  fields?: Maybe<Array<PageBodyEditorial_LookFields>>;
};

export type PageBodyEditorial_LookFields = {
  __typename?: 'PageBodyEditorial_lookFields';
  look_link?: Maybe<Scalars['Json']>;
};

export type PageBodyEditorial_LookPrimary = {
  __typename?: 'PageBodyEditorial_lookPrimary';
  title?: Maybe<Scalars['Json']>;
  text?: Maybe<Scalars['Json']>;
  image?: Maybe<Scalars['Json']>;
  text_position?: Maybe<Scalars['String']>;
};

export type PageBodyGallery = {
  __typename?: 'PageBodyGallery';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<PageBodyGalleryFields>>;
};

export type PageBodyGalleryFields = {
  __typename?: 'PageBodyGalleryFields';
  image?: Maybe<Scalars['Json']>;
  description?: Maybe<Scalars['Json']>;
  link?: Maybe<_Linkable>;
};

export type PageBodyHighlight_Section = {
  __typename?: 'PageBodyHighlight_section';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<PageBodyHighlight_SectionPrimary>;
};

export type PageBodyHighlight_SectionPrimary = {
  __typename?: 'PageBodyHighlight_sectionPrimary';
  image?: Maybe<Scalars['Json']>;
  title?: Maybe<Scalars['Json']>;
  description?: Maybe<Scalars['Json']>;
  button_label?: Maybe<Scalars['Json']>;
  button_link?: Maybe<_Linkable>;
};

export type PageBodyImage_Slider = {
  __typename?: 'PageBodyImage_slider';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<PageBodyImage_SliderFields>>;
};

export type PageBodyImage_SliderFields = {
  __typename?: 'PageBodyImage_sliderFields';
  image?: Maybe<Scalars['Json']>;
};

export type PageBodyText_Section = {
  __typename?: 'PageBodyText_section';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<PageBodyText_SectionPrimary>;
};

export type PageBodyText_SectionPrimary = {
  __typename?: 'PageBodyText_sectionPrimary';
  text?: Maybe<Scalars['Json']>;
};

export type PageBodyVideo = {
  __typename?: 'PageBodyVideo';
  type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  primary?: Maybe<PageBodyVideoPrimary>;
};

export type PageBodyVideoPrimary = {
  __typename?: 'PageBodyVideoPrimary';
  embed?: Maybe<Scalars['Json']>;
};

/** A connection to a list of items. */
export type PageConnectionConnection = {
  __typename?: 'PageConnectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PageConnectionEdge>>>;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type PageConnectionEdge = {
  __typename?: 'PageConnectionEdge';
  /** The item at the end of the edge. */
  node: Page;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
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

export type Product = _Document & _Linkable & {
  __typename?: 'Product';
  title?: Maybe<Scalars['Json']>;
  product_description?: Maybe<Scalars['Json']>;
  _meta: Meta;
  _linkType?: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type ProductConnectionConnection = {
  __typename?: 'ProductConnectionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ProductConnectionEdge>>>;
  totalCount: Scalars['Long'];
};

/** An edge in a connection. */
export type ProductConnectionEdge = {
  __typename?: 'ProductConnectionEdge';
  /** The item at the end of the edge. */
  node: Product;
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  _allDocuments: _DocumentConnection;
  allHomepages: HomepageConnectionConnection;
  allMenus: MenuConnectionConnection;
  page?: Maybe<Page>;
  allPages: PageConnectionConnection;
  product?: Maybe<Product>;
  allProducts: ProductConnectionConnection;
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


export type QueryAllHomepagesArgs = {
  sortBy?: Maybe<SortHomepagey>;
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
  where?: Maybe<WhereHomepage>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryAllMenusArgs = {
  sortBy?: Maybe<SortMenuy>;
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
  where?: Maybe<WhereMenu>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryPageArgs = {
  uid: Scalars['String'];
  lang: Scalars['String'];
};


export type QueryAllPagesArgs = {
  sortBy?: Maybe<SortPagey>;
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
  where?: Maybe<WherePage>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryProductArgs = {
  uid: Scalars['String'];
  lang: Scalars['String'];
};


export type QueryAllProductsArgs = {
  sortBy?: Maybe<SortProducty>;
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
  where?: Maybe<WhereProduct>;
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

export enum SortHomepagey {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TaglineAsc = 'tagline_ASC',
  TaglineDesc = 'tagline_DESC',
  ButtonTextAsc = 'button_text_ASC',
  ButtonTextDesc = 'button_text_DESC'
}

export enum SortMenuy {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SortPagey {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  HeroTextAsc = 'hero_text_ASC',
  HeroTextDesc = 'hero_text_DESC'
}

export enum SortProducty {
  MetaFirstPublicationDateAsc = 'meta_firstPublicationDate_ASC',
  MetaFirstPublicationDateDesc = 'meta_firstPublicationDate_DESC',
  MetaLastPublicationDateAsc = 'meta_lastPublicationDate_ASC',
  MetaLastPublicationDateDesc = 'meta_lastPublicationDate_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  ProductDescriptionAsc = 'product_description_ASC',
  ProductDescriptionDesc = 'product_description_DESC'
}

export type WhereHomepage = {
  title?: Maybe<Scalars['String']>;
  title_fulltext?: Maybe<Scalars['String']>;
  tagline?: Maybe<Scalars['String']>;
  tagline_fulltext?: Maybe<Scalars['String']>;
  /** button_link */
  button_link?: Maybe<Scalars['String']>;
  button_text?: Maybe<Scalars['String']>;
  button_text_fulltext?: Maybe<Scalars['String']>;
};

export type WhereMenu = {
  /** title */
  title_fulltext?: Maybe<Scalars['String']>;
};

export type WherePage = {
  /** hero_text */
  hero_text_fulltext?: Maybe<Scalars['String']>;
};

export type WhereProduct = {
  /** title */
  title_fulltext?: Maybe<Scalars['String']>;
  /** product_description */
  product_description_fulltext?: Maybe<Scalars['String']>;
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


export type GetHomepageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomepageQuery = (
  { __typename?: 'Query' }
  & { allHomepages: (
    { __typename?: 'HomepageConnectionConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'HomepageConnectionEdge' }
      & { node: (
        { __typename?: 'Homepage' }
        & Pick<Homepage, 'title' | 'tagline' | 'button_text' | 'image'>
        & { button_link?: Maybe<{ __typename?: 'Homepage' } | { __typename?: 'Menu' } | { __typename?: 'Page' } | { __typename?: 'Product' } | (
          { __typename?: '_ExternalLink' }
          & Pick<_ExternalLink, 'url' | 'target'>
        ) | { __typename?: '_FileLink' } | { __typename?: '_ImageLink' }>, body?: Maybe<Array<(
          { __typename?: 'HomepageBodyPitch_cards' }
          & Pick<HomepageBodyPitch_Cards, 'type'>
          & { primary?: Maybe<(
            { __typename?: 'HomepageBodyPitch_cardsPrimary' }
            & Pick<HomepageBodyPitch_CardsPrimary, 'pitch_title' | 'pitch_text' | 'pitch_eyebrow'>
          )>, fields?: Maybe<Array<(
            { __typename?: 'HomepageBodyPitch_cardsFields' }
            & Pick<HomepageBodyPitch_CardsFields, 'card_text' | 'card_title'>
            & { card_icon?: Maybe<{ __typename?: 'Homepage' } | { __typename?: 'Menu' } | { __typename?: 'Page' } | { __typename?: 'Product' } | { __typename?: '_ExternalLink' } | { __typename?: '_FileLink' } | (
              { __typename?: '_ImageLink' }
              & Pick<_ImageLink, 'url'>
            )> }
          )>> }
        ) | (
          { __typename?: 'HomepageBodyText' }
          & Pick<HomepageBodyText, 'type'>
          & { primary?: Maybe<(
            { __typename?: 'HomepageBodyTextPrimary' }
            & Pick<HomepageBodyTextPrimary, 'text'>
          )> }
        ) | { __typename?: 'HomepageBodySlice' }>> }
      ) }
    )>>> }
  ) }
);
