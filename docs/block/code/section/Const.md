---
id: Const
title: Const
---

[FB](../FB) [FC](../FC) [OB](../OB) contain protected static section which can be used in building logic block.

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
Each property must be decorated by attribute LiteralConst. 
:::