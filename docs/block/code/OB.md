---
id: OB
title: OB
---

Organization block class is created by inherit "NetworkBlock" class with added protected sections.

- [Temp](section/Temp)
- [Const](section/Const)

``` cs
[Block(TitleText = "de-DE:Main Program Sweep (Cycle)", Number = 1)]
[Destination(Helper.Arg, Helper.Directory.Ob)]
public class OB1 : CodeOB<IConvertibleToLadCode, Lad, OB1.Temp, OB1.Const>
{
    public OB1(IPlcClient client, Vass6Plc plc) : base(client)
    {
        /..
        ../
    }

    #region Interface

    public class Const : ConstDynamicSection
    {
        public Const(object parent) : base(parent)
        {
        }
    }

    public class Temp : TempDynamicSection
    {
        public Temp(object parent) : base(parent)
        {
        }

        /// <summary>
        ///     Bits 0-3 = 1 (Coming event), Bits 4-7 = 1 (Event class 1)
        /// </summary>
        [LocalVariable]
        public SimpleCodeSymbol<Byte> OB1_EV_CLASS { get; private set; }
                /// <summary>
        ///     Cycle time of previous OB1 scan(milliseconds)
        /// </summary>
        [LocalVariable]
        public SimpleCodeSymbol<Int> OB1_PREV_CYCLE { get; private set; }

        /..

        ../
        /// <summary>
        ///     Date and time OB1 started
        /// </summary>
        public SimpleCodeSymbol<Date_And_Time> OB1_DATE_TIME { get; private set; }
    }

    #endregion

    #region Networks

    /..
    ../

    #endregion
}
```