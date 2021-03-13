---
id: FC
title: FC
---

Function class is created by inherit "NetworkBlock" class with added protected sections.

- [In,InOut,Out](section/Interface)
- [Temp](section/Temp)
- [Const](section/Const)

```cs
[Scope(Helper.BlockNameScope.FC.Station)]
[Destination(Helper.Arg, Helper.Directory.Station)]
[Block(Name = "{0}")]
public class GeoFc : WorkPlaceCodeFc<GeoFc.StationIn, GeoFc.StationInOut, GeoFc.StationOut, GeoFc.StationTemp, GeoFc.StationConst>
{
    public GeoFc(IPlcClient client, Vass6Plc plc, Zone zone, UbaZone ubaZone, IVass6Station station) : base(client, ubaZone, station)
    {
        /..
        ../
    }
    #region Interfaces
    /..
    ../
    public class StationTemp : TempDynamicSection, IGraphTempSection, IValveTempSection
    {
        public StationTemp(object parent) : base(parent)
        {
        }
        
        [LocalVariable]
        public BoxSimple<Byte> m_BGExxR { get; private set; }

        [LocalVariable]
        public BoxSimple<Byte> m_BGExxV { get; private set; }

        [LocalVariable]
        public BoxSimple<Byte> m_BP_V { get; private set; }

        [LocalVariable]
        public StructCodeSymbol<Temp> Temp { get; private set; }

        [LocalVariable]
        public BoxSimple<Bool> m_S7GC1_SW_AUTO { get; private set; }

        [LocalVariable]
        public BoxSimple<Bool> m_S7GC1_SW_MAN { get; private set; }
    }
    #endregion
    #region Networks
    /..
    ../
    #endregion
}
```
