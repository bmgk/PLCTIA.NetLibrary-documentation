---
id: NetworkBlock
title: Network Block
---

Basic container for networks. 

Programming language is defined by generic arg.
``` cs
public class FmLogicPack : NetworkPack<LadCode>
{
    public FmLogicPack(IPlcClient client, IVass6Station station, GeoDb db, Temp temp, DB_ARG dbArg)
    {

    }

    #region Networks

    [Network(TitleText = "de-De:Fertigmeldung Reset")]
    public Network<LadCode> FertigmeldungReset { get; private set; }

    [Network(TitleText = "de-De:Fertigmeldung {0} {1}")]
    public BoxListNetworks<LadCode> Fertigmeldungs { get; private set; }

    [Network(TitleText = "de-De:Fertigmeldung Gesamt")]
    public Network<LadCode> FertigmeldungGesamt { get; private set; }

    #endregion
}
```

## Network 

To add new network you simply need define property, with appropriate attribute.

:::tip
When property have setter. Network will be created during initalization.
:::

:::warning
Programming language of network must be the same, or must be convertible to block language.
:::