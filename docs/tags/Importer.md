---
id: Importer
title: Importer
---

You can easily import sdf file (Tia or Step 7 format) using static class TagImporter.

``` cs
public static void ImportSample()
{
    const string fileName = "D:\\Install\\ZULI.sdf"
    
    var tags = TagImporter.Import(fileName).ToArray(); 
}
```