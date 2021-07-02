# What is a Slice?
Before moving on to the part were we actually create a new Slice, is important to understand what is a Slice, why they are important for us and how they fit on `Primsic Content Modeling` concepts.


> Slices allow you to create a structured group of fields. They allow you to define reusable content component templates for rich page layouts. This gives writers the freedom to compose documents by arranging and ordering Slices as they want.

We use Slices in order to define templates for the content we want to display on different CMS pages. When a content creator adds a Slice to their page, and fill the fields defined for its template, they expect to see a component on that page that displays the corresponding content using the layout proposed by the Slice.

Reach out to Prismic documentation for more details: https://prismic.io/docs/core-concepts/slices

# Creating slice definitions on Prismic Custom Types
> *This page will explain how to create a new slice on a pre-existing Prismic Custom Type. If you need to create a new Custom Type, follow [these instructions](/wiki/Creating-a-new-custom-type.md) first.*

> *The Prismic URL's included on this page are linking to Avail Marketing Staging repository. If you're working on a different repository, make sure to adapt the URL base path when following a link from here.*

If you prefer not to use the Prismic UI. You can also [define a new slice directly on the source code](/wiki/defining-a-new-slice-directly-on-the-source-code.md)

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

# Creating the slice implementation on the application
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
> * Add the `design` property on the `parameters` of the exported components, this property must have `type` and `url` keys. The `type` property expects a string and on our case must be defined with `"figma"`, the `url` property also expects a string, that should be the exported link for the Figma frame. If you don't have the Figma link, learn on [this page](/wiki/Exporting-figma-frames.md) how to export it.
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
