# Creating slice definitions on Prismic Custom Types
> *This page will explain how to create a new slice on a pre-existing Prismic Custom Type. If you need to create a new Custom Type, follow [these instructions](https://github.com/rentalutions/marketing/wiki/Creating-a-new-custom-type) first.*

> *The Prismic URL's included on this page are linking to Avail Marketing Staging repository. If you're working on a different repository, make sure to adapt the URL base path when following a link from here.*

## Opening the Custom Type page
By clicking the *Custom Types* item on the left menu (or by directly following [/masks](https://avail-marketing.prismic.io/masks/)), it is possible to enter the Custom Types page on Prismic UI.

At the grid displayed at the center of the page, locate the custom type on which you want to add the slice on, and click on it. This should open the page for viewing and editing the custom type.
> You can also open it directly from the URL [/masks/{content-type-name}.json](https://avail-marketing.prismic.io/masks/info.json/)

### Editing the Custom Type with Prismic UI
On this page you can use the UI to create and edit slices of the Custom Type, by using the `Build Mode` section of the right menu and/or by editing fields using their settings.
 
#### Creating a new slice
To add a new slice, click the `Add a slice` item on the `Slice zone` stack, after the page settings fields.

#### Adding new fields to the slice
To add fields to existing slices, first select the slice you want to edit on the `Slice zone` stack, and then drag the field type from the `Build Mode` section of the right menu to the slice. This can be done both for regular fields and repeatable zone items.

## Using the JSON editor to import the slice definitions
By selecting the `JSON editor` tab on the right menu, you should see the whole JSON content that holds the Content Type definitions. This content may be fully replaced by the most recent versioned JSON file for the content type (if you don't know what this file is, see the first section of [this page](https://github.com/rentalutions/marketing/wiki/Creating-a-new-slice-on-the-source-code)), or can be updated only with the diffs related to the slice you want to add.

Prefer that last approach - adding just the new slice diffs on the JSON file - if the slice creation on the source code is still in progress (was not merged on `staging` yet).

# See also
## Creating a new slice on the source code
In order to make a slice fully attend to our expectations on the CMS, its components and definitions also have to be created on the source code. You can check how to do it by reading [this wiki page](https://github.com/rentalutions/marketing/wiki/Creating-a-new-slice-on-the-source-code).