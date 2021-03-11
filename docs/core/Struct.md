---
id: Struct
title: Struct
---

To define a structure, we simply need to inherit from DynamicStruct and decorate the appropriate attribute.

``` cs
public class Temp : DynamicStruct<LocalVariable>
{
    public Temp(object parent) : base(parent)
    {
    }

    [LocalVariable]
    public SimpleCodeSymbol<Bool> _Bool { get; private set; }

    [LocalVariable]
    public SimpleCodeSymbol<Byte> _Byte { get; private set; }

    [LocalVariable]
    public SimpleCodeSymbol<Int> _Int { get; private set; }

    [LocalVariable]
    public SimpleCodeSymbol<DInt> _DInt { get; private set; }

    [LocalVariable]
    public SimpleCodeSymbol<Word> _Word { get; private set; }

    [LocalVariable]
    public SimpleCodeSymbol<Time> _Time { get; private set; }
}
```

Usage of it is by put our struct in generic arg.

``` cs
{
    var temp = new StructSymbol<Temp>("temp");
    var _bool = temp.Type._Bool;
}
```