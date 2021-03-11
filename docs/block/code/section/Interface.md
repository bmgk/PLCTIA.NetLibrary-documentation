---
id: Interface
title: Interface
---

Logic blocks such as [FB](../FB) [FC](../FC). 
Contain public (In,InOut,Out) section which can be used during building logic.

``` cs
public class _In : InDynamicSection<FbElement>
{
    public _In(object parent) : base(parent)
    
    
    [FbElement]
    public SimpleCodeSymbol<Bool> In1 { get; private set; 
    [FbElement]
    public SimpleCodeSymbol<Bool> In2 { get; private set; }
}
```

``` cs 
public class In : InDynamicSection<LocalVariable>
{
    [LocalVariable(Name = "In1", CommentText = "de-DE: Simple {0}")]
    public SimpleCodeSymbol<Bool> Var4 { get; private set; }

    [LocalVariable(CommentText = "Simple Sub 3 Test Array")]
    public CodeArray<ArrayElement<ArrayElement<ArrayElement<SimpleArrayElement<Bool>, _1, _10>, _1, _10>, _1, _10>, _1, _10> simple3SubArray;

    public In(object parent) : base(parent)
    {

    }
}
```

:::tip
For [FB](../FB) each properties must be decorated by attribute "FBEnviroment" in otherwise LocalVariable.
:::