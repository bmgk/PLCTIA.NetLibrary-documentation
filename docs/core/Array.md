---
id: Array
title: Array
---

Tu define array we just need to use generic args DataType and size sample below.

``` cs
public class _F : DynamicDataBlock
{
    //Size [1..10]
    [DbElement(CommentText = "SimpleTestArray")]
    public CodeArray<SimpleArrayElement<Bool>, _1, _10> simpleArray;

    //Size [1..10,1..10]
    [DbElement(CommentText = "Simple Sub 1 Test Array")]
    public CodeArray<ArrayElement<SimpleArrayElement<Bool>, _1, _10>, _1, _10> simple1SubArray;
}
```