---
id: PlcClient
title: PlcClient
---

This is main interface for manage program elements. Is used in constructor for all [block](../block/code/NetworkBlock) elements.

``` cs
public interface IPlcClient :  IParentAccess
{
    void Add(ILibraryElement element);

    void Add(ICodeElement element, string name = null);

    bool TryGetCodeElement(Type registeredAs, out ICodeElement element,  string name = null);

    IEnumerable<TElement> GetAllCodeElements<TElement>()
        where TElement : ICodeElement;

    TElement GetLibraryElement<TElement>()
        where TElement : ILibraryElement, new();
}
```

Using it we can access to all library and code elements. More will be described in [logic](../block/code/language/lad/Basic) section.

``` cs
public static void ExportProgramBlocksSource(this IPlcClient plc, TiaProgramBlockDirectory tiaDirectoryManager)
{
    plc.GetAllCodeElements<ICodeFc>().Save(tiaDirectoryManager.FC);
    plc.GetAllCodeElements<ICodeFb>().Save(tiaDirectoryManager.FB);
    plc.GetAllCodeElements<ICodeIDb>().Save(tiaDirectoryManager.Idb);
    plc.GetAllCodeElements<ICodeOb>().Save(tiaDirectoryManager.OB);
    plc.GetAllCodeElements<ICodeDataBlock>().Save(tiaDirectoryManager.DataBlock);
}

public static void ExportTagTablesSource(this IPlcClient plc, TiaDirectoryManager tiaDirectoryManager)
{
    plc.GetAllCodeElements<ICodeTagTable>().Save(tiaDirectoryManager.TagTables);
}
```

