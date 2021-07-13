# Creating a new custom type

There are two ways to create a custom type for our Prismic API. The recommended way is to create the type file locally and upload it to prismic, but you can also build the custom type directly in the browser and download the resulting type file.

## Starting locally.

### 1. Create a type file.

Create a new file in the `src/types` directory named after the content type to be created. Eg. `src/types/info.json` should be the source file for a content type named `Info`.

The content for the new json file should be an object containing the following keys on its root level:

#### Page

Should be an object containing the page fields plus the SliceZone. Besides the `SliceZone`, the other properties for `Page` should be the page options/fields. They may be created just like other [regular fields](/wiki/creating-fields.md).

##### SliceZone

The SliceZone should have `body` as key and should be an object. It should have `type`, `fieldset` and `config` as its root level properties.

#### SEO Metadata

The properties for `SEO Metadata` will allow content creators to define how the page's meta tags should be set.

```json
"SEO Metadata" : {
    "meta_title" : {
      "type" : "Text",
      "config" : {
        "label" : "Meta Title",
        "placeholder" : "My title for Search Engine"
      }
    },
    "meta_description" : {
      "type" : "Text",
      "config" : {
        "label" : "Meta Description",
        "placeholder" : "The description that will appear in search engine"
      }
    },
    "meta_keywords" : {
      "type" : "Text",
      "config" : {
        "label" : "Meta keywords"
      }
    }
  }
```

#### URL Params

This will allow content creators to specify for the page the values for each parameter defined as a property of `URL params`.

```json
"URL params" : {
   "query_channel" : {
     "type" : "Text",
     "config" : {
       "label" : "Channel (sets the channel and keyword cookies)",
       "placeholder" : "E.g. - email"
     }
   },
   "query_content" : {
     "type" : "Text",
     "config" : {
       "label" : "Content (sets the content cookie)",
       "placeholder" : "E.g. - credit_checks"
     }
   },
   "query_signup_page" : {
     "type" : "Text",
     "config" : {
       "label" : "Signup page (sets signup_page cookie)",
       "placeholder" : "E.g. - listings"
     }
   },
   "query_campaign" : {
     "type" : "Text",
     "config" : {
       "label" : "Campaign (sets campaign cookie)",
       "placeholder" : "E.g. - tenant_feature_landing"
     }
   }
 }
```

### 2. Sync with prismic

**If you create the custom type definitions directly on the JSON file of the source code, make sure to update its content on Prismic.**

Follow the instructions on the next section to create the content type on Prismic (or select it on the first step, if it was already created), open the JSON editor by selecting the `JSON editor` tab on the right menu, paste there the versioned content of JSON file and click the `Save` button on the top-right corner.

---

## Starting on prismic.io

### 1. Navigate to the _Custom Types_ item on the left menu or by clicking on the [masks](https://avail-marketing.prismic.io/masks/) link.

### 2. Create a new custom type by clicking _Create New_ on the top right corner of the screen.

### 3. Select the proper form, either _Repeatable_ or _Single_.

For most use cases, repeatable is the correct choice. Only in instances where you can't imaging the type being reusable should you select single. Eg. A homepage type.

### 4. Enter the name of the custom type and hit enter.

### 5. Configure the custom type using the prismic type builder interface.

Use the interface to add static types and allowed slices for the `SliceZone`

### 6. Download and sync a locally copy of the generated json type file.

Make sure to commit on the source code the resulted JSON content, that can be displayed by selecting the `JSON editor` tab on the right menu.
