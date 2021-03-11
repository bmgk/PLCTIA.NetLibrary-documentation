---
id: DB
title: DB
---

To create Data Block we just need inherit "DynamicDataBlock" and add appropriate properties.

``` cs
[Destination(Helper.Arg, Helper.Directory.Safety, Helper.Directory.DataBlock)]
[Block(Name = ">F", Number = 1003)]
public class _F : DynamicDataBlock
{
    [DbElement(CommentText = "de-DE:(Safety) Neustartmerker fuer Safebereich")]
    public SimpleCodeSymbol<Bool> NEUSTART { get; private set; }

    [DbElement(CommentText = "de-DE:(Safety) Quittierung Rückführkreis")]
    public SimpleCodeSymbol<Bool> QUITRUEC { get; private set; }

    [DbElement(Name = "{0}FrgK36", CommentText = "de-DE:(Safety) Schutzkreis Freigabe {0}")]
    public BoxSimpleDictionary<Zone, Bool> FrgK36 { get; private set; }

    [DbElement(Name = "{0}BGS{1}M", CommentText = "de-DE:(Safety) Ansteuerung Zuhaltung öffnen")]
    public BoxSimpleDictionary<Door, Bool> xBGSyM { get; private set; }
    
    [DbElement(Name = "{0}Frg", CommentText = "de-DE:(Safety) Freigabe Lichtvorhang {0}")]
    public BoxSimpleDictionary<SafetyScanner, Bool> FrgPls { get; private set; }
}
```