---
id: Const
title: Const
---

Const is used in [FB](../FB) [FC](../FC) [OB](../OB) as protected static section.
Symbol from it can be used in building logic.

```cs
public class Const : ConstDynamicSection
{
    public Const(object parent) : base(parent)
    {

    }
    
    [LiteralConstant]
    public SimpleCodeSymbol<Bool> Const1 { get; private set; }
}
```

:::tip
Each properties must be decorated by attribute Literal Const.
:::