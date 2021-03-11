---
id: Symbol
title: Symbol
---

Symbol is base variable container. For minimalize amount of errors and better use of IDE features such as syntax suggesting. Plc Data type is defined by generic argument.

``` cs
public abstract class Symbol<TDataType> : Symbol, ISymbol<TDataType>
        where TDataType : IPlcDataType
{
    protected Symbol(string name, object parent) : base(name, parent)
    {
    }

    protected Symbol(object parent) : base(parent)
    {
    }

    protected Symbol()
    {
    }
}
```

Data types is divide on 2 general sub types and because of it exist two symbol class.

## SimpleSymbol

Simple symbol don't has sub elements and type field is static.

``` cs
public class SimpleSymbol<TDataType> : Symbol<TDataType>, ISimpleVariable<TDataType>
        where TDataType : ISimpleDataType, new()
{
    #region Constructor

    protected SimpleSymbol(string name, object parent) : base(name, parent)
    {
    }

    #endregion

    #region Properties

    public static TDataType Type { get; } = new();

    public override IPlcDataType BaseDataType => Type;

    #endregion
}
```

## StructSymbol

Struct symbol has referenced Type and for all instance it is diffrent.

``` cs
public class StructSymbol<TDataType> : Symbol<TDataType>, IStructVariable<TDataType>
        where TDataType : IStructDataType
{
    public StructSymbol(string name, object parent = null) : base(name, parent)
    {
        Type = (TDataType) Activator.CreateInstance(typeof(TDataType), this);
    }

    public StructSymbol(string name, Func<object, TDataType> type, object parent = null) : base(name, parent)
    {
        Type = type.Invoke(this);
    }


    #region Properties

    public TDataType Type { get; }

    public override IPlcDataType BaseDataType => Type;

    #endregion
}
```

:::tip
All struct data types must contain one arg object constructor with information about parent 
:::