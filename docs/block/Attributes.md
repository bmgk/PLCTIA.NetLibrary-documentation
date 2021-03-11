---
id: Attributes
title: Attributes
---

In this section will be described basic block Attributes.

## Block
Universal attribute for all blocks (DB,FC,FB,OB,IDB) defining base properties, such as Name, Comment, Version ...

:::note
Use arguments in the format {0,1 ...} to write it with "params string[] args"
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

:::note
If name or Block attribute is not used. Name will be taken from class name.
:::

## Destination
Defines where the block will be placed in the Tia folder structure.

``` cs
[Destination("ARG", "Station", "Instance")] //or [Destination("ARG/Station/Instance")]
public class Idb : TiaGlobalIdb<F_RCVDP, Input, InOut, Output, Static>
{
    public Idb(IPlcClient plcClient, params string[] args) : base(plcClient, args)
    {

    }
}

```

:::note
Use '/' or '", "' to separate directory. 
:::

## Scope

Base on name from attribute will be generated number for block. 
Connection between name and number must be defined by AddressScopeDefinition in [PlcClient](../core/PlcClient) class.

:::warning
When in block properties (attribute) 'number' is defined Scope will be ignored. 
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
