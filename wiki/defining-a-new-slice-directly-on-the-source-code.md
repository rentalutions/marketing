# Defining a new Slice directly on the source code
> *This page will explain how to create a new slice on a pre-existing Prismic Custom Type. If you need to create a new Custom Type, follow [these instructions](/wiki/Creating-a-new-custom-type.md) first.*

## Editing the current `.json` file for the custom type that will support the new slice

**There will probably exist a Figma layout for the new slice. Take a look on it first, in order to identify the properties for the slice and its fields. They have to be defined on the JSON file you'll be editing on this step.**

The file to be edited should be a `.json` file at `src/types` directory. The name of the file is the same name of the content type on which the slice will be created.

Example: `src/types/info.json` (This is the source file for the content type named `info`)

### Add a new entry (alphabetically) for `Page.body.config.labels`
```json
"{new_slice_name}": [ ],
```

### Add a new entry (alphabetically) for `Page.body.config.choices`
```json
"{new_slice_name}": {
  "type" : "Slice",
  "fieldset" : "{Slice Name}",
  "description" : "{Slice Description}",
  "icon" : "",
  "display" : "{list|grid}",
  "non-repeat" : { },
  "repeat" : { }
},
```
> `icon`: The exact string for the icon name. See icon list in Prismic UI.
> 
> `display`: This property defines how the repeatable items will be displayed **on Prismic UI**. ***This does not affect how the slice will be rendered on the application.*** Possible options are:
> > `list`: there will be one item per row and each one of them will fill all the width available
> >
> > `grid`: the maximum amount of items that fits the screen will be displayed on the same row
> 
> `non-repeat`: Fields that should appear once and directly on the slice 
> 
> `repeat`: Fields that should compose together a single repeatable card/item 
> 
**To learn how to create both repeatable and non repeatable fields, follow the instructions of [this page](/wiki/Creating-fields.md).**

<img width="1749" alt="New slice JSON diff example" src="https://user-images.githubusercontent.com/22528445/112215039-e6c34900-8bed-11eb-9acc-02744c07b1cd.png">

### Syncing Prismic with the source code
> **If you update custom type definitions directly on the JSON file of the source code, make sure to also update it on Prismic.**

The instructions on how to do it can be find on [this wiki page](/wiki/Syncing-Prismic-with-the-source-code.md).
