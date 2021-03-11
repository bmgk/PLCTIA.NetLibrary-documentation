---
id: Temp
title: Temp
---

Logic block such as [FB](../FB) [FC](../FC) [OB](../OB). Contain protected Temp section which can be used in building logic inside of block.

``` cs
public class _Temp : TempDynamicSection
{
    public _Temp(object parent) : base(parent)
    {

    }
    
    [LocalVariable]
    public StructCodeSymbol<Temp> Temp { get; private set; }
}
```
:::tip
Each property must be decorated by Local Variable Attribute. 
:::