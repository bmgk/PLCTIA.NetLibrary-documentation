---
id: Static
title: Static
---

[FB](../FB) contain public (Static) section which can be used in building logic block.

``` cs
public class Stat : StaticDynamicSection
{
    public Stat(IParentAccess parent, params string[] args) : base(parent, args){}
    
    public Stat(IParentAccess parent) : base(parent){}
    
    [FbElement(Name = "FM_VKE=1", CommentText = "staendig VKE=1", StartValue = "true")]
    public SimpleCodeSymbol<Bool> FM_VKE_1 { get; private set; }

    [FbElement(Name = "FM_VKE=0", CommentText = "staendig VKE=0")]
    public SimpleCodeSymbol<Bool> FM_VKE_0 { get; private set; }

    [FbElement] 
    public SimpleCodeSymbol<Bool> FM_FL_QUITRUEC { get; private set; }

    [FbElement(Name = "SK{0}")] 
    public IdbDynamicFbBoxList<SK.Idb> sk { get; private set; }

    [FbElement] 
    public IdbDynamicFbBoxList<NOT_HALT_ANTRIEBE.Idb> NOT_HALT_ANTRIEBE { get; private set;}

    [FbElement(Name = "Last_SK{0}")] 
    public IdbDynamicFbBoxList<Last_SK.Idb> Last_SK { get; private set; }

    [FbElement] 
    public TimeSymbolCodeIdb<TP<Time>, Time> TP_QACK { get; private set; }

    [FbElement] 
    public ACK_GL.Idb F_ACK_GL { get; private set; }
}
```

:::tip
Each property must be decorated by attribute FBEnviroment. 
:::