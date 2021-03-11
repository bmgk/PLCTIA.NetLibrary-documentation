---
id: FC
title: FC
---

Function class is created by inherit "NetworkBlock" class with added protected sections.

- [In,InOut,Out](section/Interface)
- [Temp](section/Temp)
- [Const](section/Const)

```cs
public abstract class CodeFc<TCode,TLanguage, TIn, TInOut, TOut, TTemp, TConst> : CodeBlock<TCode,TLanguage>, ICodeFc<TIn, TInOut, TOut>
    where TCode : ICode
    where TLanguage : PlcLanguage, new()
    where TIn : InDynamicSection<LocalVariable>
    where TInOut : InOutDynamicSection<LocalVariable>
    where TOut : OutDynamicSection<LocalVariable>
    where TTemp : TempDynamicSection
    where TConst : ConstDynamicSection
{
    protected CodeFc(IPlcClient client)
    {
        client.Add(this);

        Input = (TIn) Activator.CreateInstance(typeof(TIn), this);
        InOut = (TInOut) Activator.CreateInstance(typeof(TInOut), this);
        Output = (TOut) Activator.CreateInstance(typeof(TOut), this);
        temp = (TTemp) Activator.CreateInstance(typeof(TTemp), this);
        constant = (TConst) Activator.CreateInstance(typeof(TConst), this);
    }
}
```
