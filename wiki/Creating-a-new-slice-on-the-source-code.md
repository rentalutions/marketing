# Creating the slice definitions and components on the source code
> *This page will explain how to create a new slice on a pre-existing Prismic Custom Type. If you need to create a new Custom Type, follow [these instructions](https://github.com/rentalutions/marketing/wiki/Creating-a-new-custom-type) first.*

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
**To learn how to create both repeatable and non repeatable fields, follow the instructions of [this page](https://github.com/rentalutions/marketing/wiki/Creating-fields).**

<img width="1749" alt="New slice JSON diff example" src="https://user-images.githubusercontent.com/22528445/112215039-e6c34900-8bed-11eb-9acc-02744c07b1cd.png">

### Syncing Prismic with the source code
> **If you update custom type definitions directly on the JSON file of the source code, make sure to also update it on Prismic.**

The instructions on how to do it can be find on [this wiki page](https://github.com/rentalutions/marketing/wiki/Syncing-Prismic-with-the-source-code).

## Creating the slice partial
The higher level component for the slice.
> Should be created at `src/components/partials/SliceZone/components/{SliceName}/`

The slice partial should be responsible for handling the properties passed to the slice by the application and by Prismic, and then for rendering properly the slice organism.

In most cases, it shouldn't be handling complex logics or data processing, but only converting the application and Prismic parameters to the slice organism component.

It is also responsible for handling the usage of slice level components/functions, like `Rich Text`.

The slice partial should receive as prop an object called `slice`. On this object should be all the properties passed by Prismic to the slice.

<img width="1119" alt="New slice partial component" src="https://user-images.githubusercontent.com/22528445/112866436-6a15ec00-907f-11eb-95b4-5916e49ef518.png">

## Creating the slice organism
An organism component that should handle the rendering of the slice.
> Should be created at `src/components/organisms/{OrganismName}/`

### Creating the storybook
The organism should be created with its stories for the storybook. The storybook is a library that should render every organism component (and their possible variants) without running the application.

> The stories file should be created at `src/components/organisms/{OrganismName}/organism-name.stories.js`
 
The `default` export for the stories file must be an object with the organism story configuration.
```js
import { Organism } from "./index"

export default {
  title: "Components/{OrganismName}",
  component: Organism,
}
```

The stories file should export functional components that renders the organism. Every possible variant of the component should be an exported FC on the stories file.

```jsx
export function Default() {
  return (
    <Organism title="Hello World" />
  )
}

export function WithLeftOrientation() {
  return (
    <Organism title="Hello World" orientation="left" />
  )
}
```

> #### Figma-Storybook integration
> In order to make it easier to compare the component rendering with the original expectations, we can display on Storybook the Figma layout for the component, at the 'Design' tab. To make it work we'll have to ensure the following configuration are present on the stories file:
> 
> * Import `withDesign` from `storybook-addon-designs` package, and include it on the `decorators` array property from the `default` export
> 
> ```js
> import { withDesign } from "storybook-addon-designs"
> import { Organism } from "./index"
> 
> export default {
>   title: "Components/{OrganismName}",
>   component: Organism,
>   decorators: [withDesign],
> }
> ```
> 
> * Add the `design` property on the `parameters` of the exported components, this property must have `type` and `url` keys. The `type` property expects a string and on our case must be defined with `"figma"`, the `url` property also expects a string, that should be the exported link for the Figma frame. If you don't have the Figma link, learn on [this page](https://github.com/rentalutions/marketing/wiki/Exporting-figma-frames) how to export it.
> 
> ```js
> const parameters = {
>   design: {
>     type: "figma",
>     url: "https://www.figma.com/file/{file-identifier}",
>   },
> }
>
> export function Default() {
>   return (
>     <Organism title="Hello World" />
>   )
> }
> Default.parameters = parameters
>
> export function WithLeftOrientation() {
>   return (
>     <Organism title="Hello World" orientation="left" />
>   )
> }
> WithLeftOrientation.parameters = parameters
> ```
> If it doesn't work only by following these steps, make sure you have the `storybook-addon-designs` package added to your application and present on `addons` property from `.storybook/main.js`.

<img width="1385" alt="Organism's storybook example" src="https://user-images.githubusercontent.com/22528445/112867134-296aa280-9080-11eb-813e-8c771a474e7c.png">

### Creating the organism components

> The main component should be created at `src/components/organisms/{OrganismName}/index.js`

The organism should receive all the its properties already handled to fulfill the necessities of the component. It should **not** rely on slice level functionalities, like `Rich Text`.

Prefer to keep the component logic on separated hooks. If necessary create a new hook for the organism, unless its logic can be reutilized by other components.

> Auxiliary hooks should be created at `src/components/organisms/{OrganismName}/use-{hook-name}.js`

Also, prefer to have isolable/repeatable layout patterns created on auxiliary components.

> Auxiliary component should be created at `src/components/organisms/{OrganismName}/{component-name}.js`

<img width="1068" alt="New organism component" src="https://user-images.githubusercontent.com/22528445/112866540-86b22400-907f-11eb-8b4b-faf12a7f0231.png">

## Creating possible molecules and elements

If the organism can't handle all the layout necessities only with its specific auxiliary components and the existing molecules and elements, new molecules and elements may be created.
They must be reusable and should **not** depend on the organism to work.

## Mapping the new slice in SliceZone

Once the slice components are created and work together to properly render the slice as expected, it is time to map the new slice at the SliceZone.

> The SliceZone main component is located at `src/components/partials/SliceZone/index.js`

The SliceZone should be handling an array of slices, in order to return an array of slice components instead.
For each item on the original array, the SliceZone will try to find its corresponding component by performing a `switch-case` evaluation.
To include the new slice on this handler, just add a new `case` entry for the `switch-case` (alphabetically).

The case condition should be the slice name, as defined on the custom type JSON file on the first step of this page.

The case return should be the slice partial. Make sure to pass the `key` and `slice` variables to it as props.

<img width="959" alt="New slice mapped in SliceZone" src="https://user-images.githubusercontent.com/22528445/112867388-7e0e1d80-9080-11eb-9fe3-852c748f0b2c.png">


# See also
## Creating a new slice on Prismic
In order to make a slice fully attend to our expectations on the CMS, its definitions also have to be created on Prismic. You can check how to do it by reading [this wiki page](https://github.com/rentalutions/marketing/wiki/Creating-a-new-slice-on-prismic).
