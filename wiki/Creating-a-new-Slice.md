# Creating the slice definitions and components on the source code
## Editing the current `.json` file for the custom type that will support the new slice

<img width="1749" alt="Screen Shot 2021-03-23 at 11 46 45 AM" src="https://user-images.githubusercontent.com/22528445/112215039-e6c34900-8bed-11eb-9acc-02744c07b1cd.png">

### Add a new entry (alphabetically) for `Page.body.config.labels`
`"__new_slice_name__": [ ]`

### Add a new entry (alphabetically) for `Page.body.config.choices`
```json
"__new_slice_name__": {
  "type" : "Slice",
  "fieldset" : "__Slice Name__",
  "description" : "__Slice Description__",
  "icon" : "",
  "display" : "__list|grid__",
  "non-repeat" : { },
  "repeat" : { }
}
```
**icon**: The exact string for the icon name. See icon list in Prismic UI.

**display**: @todo

**non-repeat**: Fields that should appear once and directly on the Slice 

**repeat**: Fields that should compose together a single repeatable card/item 

## Creating the new slice components
...

## Mapping the new slice in SliceZone
...

# Creating slice definitions in Prismic custom types
## Editing a Custom Type on Prismic UI Custom Types
      -> Adding new slice to Custom Type on Prismic UI Custom Types
