Welcome to the marketing wiki!

# Index
## Creating new things
### Creating a new custom type
#### [Creating a new custom type](/wiki/Creating-a-new-custom-type.md)

### Creating a new slice
#### [Creating a new slice](/wiki/creating-a-new-slice.md)

### Creating fields
#### [Creating fields](/wiki/Creating-fields.md)

## General knowledge
### Prismic
#### [Syncing Prismic with the source code](/wiki/Syncing-Prismic-with-the-source-code.md)
### Figma
#### [Exporting Figma frames](/wiki/Exporting-figma-frames.md)

# About Primsic Content Modeling
> At Prismic, we think of content modeling as the process of taking a website design and using it to structure the content in a CMS. This notion connects developers, who are the ones that usually set up the CMS, with content managers, writers, and editors.
[Read more](https://prismic.io/docs/core-concepts/content-modeling)
## Elements of Content Model
### Custom Types
A Custom Types is a structured group of definitions and possible content types, where the user can define fields that should be filled to determine the data for each different page. The user can also define the Slices that can be used on every instance of that Custom Type.

> Single Types are for elements that only need one document like a homepage, and Repeatable Types for content that requires more than one, such as articles, products, places, and authors. [Read more](https://prismic.io/docs/core-concepts/custom-types)

On the `next.js` application, custom types are being handled as pages, and each one of them can result in a different page structure/implementation.

### Slices
A Slice is a structured group of fields. Each Slice may define different kinds of fields, and use each one of them for different purposes. Creating a Slice consists in defining reusable templates for the content we should handle on the CMS.

> Prismic Slices are used to define a dynamic zone in your Custom Types. This gives content creators the freedom to compose the layout for any page design, such as blog posts, landing pages, case studies, and tutorials. [Read more](https://prismic.io/docs/core-concepts/slices)

The Slices we create on the Content Model level, should be handled on the `next.js` application.

### Fields
In Prismic, fields are the most basic element on the Content Model stack. They can be used directly on the Custom Types or inside Slices.

> Fields are the elements that build Custom Types. Each field is designed to hold different data types to cover every possible content case. Prismic has 18 different types of fields. Refer to each field's documentation to learn more details about them all. [Read More](https://prismic.io/docs/core-concepts/fields)