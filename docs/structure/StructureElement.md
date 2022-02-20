---
id: StructureElement
title: Structure Element
---

You create your own structure element by inheriting the StructureElement class with the generic argument [describer](../structure/Describer).

The mapping of structure elements, such as tags and children, comes from the ElementContainer class based on the rules in the [describer](../structure/Describer).

Constructor have to contain arguments IStructureElement, ElementContainer and TagList.

``` cs
public class HIP : StructureElement<Describer.HP1>
{
    public HIP(IStructureElement parent, ElementContainer container, TagList eplan)
        : base(parent, ref container, eplan)
        {
            
        }

        [Tag] 
        public SimpleTag<Bool> VI1KKP01EBER { get; private set; }

        [Tag] 
        public SimpleTag<Bool> VI1KKP01DBER { get; private set; }

        [Tag] 
        public SimpleTag<Bool> VI1KKP01WBER { get; private set; }
    }
}
```

## Numerable

If [describer](../structure/Describer) is numerable, you must use a NumerableStructureElement and keep it in the NumerableStructureContainer.

The constructor must also include an IStructureElement ushort after the index argument.

``` cs
public class Zone : NumerableStructureElement<Describer.Zone>
{
    public Zone(IStructureElement parent, ushort index, ElementContainer container, TagList eplan)
        : base(parent, index, container, eplan)
    {
    }

    #region Structure

    /..

    ../

    [Structure] 
    public NumerableStructureContainer<SafetyScanner> SafetyScanners { get; private set; }

    [Structure] 
    public HIP Hip { get; private set; }

    #endregion
}
```
