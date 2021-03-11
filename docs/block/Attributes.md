---
id: Attributes
title: Attributes
---

In this section will be described all Block Attributes.

## Block
Universal Attribute for all Blocks (DB,FC,FB,OB,IDB) defining base propertis, such as Name, Comment, Version ...
Used is above the class definition.

:::note
Use format args {0,1...} to fill it with strings from paramas args.
:::

:::note
If name or Block attribute is not used. Name will be taken from class name.
:::

``` cs
[Block(Name = "ARG{0}_ARG{1}")]
public class Idb : TiaGlobalIdb<F_RCVDP, Input, InOut, Output, Static>
{
    public Idb(IPlcClient plcClient, params string[] args) : base(plcClient, args)
    {

    }
}
```

## Destination
Define where block will be placed in Tia folder structure.

``` cs
[Destination("ARG", "Station", "Instance")] //or [Destination("ARG/Station/Instance")]
public class Idb : TiaGlobalIdb<F_RCVDP, Input, InOut, Output, Static>
{
    public Idb(IPlcClient plcClient, params string[] args) : base(plcClient, args)
    {

    }
}

:::note
Use '/' or '", "' to separate directory. 
:::
```

## Scope

Base on name frome attribute will be generated number for block. Connection between name and number must be defined in plc client class.

:::warning
When in block properties (attribute) 'number' is defined scope will be ignored. 
:::
``` cs

[Scope("Idb")]
public class Idb : TiaGlobalIdb<FB_Bauteilkontrolle, _Input, _InOut, _Output, _Static>
{
    public Idb(IPlcClient client, params string[] args) : base(client,, args)
    {
    }
}

public static void GenerateAddresScope(AddressScopeDefinition definition)
{
    definition.AddDbScope(new Dictionary<string, ushort>()
    {
    ["BA"] = 13,
    ["Station"] = 20,
    ["Robot"] = 100,
    ["Schnistelle"] = 130,
    ["Idb"] = 2000,
    });
}
```
