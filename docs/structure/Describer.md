---
id: Describer
title: Describer
---

This class is created to the definition of the rules for mapping a structure element from tags.

To create your own rule, just inherit the class and override the Name properties.

``` cs
public class Einschaltventil : Describer
{
    public override string Name { get; } = "VI1HP1";
}
```

## Numerable Describer

If item is organized by index. To informs how many characters in the text are occupied need to override the "NumberLength" property.

``` cs
public class KKP : NumerableDescriber
{
    public override sbyte NumberLength { get; } = 2;

    public override string Name { get; } = "KKP";
}
```