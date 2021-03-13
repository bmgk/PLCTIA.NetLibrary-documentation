---
id: TagTable
title: TagTable
---

To create tag table you just need inherit DynamicTagTable class and decorate properties by "TagAttribute".

``` cs
[TagTable(Name = "FirstTagTable")]
public class SampleTagTable : DynamicTagTable
{
    [Tag(OperandIdentifier = OperandIdentifier.Input, AddressText = "0.0", CommentText = "(Safety) Neustartmerker fuer Safebereich")]
    public SimpleTag<Bool> NEUSTART { get; private set; }

    [Tag(OperandIdentifier = OperandIdentifier.Input, AddressText = "0.1", CommentText = "(Safety) Quittierung Rückführkreis")]
    public SimpleTag<Bool> QUITRUEC { get; private set; }

    [Tag(OperandIdentifier = OperandIdentifier.Input, AddressText = "0.2", CommentText = "(Safety) Quittierung Passivierung")]
    public SimpleTag<Bool> QACK { get; private set; }

    [Tag(OperandIdentifier = OperandIdentifier.Input, AddressText = "0.3", CommentText = "(Safety) Kontrolle Freigabe Not-Halt")]
    public SimpleTag<Bool> FrgK4 { get; private set; }
}
```

To use this, just call method GetCodeElement<..>.

``` cs
public Last_SK(IPlcClient plcClient, Zone zone, IEnumerable<MobilePanel> panels) 
: base(plcClient, zone.FullName, zone.Parent.Name)
{
    var robotTags = plcClient.GetCodeElement<SampleTagTable>();
}
```