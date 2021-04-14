# Creating the versioned JSON file for the new Custom Type
The file to be created should be a `.json` file at `src/types` directory, named after the content type to be created.

Example: `src/types/info.json` (This should be the source file for a content type named `info`)

The content for the new JSON file should be an object containing the following keys on its root level:

`Page`: Should be an object containing the page fields plus the SliceZone.

> The SliceZone should have `body` as key and should be an object. It should have `type`, `fieldset` and `config` as its root level properties.
>> `type`: should be "Slices"
>>
>> `fieldset`: should be "Slice zone"
>>
>> `config`: should be an object with `labels` and `choices` keys. Both properties will have as keys the existing slices for the content type. They must be properly filled when creating those slices (instructions can be find on the first section of [this wiki page](/wiki/Creating-a-new-slice-on-the-source-code.md))
>
> The other properties for `Page` should be the page options/fields. They may be created just like other [regular fields](/wiki/Creating-fields.md).

`SEO Metadata`: Should be an object with `meta_title`, `meta_description` and `meta_keywords` keys.
> The properties for `SEO Metadata` will allow content creators to define how the page's meta tags should be set.
> ```json
> "SEO Metadata" : {
>     "meta_title" : {
>       "type" : "Text",
>       "config" : {
>         "label" : "Meta Title",
>         "placeholder" : "My title for Search Engine"
>       }
>     },
>     "meta_description" : {
>       "type" : "Text",
>       "config" : {
>         "label" : "Meta Description",
>         "placeholder" : "The description that will appear in search engine"
>       }
>     },
>     "meta_keywords" : {
>       "type" : "Text",
>       "config" : {
>         "label" : "Meta keywords"
>       }
>     }
>   }
> ```

`URL params`: Should be an object with `meta_title`, `meta_description` and `meta_keywords` keys.
> This will allow content creators to specify for the page the values for each parameter defined as a property of `URL params`.
> ```json
> "URL params" : {
>    "query_channel" : {
>      "type" : "Text",
>      "config" : {
>        "label" : "Channel (sets the channel and keyword cookies)",
>        "placeholder" : "E.g. - email"
>      }
>    },
>    "query_content" : {
>      "type" : "Text",
>      "config" : {
>        "label" : "Content (sets the content cookie)",
>        "placeholder" : "E.g. - credit_checks"
>      }
>    },
>    "query_signup_page" : {
>      "type" : "Text",
>      "config" : {
>        "label" : "Signup page (sets signup_page cookie)",
>        "placeholder" : "E.g. - listings"
>      }
>    },
>    "query_campaign" : {
>      "type" : "Text",
>      "config" : {
>        "label" : "Campaign (sets campaign cookie)",
>        "placeholder" : "E.g. - tenant_feature_landing"
>      }
>    }
>  }
> ```

## Syncing Prismic with the source code
> **If you create the custom type definitions directly on the JSON file of the source code, make sure to update its content on Prismic.**

Follow the instructions on the next section to create the content type on Prismic (or select it on the first step, if it was already created), open the JSON editor by selecting the `JSON editor` tab on the right menu, paste there the versioned content of JSON file and click the `Save` button on the top-right corner.

# Creating a new Custom Type on Prismic UI Custom Types
> *The Prismic URL's included on this page are linking to Avail Marketing Staging repository. If you're working on a different repository, make sure to adapt the URL base path when following a link from here.*

## Opening the Custom Types page
By clicking the *Custom Types* item on the left menu (or by directly following [/masks](https://avail-marketing.prismic.io/masks/)), it is possible to enter the Custom Types page on Prismic UI.

## Creating a new Custom Type
On the Custom Types page, click the `Create new` button on the top-right corner of the page.

Select the proper type from `Repeatable` or `Single`, for the CMS we'll be using `Repeatable` on most cases.

Enter the name for the new custom type.

Click the `Create new custom type` button.

## Configuring the new Custom Type
Prismic UI makes possible to define all the configurations for old or for recently created custom types. This can also be done by directly editing its JSON content, like explained on the first section of this wiki page.

## Syncing the source code with Prismic
**If you use Primic UI's build mode to create the custom type definitions, make sure to commit on the source code the resulted JSON content, that can be displayed by selecting the `JSON editor` tab on the right menu.**
