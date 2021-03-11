---
id: OB
title: OB
---

Organization block class is created by inherit "NetworkBlock" class with added protected sections.

- [Temp](section/Temp)
- [Const](section/Const)

``` cs
public abstract class CodeOB<TCode, TLanguage, TTemp, TConst> : CodeBlock<TCode,TLanguage>, ICodeOb
    where TCode : ICode
    where TLanguage : PlcLanguage, new()
    where TTemp : TempDynamicSection
    where TConst : ConstDynamicSection
{
    protected CodeOB(IPlcClient plcClient)
    {
        plcClient.Add(this);
        Temp = (TTemp) Activator.CreateInstance(typeof(TTemp), this);
        Constant = (TConst) Activator.CreateInstance(typeof(TConst), this);
    }
}
```