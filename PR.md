
Hi,
I was using this library for a project of mine and need to make some changes to work around certain limitations. I ended up changing quite a bit more basically refactoring most of the library. 🤓

I'm making this PR with all of the changes.
I think it has nice ideas some of which can be adopted in full or partially.

# Major Changes
## Konva Components Can Be Nested In Other Components
Original implementation uses `contentChildren` to look for `ko-` components.

This makes it impossible to wrap Konva components inside of other Angular components.
This is not a problem for small use cases, but when the project grows larger, being able to have your own components that abstract Konva away is pretty nice.

Instead of looking down at children, new implementation looks up at parents through `inject`.
This makes it possible to write code like this:

```html
<ko-stage>
  <pizza><!-- Renders ko-layer and ko-group inside-->
    <pizza-slice><!-- Renders ko-group inside -->
      <pepperoni /><!-- Renders shape -->
    </pizza-slice>
  </pizza>
</ko-stage>
```

**Pros:**
- Now  `pepperoni` component can focus on `pepperoni` business logic without exposing it to the rest of the codebase. More scalable projects can be built.

**Cons:**
- This makes the library behavior more implicit. The library will look for parent `Group` or `Layer` regardless of how away in the tree the parent is, which may be confusing in some scenarios.

## All Components Extend Parent Abstract Class
New implementation has a base abstract `KonvaComponent` class.

**Pros:**
- Follows *open-closed principle* better. Instead of doing checks like `if (!(item.getStage() instanceof Layer))`, each component can have its own logic.
  I think the structure is easier to understand once you get used to it.
- There are now custom warnings when user tries to use shape without a group/layer, or layer without a stage.

**Cons:**
- May require some adjustment for maintainers, may be trickier to work with.
- I had to decorate the abstract class with `@Component`, which works fine, but does seem somewhat hackish.

## There Are More Components
I've created a separate component for each Konva node. There are now `KonvaArc`, `KonvaEllipse`, `KonvaGroup`, etc.
In addition, each component is now packaged as a separate entry point: `ng2-konva/arc`, `ng2-konva/ellipse`, etc.

**Pros:**
- Each component is type safe. `KonvaArc` will not accept `RectConfig`, like it currently does, and its events are going to be typed better.
- TODO: Not true. The library can now be tree shaken. [Original implementation of `ShapeTypes`](https://github.com/konvajs/ng2-konva/blob/master/projects/ng2-konva/src/lib/utils/shapeTypes.ts) drags in full ~180kb from Konva, regardless of what you use. New implementation allows user to import what they need.
- Component names are hardcoded, instead of doing [string transformations](https://github.com/konvajs/ng2-konva/blob/master/projects/ng2-konva/src/lib/utils/index.ts) on selectors, which seems more fragile.
- Changes will be more constrained in the future. E.g. if there is a breaking change in one of the entry points, others may be more isolated from it.
- Consumers can query for individual component types by their class names (for example in tests).

**Cons:**
- Major breaking change. Both imports need to be updated and stricter types may produce compilation errors for consumers.
- More boilerplate for the user. Each component needs to be imported separately (`import` statement and entry in `imports`).
- More boilerplate for maintainers.
- TODO confirm: If you use a lot of Konva components, total bundle size is somewhat larger because there is now a separate class for each component instead of just two.

# Other Changes
#### `NgKonvaEventObject` renamed to `KonvaEvent`
This is to achieve consistent naming – nothing else in the library had `Ng` prefix.
Also Angular team [doesn't recommend](https://angular.dev/guide/components/selectors#selector-prefixes) using `ng` prefixes in *selectors*, so not using it in component name seemed appropriate too.
Breaking.

#### API shape of Konva components changed
- There is no `getStage()`, use `getNode()`. They do the same thing, plus `getStage` was misnamed – it returned node, not stage.
- There is no `getConfig()`, use `config()`, which does the same thing.

Breaking.

#### `KonvaComponent` is no longer exported
It's an abstract class now, not meant for consumers.
Breaking.

#### Different component naming
All components follow `KonvaSomething` pattern without `Component` suffix. E.g. `StageComponent` => `KonvaStage`.
Angular is [generally moving away](https://github.com/angular/angular/discussions/59522) from `Component` suffixes.
Breaking.

#### Uses `OnPush` change detection
Better performance.

# TODO
- Animations
- Fast layer
- Order
- setTimeout
- OnPush
- more testing needed
