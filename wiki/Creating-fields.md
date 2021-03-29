# Creating fields for pages, slices and repeatable slice items
## Editing the current `.json` file for the custom type

The file to be edited should be a `.json` file at `src/types` directory. The name of the file is the same name of the content type that holds the page or slice on which the field will be created.

Example: `src/types/info.json` (This is the source file for the content type named `info`)

## Where to add it
The field may be created for a slice or for the content type page.

If you're creating it for the page, add it (alphabetically) as a new key for the `Page` object, located at the root level of the content type's JSON object.

If you're creating it as a unique field for a slice, add it (alphabetically) as a new key for the `non-repeat` object of the slice, located at `Page.body.config.choices.{slice-name}.non-repeat` on the content type's JSON object.

If you're creating it as a field for a repeatable slice item, add it (alphabetically) as a new key for the `repeat` object of the slice, located at `Page.body.config.choices.{slice-name}.repeat` on the content type's JSON object.

## Field properties

```json
"{field-name}" : {
  "type" : "{FieldType}",
  "config" : {
    "label" : "{FieldTitle}",
    "placeholder" : "{FieldTitle}",
    "...{FieldConfiguration}"
  }
}
```

> Each field type may have its own specific configuration properties
>
> Some common types and its configuration keys:
>
>> `StructuredText`
>>> `placeholder`: String - The content to be displayed on the input element on Prismic UI, before the content creator fills it
>>
>>> `single`: String - Should contain all the rich-text types that may be used on the field, separated by commas.
>>>
>>> Example:
>>>```json
>>>"single" : "paragraph, preformatted, heading3, heading4, heading5, heading6, strong, em, hyperlink, list-item, o-list-item",
>>>```
>>>
>>> If present on the field configuration, Prismic will allow the content creator to define only a single line for the StructuredText.
>>>
>>>**Should not be present alongside `multi`.**
>>
>>> `multi`: String - Should contain all the rich-text types that may be used on the field, separated by commas.
>>>
>>> Example:
>>>```json
>>>"multi" : "paragraph, preformatted, heading3, heading4, heading5, heading6, strong, em, hyperlink, list-item, o-list-item",
>>>```
>>>
>>> If present on the field configuration, Prismic will allow the content creator to define multiple lines for the StructuredText.
>>>
>>>**Should not be present alongside `single`.**
>>
>>> `labels`: String Array - Should contain all the possible label options for the StructuredText. Labels are a way to mark text pieces to be handled separately by the source code, in order to apply pre-defined styling or rendering.
>
>> `Select`
>>> `options`: String Array - Should contain all the possible options for the select field.
>>
>>> `default_value`: Optional String - Should be empty or equal an option present on `options` array. 
>
>> `Boolean`
>>> `placeholder_true`:  String - The label for the `true` option, to be displayed on Prismic UI. 
>>
>>> `placeholder_false`: String - The label for the `false` option, to be displayed on Prismic UI.
>>
>>> `default_value`: Boolean - The default value for the field.
>
> Check Prismic UI for the complete list of field types and configuration keys.


## Syncing Prismic with the source code
> **If you update custom type definitions directly on the JSON file of the source code, make sure to also update it on Prismic.**

The instructions on how to do it can be find on [this wiki page](https://github.com/rentalutions/marketing/wiki/Syncing-Prismic-with-the-source-code).