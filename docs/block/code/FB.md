---
id: FB
title: FB
---

Function blok class is created by inherit "NetworkBlock" class with added protected sections.

- [In,Out,InOut](section/Interface)
- [Temp](section/Temp)
- [Static](section/Static)
- [Const](section/Const)

``` cs
public class CodeFb<TCode,TLanguage, TIn, TInOut, TOut, TStatic, TTemp, TConst> 
    : CodeBlock<TCode,TLanguage>, ICodeFb<TIn, TInOut, TOut, TStatic>, IFb<TIn, TInOut, TOut, TStatic>
    where TCode : ICode
    where TLanguage : PlcLanguage, new()
    where TIn : InDynamicSection<FbElement>
    where TInOut : InOutDynamicSection<FbElement>
    where TOut : OutDynamicSection<FbElement>
    where TTemp : TempDynamicSection
    where TConst : ConstDynamicSection
    where TStatic : StaticDynamicSection
{
    public CodeFb(IPlcClient programBlocks)
    {
        programBlocks.Add(this);

        Input = (TIn) Activator.CreateInstance(typeof(TIn), this);
        InOut = (TInOut) Activator.CreateInstance(typeof(TInOut), this);
        Output = (TOut) Activator.CreateInstance(typeof(TOut), this);
        temp = (TTemp) Activator.CreateInstance(typeof(TTemp), this);
        constant = (TConst) Activator.CreateInstance(typeof(TConst), this);
        Static = (TStatic) Activator.CreateInstance(typeof(TStatic), this);
    }
}
```