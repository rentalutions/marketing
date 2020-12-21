# Avail Marketing Pages

The purpose of the project is to allow Avail content editors to quickly and
easily create and customize static content pages using pre-design, complex and
feature-rich components. The project is based on [Next.js](https://nextjs.org/)
platform, [Avail Design System](https://design.avail.co/) and uses
[Prismic CMS](https://prismic.io/docs)
as its’ data source.

## Quick start

- Clone the repository
- Run `yarn` to install dependencies
- Copy `.env.template` as `.env` to ensure that environment variables are set
- Launch the app in development mode: `yarn dev`
- Navigate to the `http://localhost:3000`
- Optionally start Storybook with `yarn storybook`

## Project structure

Project structure follows Next.js standard structure with React components
arrangement based
on [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)
that can be found in `./src/components` directory.

```
.storybook
pages
public
src
└── components
│   └── elements
│   └── molecules
│   └── organisms
│   └── partials
└── utils    
└── config.js
```    

There is a semi-meaningful split between `partials` and the rest of the
components, where `partials`
contains components meant to directly compose a Prismic-backed pages,
while `elements`, `molecules`
and `organisms`
compose the projects’ design kit, that is free of Prismic-specific code in order
to maintain a certain degree of project portability.

### Storybook

Storybook is a tool that helps with implementation of new design kit components
in isolation from the CMS specifics. It's available with the `yarn storybook`
command, which should automatically open a new tab in the browser with the list
of design kit components and their variants.

### Slice Zone

[Prismic Slices](https://intercom.help/prismicio/en/articles/383933-slices) are
a primary way of implementing dynamic content in Prismic CMS. They are
repeatable data structures that can be placed in pages with pre-configured and
editable in CMS, typed fields.

The `SlizeZone` component is responsible for rendering Prismic Slices in the app
and has a subcomponents directory with individuals Slices and helper components
specific to Prismic DSL (domain-specific language).

```
...
SliceZone
└── components
│   └── RichText
│   └── EmailCaptureSlice
│   └── ...
└── index.js
```  

A Slice, in the context of the app, is a binding between the CMS and the design
kit. All Slices should have verbose concrete names that match their name in CMS
and must end with Slice, e.g. -
`HeroWithEmailCaptureSlice`.

Since Slices typically have more specific requirements than design kit
components, we should be careful about leaking CMS- or content-specific code
into the design kit and try to contain it within concrete Slice implementations.

### URL Resolver

All outgoing link URLs in Slices must be processed through the `UrlResolver`
function, that can be used as a React hook (as long as components are wrapped in
`UrlResolverProvider`):

```
const url = "..."
const urlResolver = useUrlResolver()

return <Button as="a" href={urlResolver(url)}>Get Started</Button>
```

## Code Preferences

This is just a general list, not meant to be exhaustive, but hoping to make it fairly complete in the near future.

### Prefer function declarations over arrow functions.
```jsx
// Good
function MyComponent(props) {
  return "something"
}

// Bad
const MyComponent = (props) => {
  return "Something"
}
```
### Prefer `getServerSideProps|getStaticProps` over `getInitialProps`
```jsx
// Good
export async function getServerSideProps(ctx) {
  return {props: {banana: true}}
}

export default function MyComponent({banana}) {
  if (banana) return "There's a banana"
  return "There's no banana"
}

// Bad
export default function MyComponent() {}

MyComponent.getInitialProps = async function(ctx) {
  return {}
}
```
### Abstract component logic into a hook.
```jsx
// Good
function useComponent({ref, ...props}) {
  const compRef = useRef(null)
  const [shown, setShown] = useState(false)
  return {
    ...props,
    shown,
    ref: mergeRefs(ref, compRef),
  }
}
function Component(props, ref) {
  const {shown, ...htmlProps} = useComponent({...props, ref})
  return shown && <Box {...htmlProps} />
}

// Bad
function Component(props, ref) {
  const compRef = useRef(null)
  const [shown, setShown] = useState(false)
  return shown && <Box ref={mergeRefs(compRef, ref)} {...props} />
}
```